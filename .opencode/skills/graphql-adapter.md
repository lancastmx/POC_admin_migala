---
name: graphql-adapter
description: Guides the design, resolver wiring, context injection, and error handling for GraphQL when acting as a primary (driving) adapter in a hexagonal backend.
---

# GraphQL Primary Adapter Guide

This skill defines the guidelines for implementing GraphQL as a primary (driving) adapter. In a hexagonal architecture, GraphQL's sole responsibility is handling incoming queries/mutations, parsing and validating arguments, and delegating execution to the Application Use Cases.

---

## Directory Structure

All GraphQL-related files should live under the primary adapter layer:

```
backend/src/adapters/primary/graphql/
├── schema.graphql        # GraphQL Schema Definition (SDL)
├── context.ts            # Context definition (containing Use Cases & Auth info)
├── resolvers.ts          # Queries, Mutations, and Field Resolvers mapping to use cases
└── index.ts              # Express/GraphQL server configuration (Apollo Server / Yoga binding)
```

---

## Key Rules for GraphQL in Hexagonal Architecture

### 1. No Business Logic in Resolvers
Resolvers must only act as entry controllers. They are forbidden from performing domain validation, database reads/writes, or core workflow decisions. They must delegate directly to Use Cases.

### 2. Dependency Injection via GraphQL Context
Instead of importing use cases directly inside `resolvers.ts` (which creates tight coupling), use cases must be instantiated in the Composition Root and injected into the GraphQL Request Context.

### 3. Separation of Schema Types vs Domain Entities
GraphQL schema types do not have to match Domain entities 1:1. The resolvers are responsible for mapping domain entities into GraphQL response types if they differ.

---

## Implementation Blueprints

### A. Context Definition
The context holds the request-specific details (like the current user) and the application's use cases injected at startup.

```typescript
// src/adapters/primary/graphql/context.ts
import { CreateUserUseCase } from '../../../usecases/create-user/create-user.usecase';

export interface GraphQLContext {
  currentUser?: { id: string; email: string };
  useCases: {
    createUser: CreateUserUseCase;
    // Add other use cases here...
  };
}
```

### B. Resolvers Mapping
Resolvers access the injected use cases via `context.useCases`.

```typescript
// src/adapters/primary/graphql/resolvers.ts
import { GraphQLContext } from './context';

export const resolvers = {
  Query: {
    me: async (_parent: any, _args: any, context: GraphQLContext) => {
      if (!context.currentUser) {
        throw new Error('Unauthorized');
      }
      // Assuming a get user usecase exists:
      // return await context.useCases.getUser.execute({ id: context.currentUser.id });
      return { id: context.currentUser.id, name: 'Sample User', email: context.currentUser.email };
    }
  },
  Mutation: {
    createUser: async (
      _parent: any,
      args: { input: { id: string; name: string; email: string } },
      context: GraphQLContext
    ) => {
      const { id, name, email } = args.input;
      
      // Delegate work directly to the injected Use Case
      const user = await context.useCases.createUser.execute({ id, name, email });
      
      // Map Domain Entity to GraphQL Output structure
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt.toISOString(),
      };
    }
  }
};
```

### C. Server Binding (Composition Root Wiring)
This file integrates GraphQL with Express using GraphQL Yoga or Apollo Server, injecting the dependencies into the context callback.

```typescript
// src/adapters/primary/graphql/index.ts
import express from 'express';
import { createSchema, createYoga } from 'graphql-yoga';
import { readFileSync } from 'fs';
import { join } from 'path';

import { resolvers } from './resolvers';
import { MemoryUserRepository } from '../../secondary/memory/memory-user.repository';
import { CreateUserUseCase } from '../../../usecases/create-user/create-user.usecase';

// 1. Load schema
const typeDefs = readFileSync(join(__dirname, 'schema.graphql'), 'utf-8');

// 2. Instantiate dependencies (In a production app, pass these from composition root)
const userRepository = new MemoryUserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);

// 3. Create Yoga Instance
const yoga = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
  context: async (requestContext): Promise<any> => {
    // Authenticate user from headers if present
    const authHeader = requestContext.request.headers.get('authorization');
    const currentUser = authHeader ? { id: 'user-123', email: 'user@test.com' } : undefined;

    return {
      currentUser,
      useCases: {
        createUser: createUserUseCase,
      },
    };
  },
});

// 4. Bind to Express application
const app = express();
app.use('/graphql', yoga);

app.listen(4000, () => {
  console.log('GraphQL server running at http://localhost:4000/graphql');
});
```

### D. Schema Example
```graphql
# src/adapters/primary/graphql/schema.graphql
type User {
  id: ID!
  name: String!
  email: String!
  createdAt: String!
}

input CreateUserInput {
  id: ID!
  name: String!
  email: String!
}

type Query {
  me: User
}

type Mutation {
  createUser(input: CreateUserInput!): User!
}
```
