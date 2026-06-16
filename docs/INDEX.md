---
zk_id: idx-meta
title: Índice de documentación
type: index
tags: [angular, index, zettelkasten]
author: lancast
created: 2026-06-10
updated: 2026-06-15
collection: poc-admin-migala
path: docs/
---

# Índice de documentación — POC_admin_migala

Última actualización: 2026-06-15
Total: **43 nodos** | 7 tipos | 59 aristas

---

## 📄 Páginas (page)

| zk_id | Nombre | Archivo | Descripción |
|-------|--------|---------|-------------|
| `page-001` | HOME | `pages/home/home.ts` | Página de inicio / landing |
| `page-002` | MANIFIESTO | `pages/manifiesto/manifiesto.ts` | Manifiesto del proyecto con audio TTS |
| `page-003` | PROPUESTA | `pages/propuesta/propuesta.ts` | Propuesta política de transformación |
| `page-004` | REGLAMENTO | `pages/reglamento/reglamento.ts` | Reglamento Nacional interactivo (búsqueda, tabs, TOC) |
| `page-005` | ARCHIVO | `pages/archivo/archivo.ts` | Archivo de transparencia + Tree View organigrama + Directorio |
| `page-006` | ESTRUCTURA | `pages/estructura/estructura.ts` | Explorador visual de estructura organizacional |
| `page-007` | TRANSPARENCIA | `pages/transparencia/transparencia.ts` | Portal de transparencia y contacto |

---

## 🧩 Componentes UI (component)

| zk_id | Nombre | Archivo | Descripción |
|-------|--------|---------|-------------|
| `ui-001` | TOPBAR | `layout/topbar/topbar.ts` | Barra de navegación principal con menú y dark mode |
| `ui-003` | FOOTER | `layout/footer/footer.ts` | Pie de página institucional con redes sociales |
| `ui-004` | PAGE_BANNER | `shared/page-banner/page-banner.ts` | Banner decorativo reutilizable |
| `ui-005` | PAGE_NOT_FOUND | `shared/page-not-found/page-not-found.ts` | Página de error 404 |
| `ui-006` | UNDER_CONSTRUCTION | `shared/under-construction/under-construction.ts` | Sección en desarrollo |
| `ui-007` | EMPTY_STATE | `shared/empty-state/empty-state.ts` | Estado vacío para listas y tablas |
| `ui-008` | AUDIO_READER | `shared/audio-reader/audio-reader.ts` | Reproductor de texto-a-voz |

---

## ⚙️ Servicios (service)

| zk_id | Nombre | Archivo | Descripción |
|-------|--------|---------|-------------|
| `svc-001` | DARK_MODE_SERVICE | `core/services/dark-mode.service.ts` | Modo oscuro/claro con persistencia localStorage |
| `svc-002` | TEXT_TO_SPEECH_SERVICE | `core/services/text-to-speech.service.ts` | Síntesis de voz mediante Web Speech API |
| `svc-003` | REGLAMENTO_SERVICE | `core/services/reglamento.service.ts` | Lógica de negocio del Reglamento Nacional |
| `svc-004` | SEO_SERVICE | `core/services/seo.service.ts` | Generación de meta tags SEO/OG/Twitter |

---

## 📦 Datos y constantes (data)

| zk_id | Nombre | Archivo | Descripción |
|-------|--------|---------|-------------|
| `data-001` | MEXICO | `core/data/entidades.data.ts` | 32 estados con todos sus municipios |
| `data-002` | REGLAMENTO_DATA | `core/data/reglamento.data.ts` | Reglamento Nacional completo (artículos, títulos, capítulos) |
| `data-003` | SOCIAL_NETWORKS | `core/social-networks.ts` | Redes sociales oficiales de Proyecto Migala |
| `data-004` | TOP_MENU | `layout/topbar/top-menu.ts` | Elementos del menú de navegación principal |
| `data-006` | TELEGRAM_LINKS | `core/data/telegram-links.ts` | **Fuente única de verdad** para URLs de Telegram |
| `data-007` | ORGANIGRAMA_NACIONAL | `core/data/organigrama.data.ts` | Árbol jerárquico canónico del organigrama |
| `data-008` | ORGANIZACIONES_DATA | `core/data/organizaciones.data.ts` | Catálogo plano de 54 organizaciones |
| `data-009` | ARCHIVOS_DATA | `core/data/archivo.data.ts` | Catálogo de documentos del fondo documental |
| `data-010` | PROCEDIMIENTOS_DATA | `core/data/procedimientos.data.ts` | Guías y trámites formales |
| `data-011` | RUTA_CRITICA_DATA | `core/data/ruta-critica.data.ts` | Plan Nacional de Trabajo 2026 |
| `data-012` | REGLAMENTO_ESTATAL_DATA | `core/data/reglamento-estatal.data.ts` | Catálogo de reglamentos estatales (32 entidades) |

---

## 📐 Modelos e interfaces (model)

| zk_id | Nombre | Archivo | Descripción |
|-------|--------|---------|-------------|
| `model-001` | ENTIDAD | `core/models/entidad.ts` | País, Estado, Municipio + regiones geográficas |
| `model-002` | REGLAMENTO | `core/models/reglamento.ts` | Reglamento, Articulo, Capitulo, Titulo — con metadatos semánticos |
| `model-003` | ORGANIZACION | `core/models/organizacion.ts` | Órgano del organigrama: tipos, ejes, subórganos |
| `model-004` | ARCHIVO | `core/models/archivo.ts` | Tipos de documentos del archivo de transparencia |
| `model-005` | PROCEDIMIENTO | `core/models/procedimiento.ts` | Trámites administrativos paso a paso |
| `model-006` | RUTA_CRITICA | `core/models/ruta-critica.ts` | Objetivos estratégicos y plan de trabajo |
| `model-007` | REGLAMENTO_TRAZABLE | `core/models/reglamento-trazable.ts` | Trazabilidad, ciclo de vida y relaciones de grafo |
| `model-008` | USUARIO | `core/models/usuario.ts` | Perfil de miembro, roles y afiliación |
| `model-009` | MENU_ITEM | `layout/topbar/menu-item.ts` | Interfaz para elementos del menú de navegación |

---

## 🏗️ Raíz y entrada (root)

| zk_id | Nombre | Archivo | Descripción |
|-------|--------|---------|-------------|
| `root-001` | APP | `app.ts` | Componente raíz (Topbar + RouterOutlet + Footer) |
| `root-002` | APP_CONFIG | `app.config.ts` | Configuración global de providers |
| `root-003` | APP_ROUTES | `app.routes.ts` | Definición de rutas (7 páginas, lazy loading) |
| `root-004` | MAIN | `main.ts` | Entry point (bootstrapApplication) |

---

## ⚙️ Configuración (config)

| zk_id | Nombre | Archivo | Descripción |
|-------|--------|---------|-------------|
| `cfg-003` | REGLAMENTO_CONSTANTS | `core/constants/reglamento.constants.ts` | Constantes visuales y de dominio para reglamentos trazables |

---

## 📊 Grafos

| Documento | Descripción |
|-----------|-------------|
| [[GRAPH.md]] | Grafo global de dependencias del código (43 nodos, 59 aristas) |
| [[reglamento/GRAPH.md]] | Grafo de conocimiento del Reglamento Nacional (34 nodos conceptuales, 87 aristas) |

## Guías de estilo

| Documento | Descripción |
|-----------|-------------|
| [[STYLING.md]] | Guía completa de estilos Tailwind CSS v4 |
| [[styles/global_index.md]] | Catálogo de tokens y componentes globales |
| [[styles/component_styles.md]] | Guía de estilos locales de componentes |

## Arquitectura

| Documento | Descripción |
|-----------|-------------|
| [[ARCHITECTURE.md]] | Flujo de datos TELEGRAM_LINKS (single source of truth) |
