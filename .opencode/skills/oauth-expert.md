---
name: oauth-expert
description: Guidelines, security checklists, and implementation blueprints for integrating OAuth 2.0 and OpenID Connect (OIDC) standards in a decoupled application.
---

# OAuth 2.0 & OpenID Connect Integration Guide

This skill provides guidelines and security standards for implementing authentication and authorization using the OAuth 2.0 and OpenID Connect (OIDC) protocols.

---

## 1. Flow Selection (Grant Types)

Choose the correct flow based on the client type. **Implicit Flow** and **Resource Owner Password Credentials (ROPC) Flow** are deprecated (obsolete) due to security risks.

| Client Type | Recommended Flow | Description |
| :--- | :--- | :--- |
| **Single Page App (SPA)** (e.g., Angular) | **Authorization Code with PKCE** (RFC 7636) | Prevents authorization code interception in public clients. |
| **Mobile / Native Apps** | **Authorization Code with PKCE** (RFC 7636) | Securely authenticates native clients. |
| **Server-to-Server (M2M)** | **Client Credentials** | Access token is obtained directly using client credentials. |
| **Traditional Web App** (Backend) | **Authorization Code Flow** | Uses client secrets stored securely in the server backend. |

---

## 2. JWT Verification Checklist

When validating Access Tokens (JWT) in the backend adapters, you **MUST** verify the following:

1.  **Signature**: Verify the signature against the Identity Provider's public keys (retrieved via JWKS - JSON Web Key Set). Cache JWKS keys to avoid high network latency.
2.  **Algorithm**: Explicitly whitelist allowed algorithms (e.g., `RS256`). **Never** allow the `"none"` algorithm.
3.  **Expiration (`exp`)**: Check that the current time is before the `exp` timestamp (including a small clock skew of max 60 seconds).
4.  **Issuer (`iss`)**: Check that the issuer claim matches your configured Identity Provider URL.
5.  **Audience (`aud`)**: Check that the audience claim matches your API Identifier or Client ID.

---

## 3. Secure Token Storage

*   **Public Clients (SPA)**:
    *   Avoid storing tokens in `localStorage` or `sessionStorage` since they are vulnerable to Cross-Site Scripting (XSS) attacks.
    *   Prefer **Backend-for-Frontend (BFF) pattern** where the frontend communicates using secure, encrypted, `HttpOnly`, `Secure`, and `SameSite=Strict` cookies. The backend proxy manages token exchanges.
*   **Mobile Clients**:
    *   Store tokens securely in OS-level keychains (iOS Keychain Services, Android Keystore system).

---

## 4. Integration in Hexagonal Architecture

Security is an infrastructure concern (Primary Adapter / Middleware). It must be decoupled from the Domain layer.

### Pattern A: Primary Authentication Middleware (Express example)
Authenticates the request, decodes the token, and attaches the payload to the request before it reaches the controllers.

```typescript
// src/adapters/primary/express/auth.middleware.ts
import { Request, Response, NextFunction } from 'express';
import { TokenVerifierPort } from '../../../usecases/ports/token-verifier.port';

export class AuthMiddleware {
  constructor(private readonly tokenVerifier: TokenVerifierPort) {}

  public async handler(req: Request, res: Response, next: NextFunction): Promise<void> {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ error: 'Missing or malformed Authorization header' });
      return;
    }

    const token = authHeader.split(' ')[1];
    try {
      const decodedUser = await this.tokenVerifier.verify(token);
      req.user = decodedUser; // Inject user context into request
      next();
    } catch (err) {
      res.status(401).json({ error: 'Invalid token' });
    }
  }
}
```

### Pattern B: Abstracting Identity Services (Port definition)
If a Use Case needs to manage users or check identity metadata (e.g., inviting a user by email, verifying registration), define a secondary port.

```typescript
// src/usecases/ports/identity-service.port.ts
export interface UserIdentityDTO {
  uid: string;
  email: string;
  displayName?: string;
}

export interface IdentityServicePort {
  getUserByEmail(email: string): Promise<UserIdentityDTO | null>;
  createUser(email: string): Promise<UserIdentityDTO>;
}
```
*Your concrete adapter (e.g., `FirebaseIdentityService` implementing `IdentityServicePort`) will interact with `firebase-admin` to implement this.*
