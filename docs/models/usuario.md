---
zk_id: model-003
title: Usuario (model)
description: Modelo de datos de usuario (Miembro del Proyecto Migala) con roles de pertenencia, gobernanza y contexto de propietario/organización
type: model
tags: [angular, model, interface, usuario, miembro, gobernanza, reglamento]
author: Antigravity
created: 2026-06-13
updated: 2026-06-13
path: src/app/core/models/usuario.ts
collection: poc-admin-migala
---

# Usuario / Miembro (model)

## Descripción

Este modelo define el perfil de un **Usuario/Miembro** dentro del sistema administrador de recursos del **Proyecto Migala**. Representa la dualidad entre el **Owner** (dueño de un recurso, credenciales e identidad) y la **Organización** (el ámbito o grupo operativo/comisión sobre el cual tiene potestad).

El diseño está estrictamente alineado con los requisitos de participación establecidos en los **Artículos 4, 5 y 6 del Reglamento Nacional**.

---

## 1. Características del Perfil (Bloques del Objeto)

El perfil de usuario se compone de cuatro bloques fundamentales:

### A. Bloque de Identidad (Propietario / Owner)
Datos mínimos obligatorios del usuario físico.
- `id`: Identificador único (UUID v4).
- `nombreCompleto`: Nombre de pila y apellidos.
- `correo`: Correo electrónico verificado (llave de autenticación).
- `edad`: Edad (clave para determinar derechos en comisiones).
- `nacionalidad`: Tipo de nacionalidad (clave para cumplimiento constitucional y reglamentario).

### B. Bloque de Validación del Reglamento (Artículos 5 y 6)
Requisitos de cumplimiento legal y formativo dentro del Proyecto Migala.
- `avisoPrivacidadAceptado`: Aceptación del aviso (Requisito general, Art. 5, IV).
- `ineValida`: Indica si cuenta con identificación oficial INE vigente y validada (Requisito de afiliado, Art. 6, V).
- `padrónGeneralRegistrado`: Registro en el Padrón General de Simpatizantes (Art. 5, III).
- `padrónAfiliadosRegistrado`: Registro en el Padrón de Afiliados (Art. 6, VI).
- `documentosLeidos`: Estado de lectura de la trilogía documental obligatoria (Art. 6, I):
  - Reglamento Nacional.
  - Manifiesto.
  - Ruta Crítica.
- `talleresCursados`: Lista de claves de talleres formativos completados impartidos por la **CONFU** (Art. 6, II).

### C. Bloque de Clasificación y Roles
- `tipoMembresia`: Clasificación de participación de acuerdo al Artículo 4:
  - `invitado`: Usuario no registrado o participante externo.
  - `simpatizante`: Con voz y derecho a propuesta, sin voto ni candidatura (Art. 4).
  - `afiliado`: Con voz, voto, elegibilidad a titularidades y candidaturas (Art. 4).
- `rolesEjecutivos`: Cargos con responsabilidad delegada (Titularidades, Art. 3, VIII), como `coordinador_estatal`, `vocero`, `enlace_operativo`, `revisor`.

### D. Bloque de Ámbito Organizativo (Organization Context)
Establece las relaciones de pertenencia con las diferentes células territoriales y funcionales:
- `comisionEstatalId`: Comisión de la entidad federativa de residencia habitual (Art. 6, VII).
- `comisionesTematicasIds`: Comisiones especializadas a las que pertenece (Mínimo una para afiliados, Art. 6, VIII).
- `gruposOperativosIds`: Grupos de trabajo o áreas de soporte en los que participa (Art. 4).

---

## 2. API / Interfaz Pública (TypeScript)

El archivo físico se ubicará en [usuario.ts](../../src/app/core/models/usuario.ts):

```typescript
export type Nacionalidad = 'mexicana_nacimiento' | 'mexicana_naturalizado' | 'extranjera';

export type TipoMembresia = 'invitado' | 'simpatizante' | 'afiliado';

export interface DocumentosBasicosLectura {
  reglamento: boolean;
  manifiesto: boolean;
  rutaCritica: boolean;
}

export interface UsuarioPerfil {
  // Propietario (Owner)
  id: string;
  nombreCompleto: string;
  correo: string;
  edad: number;
  nacionalidad: Nacionalidad;

  // Validación Reglamento (Art. 5 y 6)
  avisoPrivacidadAceptado: boolean;
  ineValida: boolean;
  padronGeneralRegistrado: boolean;
  padronAfiliadosRegistrado: boolean;
  documentosLeidos: DocumentosBasicosLectura;
  talleresCursados: string[]; // Claves de talleres (ej: ['CONFU-001'])

  // Organización y Pertenencia
  comisionEstatalId?: string; // Clave de 2 dígitos del estado (ej: '09' para CDMX)
  comisionesTematicasIds: string[]; // Claves de comisiones (ej: ['CONFUD', 'CONFUE'])
  gruposOperativosIds: string[]; // Claves de comisiones de soporte o transversales

  // Gobernanza y Permisos
  tipoMembresia: TipoMembresia;
  rolesEjecutivos: string[]; // Cargos de titularidad asignados
}
```

---

## 3. Lógica de Negocio y Reglas de Validación

El perfil implementará funciones puras para calcular dinámicamente si un simpatizante cumple con los requisitos del **Artículo 6** para calificar como afiliado:

```typescript
/**
 * Evalúa si el perfil del usuario cumple con todas las condiciones del Reglamento Nacional
 * para ser considerado un Afiliado completo con derecho a voz y voto.
 */
export function cumpleRequisitosAfiliacion(perfil: UsuarioPerfil): boolean {
  return (
    perfil.edad >= 18 &&
    perfil.nacionalidad === 'mexicana_nacimiento' &&
    perfil.ineValida &&
    perfil.avisoPrivacidadAceptado &&
    perfil.padronGeneralRegistrado &&
    perfil.padronAfiliadosRegistrado &&
    perfil.documentosLeidos.reglamento &&
    perfil.documentosLeidos.manifiesto &&
    perfil.documentosLeidos.rutaCritica &&
    perfil.talleresCursados.includes('CONFU-BASIC') && // Taller formativo básico de la CONFU
    !!perfil.comisionEstatalId && // Debe residir y estar asignado a un estado
    perfil.comisionesTematicasIds.length >= 1 // Mínimo una comisión temática
  );
}
```

---

## Zettelkasten

| Campo | Valor |
|-------|-------|
| ID | `model-003` |
| Autor | @Antigravity |
| Creado | 2026-06-13 |
| Tags | angular, model, interface, usuario, miembro, gobernanza, reglamento |

### Enlaces salientes
- [[model-001]] → Usa referencias a Estados/Entidades para validar `comisionEstatalId`
