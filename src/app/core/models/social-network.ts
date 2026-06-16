/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  model-007
 * title:  SOCIAL_NETWORK — Interfaces para redes sociales y contacto
 * type:   model
 * tags:   [angular, model, social-network, contact, redes]
 * author: lancast
 * created: 2026-06-15
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 */

/**
 * Red social oficial nacional (con dominio y favicon).
 * Usada en footer y sección de "Redes Sociales Nacionales Oficiales".
 */
export interface SocialNetwork {
  name: string;
  url: string;
  domain: string;
  iconUrl: string;
}

/**
 * Categoría de enlace para una comisión/órgano.
 * - social:    Red social (YouTube, Twitter, Instagram, TikTok, Facebook)
 * - contacto:  Canal de contacto directo (Telegram, WhatsApp, Email)
 * - canal:     Plataforma o sitio web (Sitio oficial, Portal, Drive)
 */
export type TipoRed = 'social' | 'contacto' | 'canal';

/**
 * Red social o canal de contacto de una comisión/órgano específico.
 */
export interface RedComision {
  /** Categoría del enlace */
  tipo: TipoRed;
  /** Nombre legible (YouTube, Telegram, WhatsApp, etc.) */
  nombre: string;
  /** URL completa */
  url: string;
  /** Icono emoji para mostrar */
  icono: string;
  /** Descripción opcional (ej: "Canal de anuncios oficiales") */
  descripcion?: string;
}
