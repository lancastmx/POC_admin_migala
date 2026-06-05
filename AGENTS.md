# AGENTS.md - Contexto y Orquestación para Agentes de IA

Este archivo proporciona el contexto global de desarrollo, comandos útiles y convenciones del proyecto `POC_admin_migala` para guiar a los agentes de IA.

## Perfil del Proyecto y Stack
- **Nombre:** POC_admin_migala (Administrador de Recursos para Proyecto Migala)
- **Framework:** Angular 21+ (standalone components)
- **Estilos:** Tailwind CSS v4 (configuración CSS nativa, sin `tailwind.config.js`)
- **Package Manager:** Bun v1.3.14
- **Testing:** Vitest con jsdom

---

## Estructura del Workspace
- `/src/app/` — Componentes, servicios, directivas y rutas de la aplicación.
- `/public/` — Archivos públicos y estáticos (imágenes, logos, etc.).
- `/.opencode/` — Configuraciones específicas del entorno OpenCode (agentes, habilidades y prompts).
- `/.agents/` — Configuraciones específicas de Antigravity (habilidades y reglas locales).

---

## Agentes Disponibles (Orquesta)

### 1. Agente Principal (`build`)
- **Rol:** Desarrollo y construcción.
- **Herramientas:** Edición, escritura, ejecución de terminal.
- **Prompt:** [.opencode/prompts/build.txt](.opencode/prompts/build.txt)

### 2. Agente de Análisis y Planificación (`plan`)
- **Rol:** Diseño técnico y planificación. Solo lectura de archivos.
- **Permisos:** Denegar escritura y edición.

### 3. Agente Especialista en Angular (`angular`)
- **Rol:** Generation de componentes standalone, Signal Reactivity y optimización Angular CLI.
- **Configuración:** [.opencode/agents/angular.md](.opencode/agents/angular.md)

### 4. Agente de Revisión (`review`)
- **Rol:** Auditoría de seguridad (validaciones, XSS), rendimiento (lazy loading, defer) y buenas prácticas.
- **Configuración:** [.opencode/agents/review.md](.opencode/agents/review.md)

---

## Habilidades e Instrucciones Especiales (Skills)
- **Habilidad de Control de Proyecto:** [.opencode/skills/angular.md](.opencode/skills/angular.md) (Define comandos de desarrollo).
- **Skill Factory:** [.agents/skills/skill-factory/SKILL.md](.agents/skills/skill-factory/SKILL.md) (Herramienta para crear nuevas habilidades, agentes y herramientas).

---

## Convenciones de Desarrollo para Agentes
1. **Comandos de Gestión:** Siempre utiliza `bun`, nunca `npm` ni `yarn` (ej. `bun install`, `bun test`).
2. **Creación de Componentes:** Genera componentes mediante `bun run ng generate component <name>` dentro de `src/app/`.
3. **Señales (Signals):** Prefiere `signal()`, `computed()`, y `effect()` sobre Zone.js y RxJS cuando sea posible.
4. **Tailwind v4:** No crees un archivo `tailwind.config.js`. Sigue la sintaxis nativa de CSS de Tailwind v4 en `src/styles.css`.
5. **Testing:** Las pruebas unitarias se ejecutan mediante `bun test` y deben ubicarse junto al componente (`component.spec.ts`).
