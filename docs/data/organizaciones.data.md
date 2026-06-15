---
zk_id: data-008
title: ORGANIZACIONES_DATA — Catálogo de organizaciones
type: data
tags: [angular, data, organizations, catalog]
author: lancast
created: 2026-06-15
updated: 2026-06-15
collection: poc-admin-migala
path: docs/data/
---

# ORGANIZACIONES_DATA — Catálogo de Organizaciones

## Propósito

Lista plana de todas las organizaciones, áreas, comisiones, comités y grupos del Proyecto Migala con metadatos completos (tipo, eje, descripción, siglas, relaciones, artículos de referencia, subgrupos).

## Archivo

`src/app/core/data/organizaciones.data.ts`

## Interfaces

Ver `docs/models/organizacion.md`

## Flujo de datos

```
ORGANIZACIONES_RAW (sin telegramUrl)
        │
        ▼
  .map(org => ({ ...org, telegramUrl: TELEGRAM_LINKS[org.id] }))
        │
        ▼
  ORGANIZACIONES_DATA — usado por archivo.ts y estructura.ts
```

## Cantidad de registros

~60+ organizaciones entre:
- 4 ejes estructurales (eje-*)
- 1 horizontalidad
- 9 áreas operativas (area-*)
- 6 comisiones temáticas (esp-*)
- 6 grupos transversales (tran-*)
- 5 circunscripciones
- 32 comisiones estatales (est-*)
- Múltiples coordinaciones, mesas, comités hijos

## Exportación

```typescript
export const ORGANIZACIONES_DATA: Organizacion[] = ORGANIZACIONES_RAW.map(org => ({
  ...org,
  telegramUrl: TELEGRAM_LINKS[org.id]
}));
```

## Consumidores

- **`archivo.ts`**: `organizaciones` signal, `filteredOrganizaciones` computed, `organigramaAgrupado` computed (árbol desde parentId).
- **`estructura.ts`**: `organizaciones` signal, breadcrumbs, explorador visual, detalle de órgano.
