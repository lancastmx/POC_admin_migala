# POC_admin_migala

**Prueba de Concepto — Administrador de Recursos para Proyecto Migala**

---

## Proyecto Migala

**Proyecto Migala** es una organización comunitaria que, a través de su **Comisión de Programadores**, busca construir herramientas digitales libres, auditables y sostenibles para traducir necesidades sociales, organizativas y comunicativas en soluciones tecnológicas.

Este repositorio forma parte de esa iniciativa.

## Propósito de esta POC

Esta prueba de concepto tiene como objetivo desarrollar un **administrador de recursos** para gestionar los proyectos de Proyecto Migala. La herramienta permitirá organizar recursos (personas, tareas, documentos, etc.) asociados a los distintos proyectos, sirviendo como base técnica para futuros desarrollos de la comisión.

## Stack tecnológico

| Tecnología     | Versión |
|----------------|---------|
| Angular        | 21      |
| Tailwind CSS   | 4       |
| Bun            | 1.3.14  |
| Vitest         | 4       |
| TypeScript     | 5.9     |

## Descarga y arranque del proyecto

```bash
# 1. Clonar el repositorio
# Vía HTTPS (Recomendado para la mayoría de usuarios):
git clone https://github.com/lancastmx/POC_admin_migala.git

# O vía SSH (Si tienes configuradas tus llaves SSH en GitHub):
# git clone git@github.com:lancastmx/POC_admin_migala.git

cd POC_admin_migala

# 2. Instalar dependencias
bun install

# 3. Iniciar servidor de desarrollo
bun run start
# o bien: ng serve
```

El servidor se ejecutará en `http://localhost:4200/`. La aplicación se recargará automáticamente al modificar cualquier archivo fuente.

### Comandos útiles

| Comando        | Descripción                              |
|----------------|------------------------------------------|
| `bun run start`  | Inicia el servidor de desarrollo       |
| `bun run build`  | Compila el proyecto para producción    |
| `bun run test`   | Ejecuta pruebas unitarias con Vitest   |
| `ng generate`    | Genera componentes, servicios, etc.    |

## Uso con sistema Zettelkasten

El administrador de recursos de esta POC está inspirado en principios del método **Zettelkasten** (sistema alemán de gestión de conocimiento basado en fichas interconectadas):

- **Atomicidad** — cada recurso representa una unidad atómica (persona, tarea, documento) sin depender de contexto externo.
- **Interconexión** — los recursos pueden vincularse entre sí, creando una red de relaciones navegable.
- **Direccionamiento único** — cada recurso tiene un identificador que permite referenciarlo y enlazarlo desde otros recursos.
- **Estructura orgánica** — no hay jerarquías fijas; las conexiones crecen de forma natural según las necesidades del proyecto.

Este enfoque permite que el administrador de recursos funcione como un **Zettelkasten digital**: un sistema vivo donde la información se organiza mediante vínculos en lugar de carpetas estáticas.

## Documentación del proyecto

- [doc_README.md](./doc_README.md) — Documentación base y visión general
- [CONTRIBUTING.md](./CONTRIBUTING.md) — Guía de contribución
- [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) — Código de conducta
- [SECURITY.md](./SECURITY.md) — Política de seguridad
- [GOVERNANCE.md](./GOVERNANCE.md) — Esquema de gobernanza
- [MAINTAINERS.md](./MAINTAINERS.md) — Responsabilidades de mantenimiento
- [SUPPORT.md](./SUPPORT.md) — Canales de soporte
- [STYLING.md](./docs/STYLING.md) — Guía de estilos y optimización CSS (Tailwind v4)

## Licencia

GNU GPL v3.0 — consulta el archivo [LICENSE](./LICENSE).
