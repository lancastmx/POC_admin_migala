---
zk_id: data-010
title: PROCEDIMIENTOS_DATA — Guías y trámites
type: data
tags: [angular, data, procedures, workflows]
author: lancast
created: 2026-06-15
updated: 2026-06-15
collection: poc-admin-migala
path: docs/data/
---

# PROCEDIMIENTOS_DATA — Guías y Trámites

## Propósito

Define los procedimientos formales de Proyecto Migala con flujo de pasos, requisitos, ejecutores y referencias reglamentarias.

## Archivo

`src/app/core/data/procedimientos.data.ts`

## Estructura

```typescript
export interface Procedimiento {
  id: string;
  nombre: string;
  categoria: string;
  iniciadoPor: string;
  aprobadoPor: string;
  tldr: string;
  requisitos: Requisito[];
  pasos: Paso[];
}
```

## Consumidores

- **`estructura.ts`**: `procedimientos` signal, `selectedProcedure` computed, panel de paso a paso en el template.
