/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  data-004
 * title:  TOP_MENU — Elementos del menú de navegación principal
 * type:   data
 * tags:   [angular, data, navigation, menu]
 * author: lancast
 * created: 2026-06-10
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 */
import { MenuItem } from './menu-item';

export const TOP_MENU: MenuItem[] = [
  { label: 'Inicio', route: '/', exact: true },
  { label: 'Reglamentos', route: '/reglamento' },
  { label: 'Manifiesto', route: '/manifiesto' },
  { label: 'Ruta Crítica', route: '/ruta-critica', lines: ['Ruta', 'Crítica'] },
  { label: 'Transparencia', route: '/transparencia' },
  { label: 'Estructura', route: '/estructura' },
  { label: 'Archivo', route: '/archivo' },
  { label: 'Propuesta', route: '/propuesta' },
  { label: 'Aviso de privacidad', route: '/privacidad', lines: ['Aviso de', 'privacidad'] },
  { label: 'Iniciar Sesión', route: '/auth', lines: ['Iniciar', 'Sesión'] },
];
