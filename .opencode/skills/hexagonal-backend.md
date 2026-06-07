---
name: hexagonal-backend
description: Guides the design, layout, coding conventions, and testing strategies for a decoupled Hexagonal Architecture backend using Express and Firebase.
---

# Decoupled Hexagonal Backend Architecture Guide

This skill defines the directory layout, design rules, and coding conventions for building a decoupled backend. The main goal of this architecture is to isolate the core business logic (Domain and Use Cases) from framework implementation details (Express, Fastify, Serverless) and database providers (Firebase Firestore, PostgreSQL, MongoDB, In-Memory).

## Folder Structure

All backend code should live under the `/backend` folder and follow this layout:

```
backend/
├── package.json
├── tsconfig.json
└── src/
    ├── domain/                    # 1. Pure Enterprise Rules & Models
    │   └── entities/              #    - Domain Entities (e.g., User, Transaction)
    │   └── exceptions/            #    - Domain-specific validation errors
    ├── usecases/                  # 2. Application Logic & Workflows
    │   ├── ports/                 #    - Interfaces for repositories (Driven/Secondary Ports)
    │   └── [module]/              #    - Concrete Use Cases (e.g., createUser.usecase.ts)
    ├── adapters/                  # 3. Technical Implementations
    │   ├── primary/               #    - Driving Adapters (HTTP controllers, web sockets, CLI)
    │   │   └── express/           #      - Express route handlers, middleware, and controllers
    │   └── secondary/             #    - Driven Adapters (Databases, External APIs)
    │       ├── firebase/          #      - Firebase Admin SDK Firestore/RTDB repositories
    │       └── memory/            #      - In-Memory mock repositories for sub-second tests
    └── index.ts                   # 4. Composition Root
                                   #    - Bootstrapping, dependency injection, and server launch
```

---

## Architectural Rules

### 1. Pure Domain Rule
- Files in `src/domain` **MUST NOT** import anything from `express`, `firebase-admin`, `knex`, `mongoose`, or any external library. They must be pure TypeScript.
- Use domain entities to validate rules. If an entity is created with invalid data, throw a domain-specific exception (e.g., `InvalidEmailException`).

### 2. Constructor-Based Dependency Injection (Composition Root)
- Do **NOT** use DI libraries/containers (like Inversify or NestJS decorators) inside Domain or Use Case classes.
- Use simple constructor parameters to inject repositories and service interfaces:
  ```typescript
  // YES
  constructor(private readonly userRepository: UserRepositoryPort) {}
  ```
- All dependencies are instantiated and wired together once in the Composition Root (`src/index.ts`).

### 3. Port Definitions (Interfaces)
- Ports are defined as standard TypeScript interfaces in the `src/usecases/ports/` folder.
- They define the contract of what the application needs, not *how* it's done:
  ```typescript
  // src/usecases/ports/user-repository.port.ts
  import { User } from '../../domain/entities/user.entity';

  export interface UserRepositoryPort {
    save(user: User): Promise<User>;
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
  }
  ```

### 4. Secondary Adapters Mapping Rule
- Database repositories (Firebase, SQL, NoSQL) **MUST** map DB documents/records to domain entities before returning them, and map domain entities to DB representations when writing.
- Never bubble DB-specific objects (like Firestore `DocumentSnapshot` or Mongoose `Document`) to the Use Cases or Domain.

---

## Component Templates

### A. Domain Entity Example
```typescript
// src/domain/entities/user.entity.ts
export interface UserProps {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

export class User {
  private constructor(private readonly props: UserProps) {
    this.validate();
  }

  public static create(props: Omit<UserProps, 'createdAt'> & { createdAt?: Date }): User {
    return new User({
      ...props,
      createdAt: props.createdAt || new Date(),
    });
  }

  private validate(): void {
    if (!this.props.email.includes('@')) {
      throw new Error('Invalid email address');
    }
  }

  // Getters
  public get id(): string { return this.props.id; }
  public get name(): string { return this.props.name; }
  public get email(): string { return this.props.email; }
  public get createdAt(): Date { return this.props.createdAt; }
}
```

### B. Use Case Example
```typescript
// src/usecases/create-user/create-user.usecase.ts
import { User } from '../../domain/entities/user.entity';
import { UserRepositoryPort } from '../ports/user-repository.port';

export interface CreateUserDTO {
  id: string;
  name: string;
  email: string;
}

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepositoryPort) {}

  public async execute(dto: CreateUserDTO): Promise<User> {
    const existing = await this.userRepository.findByEmail(dto.email);
    if (existing) {
      throw new Error('User already exists');
    }

    const user = User.create(dto);
    return await this.userRepository.save(user);
  }
}
```

### C. Memory Adapter (For Unit Testing)
```typescript
// src/adapters/secondary/memory/memory-user.repository.ts
import { UserRepositoryPort } from '../../../usecases/ports/user-repository.port';
import { User } from '../../../domain/entities/user.entity';

export class MemoryUserRepository implements UserRepositoryPort {
  private users: Map<string, User> = new Map();

  public async save(user: User): Promise<User> {
    this.users.set(user.id, user);
    return user;
  }

  public async findById(id: string): Promise<User | null> {
    return this.users.get(id) || null;
  }

  public async findByEmail(email: string): Promise<User | null> {
    for (const user of this.users.values()) {
      if (user.email === email) return user;
    }
    return null;
  }
}
```

### D. Express Controller Example (Primary Adapter)
```typescript
// src/adapters/primary/express/user.controller.ts
import { Request, Response } from 'express';
import { CreateUserUseCase } from '../../../usecases/create-user/create-user.usecase';

export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  public async handleCreate(req: Request, res: Response): Promise<void> {
    try {
      const { id, name, email } = req.body;
      const user = await this.createUserUseCase.execute({ id, name, email });
      res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
      });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
```

### E. Composition Root Example
```typescript
// src/index.ts
import express from 'express';
import { MemoryUserRepository } from './adapters/secondary/memory/memory-user.repository';
// import { FirebaseUserRepository } from './adapters/secondary/firebase/firebase-user.repository';
import { CreateUserUseCase } from './usecases/create-user/create-user.usecase';
import { UserController } from './adapters/primary/express/user.controller';

const app = express();
app.use(express.json());

// 1. Instantiate Secondary Adapters (Can switch between memory / database here)
const userRepository = new MemoryUserRepository(); 

// 2. Instantiate Use Cases (Inject Ports)
const createUserUseCase = new CreateUserUseCase(userRepository);

// 3. Instantiate Primary Adapters (Inject Use Cases)
const userController = new UserController(createUserUseCase);

// 4. Wire Routes
app.post('/users', (req, res) => userController.handleCreate(req, res));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

---

## Testing Strategy

- **Core Logic (Domain & Use Cases)**: **MUST** be tested via unit tests using the In-Memory adapters. This eliminates network dependencies and makes testing extremely fast.
- Run tests using `vitest` from the `/backend` folder.
- Ensure that every use case has at least one success path test and one error path test.
