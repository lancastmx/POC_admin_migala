---
zk_id: docs-002
title: Catálogo de Estilos Globales
description: Registro de tokens de diseño y clases CSS globales del proyecto POC_admin_migala
type: docs
tags: [tailwind, css, theme, tokens, design-system, colores, componentes-globales]
author: equipo
created: 2025-06-05
updated: 2025-06-05
path: docs/styles/global_index.md
collection: poc-admin-migala
---

# Catálogo de Estilos Globales (No modificar a la ligera)

Este documento registra los tokens de diseño y clases CSS globales del proyecto `POC_admin_migala`. Estos estilos definen la identidad visual de la aplicación y **no deben ser modificados sin la aprobación del equipo de diseño/arquitectura**, ya que impactan a toda la interfaz.

---

## 1. Tokens de Tema (Variables `@theme` en `theme.css`)
Ubicados en [theme.css](../../src/styles/theme.css).

### Colores de Identidad (Migala)
Generan las clases `bg-migala`, `text-migala`, `border-migala`, etc.
*   `--color-migala`: `#918be5` (Color primario de la marca)
*   `--color-migala-sky`: `#a8b5e0` (Color cielo / fondos de banner)
*   `--color-migala-light`: `#ebe9fc` (Color secundario / fondos claros)
*   `--color-migala-dark`: `#766fd1` (Variación oscura para hover/acciones)

### Colores de Layout
*   `--color-background-primary`: `#ffffff` (Modo claro) / `#121212` (Modo oscuro)
*   `--color-text-primary`: `#1f2937` (Modo claro) / `#f9fafb` (Modo oscuro)

---

## 2. Componentes Globales Reutilizables
Cualquier nuevo componente que se cree en la aplicación debe heredar o utilizar estas clases si requiere implementar botones o tarjetas tipo glassmorphism.

### Botón Primario (`.btn-migala`)
Ubicado en [buttons.css](../../src/styles/components/buttons.css).
*   **Descripción:** Estilo estándar para botones de acción principal en el sitio.
*   **Propiedades clave:**
    *   Fondo: `--color-migala`
    *   Hover: `--color-migala-dark` con una leve elevación física (`transform: translateY(-1px)`)
    *   Cursor: `pointer`

### Tarjeta Transparente (`.card-glass`)
Ubicado en [utilities.css](../../src/styles/utilities.css).
*   **Descripción:** Estilo tipo "glassmorphism" para contenedores, secciones o widgets que se superponen a fondos coloridos u oscuros.
*   **Propiedades clave:**
    *   Fondo adaptativo: `--color-card-bg`
    *   Borde adaptativo: `--color-card-border`
    *   Efecto de desenfoque: `backdrop-filter: blur(12px)`

---

## 3. Modificaciones y Adiciones
Si necesitas agregar un color corporativo nuevo o extender una tipografía global:
1.  Agrégalo únicamente dentro del bloque `@theme` de [theme.css](../../src/styles/theme.css).
2.  Registra la nueva variable en este archivo para que el resto del equipo sepa que existe y evite crear utilidades duplicadas.

---

## Zettelkasten

| Campo | Valor |
|-------|-------|
| ID | `docs-002` |
| Tipo | `docs` (catálogo de estilos) |
| Tags | tailwind, css, theme, tokens, design-system, colores |

### Enlaces salientes
- [[docs-001]] → Guía de estilos principal (STYLING.md)
- [[docs-003]] → Guía de estilos de componentes (component_styles.md)

### Enlaces entrantes
- [[docs-001]] → STYLING.md referencia este catálogo
- [[idx-meta]] → INDEX.md referencia este catálogo

## Changelog
| Fecha | Autor | Cambio |
|-------|-------|--------|
| 2025-06-05 | @equipo | documentación inicial - catálogo de estilos globales |
