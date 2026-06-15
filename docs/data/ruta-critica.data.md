---
zk_id: data-011
title: RUTA_CRITICA_DATA — Plan Nacional de Trabajo
type: data
tags: [angular, data, planning, objectives]
author: lancast
created: 2026-06-15
updated: 2026-06-15
collection: poc-admin-migala
path: docs/data/
---

# RUTA_CRITICA_DATA — Plan Nacional de Trabajo

## Propósito

Define la Ruta Crítica 2026 con objetivos principales y secundarios, balance 2025 y finalidad del plan.

## Archivo

`src/app/core/data/ruta-critica.data.ts`

## Estructura

```typescript
export interface RutaCritica {
  titulo: string;
  periodo: string;
  sobreNosotros: string;
  resumen2025: string;
  finalidad: { titulo: string; subtitulo: string; descripcion: string };
  objetivos: ObjetivoRutaCritica[];
}
```

## Consumidores

- **`archivo.ts`**: sección interactiva bajo categoría `ruta-critica` con grid de objetivos y balance.
