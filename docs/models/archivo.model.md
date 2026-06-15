---
zk_id: model-004
title: ArchivoDocumento — Documento del archivo
type: model
tags: [angular, model, document, archive]
author: lancast
created: 2026-06-15
updated: 2026-06-15
collection: poc-admin-migala
path: docs/models/
---

# ArchivoDocumento — Documento del Archivo

## Archivo

`src/app/core/models/archivo.ts`

## Interfaz

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

## Consumidores

- **`ARCHIVOS_DATA`**: catálogo de documentos
- **`archivo.ts`**: `documentos` signal, `filteredDocumentos` computed, tarjetas de documento en template
