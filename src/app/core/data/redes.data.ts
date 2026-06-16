/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  data-010
 * title:  REDES_DATA — Redes sociales y contacto por comisión/órgano
 * type:   data
 * tags:   [angular, data, social-networks, contact, commissions]
 * author: lancast
 * created: 2026-06-15
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 *
 * Cada comisión/órgano puede tener sus propias redes sociales y canales
 * de contacto. Los datos raw solo almacenan { plataforma, url, tipo? }.
 * El nombre, emoji y dominio se resuelven desde PLATAFORMAS.
 *
 * Escalabilidad: si 50 comisiones usan Instagram, solo escribes:
 *   { plataforma: 'instagram', url: '...', tipo: 'social' }
 * sin repetir nombre, icono ni domain.
 *
 * Cómo agregar una nueva:
 *   1. Buscar el ID de la comisión en organizaciones.data.ts
 *   2. Agregar una entrada raw aquí con plataforma + URL
 *   3. Si la plataforma es nueva, agregarla en platforms.data.ts
 *   4. El template lo renderiza automáticamente
 */

import type { TipoRed, RedComision, SocialNetwork } from '../models/social-network';
import { PLATAFORMAS, type PlatformKey } from './platforms.data';
import { ORGANIZACIONES_DATA } from './organizaciones.data';
import { TELEGRAM_LINKS } from './telegram-links';
import { SOCIAL_NETWORKS } from './social-networks.data';

// ─── Tipos internos ─────────────────────────────────────────────

interface RedComisionEntry {
  plataforma: PlatformKey;
  url: string;
  tipo?: TipoRed;
  descripcion?: string;
}

// ─── Datos raw (solo plataforma + URL, sin repetir metadata) ───

const REDES_POR_COMISION_RAW: Record<string, RedComisionEntry[]> = {
  // ─── Comisión de lo Político-Electoral ──────────
  'area-politico-electoral': [
    { plataforma: 'youtube', url: 'https://www.youtube.com/@POLProyectoMigala', tipo: 'social' },
  ],
};

// ─── Resolver: raw → RedComision (inyecta nombre, icono desde catálogo) ───

function entryToRedComision(e: RedComisionEntry): RedComision {
  const p = PLATAFORMAS[e.plataforma];
  return {
    tipo: e.tipo ?? 'contacto',
    nombre: p.nombre,
    url: e.url,
  icono: p.svg,
  descripcion: e.descripcion,
  };
}

// ─── Funciones públicas ─────────────────────────────────────────

/**
 * Obtiene las redes sociales de una comisión/órgano por su ID.
 * Retorna array vacío si no tiene redes configuradas.
 */
export function getRedesComision(orgId: string): RedComision[] {
  return (REDES_POR_COMISION_RAW[orgId] ?? []).map(entryToRedComision);
}

/**
 * Convierte una SocialNetwork nacional a RedComision para vista por comisión.
 * Usa el catálogo PLATAFORMAS para resolver el emoji por dominio.
 */
function nacionalToRedComision(net: SocialNetwork): RedComision {
  const p = Object.values(PLATAFORMAS).find(pf => pf.domain === net.domain);
  return {
    tipo: net.name.toLowerCase() === 'telegram' ? 'contacto' : 'social',
    nombre: net.name,
    url: net.url,
    icono: p?.svg ?? 'assets/icons/telegram.svg',
  };
}

/**
 * Obtiene las redes sociales de una comisión/órgano, incluyendo
 * el canal de Telegram si existe en TELEGRAM_LINKS y no está ya
 * en la lista de redes. Refleja la presencia real de contacto.
 *
 * Para la Coordinación General (org-coordinacion-nacional) devuelve
 * las redes nacionales desde SOCIAL_NETWORKS, evitando duplicación.
 */
export function getRedesComisionCompleto(orgId: string): RedComision[] {
  // Coordinación General = redes nacionales (evita duplicar SOCIAL_NETWORKS)
  if (orgId === 'org-coordinacion-nacional') {
    return SOCIAL_NETWORKS.map(nacionalToRedComision);
  }

  const redes = getRedesComision(orgId);
  const telegramUrl = TELEGRAM_LINKS[orgId];

  if (telegramUrl && !redes.some(r => r.nombre === 'Telegram')) {
    return [
      ...redes,
      {
        tipo: 'contacto',
        nombre: PLATAFORMAS.telegram.nombre,
        url: telegramUrl,
        icono: PLATAFORMAS.telegram.svg,
        descripcion: 'Canal oficial',
      },
    ];
  }

  return redes;
}

// ─── Auditoría de completitud ─────────────────────────────────

export interface ReporteRedes {
  totalOrganos: number;
  conRedes: number;
  sinRedes: number;
  organosConRedes: { id: string; nombre: string; cantidad: number }[];
  organosSinRedes: { id: string; nombre: string }[];
}

/**
 * Genera un reporte de qué órganos tienen redes sociales asignadas y cuáles no.
 * Considera también los canales de Telegram como presencia de contacto.
 * Útil para identificar rápidamente datos faltantes.
 */
export function auditRedes(): ReporteRedes {
  const organos = ORGANIZACIONES_DATA.filter(o => !o.id.startsWith('eje-') && o.id !== 'horizontalidad');

  const conRedes = organos
    .filter(o => getRedesComisionCompleto(o.id).length > 0)
    .map(o => ({ id: o.id, nombre: o.nombre, cantidad: getRedesComisionCompleto(o.id).length }));

  const sinRedes = organos
    .filter(o => getRedesComisionCompleto(o.id).length === 0)
    .map(o => ({ id: o.id, nombre: o.nombre }));

  return {
    totalOrganos: organos.length,
    conRedes: conRedes.length,
    sinRedes: sinRedes.length,
    organosConRedes: conRedes,
    organosSinRedes: sinRedes,
  };
}

/**
 * Retorna los IDs de órganos que NO tienen redes sociales asignadas.
 */
export function getComisionesSinRedes(): { id: string; nombre: string }[] {
  return auditRedes().organosSinRedes;
}

/**
 * Retorna los IDs de órganos que SÍ tienen redes sociales asignadas.
 */
export function getComisionesConRedes(): { id: string; nombre: string; cantidad: number }[] {
  return auditRedes().organosConRedes;
}
