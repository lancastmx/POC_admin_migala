/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  cfg-006
 * title:  ESTADOS_PORTALES_CONSTANTS — Mapeo de estados a nivel/icono de portal
 * type:   config
 * tags:   [angular, config, archive, estados, portales, nivel]
 * author: lancast
 * created: 2026-06-15
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 *
 * Mapeo de IDs de estado a nivel de archivo e ícono personalizado
 * para los portales estatales. Los estados no listados usan los
 * valores por defecto: 'Sin Archivo' y '📍'.
 */

export interface EstadoPortalConfig {
  nivel: 'Sin Archivo' | 'Mínimo' | 'Básico' | 'Avanzado' | 'Consolidado';
  logoIcon: string;
}

/**
 * Mapa de IDs de estado → configuración de portal.
 * Solo incluye estados con nivel personalizado (distinto de 'Sin Archivo').
 */
export const ESTADO_PORTAL_MAP: Record<string, EstadoPortalConfig> = {
  '09': { nivel: 'Básico',   logoIcon: '🏛️' },  // CDMX
  '14': { nivel: 'Mínimo',   logoIcon: '🌋' },  // Jalisco
  '19': { nivel: 'Básico',   logoIcon: '⛰️' },  // Nuevo León
  '15': { nivel: 'Mínimo',   logoIcon: '🌲' },  // México
  '21': { nivel: 'Mínimo',   logoIcon: '⛪' },  // Puebla
  '30': { nivel: 'Mínimo',   logoIcon: '🌴' },  // Veracruz
};

/** Valores por defecto para estados sin configuración personalizada */
export const ESTADO_PORTAL_DEFAULT: EstadoPortalConfig = {
  nivel: 'Sin Archivo',
  logoIcon: '📍',
};
