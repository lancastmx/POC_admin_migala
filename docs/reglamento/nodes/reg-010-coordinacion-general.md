---
zk_id: reg-010
title: "Coordinación General — Dirección Ejecutiva"
type: note
tags: [reglamento, coordinacion-general, direccion, ejecutivo, gobierno]
author: lanca
created: 2026-06-09
updated: 2026-06-09
collection: poc-admin-migala
path: docs/reglamento/nodes/
---

# Coordinación General — Dirección Ejecutiva

## Idea atómica

La Coordinación General es el **órgano ejecutivo colegiado** del Proyecto Migala. Se compone de 16 afiliados en paridad de género, seleccionados mediante proceso electoral basado en las 5 circunscripciones electorales del país. Es el núcleo del Área de Dirección.

## Estructura del Área de Dirección (Art. 22)

```
Área de Dirección
  ├── A. Coordinación General (16 miembros)
  ├── B. Mesa de Recaudación de Fondos
  └── C. Mesa de Voceros
```

## Composición (Arts. 25-26)

**16 miembros en paridad de género** distribuidos:

| Origen | Cupos | Método |
|--------|:-----:|--------|
| Circunscripción 1 | 3 | Votación de los estados que la conforman |
| Circunscripción 2 | 3 | Votación de los estados que la conforman |
| Circunscripción 3 | 3 | Votación de los estados que la conforman |
| Circunscripción 4 | 3 | Votación de los estados que la conforman |
| Circunscripción 5 | 3 | Votación de los estados que la conforman |
| Miembro adicional | 1 | Elegido por los 15 miembros anteriores |

**Fórmula de paridad:** 1 mujer + 1 hombre + 1 acción afirmativa por cada grupo de 3.

## Requisitos para integrar (Art. 24)

1. Ser afiliado registrado correctamente
2. Tiempo adecuado para sesiones de Coordinación General
3. Asistencia efectiva ≥ 45% a sesiones de su comisión estatal
4. Sin proceso interno activo (conciliación, arbitraje, contraloría)

## Facultades principales (Arts. 23-33)

| Facultad | Artículo | Descripción |
|----------|:--------:|-------------|
| Dirigir el proyecto | 23 | Mediante diálogo, consenso y votación |
| Elaborar la Ruta Crítica | 23 | Con proyectos propios y aprobados |
| Aprobar alianzas nacionales | 33 | Conforme al Art. 78 |
| Recibir propuestas de proyectos | 28 | A través de Administración |
| Limitar acciones contra reglamento | 31 | Solo si contravienen normas, DDHH o intereses |
| Órgano de apelación | 32 | Contra resoluciones de Arbitraje y Contraloría |
| Elaborar informes trimestrales | 29 | Resultados de actividades |
| Renovarse anualmente | 30 | Elección completa cada año |

## Control y rendición de cuentas

- **Informes trimestrales** públicos (Art. 29)
- **Directo mensual** en YouTube para recibir preguntas (Art. 28)
- **Destitución** mediante procedimiento de Contraloría (Art. 27)
- **Apelación** de sus decisiones ante sí misma (Art. 32)

## Modelo de datos

```typescript
interface CoordinacionGeneral {
  miembros: MiembroCG[];
  periodo: { inicio: Date; fin: Date };
  informesTrimestrales: Informe[];
}

interface MiembroCG {
  nombre: string;
  circunscripcion: 1 | 2 | 3 | 4 | 5;
  genero: 'mujer' | 'hombre' | 'accion-afirmativa';
  asistenciaComisionEstatal: number; // %
}
```

## Conexiones

- [[reg-006]] — La CG es parte del Eje Operativo
- [[reg-008]] — La CG lidera las 11 áreas operativas
- [[reg-011]] — Mesa de Voceros (depende de CG)
- [[reg-012]] — Mesa de Recaudación (depende de CG)
- [[reg-019]] — Área Político Electoral (organiza elección de CG)
- [[reg-023]] — Comisiones Estatales (elegirán miembros de CG)
- [[reg-031]] — CG aprueba modificaciones al reglamento
- [[reg-032]] — CG aprueba proyectos
