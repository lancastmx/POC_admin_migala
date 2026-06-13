/** ───────────────────────────────────────────────
 *  Constantes visuales y de dominio para el
 *  sistema de reglamentos trazables.
 *  ─────────────────────────────────────────────── */
import type { EstatusReglamento, TipoRelacion } from '../models/reglamento-trazable';

// ═══════════════════════════════════════════════
//  MAPA DE ESTATUS → LABEL + COLOR + ICONO
// ═══════════════════════════════════════════════

export interface EstatusConfig {
  label: string;
  /** Clases Tailwind para el badge */
  color: string;
  icono: string;
  /** Prioridad para ordenamiento (menor = más urgente) */
  prioridad: number;
}

export const ESTATUS_REGLAMENTO_MAP: Record<EstatusReglamento, EstatusConfig> = {
  inexistente: {
    label: 'Inexistente',
    color: 'bg-neutral-800/60 text-neutral-500 border-neutral-700',
    icono: '⬜',
    prioridad: 9,
  },
  borrador: {
    label: 'Borrador',
    color: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
    icono: '📝',
    prioridad: 7,
  },
  en_revision: {
    label: 'En Revisión',
    color: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    icono: '🔍',
    prioridad: 6,
  },
  pendiente_aprobacion: {
    label: 'Pendiente de Aprobación',
    color: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    icono: '⏳',
    prioridad: 5,
  },
  vigente: {
    label: 'Vigente',
    color: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    icono: '✅',
    prioridad: 1,
  },
  desactualizado: {
    label: 'Desactualizado',
    color: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
    icono: '⚠️',
    prioridad: 3,
  },
  en_reforma: {
    label: 'En Reforma',
    color: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
    icono: '🔧',
    prioridad: 4,
  },
  derogado: {
    label: 'Derogado',
    color: 'bg-red-500/15 text-red-400 border-red-500/30',
    icono: '🗑️',
    prioridad: 8,
  },
  archivado: {
    label: 'Archivado',
    color: 'bg-slate-500/15 text-slate-400 border-slate-500/30',
    icono: '📦',
    prioridad: 10,
  },
};

// ═══════════════════════════════════════════════
//  MAPA DE TIPO RELACIÓN → LABEL + COLOR
// ═══════════════════════════════════════════════

export interface RelacionConfig {
  label: string;
  /** Verbo para mostrar en tooltip */
  verbo: string;
  color: string;
}

export const TIPO_RELACION_MAP: Record<TipoRelacion, RelacionConfig> = {
  deriva_de: {
    label: 'Deriva de',
    verbo: 'deriva de',
    color: 'text-amber-400',
  },
  remite_a: {
    label: 'Remite a',
    verbo: 'véase también',
    color: 'text-cyan-400',
  },
  modifica_a: {
    label: 'Modifica a',
    verbo: 'modifica a',
    color: 'text-purple-400',
  },
  deroga_a: {
    label: 'Deroga a',
    verbo: 'deroga a',
    color: 'text-red-400',
  },
  complementa_a: {
    label: 'Complementa a',
    verbo: 'complementa a',
    color: 'text-emerald-400',
  },
  contradice_a: {
    label: 'Contradice a',
    verbo: 'contradice a',
    color: 'text-rose-400',
  },
  armoniza_con: {
    label: 'Armoniza con',
    verbo: 'se armoniza con',
    color: 'text-blue-400',
  },
  base_legal: {
    label: 'Base legal',
    verbo: 'fundamento:',
    color: 'text-indigo-400',
  },
};

// ═══════════════════════════════════════════════
//  REGIONES DE MÉXICO (compartido con entidades)
// ═══════════════════════════════════════════════

export const REGION_INFO: Record<string, { label: string; color: string; icon: string } | undefined> = {
  noroeste:  { label: 'Noroeste',  color: 'border-blue-500/40 bg-blue-500/5',   icon: '🏔️' },
  noreste:   { label: 'Noreste',   color: 'border-cyan-500/40 bg-cyan-500/5',   icon: '🌵' },
  occidente: { label: 'Occidente', color: 'border-amber-500/40 bg-amber-500/5', icon: '🌋' },
  centro:    { label: 'Centro',    color: 'border-emerald-500/40 bg-emerald-500/5', icon: '🏛️' },
  sur:       { label: 'Sur',       color: 'border-rose-500/40 bg-rose-500/5',   icon: '🌴' },
  sureste:   { label: 'Sureste',   color: 'border-purple-500/40 bg-purple-500/5', icon: '🏝️' },
};

export const REGION_ORDER: string[] = [
  'noroeste', 'noreste', 'occidente', 'centro', 'sur', 'sureste',
];

// ═══════════════════════════════════════════════
//  HELPERS
// ═══════════════════════════════════════════════

/** Genera un UUID v4 simple (para IDs de nodos) */
export function uuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/** Calcula el progreso 0-100 basado en cobertura */
export function calcProgreso(cobertura: {
  tieneIndice: boolean;
  tienePreambulo: boolean;
  tieneArticulado: boolean;
  tieneRegimenTransitorio: boolean;
  tieneFirmas: boolean;
}): number {
  const items = [
    cobertura.tieneIndice,
    cobertura.tienePreambulo,
    cobertura.tieneArticulado,
    cobertura.tieneRegimenTransitorio,
    cobertura.tieneFirmas,
  ];
  const count = items.filter(Boolean).length;
  return Math.round((count / items.length) * 100);
}
