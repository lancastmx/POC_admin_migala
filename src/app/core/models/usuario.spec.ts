/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  test-001
 * title:  USUARIO.SPEC — Tests de afiliación y perfil de usuario
 * type:   test
 * tags:   [angular, test, user, affiliation, vitest]
 * author: lancast
 * created: 2026-06-10
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 */
import { describe, it, expect } from 'vitest';
import { cumpleRequisitosAfiliacion, UsuarioPerfil } from './usuario';

describe('cumpleRequisitosAfiliacion', () => {
  const basePerfilValido: UsuarioPerfil = {
    id: 'user-123',
    nombreCompleto: 'Juan Pérez',
    correo: 'juan.perez@proyecto-migala.org',
    edad: 25,
    nacionalidad: 'mexicana_nacimiento',
    avisoPrivacidadAceptado: true,
    ineValida: true,
    padronGeneralRegistrado: true,
    padronAfiliadosRegistrado: true,
    documentosLeidos: {
      reglamento: true,
      manifiesto: true,
      rutaCritica: true,
    },
    talleresCursados: ['CONFU-BASIC', 'OTRO-TALLER'],
    comisionEstatalId: '09', // CDMX
    comisionesTematicasIds: ['TEMA-EDUCACION'],
    gruposOperativosIds: [],
    tipoMembresia: 'simpatizante',
    rolesEjecutivos: [],
  };

  it('debe retornar true si cumple con todos los requisitos del Artículo 6', () => {
    expect(cumpleRequisitosAfiliacion(basePerfilValido)).toBe(true);
  });

  it('debe retornar false si es menor de 18 años (Artículo 6, III)', () => {
    const perfilMenor: UsuarioPerfil = {
      ...basePerfilValido,
      edad: 17,
    };
    expect(cumpleRequisitosAfiliacion(perfilMenor)).toBe(false);
  });

  it('debe retornar false si la nacionalidad no es mexicana de nacimiento (Artículo 6, IV)', () => {
    const perfilExtranjero: UsuarioPerfil = {
      ...basePerfilValido,
      nacionalidad: 'mexicana_naturalizado',
    };
    expect(cumpleRequisitosAfiliacion(perfilExtranjero)).toBe(false);
  });

  it('debe retornar false si no tiene INE válida (Artículo 6, V)', () => {
    const perfilSinIne: UsuarioPerfil = {
      ...basePerfilValido,
      ineValida: false,
    };
    expect(cumpleRequisitosAfiliacion(perfilSinIne)).toBe(false);
  });

  it('debe retornar false si no ha leído alguno de los documentos básicos (Artículo 6, I)', () => {
    const perfilSinLecturas: UsuarioPerfil = {
      ...basePerfilValido,
      documentosLeidos: {
        reglamento: true,
        manifiesto: false, // No leído
        rutaCritica: true,
      },
    };
    expect(cumpleRequisitosAfiliacion(perfilSinLecturas)).toBe(false);
  });

  it('debe retornar false si no ha cursado el taller básico de la CONFU (Artículo 6, II)', () => {
    const perfilSinTalleres: UsuarioPerfil = {
      ...basePerfilValido,
      talleresCursados: [],
    };
    expect(cumpleRequisitosAfiliacion(perfilSinTalleres)).toBe(false);
  });

  it('debe retornar false si no está asignado a una Comisión Estatal (Artículo 6, VII)', () => {
    const perfilSinEstado: UsuarioPerfil = {
      ...basePerfilValido,
      comisionEstatalId: undefined,
    };
    expect(cumpleRequisitosAfiliacion(perfilSinEstado)).toBe(false);
  });

  it('debe retornar false si no participa en al menos una Comisión Temática (Artículo 6, VIII)', () => {
    const perfilSinTematica: UsuarioPerfil = {
      ...basePerfilValido,
      comisionesTematicasIds: [],
    };
    expect(cumpleRequisitosAfiliacion(perfilSinTematica)).toBe(false);
  });
});
