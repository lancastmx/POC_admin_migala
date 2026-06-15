---
zk_id: data-006
title: TELEGRAM_LINKS — Fuente única de verdad
type: data
tags: [angular, data, telegram, urls]
author: lancast
created: 2026-06-15
updated: 2026-06-15
collection: poc-admin-migala
path: docs/data/
---

# TELEGRAM_LINKS — Fuente Única de Verdad para URLs de Telegram

## Propósito

Centralizar TODOS los enlaces de Telegram del organigrama nacional en un único archivo `Record<string, string>`. Si un enlace cambia, se edita **solo aquí** y se propaga automáticamente a `organigrama.data.ts`, `organizaciones.data.ts` y todos los componentes.

## Archivo

`src/app/core/data/telegram-links.ts`

## Estructura

```typescript
export const TELEGRAM_LINKS: Record<string, string> = {
  'horizontalidad': 'https://t.me/+GPjXgBGPaolhNjhh',
  'eje-operativo': 'https://t.me/+KmugAXpjchEwMTAx',
  'area-administrativa': 'https://t.me/+mgqa4uV6rQw3MzMx',
  // ... ~60 entries más
};
```

## Secciones

| Sección | Claves | Cantidad |
|---------|--------|----------|
| Horizontalidad (Plaza Pública) | `horizontalidad` | 1 |
| Eje Operativo (enlace general) | `eje-operativo` | 1 |
| Áreas Operativas | `area-*` | 9 |
| Eje Especializado (Comisiones Temáticas) | `esp-*` | 6 |
| Eje de Transversalidad | `tran-*` | 6 |
| 1a Circunscripción | `est-*` | 8 |
| 2a Circunscripción | `est-*` | 7 |
| 3a Circunscripción | `est-*` | 7 |
| 4a Circunscripción | `est-*` | 6 |
| 5a Circunscripción | `est-*` | 4 |

## Consumidores

- **`organigrama.data.ts`**: `resolveTelegramUrls()` hace `TELEGRAM_LINKS[entry.id]` para cada nodo.
- **`organizaciones.data.ts`**: `ORGANIZACIONES_RAW.map(org => ({ ...org, telegramUrl: TELEGRAM_LINKS[org.id] }))`
- **`archivo.ts`**: `portalesOperativos`, `portalesTematicos`, `portalesTransversales` referencian `TELEGRAM_LINKS['id']` directo.

## Áreas sin URL (según PDF oficial)

- Área Político Electoral
- Área de Dirección

## Historial de correcciones

| Fecha | Cambio |
|-------|--------|
| 2026-06-15 | Corrección masiva: todos los URLs rotados del PDF oficial reemplazados. Se eliminó `organigrama-nacional` (nodo estructural), se agregó `horizontalidad`. |
