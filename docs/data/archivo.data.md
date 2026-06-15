---
zk_id: data-009
title: ARCHIVOS_DATA — Catálogo de documentos
type: data
tags: [angular, data, documents, archive]
author: lancast
created: 2026-06-15
updated: 2026-06-15
collection: poc-admin-migala
path: docs/data/
---

# ARCHIVOS_DATA — Catálogo de Documentos

## Propósito

Lista de documentos del fondo documental de Proyecto Migala, categorizados por eje y tipo, con enlaces a Google Drive.

## Archivo

`src/app/core/data/archivo.data.ts`

## Estructura

```typescript
export interface ArchivoDocumento {
  id: string;
  nombre: string;
  descripcion: string;
  categoria: string;
  eje: string;
  formato: 'pdf' | 'spreadsheet' | 'doc' | 'drive' | 'video';
  fileUrl: string;
  fecha: string;
  peso?: string;
}
```

## Categorías

| Categoría | Descripción |
|-----------|-------------|
| ruta-critica | Plan Nacional de Trabajo |
| organigrama | PDFs del organigrama |
| redes-sociales | Redes oficiales |
| sesiones | Sesiones y minutas |
| conversatorios | Conversatorios |
| calendario | Calendarios |
| patrimonio | Inventarios patrimoniales |
| ingresos-egresos | Finanzas |
| tramites-formatos-manuales | Trámites y manuales |
| talleres | Talleres de formación |

## Consumidores

- **`archivo.ts`**: `documentos` signal, `filteredDocumentos` computed con filtros por categoría, eje, formato, búsqueda, subsección y estado.
