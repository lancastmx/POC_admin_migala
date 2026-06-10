---
zk_id: data-002
title: REGLAMENTO_DATA (reglamento data)
description: Datos completos del Reglamento Nacional con títulos, capítulos, artículos enriquecidos y métricas
type: data
tags: [angular, data, constant, reglamento, nacional, articulos]
author: lancast
created: 2026-06-10
updated: 2026-06-10
path: src/app/core/data/reglamento.data.ts
collection: poc-admin-migala
---

# REGLAMENTO_DATA (reglamento data)

## Descripción
Constante `REGLAMENTO_DATA: Reglamento` que contiene el Reglamento Nacional completo del Proyecto Migala. Incluye:
- Múltiples títulos con capítulos y artículos
- Cada artículo con metadatos semánticos: tipo, cluster, tags, conceptos clave, fragmentos y métricas
- Referencias cruzadas entre artículos

## API / Interfaz pública

### Constante exportada
| Nombre | Tipo | Descripción |
|--------|------|-------------|
| `REGLAMENTO_DATA` | `Reglamento` | Documento completo del reglamento |

## Grafo de dependencias

```mermaid
graph LR
  data-002(REGLAMENTO_DATA) --> model-002(Reglamento)
```

| Métrica | Valor |
|---------|-------|
| Fan-out | 1 |
| Fan-in | 1 |

### Dependencias (importa)
| Nota | Archivo | Propósito |
|------|---------|-----------|
| [[model-002]] | src/app/core/models/reglamento.ts | Interfaces Reglamento, Titulo, Capitulo, Articulo para tipado |

### Dependientes (importado por)
| Nota | Archivo |
|------|---------|
| [[comp-009]] | src/app/pages/reglamento/reglamento.ts |

## Zettelkasten

| Campo | Valor |
|-------|-------|
| ID | `data-002` |
| Autor | @lancast |
| Creado | 2026-06-10 |
| Tags | angular, data, constant, reglamento, nacional, articulos |

### Enlaces salientes
- [[model-002]] → Reglamento model provee las interfaces para tipado

### Enlaces entrantes
- [[comp-009]] → Reglamento consume los datos para renderizar la página

## Changelog
| Fecha | Autor | Cambio |
|-------|-------|--------|
| 2026-06-10 | @lancast | creación de la constante REGLAMENTO_DATA |
