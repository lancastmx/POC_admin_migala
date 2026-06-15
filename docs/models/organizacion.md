---
zk_id: model-003
title: Organizacion — Órgano del organigrama
type: model
tags: [angular, model, organization, organigrama]
author: lancast
created: 2026-06-15
updated: 2026-06-15
collection: poc-admin-migala
path: docs/models/
---

# Organizacion — Órgano del Organigrama

## Archivo

`src/app/core/models/organizacion.ts`

## Interfaz

```typescript
export type EjeEstructural = 'operativo' | 'territorial' | 'ideologico' | 'transversal';
export type TipoOrgano = 'area' | 'coordinacion' | 'comite' | 'mesa' | 'comision_estatal' | 'comision_tematica' | 'grupo_operativo' | 'asamblea';

export interface Organizacion {
  id: string;
  nombre: string;
  tipo: TipoOrgano;
  eje: EjeEstructural;
  parentId?: string;
  descripcion: string;
  siglas?: string;
  subgruposIds: string[];
  relaciones: Relacion[];
  articulosReferencia: string[];
  telegramUrl?: string;
}
```

## Propiedades clave

| Propiedad | Descripción |
|-----------|-------------|
| `id` | Identificador único (ej: `area-formacion`, `est-cdmx`) |
| `tipo` | Tipo de órgano (área, coordinación, comité, mesa, etc.) |
| `eje` | Eje estructural al que pertenece |
| `parentId` | ID del órgano superior en la jerarquía |
| `telegramUrl` | Se resuelve desde `TELEGRAM_LINKS` al exportarse |
| `subgruposIds` | IDs de los órganos dependientes |
| `relaciones` | Relaciones horizontales con otros órganos |

## Consumidores

- **`ORGANIZACIONES_DATA`**: array de organizaciones
- **`archivo.ts`**: `organizaciones` signal, `filteredOrganizaciones` computed, `organigramaAgrupado` computed
- **`estructura.ts`**: explorador visual, breadcrumbs, detalle de órgano
