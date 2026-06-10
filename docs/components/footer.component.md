---
zk_id: comp-003
title: Footer
description: Pie de página con logo, eslogan y redes sociales oficiales
type: component
tags: [angular, component, layout, footer, social]
author: lancast
created: 2026-06-10
updated: 2026-06-10
path: src/app/layout/footer/footer.ts
collection: poc-admin-migala
---

# Footer

## Descripción
Componente de layout que renderiza el pie de página. Incluye:
- Logo completo de Proyecto Migala
- Eslogan: "Ciencia, Tierra y Libertad"
- Iconos de redes sociales desde [[data-003]] SOCIAL_NETWORKS

## API / Interfaz pública

### Selector
`<migala-footer />`

## Grafo de dependencias

```mermaid
graph LR
  comp-003(Footer) --> data-003(SOCIAL_NETWORKS)
```

| Métrica | Valor |
|---------|-------|
| Fan-out | 1 |
| Fan-in | 1 |

### Dependencias (importa)
| Nota | Archivo | Propósito |
|------|---------|-----------|
| [[data-003]] | src/app/core/social-networks.ts | Constante con redes sociales oficiales |

### Dependientes (importado por)
| Nota | Archivo |
|------|---------|
| [[comp-001]] | src/app/app.ts |

## Zettelkasten

| Campo | Valor |
|-------|-------|
| ID | `comp-003` |
| Autor | @lancast |
| Creado | 2026-06-10 |
| Actualizado | 2026-06-10 |
| Tags | angular, component, layout, footer, social |

### Enlaces salientes
- [[data-003]] → SOCIAL_NETWORKS para renderizar iconos de redes

### Enlaces entrantes
- [[comp-001]] → App lo usa como parte del layout

## Changelog
| Fecha | Autor | Cambio |
|-------|-------|--------|
| 2026-06-10 | @lancast | actualización con SOCIAL_NETWORKS |
