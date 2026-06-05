---
zk_id: comp-007
title: EmptyState
description: Componente genérico de estado vacío con icono, título, mensaje y contenido proyectado
type: component
tags: [angular, component, shared, empty, state]
author: lanca
created: 2025-06-05
updated: 2025-06-05
path: src/app/shared/empty-state/empty-state.ts
collection: poc-admin-migala
---

# EmptyState

## Descripción
Componente compartido que renderiza un estado vacío personalizable mediante inputs (`icon`, `title`, `message`) y proyección de contenido con `<ng-content>`.

## API / Interfaz pública

### Selector
`<migala-empty-state />`

### Inputs
| Input | Tipo | Default | Descripción |
|-------|------|---------|-------------|
| `icon` | `string` | `''` | Emoji o SVG inline |
| `title` | `string` | `'Sin contenido'` | Título del estado |
| `message` | `string` | `'No hay información disponible en este momento.'` | Descripción |

### Uso
```html
<migala-empty-state icon="📭" title="Sin resultados" message="No se encontraron coincidencias.">
  <button class="...">Reintentar</button>
</migala-empty-state>
```

## Grafo de dependencias

```mermaid
graph LR
  comp-007(EmptyState)
```

| Métrica | Valor |
|---------|-------|
| Fan-out | 0 |
| Fan-in | 0 |

## Zettelkasten

| Campo | Valor |
|-------|-------|
| ID | `comp-007` |
| Autor | @lanca |
| Creado | 2025-06-05 |
| Actualizado | 2025-06-05 |
| Tags | angular, component, shared, empty, state |

## Changelog
| Fecha | Autor | Cambio |
|-------|-------|--------|
| 2025-06-05 | @lanca | creación del componente EmptyState |
