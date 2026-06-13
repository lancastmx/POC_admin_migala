---
zk_id: model-005
title: Organización (model)
description: Modelo de datos para estructurar las organizaciones, órganos y grupos de trabajo (ej. comisiones, mesas) y su grafo de dependencias
type: model
tags: [angular, model, interface, organizacion, organo, comision, jerarquia, xml, ia]
author: Antigravity
created: 2026-06-13
updated: 2026-06-13
path: src/app/core/models/organizacion.ts
collection: poc-admin-migala
---

# Organización / Órgano (model)

## Descripción

El Proyecto Migala se organiza en cuatro **Ejes Estructurales** y múltiples niveles jerárquicos (Áreas, Coordinaciones, Comités, Mesas y Comisiones). Para poder analizar este ecosistema mediante teoría de grafos, necesitamos representar cada uno de estos órganos como un nodo con enlaces jerárquicos (`parent/child`) y relaciones operativas (`rinde_cuentas_a`, `colabora_con`).

Además, para facilitar la lectura automatizada por parte de modelos de IA y la interactividad en el frontend, utilizaremos **etiquetas semánticas XML** dentro del texto libre para marcar roles, documentos, requisitos y otras organizaciones.

---

## 1. Convención de Etiquetas XML Semánticas

Para enriquecer la data textual (como descripciones, tl;dr y pasos operativos) y facilitar el renderizado de enlaces interactivos y la lectura por LLMs, usaremos las siguientes etiquetas en el contenido de texto:

| Etiqueta | Atributos | Ejemplo de Uso | Propósito |
|----------|-----------|----------------|-----------|
| `<rol>` | `id` (opcional) | `Reunir a los <rol id="afiliado">afiliados</rol>...` | Destaca un rol o tipo de membresía. |
| `<organo>` | `id` o `tipo` | `Aprobado por la <organo id="confu">CONFU</organo>` | Vincula a otra organización del grafo. |
| `<documento>` | `id` (opcional) | `Leer el <documento id="reglamento">Reglamento</documento>` | Señala documentos oficiales o formatos. |
| `<requisito>` | `tipo`, `valor` | `Mínimo de <requisito tipo="cantidad" valor="5">5 firmas</requisito>` | Parametriza requisitos numéricos/legales. |

---

## 2. API / Interfaz Pública (TypeScript)

El archivo físico se ubicará en [organizacion.ts](../../src/app/core/models/organizacion.ts):

```typescript
export type TipoOrgano =
  | 'area'               // Área (estructura más amplia, ej: Área Operativa)
  | 'coordinacion'       // Coordinación interna
  | 'comite'             // Comité de tareas
  | 'mesa'               // Mesa técnica (voceros, enlaces)
  | 'comision_estatal'   // Comisión Estatal territorial
  | 'comision_tematica'  // Comisión Temática ideológica
  | 'grupo_operativo'    // Grupo de soporte
  | 'asamblea';          // Asamblea de toma de decisiones

export type EjeEstructural =
  | 'operativo'          // Eje Operativo (CONFU, Enlace, Finanzas)
  | 'territorial'        // Eje Territorial (Estatales)
  | 'ideologico'         // Eje Especializado (Temáticas)
  | 'transversal';       // Eje de Transversalidad

export interface RelacionOrgano {
  /** Tipo de interacción operativa */
  tipo: 'colabora_con' | 'supervisa_a' | 'rinde_cuentas_a' | 'asesora_a';
  /** ID del órgano destino */
  destinoId: string;
}

export interface Organizacion {
  /** Identificador único (ej: "org-confu", "org-estatal-09") */
  id: string;
  /** Nombre completo */
  nombre: string;
  /** Siglas o nombre corto (ej: "CONFU") */
  siglas?: string;
  /** Tipo de estructura de acuerdo al Artículo 3 */
  tipo: TipoOrgano;
  /** Eje estructural al que pertenece en el organigrama */
  eje: EjeEstructural;
  /** Descripción del órgano (puede incluir XML semántico) */
  descripcion: string;
  
  // Jerarquía (Árbol)
  /** ID del órgano superior del que depende */
  parentId?: string;
  /** IDs de los subgrupos o mesas que dependen de él */
  subgruposIds: string[];
  
  // Grafo de Relaciones Horizontales
  /** Relaciones operativas con otras áreas */
  relaciones: RelacionOrgano[];
  
  // Fundamentos Legales
  /** Artículos del reglamento nacional que facultan a este órgano */
  articulosReferencia: string[];
}
```

---

## 3. Ejemplo de Instancia de Datos (CONFU)

```typescript
export const ORG_CONFU: Organizacion = {
  id: 'org-confu',
  nombre: 'Comisión Nacional de Formación y Utopía',
  siglas: 'CONFU',
  tipo: 'grupo_operativo',
  eje: 'operativo',
  descripcion: 'Órgano responsable de capacitar a los <rol id="simpatizante">Simpatizantes</rol> mediante <documento id="taller-confu">talleres formativos</documento> para su transición al estatus de <rol id="afiliado">Afiliado</rol>. Trabaja de forma <eje>operativa</eje> coordinando con las comisiones de educación.',
  subgruposIds: [],
  relaciones: [
    { tipo: 'rinde_cuentas_a', destinoId: 'org-coordinacion-nacional' }
  ],
  articulosReferencia: ['Artículo 3, V', 'Artículo 6, II']
};
```

---

## Zettelkasten

| Campo | Valor |
|-------|-------|
| ID | `model-005` |
| Autor | @Antigravity |
| Creado | 2026-06-13 |
| Tags | angular, model, interface, organizacion, organo, comision, jerarquia, xml, ia |

### Enlaces salientes
- [[model-003]] → Vincula perfiles de usuario a través de los IDs de organización.
- [[model-004]] → Los pasos de los procedimientos involucran responsables del tipo Organización.
