---
zk_id: comp-013
title: Archivo — Página de archivo documental
type: component
tags: [angular, component, archivo, documents, tree]
author: lancast
created: 2026-06-15
updated: 2026-06-15
collection: poc-admin-migala
path: docs/components/
---

# Archivo — Página de Archivo Documental

## Propósito

Página principal del fondo documental con:
- **Filtros**: categoría, eje/ámbito, subsección (comisión), estado, formato, búsqueda de texto
- **Vista de inicio**: información del archivo, niveles, portales de transparencia en acordeón por eje con modo portales/tabla
- **Vista de resultados**: grid de documentos filtrados con tarjetas
- **Secciones especiales**: Redes Sociales, Ruta Crítica interactiva
- **🌿 Organigramas**: Tree View jerárquico colapsable con 4 niveles, badges de tipo, enlaces Telegram en hojas
- **📇 Directorios**: listado en grid de todas las organizaciones con filtros activos

## Archivos

- `src/app/pages/archivo/archivo.ts`
- `src/app/pages/archivo/archivo.html`
- `src/app/pages/archivo/archivo.css`

## Señales (Signals)

| Señal | Tipo | Propósito |
|-------|------|-----------|
| `viewMode` | `'portales' \| 'tabla'` | Modo de visualización de portales |
| `expandedEjes` | `EjesExpansionState` | Estado de acordeón por eje |
| `selectedCategory` | `string` | Categoría de filtro activa |
| `selectedEje` | `string` | Eje seleccionado |
| `searchQuery` | `string` | Texto de búsqueda |
| `selectedSubseccion` | `string` | Subsección/comisión seleccionada |
| `selectedEstado` | `string` | Estado seleccionado |
| `organizaciones` | `Organizacion[]` | Datos crudos sin filtrar |
| `expandedTreeNodes` | `Set<string>` | Nodos expandidos en el Tree View |

## Computed

| Computed | Propósito |
|----------|-----------|
| `filteredDocumentos` | Documentos filtrados por categoría, eje, formato, búsqueda, estado |
| `filteredOrganizaciones` | Organizaciones filtradas por eje, subsección, estado, búsqueda |
| `organigramaAgrupado` | Árbol jerárquico del organigrama agrupado por eje (NO reacciona a filtros) |
| `portalesEstatales` | Portales de los 32 estados con nivel e icono |

## Métodos clave

| Método | Propósito |
|--------|-----------|
| `toggleTreeNode(id)` | Expande/colapsa un nodo del árbol |
| `isTreeNodeExpanded(id)` | Consulta si un nodo está expandido |
| `getTipoOrganoLabel(tipo)` | Etiqueta legible del tipo de órgano |
| `getTipoOrganoBadgeClass(tipo)` | Clase CSS para el badge del tipo |
| `getTipoOrganoIcon(tipo)` | Icono del tipo de órgano |

## Tree View

El árbol se construye en `organigramaAgrupado`:

1. Toma TODAS las `organizaciones()` (sin filtrar)
2. Construye un `Map<id, OrganigramaNode>` con padres e hijos según `parentId`
3. Agrupa en 4 grupos según el nodo raíz de cada eje (`eje-operativo`, `eje-territorial`, etc.)
4. El template renderiza 4 niveles con indentación (`ml-5`, `border-l-2`) y colapsado por nodo

## Dependencias

- `ORGANIZACIONES_DATA`
- `ARCHIVOS_DATA`
- `TELEGRAM_LINKS`
- `MEXICO` (entidades.data)
- `SOCIAL_NETWORKS`
- `RUTA_CRITICA_DATA`
- `SeoService`
