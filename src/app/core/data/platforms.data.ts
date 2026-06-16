/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  data-012
 * title:  PLATAFORMAS — Catálogo único de plataformas sociales
 * type:   data
 * tags:   [angular, data, platforms, catalog, social-networks]
 * author: lancast
 * created: 2026-06-15
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 *
 * Catálogo único de plataformas sociales. Cada plataforma se define
 * UNA SOLA VEZ con su nombre, emoji y dominio. Tanto las redes
 * nacionales (SOCIAL_NETWORKS) como las de cada comisión/órgano
 * (REDES_POR_COMISION) referencian este catálogo por clave, evitando
 * repetición de metadata.
 *
 * Cómo agregar una nueva plataforma:
 *   1. Agregar entrada aquí con nombre, icono, domain
 *   2. Agregar URL nacional en social-networks.data.ts
 *   3. Agregar URLs por comisión en redes.data.ts
 *   El resolver se encarga del resto.
 */

/**
 * Metadata de una plataforma social.
 */
export interface PlatformDef {
  /** Nombre legible (YouTube, Instagram, Telegram, etc.) */
  nombre: string;
  /** Emoji para UI de comisiones (fallback visual) */
  icono: string;
  /** Ruta al SVG oficial de la plataforma */
  svg: string;
  /** Dominio para generar favicon (legacy) */
  domain: string;
}

/**
 * Catálogo de plataformas sociales conocidas.
 * Cada comisión referencia por clave, no repite metadata.
 * Los SVGs oficiales están en public/assets/icons/.
 */
export const PLATAFORMAS = {
  youtube:   { nombre: 'YouTube',   icono: '📺', svg: 'assets/icons/youtube.svg',   domain: 'youtube.com' },
  telegram:  { nombre: 'Telegram',  icono: '✈️', svg: 'assets/icons/telegram.svg',  domain: 't.me' },
  instagram: { nombre: 'Instagram', icono: '📸', svg: 'assets/icons/instagram.svg', domain: 'instagram.com' },
  tiktok:    { nombre: 'TikTok',    icono: '🎵', svg: 'assets/icons/tiktok.svg',    domain: 'tiktok.com' },
  twitter:   { nombre: 'X',         icono: '🐦', svg: 'assets/icons/x.svg',         domain: 'x.com' },
  facebook:  { nombre: 'Facebook',  icono: '👍', svg: 'assets/icons/facebook.svg',  domain: 'facebook.com' },
} as const satisfies Record<string, PlatformDef>;

/** Tipo para las claves del catálogo */
export type PlatformKey = keyof typeof PLATAFORMAS;

/**
 * Genera la URL del favicon de un dominio usando el servicio de Google S2.
 */
export function getFaviconUrl(domain: string, size: number = 64): string {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;
}
