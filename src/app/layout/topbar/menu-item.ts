/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  model-009
 * title:  MENU_ITEM — Interfaz para elementos del menú de navegación
 * type:   model
 * tags:   [angular, model, navigation, menu]
 * author: lancast
 * created: 2026-06-10
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 */
export interface MenuItem {
  label: string;
  route: string;
  exact?: boolean;
  lines?: string[];
}
