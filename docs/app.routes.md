---
zk_id: cfg-002
title: AppRoutes
description: Definición de rutas de la aplicación con Home, Transparencia, Archivo, Privacidad y 404
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
Archivo de definición de rutas.

### Rutas actuales
| Path | Componente | Tipo |
|------|-----------|------|
| `/` | [[comp-004]] Home | página |
| `/transparencia` | [[comp-005]] Transparencia | página |
| `/archivo` | [[comp-008]] UnderConstruction | placeholder |
| `/privacidad` | [[comp-008]] UnderConstruction | placeholder |
| `**` | [[comp-006]] PageNotFound | 404 |

## API / Interfaz pública

```typescript
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'transparencia', component: Transparencia },
  { path: 'archivo', component: UnderConstruction },
  { path: 'privacidad', component: UnderConstruction },
  { path: '**', component: PageNotFound },
];
```

## Grafo de dependencias

```mermaid
graph LR
  cfg-002(AppRoutes)
  cfg-002 --> comp-004
  cfg-002 --> comp-005
  cfg-002 --> comp-006
  cfg-002 --> comp-008
```

| Métrica | Valor |
|---------|-------|
| Fan-out | 4 |
| Fan-in | 2 |

### Dependencias
| Nota | Archivo |
|------|---------|
| [[comp-004]] | src/app/pages/home/home.ts |
| [[comp-005]] | src/app/pages/transparencia/transparencia.ts |
| [[comp-006]] | src/app/shared/page-not-found/page-not-found.ts |
| [[comp-008]] | src/app/shared/under-construction/under-construction.ts |

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
- [[comp-004]] — Home en ruta `/`
- [[comp-005]] — Transparencia en ruta `/transparencia`
- [[comp-006]] — PageNotFound en ruta `**`
- [[comp-008]] — UnderConstruction en `/archivo` y `/privacidad`

### Enlaces entrantes
- [[cfg-001]] → AppConfig provee las rutas al router

## Changelog
| Fecha | Autor | Cambio |
|-------|-------|--------|
| 2025-06-05 | @lanca | documentación inicial |
| 2025-06-05 | @lanca | añadidas rutas /archivo, /privacidad (UnderConstruction) y ** (PageNotFound) |
