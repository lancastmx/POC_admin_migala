---
zk_id: arch-001
title: Arquitectura de datos — Flujo TELEGRAM_LINKS
type: architecture
tags: [angular, architecture, data-flow, telegram]
author: lancast
created: 2026-06-15
updated: 2026-06-15
collection: poc-admin-migala
path: docs/
---

# Arquitectura de Datos — Flujo de Telegram URLs

## Principio

**Single Source of Truth**: `TELEGRAM_LINKS` (en `telegram-links.ts`) es el ÚNICO lugar donde se almacenan los URLs de Telegram. Cualquier cambio se hace solo ahí.

## Diagrama de flujo

```mermaid
graph TD
    PDF[PDF Oficial] -->|Extracción manual| TL[TELEGRAM_LINKS<br/>telegram-links.ts]
    
    TL -->|resolveTelegramUrls()| OD[organigrama.data.ts<br/>ORGANIGRAMA_NACIONAL]
    TL -->|.map(org => telegramUrl: TL[org.id])| OZ[organizaciones.data.ts<br/>ORGANIZACIONES_DATA]
    TL -->|Referencia directa| ARCH[archivo.ts<br/>portalesOperativos, etc.]
    
    OZ -->|organizaciones() signal| ARCH_TREE[archivo.ts<br/>organigramaAgrupado tree view]
    OZ -->|organizaciones() signal| ESTR[estructura.ts<br/>Explorador visual]
    OZ -->|filteredOrganizaciones()| ARCH_DIR[archivo.ts<br/>Directorio listing]
    
    OD -->|Futuro: lectura directa| ARCH_TREE
```

## Archivos involucrados

| Archivo | Rol | Resolución de URLs |
|---------|-----|-------------------|
| `telegram-links.ts` | **Fuente de verdad** | Define el `Record<id, url>` |
| `organigrama.data.ts` | Árbol canónico | `TELEGRAM_LINKS[entry.id]` vía función recursiva |
| `organizaciones.data.ts` | Catálogo plano | `TELEGRAM_LINKS[org.id]` vía `.map()` |
| `archivo.ts` | Componente de archivo | Referencia directa + vía ORGANIZACIONES_DATA |

## Reglas

1. **No hardcodees URLs** en ningún archivo que no sea `telegram-links.ts`
2. **IDs deben coincidir**: la clave en `TELEGRAM_LINKS` debe ser el mismo `id` usado en `organigrama.data.ts` y `organizaciones.data.ts`
3. **Áreas sin URL**: `area-direccion` y `area-politico-electoral` no tienen entrada en `TELEGRAM_LINKS` (según PDF oficial)
4. **Propagación automática**: al cambiar un URL en `TELEGRAM_LINKS`, todos los consumidores lo reflejan sin editar nada más

## Cambiar un enlace (ejemplo)

```diff
// telegram-links.ts
- 'esp-arte-cultura': 'https://t.me/+URL_VIEJO'
+ 'esp-arte-cultura': 'https://t.me/+URL_NUEVO'
```

Eso es todo. El cambio se propaga a:
- El Tree View en Archivo → Organigramas
- El Directorio en Archivo → Directorios  
- El explorador en Estructura
- Los portales en la página de inicio del Archivo
