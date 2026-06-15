---
zk_id: comp-014
title: Estructura — Página de estructura y gobernanza
type: component
tags: [angular, component, estructura, organigrama, procedures]
author: lancast
created: 2026-06-15
updated: 2026-06-15
collection: poc-admin-migala
path: docs/components/
---

# Estructura — Página de Estructura y Gobernanza

## Propósito

Página de exploración del organigrama y los procedimientos de Proyecto Migala con dos tabs:

- **🗺️ Organigrama e Hilos**: explorador visual con breadcrumbs, drill-down por niveles, buscador global, panel de detalle del órgano seleccionado con descripción parseada (XML semántico), jerarquía padre/hijos, relaciones horizontales y soporte reglamentario.
- **📋 Guías y Trámites**: listado de procedimientos con ficha general, TL;DR, requisitos de entrada y timeline paso a paso.

## Archivos

- `src/app/pages/estructura/estructura.ts`
- `src/app/pages/estructura/estructura.html`
- `src/app/pages/estructura/estructura.css`

## Señales (Signals)

| Señal | Tipo | Propósito |
|-------|------|-----------|
| `activeTab` | `'organigrama' \| 'procedimientos'` | Tab activo |
| `searchQuery` | `string` | Búsqueda global |
| `ejeFilter` | `EjeEstructural \| 'todos'` | Filtro por eje |
| `selectedOrganId` | `string` | Órgano seleccionado en detalle |
| `selectedProcedureId` | `string` | Procedimiento seleccionado |
| `currentLevelOrganId` | `string` | Nivel actual en el explorador visual |

## Computed

| Computed | Propósito |
|----------|-----------|
| `breadcrumbs` | Camino de navegación desde root hasta el nivel actual |
| `currentLevelChildren` | Órganos hijos del nivel actual |
| `currentLevelOrgan` | Órgano correspondiente al nivel actual |
| `filteredOrganizaciones` | Búsqueda filtrada por texto y eje |
| `selectedOrgan` | Órgano seleccionado |
| `selectedOrganParent` | Padre del órgano seleccionado |
| `selectedOrganChildren` | Hijos del órgano seleccionado |
| `selectedProcedure` | Procedimiento seleccionado |

## Parsing XML semántico

`parseXmlDescription(text: string): TextSegment[]` descompone cadenas con tags XML en segmentos tipados sin usar `innerHTML`:

```xml
<rol id="miembro-nacional">Membresía Nacional</rol>
<organo id="area-formacion">Área de Formación</organo>
<documento>Reglamento Nacional</documento>
<requisito tipo="antigüedad">3 meses</requisito>
```

## Query params

Lee `?eje=...` y `?id=...` de la URL para enlazar desde otras páginas.

## Dependencias

- `ORGANIZACIONES_DATA`
- `PROCEDIMIENTOS_DATA`
- `RouterLink`, `ActivatedRoute`
