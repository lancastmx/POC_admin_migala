---
zk_id: docs-003
title: Guía de Estilos Específicos de Componentes
description: Directrices sobre cuándo y cómo usar archivos CSS locales en componentes Angular
type: docs
tags: [angular, css, component-styles, encapsulation, scoping]
author: equipo
created: 2025-06-05
updated: 2025-06-05
path: docs/styles/component_styles.md
collection: poc-admin-migala
---

# Guía de Estilos Específicos de Componentes (.css local)

En este archivo se definen las directrices sobre cuándo y cómo utilizar archivos de estilo locales (por ejemplo, `mi-componente.component.css`) en lugar de añadir clases a la estructura CSS global.

---

## 1. ¿Qué es un Estilo de Componente Único?

Un estilo de componente único es aquel CSS que **solo sirve para una vista, pantalla o widget específico** y no se reutiliza en ningún otro lugar de la aplicación. 
Ejemplos comunes:
- Una animación compleja para la pantalla de Login.
- El posicionamiento absoluto tridimensional del planeta en la sección Hero de `app.html`.
- Ajustes de márgenes o grillas muy específicos de un panel de administración en particular.

---

## 2. Ventajas de Mantener el CSS Local en el Componente

Al declarar estilos locales dentro del decorador `@Component` de Angular (mediante `styleUrl` o `styles`), obtenemos dos ventajas de rendimiento críticas:

1.  **Carga Diferida (Lazy Loading):** Si el componente pertenece a un módulo o ruta que se carga de manera diferida, **el navegador solo descargará ese archivo CSS cuando el usuario visite esa ruta**. Esto reduce drásticamente el peso de la descarga inicial de la aplicación.
2.  **Encapsulamiento de Estilos (CSS Scoping):** Angular compila los estilos del componente agregando atributos internos únicos (ej. `_ngcontent-c23`). Esto garantiza que tus clases CSS **no se filtren ni rompan** los estilos de otros elementos en otras páginas, evitando colisiones de nombres comunes como `.wrapper` o `.container`.

---

## 3. Cómo Implementar Estilos de Componente Correctamente

Cuando necesites CSS personalizado para un componente Angular, sigue estos pasos:

1.  Escribe el CSS en el archivo `.css` de tu componente (ej. `app.component.css`).
2.  Asegúrate de que esté correctamente enlazado en el decorador:
    ```typescript
    @Component({
      selector: 'app-mi-componente',
      templateUrl: './mi-componente.component.html',
      styleUrl: './mi-componente.component.css'
    })
    ```
3.  **Aprovecha Tailwind v4 en el CSS local:** El motor de compilación procesa las directivas de Tailwind dentro del CSS del componente. Puedes usar variables del tema como `var(--color-migala)` o utilizar `@apply` con moderación si necesitas combinar clases para elementos de uso interno rápido.
4.  **No uses selectores globales** como `body` o `html` dentro del CSS del componente, ya que debido al encapsulamiento no tendrán efecto, o requerirán el uso de pseudo-selectores como `:host` o `::ng-deep` (los cuales deben usarse con extrema precaución para no romper el aislamiento).

---

## Zettelkasten

| Campo | Valor |
|-------|-------|
| ID | `docs-003` |
| Tipo | `docs` (guía de estilos de componentes) |
| Tags | angular, css, component-styles, encapsulation, scoping |

### Enlaces salientes
- [[docs-001]] → Guía de estilos principal (STYLING.md)
- [[docs-002]] → Catálogo de estilos globales (global_index.md)

### Enlaces entrantes
- [[docs-001]] → STYLING.md referencia esta guía
- [[idx-meta]] → INDEX.md referencia esta guía

## Changelog
| Fecha | Autor | Cambio |
|-------|-------|--------|
| 2025-06-05 | @equipo | documentación inicial - guía de estilos de componentes |
