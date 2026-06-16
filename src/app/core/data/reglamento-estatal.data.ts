/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  data-012
 * title:  REGLAMENTO_ESTATAL_DATA — Catálogo de reglamentos estatales
 * type:   data
 * tags:   [angular, data, regulations, states, catalog]
 * author: lancast
 * created: 2026-06-10
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 *
 * CATÁLOGO DE REGLAMENTOS ESTATALES
 * 32 entidades federativas + sus estatus actuales.
 *
 * Cada reglamento tiene el estatus real del proyecto
 *  (la mayoría 'inexistente' porque aún no se redactan).
 *
 *  Cuando un estado complete su reglamento, se cambia
 *  el estatus y se enlaza a su archivo de datos.
 *  ─────────────────────────────────────────────── */
import type { ReglamentoTrazable } from '../models/reglamento-trazable';
import type { Estado } from '../models/entidad';
import { MEXICO } from './entidades.data';

/** Genera un UUID determinístico a partir de un seed */
function uuidFromSeed(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const chr = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  const h = Math.abs(hash).toString(16).padStart(8, '0');
  return `${h.slice(0, 8)}-${h.slice(4, 8)}-4${h.slice(0, 3)}-a${h.slice(2, 5)}-${h.slice(0, 12).padEnd(12, '0')}`;
}

/** Genera un stub de reglamento para un estado */
function createStub(estado: Estado): ReglamentoTrazable {
  const seed = `reglamento-estatal-${estado.id}-${estado.nombre}`;
  const hoy = new Date().toISOString().split('T')[0];

  return {
    id: uuidFromSeed(seed),
    ambito: 'estatal',
    entidadId: estado.id,
    nombre: `Reglamento de la Comisión Estatal de ${estado.nombre}`,
    metadata: {
      estatus: 'inexistente',
      version: '0.0.0',
      creado: hoy,
      ultimaActualizacion: hoy,
      autor: '—',
      revisores: [],
      aprobadoPor: '—',
      zkId: `reglamento-estatal-${estado.id}`,
      tags: ['reglamento', 'estatal', estado.nombre.toLowerCase(), estado.abreviatura.toLowerCase()],
      conexiones: ['a1b2c3d4-e5f6-7890-abcd-ef1234567890'], // enlace al nacional
    },
    cobertura: {
      tieneIndice: false,
      tienePreambulo: false,
      tieneArticulado: false,
      tieneRegimenTransitorio: false,
      tieneFirmas: false,
      progreso: 0,
    },
  };
}

// ═══════════════════════════════════════════════
//  MAPA DE EXCEPCIONES: estados con avance real
//  ═══════════════════════════════════════════════
//
//  A medida que una comisión estatal avance su
//  reglamento, se registra aquí su estatus real.
//
//  Formato: { [entidadId]: Partial<ReglamentoTrazable> }
//
const EXCEPCIONES: Record<string, Partial<ReglamentoTrazable>> = {
  // EJEMPLO (cuando existan):
  // '09': {  // Ciudad de México
  //   metadata: {
  //     estatus: 'borrador',
  //     version: '0.1.0',
  //     ...sobrescribe
  //   }
  // }
};

// ═══════════════════════════════════════════════
//  CATÁLOGO EXPORTADO
// ═══════════════════════════════════════════════

export function crearCatalogoReglamentosEstatales(): ReglamentoTrazable[] {
  return MEXICO.estados.map(estado => {
    const stub = createStub(estado);
    const excepcion = EXCEPCIONES[estado.id];
    if (excepcion) {
      // Merge profundo simple
      return {
        ...stub,
        ...excepcion,
        metadata: { ...stub.metadata, ...excepcion.metadata },
        cobertura: { ...stub.cobertura, ...excepcion.cobertura },
      };
    }
    return stub;
  });
}

/** Singleton del catálogo */
export const REGLAMENTOS_ESTATALES: ReglamentoTrazable[] = crearCatalogoReglamentosEstatales();

// ═══════════════════════════════════════════════
//  HELPERS DE CONSULTA
// ═══════════════════════════════════════════════

/** Obtiene el reglamento de un estado por su clave INEGI */
export function getReglamentoEstatal(entidadId: string): ReglamentoTrazable | undefined {
  return REGLAMENTOS_ESTATALES.find(r => r.entidadId === entidadId);
}

/** Obtiene el reglamento de un estado por su nombre */
export function getReglamentoEstatalByNombre(nombre: string): ReglamentoTrazable | undefined {
  return REGLAMENTOS_ESTATALES.find(
    r => r.nombre.toLowerCase().includes(nombre.toLowerCase())
  );
}

// ═══════════════════════════════════════════════
//  CATÁLOGO GLOBAL (nacional + estatales)
// ═══════════════════════════════════════════════

export function getCatalogoGlobal() {
  const estatales = REGLAMENTOS_ESTATALES;
  const porEstatus: Record<string, number> = {};
  let progresoTotal = 0;

  for (const e of estatales) {
    const s = e.metadata.estatus;
    porEstatus[s] = (porEstatus[s] || 0) + 1;
    progresoTotal += e.cobertura.progreso;
  }

  return {
    nacional: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
      nombre: 'Reglamento Nacional Proyecto Migala',
      estatus: 'vigente' as const,
      progreso: 80,
    },
    estatales,
    metrics: {
      totalReglamentos: 1 + estatales.length,
      porEstatus,
      progresoGeneral: Math.round(progresoTotal / estatales.length),
      ultimaActualizacionGeneral: new Date().toISOString().split('T')[0],
      coberturaGeneral: Math.round((estatales.filter(e => e.metadata.estatus !== 'inexistente').length / estatales.length) * 100),
    },
  };
}
