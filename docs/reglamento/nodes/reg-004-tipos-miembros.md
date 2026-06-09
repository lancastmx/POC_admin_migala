---
zk_id: reg-004
title: "Tipos de Miembros: Simpatizantes y Afiliados"
type: note
tags: [reglamento, miembros, afiliados, simpatizantes, membresia]
author: lanca
created: 2026-06-09
updated: 2026-06-09
collection: poc-admin-migala
path: docs/reglamento/nodes/
---

# Tipos de Miembros: Simpatizantes y Afiliados

## Idea atómica

El Proyecto Migala contempla dos categorías de miembros con derechos y obligaciones distintos: **simpatizantes** (acceso limitado) y **afiliados** (acceso completo). La diferencia fundamental es el derecho al voto y la elegibilidad para cargos.

## Comparativa de derechos (Arts. 4-9)

| Derecho | Simpatizante | Afiliado |
|---------|:------------:|:--------:|
| Asistir a reuniones generales | ✅ | ✅ |
| Voz (opinar, proponer) | ✅ | ✅ |
| Presentar propuestas y proyectos | ✅ | ✅ |
| **Voto** | ❌ | ✅ |
| Ser postulado como candidato | ❌ | ✅ |
| Ocupar titularidades | ❌ | ✅ |
| Formar parte de grupos operativos | ❌ | ✅ |
| Ser electo para cargos de elección popular | ❌ | ✅ |

## Requisitos de ingreso

### Simpatizantes (Art. 5)
1. Ser mexicano naturalizado o de nacimiento
2. Tener al menos 15 años cumplidos
3. Estar registrado en el Padrón General
4. Aceptar el Aviso de Privacidad

### Afiliados (Art. 6) — requisitos adicionales
1. Haber leído los documentos básicos (Reglamento, Manifiesto, Ruta Crítica)
2. Cursar talleres formativos básicos (CONFU)
3. Ser mayor de 18 años
4. Ser mexicano de nacimiento
5. Contar con INE vigente
6. Estar en el Padrón de Afiliados
7. Formar parte de la Comisión Estatal de su residencia
8. Formar parte de al menos una Comisión Temática

### Plataformas obligatorias (Art. 7)
- Telegram de su comisión estatal
- Canal de YouTube oficial (nacional + estatal)

### Nacionalidad (Art. 9)
- Personas sin nacionalidad mexicana: solo como **oyentes** con voz pero sin incidencia interna

## Flujo de membresía

```
Persona externa
  → Registro en Padrón General
    → SIMPATIZANTE (voz, sin voto)
      → Lee documentos básicos
      → Cursa talleres CONFU
      → Se registra en Padrón Afiliados
      → Se une a Comisión Estatal + Temática
        → AFILIADO (voz + voto + titularidades)
```

## Modelo de datos (Angular)

```typescript
// Inferido del reglamento
interface Miembro {
  tipo: 'simpatizante' | 'afiliado';
  nombre: string;
  registroPadron: string;
  ine?: string;
  comisionEstatal?: string;
  comisionesTematicas?: string[];
  plataformas: {
    telegram: string;
    youtube: string;
  };
}
```

## Conexiones

- [[reg-003]] — "Miembros", "Afiliados" y "Simpatizantes" definidos en glosario
- [[reg-005]] — Los documentos básicos son requisito de afiliación
- [[reg-023]] — Los afiliados deben pertenecer a una Comisión Estatal
- [[reg-024]] — Los afiliados deben pertenecer a una Comisión Temática
- [[reg-013]] — Los talleres CONFU son requisito de afiliación
- [[reg-030]] — Las sanciones pueden suspender derechos de afiliado
