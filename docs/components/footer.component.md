---
zk_id: comp-003
title: Footer
description: Pie de página con logo, eslogan y enlaces a redes sociales
type: component
tags: [angular, component, layout, footer]
author: lanca
created: 2025-06-05
updated: 2025-06-05
path: src/app/layout/footer/footer.ts
collection: poc-admin-migala
---

# Footer

## Descripción
Componente de layout que renderiza el pie de página. Incluye:
- Logo completo de Proyecto Migala
- Eslogan: "Ciencia, Tierra y Libertad"
- Sección de redes sociales (placeholder)

## API / Interfaz pública

### Selector
`<migala-footer />`

## Grafo de dependencias

```mermaid
graph LR
  comp-003(Footer)
```

| Métrica | Valor |
|---------|-------|
| Fan-out | 0 |
| Fan-in | 1 |

### Dependencias
Ninguna (sin imports relativos)

### Dependientes (importado por)
| Nota | Archivo |
|------|---------|
| [[comp-001]] | src/app/app.ts |

## Zettelkasten

| Campo | Valor |
|-------|-------|
| ID | `comp-003` |
| Autor | @lanca |
| Creado | 2025-06-05 |
| Actualizado | 2025-06-05 |
| Tags | angular, component, layout, footer |

### Enlaces salientes
Ninguno

### Enlaces entrantes
- [[comp-001]] → App lo usa como parte del layout

## Changelog
| Fecha | Autor | Cambio |
|-------|-------|--------|
| 2025-06-05 | @lanca | creación del componente Footer |
