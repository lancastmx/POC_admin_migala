/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  data-011
 * title:  SOCIAL_NETWORKS_DATA — Redes sociales nacionales oficiales
 * type:   data
 * tags:   [angular, data, social-networks, official, national]
 * author: lancast
 * created: 2026-06-15
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 *
 * Fuente única de verdad para las redes sociales oficiales a nivel
 * nacional de Proyecto Migala.
 *
 * Escalabilidad: cada entrada solo almacena { plataforma, url }.
 * El nombre, emoji, dominio y favicon se resuelven desde PLATAFORMAS.
 * Para agregar una nueva red nacional:
 *   1. Si la plataforma no existe, agregarla en platforms.data.ts
 *   2. Agregar { plataforma, url } aquí
 */

import type { SocialNetwork } from '../models/social-network';
import { PLATAFORMAS, type PlatformKey } from './platforms.data';

// ─── Datos raw (solo plataforma + URL, sin repetir metadata) ───

interface SocialNetworkEntry {
  plataforma: PlatformKey;
  url: string;
}

const SOCIAL_NETWORKS_RAW: SocialNetworkEntry[] = [
  { plataforma: 'telegram',   url: 'https://t.me/+GPjXgBGPaolhNjhh' },
  { plataforma: 'youtube',    url: 'https://www.youtube.com/@ProyectoMigalaNacional' },
  { plataforma: 'instagram',  url: 'https://www.instagram.com/proyectomigalanacional' },
  { plataforma: 'tiktok',     url: 'https://www.tiktok.com/@proyectomigala' },
  { plataforma: 'twitter',    url: 'https://x.com/proyectomigala_' },
  { plataforma: 'facebook',   url: 'https://www.facebook.com/groups/proyectomigala/permalink/552116866977281' },
];

// ─── Resolver: raw → SocialNetwork (inyecta name, domain, iconUrl) ───

function entryToSocialNetwork(e: SocialNetworkEntry): SocialNetwork {
  const p = PLATAFORMAS[e.plataforma];
  return {
    name: p.nombre,
    url: e.url,
    domain: p.domain,
    iconUrl: p.svg,
  };
}

// ─── Constante pública (los templates no cambian) ───

export const SOCIAL_NETWORKS: SocialNetwork[] = SOCIAL_NETWORKS_RAW.map(entryToSocialNetwork);

/**
 * Resuelve una entrada raw de plataforma + URL a SocialNetwork completo.
 * Útil para construir SOCIAL_NETWORKS dinámicamente desde otras fuentes.
 */
export function resolverSocialNetwork(plataforma: PlatformKey, url: string): SocialNetwork {
  return entryToSocialNetwork({ plataforma, url });
}
