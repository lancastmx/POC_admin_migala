/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  cfg-005
 * title:  ESTRUCTURA_CONSTANTS — Validación de ejes estructurales
 * type:   config
 * tags:   [angular, config, estructura, validation, eje]
 * author: lancast
 * created: 2026-06-15
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 */

import type { EjeEstructural } from '../models/organizacion';

/** Clase CSS para badge de eje en la vista de organigrama */
export const EJE_ESTRUCTURA_CLASSES: Partial<Record<EjeEstructural, string>> = {
  operativo:   'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  territorial: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  ideologico:  'bg-purple-500/10 text-purple-400 border-purple-500/20',
  transversal: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
};

/** Clase CSS por defecto para ejes no mapeados */
export const EJE_ESTRUCTURA_DEFAULT_CLASS = 'bg-rose-500/10 text-rose-400 border-rose-500/20';

/** Valores válidos de EjeEstructural + 'todos' para filtros */
export const VALID_EJES_ESTRUCTURALES: (EjeEstructural | 'todos')[] = [
  'operativo',
  'territorial',
  'ideologico',
  'transversal',
  'todos'
];

// ═══════════════════════════════════════════════
//  MAPA: SEGMENTO XML → DATOS VISUALES
// ═══════════════════════════════════════════════

/** Icono, título de tooltip, y si es link para cada tipo de segmento XML */
export const SEGMENT_TYPE_META: Record<string, { icon: string; title: string; isLink: boolean; linkFn: string }> = {
  text:       { icon: '',      title: '',                    isLink: false, linkFn: '' },
  rol:        { icon: '👥',   title: 'Rol regulado en Reglamento', isLink: false, linkFn: '' },
  documento:  { icon: '📄',   title: 'Documento básico de Migala',  isLink: false, linkFn: '' },
  requisito:  { icon: '🔑',   title: 'Requisito formal',            isLink: false, linkFn: '' },
  organo:     { icon: '🏛️',  title: 'Órgano de la estructura',     isLink: true,  linkFn: 'selectOrgan' },
};

/** Clases CSS contextuales para cada tipo de segmento según la variante visual */
export const SEGMENT_TYPE_CLASSES = {
  /** Variante completa — para Descripción e Incumbencias */
  full: {
    rol:       'inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium bg-purple-950/40 text-purple-300 border border-purple-800/40 mx-0.5',
    documento: 'inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium bg-emerald-950/40 text-emerald-300 border border-emerald-800/40 mx-0.5',
    requisito: 'inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium bg-amber-950/40 text-amber-300 border border-amber-800/40 mx-0.5',
    organo:    '',
  },
  /** Variante compacta — para TL;DR y Pasos */
  compact: {
    rol:       'px-2 py-0.5 rounded text-xs font-semibold bg-purple-900/30 text-purple-300 border border-purple-800/20 mx-0.5',
    documento: 'px-2 py-0.5 rounded text-xs font-semibold bg-emerald-900/30 text-emerald-300 border border-emerald-800/20 mx-0.5',
    requisito: 'px-2 py-0.5 rounded text-xs font-semibold bg-amber-900/30 text-amber-300 border border-amber-800/20 mx-0.5',
    organo:    '',
  },
  /** Variante mini — para Requisitos de entrada */
  mini: {
    rol:       'px-1.5 py-0.2 rounded text-[10px] bg-purple-900/30 text-purple-300 border border-purple-800/20 mx-0.5',
    documento: 'px-1.5 py-0.2 rounded text-[10px] bg-emerald-900/30 text-emerald-300 border border-emerald-800/20 mx-0.5',
    requisito: 'px-1.5 py-0.2 rounded text-[10px] bg-amber-900/30 text-amber-300 border border-amber-800/20 mx-0.5',
    organo:    '',
  },
} as const;
