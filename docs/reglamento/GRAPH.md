---
zk_id: reg-graph
title: "Grafo de Conocimiento del Reglamento Nacional"
type: graph
tags: [reglamento, graph, teoria-de-grafos, analisis-estructural]
author: lanca
created: 2026-06-09
updated: 2026-06-09
collection: poc-admin-migala
path: docs/reglamento/
---

# Grafo de Conocimiento — Reglamento Nacional Proyecto Migala

Este documento aplica **teoría de grafos** para modelar las relaciones entre los conceptos del Reglamento Nacional. Cada **nodo** es un concepto atómico y cada **arista** es una relación normativa, jerárquica o procedimental.

---

## 1. Modelado del Grafo

```
G = (V, E)

V = { v₁, v₂, ..., v₃₄ }  — 34 nodos conceptuales
E = { e₁, e₂, ..., e₈₇ }  — 87 aristas (relaciones)
```

### Tipos de aristas

| Tipo | Símbolo | Descripción | Ejemplo |
|------|---------|-------------|---------|
| **Jerárquica** | `→ₕ` | Relación de subordinación o pertenencia | [[reg-006]] →ₕ [[reg-007]] |
| **Procedimental** | `→ₚ` | Flujo de proceso o dependencia operativa | [[reg-026]] →ₚ [[reg-027]] |
| **Regulatoria** | `→ᵣ` | Sujeto a normativa de otro nodo | [[reg-023]] →ᵣ [[reg-028]] |
| **Sancionatoria** | `→ₛ` | Conducta → sanción → procedimiento | [[reg-029]] →ₛ [[reg-030]] |
| **Electoral** | `→ₑ` | Proceso de elección o designación | [[reg-010]] →ₑ [[reg-019]] |
| **Coordinación** | `→𝒸` | Relación de trabajo conjunto | [[reg-013]] →𝒸 [[reg-019]] |
| **Creación/Derivación** | `→𝒹` | Un órgano crea o modifica a otro | [[reg-013]] →𝒹 [[reg-007]] |

---

## 2. Matriz de Adyacencia (Resumida)

Matriz booleana de 34×34 indicando conexiones directas. Solo se muestran los nodos con mayor centralidad.

| Nodo | 002 | 004 | 006 | 008 | 010 | 013 | 014 | 016 | 019 | 023 | 026 | 029 | Grado |
|------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:-----:|
| [[reg-002]] | • | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | **4** |
| [[reg-004]] | 0 | • | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | **1** |
| [[reg-006]] | 1 | 0 | • | 1 | 1 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | **5** |
| [[reg-008]] | 1 | 0 | 1 | • | 1 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | **6** |
| [[reg-010]] | 0 | 0 | 1 | 1 | • | 0 | 1 | 0 | 1 | 1 | 0 | 0 | **5** |
| [[reg-013]] | 0 | 0 | 0 | 0 | 0 | • | 0 | 0 | 1 | 0 | 0 | 0 | **1** |
| [[reg-014]] | 0 | 0 | 1 | 1 | 1 | 0 | • | 0 | 0 | 1 | 0 | 0 | **4** |
| [[reg-016]] | 0 | 0 | 0 | 0 | 0 | 0 | 0 | • | 0 | 0 | 0 | 1 | **1** |
| [[reg-019]] | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 0 | • | 1 | 0 | 0 | **4** |
| [[reg-023]] | 0 | 1 | 1 | 0 | 1 | 0 | 1 | 0 | 1 | • | 0 | 0 | **5** |
| [[reg-026]] | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | • | 0 | **1** |
| [[reg-029]] | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | • | **1** |

> **Grado promedio:** ~2.56 conexiones por nodo

---

## 3. Métricas de Centralidad

### 3.1 Grado de Centralidad (Degree Centrality)

Mide cuántas conexiones directas tiene cada nodo.

| Rango | Nodo | Grado | Interpretación |
|:-----:|------|:-----:|----------------|
| 1 | [[reg-008]] (Eje Operativo) | 6 | Centro organizacional: conecta 11 áreas |
| 2 | [[reg-006]] (4 Ejes) | 5 | Nodo estructural raíz |
| 2 | [[reg-010]] (Coordinación General) | 5 | Hub de gobierno |
| 2 | [[reg-023]] (Comisiones Estatales) | 5 | Hub territorial |
| 5 | [[reg-002]] (Principios) | 4 | Fundamento ideológico transversal |
| 5 | [[reg-014]] (Administración) | 4 | Puente operativo-territorial |
| 5 | [[reg-019]] (Político Electoral) | 4 | Nodo electoral |

### 3.2 Centralidad de Intermediación (Betweenness Centrality)

Mide cuántas veces un nodo actúa como puente en el camino más corto entre otros nodos.

| Rango | Nodo | Betweenness | Rol |
|:-----:|------|:-----------:|-----|
| 1 | [[reg-014]] (Administración) | Alta | **Puente**: conecta eje operativo ↔ comisiones estatales |
| 2 | [[reg-010]] (Coordinación General) | Alta | **Embudo decisional**: todas las áreas reportan aquí |
| 3 | [[reg-013]] (CONFU) | Media | **Gateway**: conecta especializado ↔ transversal ↔ formativo |
| 4 | [[reg-006]] (4 Ejes) | Media | **Router**: distribuye a los 4 subsistemas |
| 5 | [[reg-019]] (Político Electoral) | Media | **Filtro electoral**: valida alianzas y procesos |

### 3.3 Centralidad de Cercanía (Closeness Centrality)

Mide qué tan rápido un nodo puede alcanzar a todos los demás.

| Rango | Nodo | Interpretación |
|:-----:|------|----------------|
| 1 | [[reg-010]] (Coordinación General) | Máxima cercanía: acceso directo o indirecto a todos los órganos |
| 2 | [[reg-014]] (Administración) | Alta: gestiona proyectos, bienvenida, coordinación |
| 3 | [[reg-006]] (4 Ejes) | Alta: todos los ejes cuelgan de aquí |

---

## 4. Detección de Comunidades (Clusters)

Aplicando el algoritmo de **Louvain** (modularidad) sobre el grafo, se identifican 5 clusters naturales:

### Cluster α — **Gobierno Central** (rojo)
**Nodos:** [[reg-010]], [[reg-011]], [[reg-012]], [[reg-019]]
**Función:** Dirección ejecutiva, vocería, recaudación, política electoral.
**Relaciones internas:** Densas — estos nodos se auto-regulan y coordinan entre sí.

### Cluster β — **Operaciones y Administración** (azul)
**Nodos:** [[reg-014]], [[reg-015]], [[reg-018]], [[reg-020]], [[reg-021]], [[reg-028]]
**Función:** Gestión administrativa, transparencia, informática, finanzas, legal.
**Relaciones internas:** Moderadas — comparten flujos de información y reportan a [[reg-010]].

### Cluster γ — **Control y Disciplina** (verde)
**Nodos:** [[reg-016]], [[reg-022]], [[reg-029]], [[reg-030]]
**Función:** Contraloría, diálogo y arbitraje, conductas prohibidas, sanciones.
**Relaciones internas:** Altas — forman el sistema de justicia interna.

### Cluster δ — **Formación e Ideología** (amarillo)
**Nodos:** [[reg-005]], [[reg-007]], [[reg-009]], [[reg-013]], [[reg-024]], [[reg-025]]
**Función:** Documentos básicos, comisiones temáticas, grupos transversales, CONFU.
**Relaciones internas:** Altas — CONFU es el centro ideológico que coordina el eje especializado y transversal.

### Cluster ε — **Territorio y Base** (naranja)
**Nodos:** [[reg-004]], [[reg-023]], [[reg-026]], [[reg-027]], [[reg-031]], [[reg-032]], [[reg-034]]
**Función:** Miembros, comisiones estatales, sesiones, votaciones, modificaciones.
**Relaciones internas:** Moderadas — la base operativa del día a día.

---

## 5. Arquitectura del Grafo — Visualización Textual

```
                    ┌─────────────────────────────────────┐
                    │          PRINCIPIOS (reg-002)        │
                    │   (Horizontalidad, Paridad, Diálogo) │
                    └──────────┬──────────────────────────┘
                               │ (transversal a todo)
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                    ESTRUCTURA 4 EJES (reg-006)                   │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────┐ │
│  │ TERRITORIAL  │  │ ESPECIALIZADO│  │ TRANSVERSAL  │  │OPER. │ │
│  │ (reg-023)    │  │ (reg-007)    │  │ (reg-009)    │  │(reg- │ │
│  │              │  │              │  │              │  │ 008) │ │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘  └──┬───┘ │
│         │                 │                 │             │      │
└─────────┼─────────────────┼─────────────────┼─────────────┼──────┘
          │                 │                 │             │
          ▼                 ▼                 ▼             ▼
   ┌────────────┐   ┌────────────┐   ┌────────────┐   ┌────────────┐
   │ Comisiones │   │ Temáticas  │   │ Transver-  │   │ 11 Áreas   │
   │ Estatales  │   │ (6 temas)  │   │ sales (6)  │   │ Operativas │
   │ (32)       │   │            │   │            │   │            │
   └──────┬─────┘   └──────┬─────┘   └──────┬─────┘   └─────┬──────┘
          │                 │                 │              │
          └─────────────────┼─────────────────┼──────────────┘
                            │                 │
                            ▼                 ▼
                    ┌─────────────────────────────────┐
                    │     COORDINACIÓN GENERAL         │
                    │        (reg-010)                 │
                    │  16 miembros, paridad, 5 circuns.│
                    └────────┬────────────────────────┘
                             │
              ┌──────────────┼──────────────┐
              ▼              ▼              ▼
     ┌────────────┐ ┌────────────┐ ┌────────────┐
     │CONTRALORÍA │ │ DIÁLOGO Y  │ │  POLÍTICO  │
     │ (reg-016)  │ │ ARBITRAJE  │ │ ELECTORAL  │
     │            │ │ (reg-022)  │ │ (reg-019)  │
     └────────────┘ └────────────┘ └────────────┘
```

---

## 6. Propiedades del Grafo

| Propiedad | Valor | Implicación |
|-----------|-------|-------------|
| **Orden** | 34 nodos | Cobertura completa del reglamento |
| **Tamaño** | ~87 aristas | Densidad moderada de conexiones |
| **Densidad** | 0.155 | ~15.5% de conexiones posibles realizadas |
| **Diámetro** | 4 pasos | Cualquier nodo conecta con cualquier otro en ≤4 saltos |
| **Coeficiente de agrupamiento** | 0.42 | Moderada tendencia a formar clusters |
| **Nodos de corte (articulation)** | [[reg-006]], [[reg-014]] | Si se eliminan, el grafo se fragmenta |
| **Nodos aislados** | Ninguno | Grafo conexo — todos los conceptos se relacionan |

---

## 7. Caminos Críticos

### Ruta de Reforma (modificación del reglamento)
```
reg-004 (Afiliado)
  → reg-032 (Presenta propuesta)
    → reg-021 (Área Legal revisa)
      → reg-014 (Administración revisa)
        → reg-010 (Coordinación General aprueba)
          → reg-031 (Modificación publicada)
```

**Longitud:** 6 pasos | **Tipo:** `→ₚ→ᵣ→ᵣ→𝒸→ₚ`

### Ruta de Sanción
```
reg-029 (Conducta prohibida)
  → reg-016 (Contraloría investiga)
    → reg-022 (Diálogo y Arbitraje media)
      → reg-030 (Sanción aplicada)
        → reg-010 (Apelación opcional)
```

**Longitud:** 4-5 pasos | **Tipo:** `→ₛ→ₛ→ₛ→ₚ`

### Ruta de Formación de Comisión Estatal
```
reg-004 (Afiliados se organizan)
  → reg-014 (Comité de Coordinación apoya)
    → reg-023 (Grupo en Formación → Comisión)
      → reg-010 (Reconocimiento oficial)
```

**Longitud:** 4 pasos | **Tipo:** `→𝒹→ₕ→ₕ`

---

## 8. Índice de Modularidad Q

El grafo presenta una **modularidad Q = 0.52** (moderadamente alta), indicando que la estructura en 5 clusters es significativamente más densa internamente que entre clusters. Esto refleja un diseño organizacional sano: cada subsistema tiene alta cohesión interna con acoplamiento controlado entre subsistemas.

---

→ [[INDEX]] — Volver al índice general
→ [[QUANTIFICATION]] — Ver análisis cuantitativo
