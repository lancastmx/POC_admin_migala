---
zk_id: comp-015
title: Propuesta — Página de propuesta de valor
type: component
tags: [angular, component, propuesta, proposal]
author: lancast
created: 2026-06-15
updated: 2026-06-15
collection: poc-admin-migala
path: docs/components/
---

# Propuesta — Página de Propuesta de Valor

## Propósito

Página interactiva que presenta Proyecto Migala como un boilerplate reutilizable con:
- Secciones de qué es, problemática, solución y características técnicas
- Enlaces cliqueables en `detailsExtra` detectados por regex y renderizados como `<a>` tags
- Banner y audio reader

## Archivos

- `src/app/pages/propuesta/propuesta.ts`
- `src/app/pages/propuesta/propuesta.html`

## Características

- Renderizado dinámico de enlaces en textos markdown-like
- Integración con `PageBanner` y `AudioReader`
- Lazy loading vía ruta

## Dependencias

- `PageBanner`
- `AudioReader`
- `SeoService`
- `TextToSpeechService`
