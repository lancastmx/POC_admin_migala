---
zk_id: data-007
title: ORGANIGRAMA_NACIONAL — Árbol jerárquico canónico
type: data
tags: [angular, data, organigrama, tree]
author: lancast
created: 2026-06-15
updated: 2026-06-15
collection: poc-admin-migala
path: docs/data/
---

# ORGANIGRAMA_NACIONAL — Árbol Jerárquico del Organigrama

## Propósito

Define la estructura jerárquica completa del organigrama de Proyecto Migala como un árbol de 4 niveles de profundidad, SIN URLs hardcodeados. Los Telegram URLs se resuelven dinámicamente desde `TELEGRAM_LINKS`.

## Archivo

`src/app/core/data/organigrama.data.ts`

## Interfaces

```typescript
export interface OrganigramaEntry {
  id: string;
  nombre: string;
  telegramUrl?: string;        // se resuelve desde TELEGRAM_LINKS
  hijos?: OrganigramaEntry[];
}
```

## Resolución de URLs

```typescript
function resolveTelegramUrls(entry: OrganigramaEntry): OrganigramaEntry {
  return {
    ...entry,
    telegramUrl: TELEGRAM_LINKS[entry.id] || undefined,
    hijos: entry.hijos?.map(resolveTelegramUrls)
  };
}

export const ORGANIGRAMA_NACIONAL: OrganigramaEntry = resolveTelegramUrls(ORGANIGRAMA_RAW);
```

## Estructura del árbol

```
I.- Organigrama Nacional
├── 1. Eje Operativo
│   ├── Área de Dirección
│   │   ├── Coordinación General
│   │   ├── Mesa de Voceros
│   │   └── Mesa de Recaudación de Fondos
│   ├── Área de Formación → Formación
│   ├── Área Administrativa → Administración
│   ├── Área de Transparencia → Transparencia
│   ├── Área de Contraloría → Contraloría
│   ├── Área de Comunicación y Propaganda → Comunicación
│   ├── Área de Informática → Informática
│   ├── Área Financiera → Financiera
│   ├── Área Legal → Legal
│   └── Área de Diálogo y Arbitraje → Diálogo
├── 2. Eje Territorial
│   ├── Primera Circunscripción (8 estados)
│   ├── Segunda Circunscripción (7 estados)
│   ├── Tercera Circunscripción (7 estados)
│   ├── Cuarta Circunscripción (6 estados)
│   └── Quinta Circunscripción (4 estados)
├── 3. Eje Especializado
│   ├── Derechos Humanos
│   ├── Arte y Cultura
│   ├── Estudios Económicos
│   ├── Geopolítica e Historia
│   ├── Ciencia y Tecnología
│   └── Sustentabilidad
└── 4. Eje de Transversalidad
    ├── Grupo de Diversidad
    ├── Grupo de Mujeres
    ├── Grupo de Funcionalidad Diversa
    ├── Grupo de Paisanos
    ├── Grupo de Masculinidades
    └── Grupo de Pueblos Originarios
```

## Consumidores

- **`archivo.ts`**: `organigramaAgrupado` computed lo construye desde `organizaciones()`. A futuro podría migrarse a `ORGANIGRAMA_NACIONAL.hijos`.
- **`estructura.ts`**: usa `ORGANIZACIONES_DATA` directamente para el explorador visual.
