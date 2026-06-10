---
zk_id: model-002
title: Reglamento (model)
description: Modelo de datos del Reglamento Nacional con interfaces para artículos, capítulos, títulos y métricas
type: model
tags: [angular, model, interface, reglamento, articulos, capitulos]
author: lancast
created: 2026-06-10
updated: 2026-06-10
path: src/app/core/models/reglamento.ts
collection: poc-admin-migala
---

# Reglamento (model)

## Descripción
Modelo de datos que define la estructura completa del Reglamento Nacional del Proyecto Migala. Incluye:
- `ArticuloType` — 10 tipos semánticos: principio, definicion, requisito, procedimiento, sancion, estructura, derecho, obligacion, transitorio, glosario
- `ArticuloCluster` — 8 clusters funcionales: nacional, operativo, territorial, especializado, transversal, procedimental, disciplinario, normativo
- `Fragment` — fragmento interno de artículo (párrafo, lista, condición, excepción, cita)
- `Referencia` — referencia cruzada a otro artículo
- `Articulo` — artículo con metadatos semánticos, tags, conceptos clave, fragmentos y métricas
- `Capitulo` — capítulo que agrupa artículos
- `Titulo` — título que agrupa capítulos
- `Reglamento` — documento raíz con título, fecha, títulos y métricas
- `ReglamentoMetrics` — métricas cuantitativas globales

## API / Interfaz pública

### Tipos exportados
| Nombre | Tipo | Descripción |
|--------|------|-------------|
| `ArticuloType` | union type | Tipo semántico del artículo |
| `ArticuloCluster` | union type | Cluster funcional del artículo |
| `Fragment` | interface | Fragmento interno de artículo |
| `Referencia` | interface | Referencia cruzada |
| `Articulo` | interface | Artículo completo |
| `Capitulo` | interface | Capítulo con artículos |
| `Titulo` | interface | Título con capítulos |
| `Reglamento` | interface | Documento raíz |
| `ReglamentoMetrics` | interface | Métricas globales |

## Grafo de dependencias

```mermaid
graph LR
  model-002(Reglamento)
```

| Métrica | Valor |
|---------|-------|
| Fan-out | 0 |
| Fan-in | 1 |

### Dependencias
Ninguna

### Dependientes (importado por)
| Nota | Archivo |
|------|---------|
| [[data-002]] | src/app/core/data/reglamento.data.ts |

## Zettelkasten

| Campo | Valor |
|-------|-------|
| ID | `model-002` |
| Autor | @lancast |
| Creado | 2026-06-10 |
| Tags | angular, model, interface, reglamento, articulos, capitulos |

### Enlaces salientes
Ninguno

### Enlaces entrantes
- [[data-002]] → Reglamento data implementa el JSON tipado con estas interfaces

## Changelog
| Fecha | Autor | Cambio |
|-------|-------|--------|
| 2026-06-10 | @lancast | creación del modelo Reglamento |
