---
name: angular-project
description: Habilidades para controlar y trabajar con proyectos Angular 21+ con Tailwind CSS
---

# Angular Project Control

Este skill define cómo trabajar con el proyecto Angular `POC_admin_migala`.

## Stack
- **Framework:** Angular 21+
- **Package Manager:** Bun (v1.3.14)
- **Estilos:** Tailwind CSS v4
- **Build:** @angular/build con esbuild
- **Testing:** Vitest con jsdom

## Comandos principales
```bash
# Servidor de desarrollo
bun start        # ng serve

# Build
bun run build    # ng build

# Tests
bun test         # ng test (Vitest)

# Watch mode
bun run watch    # ng build --watch --configuration development

# Angular CLI
bun run ng <command>
```

## Convenciones del proyecto
- **Prefix:** `app` (configurado en angular.json)
- **Source root:** `src/`
- **Estilos globales:** `src/styles.css`
- **Punto de entrada:** `src/main.ts`

## Estructura típica
```
src/
  app/          # Componentes, servicios, módulos
  assets/       # Recursos estáticos
  index.html    # HTML principal
  main.ts       # Entry point
  styles.css    # Estilos globales (Tailwind)
```

## Tailwind CSS v4
- Configuración via `@tailwindcss/postcss` y `.postcssrc.json`
- Se usa `@import "tailwindcss"` en `styles.css`
- Sin archivo `tailwind.config.js` (v4 usa configuración CSS nativa)

## Reglas
1. Siempre usar `bun` en lugar de `npm` o `yarn`
2. Los componentes se generan con `bun run ng generate component <name>`
3. Preferir standalone components (sin NgModules)
4. Usar señales (`signal()`, `computed()`) en lugar de Zone.js cuando sea posible
5. Los estilos deben usar clases de Tailwind, no CSS personalizado
