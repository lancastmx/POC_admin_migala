/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  data-013
 * title:  PORTALES.DATA — Portales de transparencia por eje
 * type:   data
 * tags:   [angular, data, portals, transparency, organizacion]
 * author: lancast
 * created: 2026-06-15
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 *
 * Portales de transparencia agrupados por eje (operativo, temático,
 * transversal, territorial). Los telegramUrl se resuelven desde
 * TELEGRAM_LINKS mediante la clave `id`.
 */

import { TELEGRAM_LINKS } from './telegram-links';

export interface PortalInfo {
  id?: string;
  seccion: string;
  acronimo: string;
  logoIcon: string;
  nivel: 'Sin Archivo' | 'Mínimo' | 'Básico' | 'Avanzado' | 'Consolidado';
  telegramUrl?: string;
}

export const PORTALES_OPERATIVOS: PortalInfo[] = [
  { seccion: 'Contraloría', acronimo: 'CON', logoIcon: '⚖️', nivel: 'Sin Archivo', telegramUrl: TELEGRAM_LINKS['area-contraloria'] },
  { seccion: 'Comunicación y Propaganda', acronimo: 'CYP', logoIcon: '📢', nivel: 'Mínimo', telegramUrl: TELEGRAM_LINKS['area-comunicacion'] },
  { seccion: 'Dirección', acronimo: 'DIR', logoIcon: '🧭', nivel: 'Sin Archivo', telegramUrl: TELEGRAM_LINKS['area-direccion'] },
  { seccion: 'Diálogo y Arbitraje', acronimo: 'DYA', logoIcon: '🤝', nivel: 'Sin Archivo', telegramUrl: TELEGRAM_LINKS['area-dialogo'] },
  { seccion: 'Financiera', acronimo: 'FIN', logoIcon: '💳', nivel: 'Sin Archivo', telegramUrl: TELEGRAM_LINKS['area-financiera'] },
  { seccion: 'Formación', acronimo: 'FOR', logoIcon: '⚡', nivel: 'Básico', telegramUrl: TELEGRAM_LINKS['area-formacion'] },
  { seccion: 'Informática', acronimo: 'INF', logoIcon: '💻', nivel: 'Mínimo', telegramUrl: TELEGRAM_LINKS['area-informatica'] },
  { seccion: 'Legal', acronimo: 'LEG', logoIcon: '💼', nivel: 'Sin Archivo', telegramUrl: TELEGRAM_LINKS['area-legal'] },
  { seccion: 'Político Electoral', acronimo: 'POL', logoIcon: '🗳️', nivel: 'Mínimo' },
  { seccion: 'Transparencia', acronimo: 'TRA', logoIcon: '🔎', nivel: 'Mínimo', telegramUrl: TELEGRAM_LINKS['area-transparencia'] }
];

export const PORTALES_TEMATICOS: PortalInfo[] = [
  { seccion: 'Arte y cultura', acronimo: 'AYC', logoIcon: '🎨', nivel: 'Sin Archivo', telegramUrl: TELEGRAM_LINKS['esp-arte-cultura'] },
  { seccion: 'Ciencia y Tecnología', acronimo: 'CYT', logoIcon: '🧬', nivel: 'Sin Archivo', telegramUrl: TELEGRAM_LINKS['esp-ciencia-tecnologia'] },
  { seccion: 'Derechos Humanos', acronimo: 'DHU', logoIcon: '⚔️', nivel: 'Mínimo', telegramUrl: TELEGRAM_LINKS['esp-derechos-humanos'] },
  { seccion: 'Estudios Económicos', acronimo: 'EEC', logoIcon: '💸', nivel: 'Sin Archivo', telegramUrl: TELEGRAM_LINKS['esp-estudios-economicos'] },
  { seccion: 'Geopolítica e Historia', acronimo: 'GEH', logoIcon: '📖', nivel: 'Sin Archivo', telegramUrl: TELEGRAM_LINKS['esp-geopolitica-historia'] },
  { seccion: 'Sustentabilidad', acronimo: 'SUS', logoIcon: '☀️', nivel: 'Básico', telegramUrl: TELEGRAM_LINKS['esp-sustentabilidad'] }
];

export const PORTALES_TRANSVERSALES: PortalInfo[] = [
  { seccion: 'Personas con Funcionalidad Diversa', acronimo: 'DIS', logoIcon: '🪖', nivel: 'Sin Archivo', telegramUrl: TELEGRAM_LINKS['tran-funcionalidad-diversa'] },
  { seccion: 'Diversidad', acronimo: 'DIV', logoIcon: '🏳️‍🌈', nivel: 'Sin Archivo', telegramUrl: TELEGRAM_LINKS['tran-diversidad'] },
  { seccion: 'Masculinidades', acronimo: 'MAS', logoIcon: '🚹', nivel: 'Sin Archivo', telegramUrl: TELEGRAM_LINKS['tran-masculinidades'] },
  { seccion: 'Mujeres', acronimo: 'MUJ', logoIcon: '🚺', nivel: 'Sin Archivo', telegramUrl: TELEGRAM_LINKS['tran-mujeres'] },
  { seccion: 'Paisanos', acronimo: 'PAI', logoIcon: '🌎', nivel: 'Sin Archivo', telegramUrl: TELEGRAM_LINKS['tran-paisanos'] },
  { seccion: 'Pueblos Originarios', acronimo: 'POR', logoIcon: '🛖', nivel: 'Sin Archivo', telegramUrl: TELEGRAM_LINKS['tran-pueblos-originarios'] }
];

export const PORTALES_TERRITORIALES: PortalInfo[] = [
  { seccion: 'Vocería 1° Circunscripción', acronimo: 'VC1', logoIcon: '🟢', nivel: 'Sin Archivo' },
  { seccion: 'Vocería 2° Circunscripción', acronimo: 'VC2', logoIcon: '🟡', nivel: 'Sin Archivo' },
  { seccion: 'Vocería 3° Circunscripción', acronimo: 'VC3', logoIcon: '🟠', nivel: 'Sin Archivo' },
  { seccion: 'Vocería 4° Circunscripción', acronimo: 'VC4', logoIcon: '🔴', nivel: 'Sin Archivo' },
  { seccion: 'Vocería 5° Circunscripción', acronimo: 'VC5', logoIcon: '🟣', nivel: 'Sin Archivo' }
];

/**
 * Mapa de acrónimo de subsección a ID de organización.
 * Usado para filtrar organizaciones por subsección en el archivo.
 */
export const ACRONIMO_ORG_MAP: Record<string, string> = {
  // Operativo
  CON: 'area-contraloria',
  CYP: 'area-comunicacion',
  DIR: 'area-direccion',
  DYA: 'area-dialogo',
  FIN: 'area-financiera',
  FOR: 'area-formacion',
  INF: 'area-informatica',
  LEG: 'area-legal',
  POL: 'area-politico-electoral',
  TRA: 'area-transparencia',
  // Temático
  AYC: 'esp-arte-cultura',
  CYT: 'esp-ciencia-tecnologia',
  DHU: 'esp-derechos-humanos',
  EEC: 'esp-estudios-economicos',
  GEH: 'esp-geopolitica-historia',
  SUS: 'esp-sustentabilidad',
  // Transversal
  DIS: 'tran-funcionalidad-diversa',
  DIV: 'tran-diversidad',
  MAS: 'tran-masculinidades',
  MUJ: 'tran-mujeres',
  PAI: 'tran-paisanos',
  POR: 'tran-pueblos-originarios',
  // Territorial
  VC1: 'circunscripcion-1',
  VC2: 'circunscripcion-2',
  VC3: 'circunscripcion-3',
  VC4: 'circunscripcion-4',
  VC5: 'circunscripcion-5',
};
