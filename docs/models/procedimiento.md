---
zk_id: model-004
title: Procedimiento (model)
description: Modelo de datos para trámites y flujos paso a paso estipulados en el reglamento (ej. crear una comisión, afiliarse)
type: model
tags: [angular, model, interface, procedimiento, trámite, reglamento, ia]
author: Antigravity
created: 2026-06-13
updated: 2026-06-13
path: src/app/core/models/procedimiento.ts
collection: poc-admin-migala
---

# Procedimiento / Trámite (model)

## Descripción

El Reglamento Nacional es denso y legalista. Para que tanto los humanos (miembros) como las IAs y las páginas web puedan responder de inmediato a preguntas sobre **cómo realizar acciones** (ej. *"¿Cómo creo una comisión?"* o *"¿Cómo impugno una sanción?"*), necesitamos desacoplar los **procesos paso a paso** de los artículos puros.

El modelo `Procedimiento` actúa como un **Grafo de Tareas** que estructura un trámite administrativo vinculándolo directamente a los artículos que le dan fundamento legal.

---

## 1. Estructura de Datos del Procedimiento

Cada procedimiento se define por:
1. **Identificadores y Nombres**: Título del trámite (ej. "Creación de Comisión Temática").
2. **Resumen / TL;DR**: Respuesta rápida en un párrafo (útil para cards en la web y respuestas instantáneas de IA).
3. **Roles Ejecutores**: Quién inicia y quién aprueba.
4. **Requisitos de Entrada**: Qué documentos, firmas o condiciones previas se necesitan.
5. **Pasos Operativos**: Un arreglo ordenado de acciones, donde cada paso está ligado a un artículo del reglamento.
6. **Fundamento Legal**: Enlaces directos a los artículos fuente de verdad.

---

## 2. API / Interfaz Pública (TypeScript)

El archivo físico se ubicará en [procedimiento.ts](../../src/app/core/models/procedimiento.ts):

```typescript
export interface PasoProcedimiento {
  /** Orden correlativo del paso: 1, 2, 3... */
  orden: number;
  /** Título corto de la acción (ej: "Reunir firmas") */
  accion: string;
  /** Detalle explícito de qué hacer */
  descripcion: string;
  /** Rol responsable de ejecutar este paso */
  ejecutor: string;
  /** Artículo que estipula o regula esta acción (ej: "Artículo 108") */
  articuloReferencia: string;
}

export interface RequisitoProcedimiento {
  /** Nombre del requisito (ej: "Mínimo de afiliados") */
  nombre: string;
  /** Descripción o cantidad (ej: "5 afiliados con derechos vigentes") */
  detalle: string;
  /** Indica si es opcional o mandatorio */
  opcional: boolean;
  /** Fundamento legal del requisito */
  articuloReferencia: string;
}

export interface Procedimiento {
  /** Identificador único (ej: "proc-crear-comision-tematica") */
  id: string;
  /** Nombre común del trámite */
  nombre: string;
  /** Resumen ejecutivo / respuesta directa de 1-2 párrafos */
  tldr: string;
  /** Categoria: 'afiliacion' | 'organizacion' | 'finanzas' | 'disciplina' | 'reforma' */
  categoria: 'afiliacion' | 'organizacion' | 'finanzas' | 'disciplina' | 'reforma';
  
  // Actores
  /** Quién tiene derecho a iniciar el trámite (ej: "Cualquier afiliado") */
  iniciadoPor: string;
  /** Órgano que ratifica o valida el trámite final (ej: "Coordinación Nacional") */
  aprobadoPor: string;

  // Requisitos y Flujo
  /** Lista de prerrequisitos obligatorios o sugeridos */
  requisitos: RequisitoProcedimiento[];
  /** Flujo de trabajo ordenado de pasos */
  pasos: PasoProcedimiento[];
  
  // Enlaces de Grafo
  /** IDs de los artículos del reglamento involucrados en todo el flujo */
  articulosRelacionadosIds: string[];
}
```

---

## 3. Ejemplo de Objeto de Datos: Crear una Comisión Temática

A continuación se detalla cómo se estructuraría el trámite de creación de comisiones en el archivo de datos:

```typescript
export const PROCEDIMIENTO_CREAR_COMISION: Procedimiento = {
  id: 'proc-crear-comision-tematica',
  nombre: 'Creación de una Comisión Temática',
  tldr: 'Para crear una Comisión Temática se requiere una propuesta firmada por al menos 5 afiliados vigentes, que incluya un Plan de Trabajo y sea aprobada por consenso en la Coordinación Nacional.',
  categoria: 'organizacion',
  iniciadoPor: 'Grupo de afiliados (mínimo 5)',
  aprobadoPor: 'Coordinación Nacional',
  requisitos: [
    {
      nombre: 'Grupo Promotor',
      detalle: 'Mínimo 5 miembros afiliados con derechos vigentes en el padrón',
      opcional: false,
      articuloReferencia: 'Artículo 108'
    },
    {
      nombre: 'Plan de Trabajo Inicial',
      detalle: 'Documento abierto con objetivos, justificación y plan de actividades semestral',
      opcional: false,
      articuloReferencia: 'Artículo 108'
    }
  ],
  pasos: [
    {
      orden: 1,
      accion: 'Conformación del Grupo Promotor',
      descripcion: 'Reunir a los 5 afiliados interesados y designar un enlace provisional.',
      ejecutor: 'Miembros Promotores',
      articuloReferencia: 'Artículo 108'
    },
    {
      orden: 2,
      accion: 'Redacción del Plan de Trabajo',
      descripcion: 'Elaborar el documento con base en los principios del Manifiesto.',
      ejecutor: 'Miembros Promotores',
      articuloReferencia: 'Artículo 108'
    },
    {
      orden: 3,
      accion: 'Presentación de la Solicitud',
      descripcion: 'Enviar el plan y las firmas de los promotores a la Mesa de Enlace Nacional.',
      ejecutor: 'Enlace Provisional',
      articuloReferencia: 'Artículo 109'
    },
    {
      orden: 4,
      accion: 'Revisión y Aprobación',
      descripcion: 'La Coordinación Nacional sesiona, abre a diálogo la propuesta y dictamina por consenso.',
      ejecutor: 'Coordinación Nacional',
      articuloReferencia: 'Artículo 110'
    }
  ],
  articulosRelacionadosIds: ['art-108', 'art-109', 'art-110']
};
```

---

## 4. Beneficios para la Inteligencia Artificial y Humanos

1. **Respuestas Instantáneas de IA (Zero-Shot & RAG)**:
   Cuando el usuario le pregunte a un asistente: *"¿Cómo creo una comisión?"*, la IA no tiene que analizar el texto legal de varios artículos y deducir los pasos. Puede leer directamente el objeto `Procedimiento`, extraer el `tldr` y listar los `pasos` exactos.
2. **Interfaz Gráfica Interactiva (Páginas Web)**:
   Podemos renderizar estos procedimientos en formato de **Timeline** o **Asistente Paso a Paso (Wizard)** en la web, con barras de progreso y enlaces interactivos para leer el artículo de respaldo.
3. **Legibilidad Humana**:
   Permite a los miembros leer en lenguaje simple y estructurado los trámites administrativos sin perder el fundamento legal.

---

## Zettelkasten

| Campo | Valor |
|-------|-------|
| ID | `model-004` |
| Autor | @Antigravity |
| Creado | 2026-06-13 |
| Tags | angular, model, interface, procedimiento, trámite, reglamento, ia |

### Enlaces salientes
- [[model-003]] → Utiliza la definición de tipos de miembros (`afiliado`, `simpatizante`) de Usuario.
