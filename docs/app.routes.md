---
zk_id: cfg-002
title: AppRoutes
description: Definición de rutas de la aplicación (actualmente vacío)
type: config
tags: [angular, routes, routing]
author: lanca
created: 2025-06-05
updated: 2025-06-05
path: src/app/app.routes.ts
collection: poc-admin-migala
---

# AppRoutes

## Descripción
Archivo de definición de rutas. Actualmente vacío, pendiente de añadir rutas para Directorio, Censo, Área Financiera y más.

## API / Interfaz pública

```typescript
export const routes: Routes = [];
```

## Grafo de dependencias

```mermaid
graph LR
  cfg-002(AppRoutes)
```

| Métrica | Valor |
|---------|-------|
| Fan-out | 0 |
| Fan-in | 2 |

### Dependencias
Ninguna (sin imports relativos)

### Dependientes (importado por)
| Nota | Archivo |
|------|---------|
| [[cfg-001]] | src/app/app.config.ts |

## Zettelkasten

| Campo | Valor |
|-------|-------|
| ID | `cfg-002` |
| Autor | @lanca |
| Creado | 2025-06-05 |
| Actualizado | 2025-06-05 |
| Tags | angular, routes, routing |

### Enlaces salientes
Ninguno

### Enlaces entrantes
- [[cfg-001]] → AppConfig provee las rutas al router

## Changelog
| Fecha | Autor | Cambio |
|-------|-------|--------|
| 2025-06-05 | @lanca | documentación inicial |
