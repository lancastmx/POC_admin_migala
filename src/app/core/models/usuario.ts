/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  model-008
 * title:  USUARIO — Perfil de miembro y roles organizacionales
 * type:   model
 * tags:   [angular, model, user, profile, roles, membership]
 * author: lancast
 * created: 2026-06-10
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 *
 * Alineado con los Artículos 4, 5 y 6 del Reglamento Nacional.
 */

/** Nacionalidades reconocidas reglamentariamente */
export type Nacionalidad = 'mexicana_nacimiento' | 'mexicana_naturalizado' | 'extranjera';

/** Tipos de membresía según derechos en la organización (Artículo 4) */
export type TipoMembresia = 'invitado' | 'simpatizante' | 'afiliado';

/** Estado de lectura de la trilogía de documentos básicos (Artículo 6, I) */
export interface DocumentosBasicosLectura {
  reglamento: boolean;
  manifiesto: boolean;
  rutaCritica: boolean;
}

/** Estructura principal del Perfil de Usuario */
export interface UsuarioPerfil {
  // ─── Propietario (Owner) ────────────────────
  /** Identificador único del miembro */
  id: string;
  /** Nombre completo de pila y apellidos */
  nombreCompleto: string;
  /** Correo electrónico verificado */
  correo: string;
  /** Edad en años cumplidos */
  edad: number;
  /** Nacionalidad declarada */
  nacionalidad: Nacionalidad;

  // ─── Validación Reglamento (Art. 5 y 6) ─────
  /** Aceptación del aviso de privacidad (Art. 5, IV) */
  avisoPrivacidadAceptado: boolean;
  /** Identificación oficial INE válida y registrada (Art. 6, V) */
  ineValida: boolean;
  /** Registro formal en el Padrón General (Art. 5, III) */
  padronGeneralRegistrado: boolean;
  /** Registro formal en el Padrón de Afiliados (Art. 6, VI) */
  padronAfiliadosRegistrado: boolean;
  /** Verificación de lectura de documentos básicos (Art. 6, I) */
  documentosLeidos: DocumentosBasicosLectura;
  /** Códigos de talleres formativos completados en la CONFU (Art. 6, II) */
  talleresCursados: string[];

  // ─── Organización (Scope) ───────────────────
  /** ID de la Comisión Estatal de residencia (Art. 6, VII) */
  comisionEstatalId?: string;
  /** IDs de las Comisiones Temáticas en las que participa (Art. 6, VIII) */
  comisionesTematicasIds: string[];
  /** IDs de los grupos operativos o áreas de soporte en los que participa */
  gruposOperativosIds: string[];

  // ─── Gobernanza y Titularidades ─────────────
  /** Tipo de membresía calculada o ratificada (Art. 4) */
  tipoMembresia: TipoMembresia;
  /** Roles ejecutivos o titularidades de cargos delegados (Art. 3, VIII) */
  rolesEjecutivos: string[];
}

/**
 * Evalúa dinámicamente si un perfil de usuario cumple con todas las condiciones
 * del Reglamento Nacional (Artículos 5 y 6) para ser considerado como un Afiliado completo.
 *
 * @param perfil El perfil de usuario a evaluar
 * @returns true si cumple todos los requisitos de afiliación, false en caso contrario
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
    !!perfil.comisionEstatalId && // Debe residir y estar asignado a una Comisión Estatal
    perfil.comisionesTematicasIds.length >= 1 // Mínimo participar en una Comisión Temática
  );
}
