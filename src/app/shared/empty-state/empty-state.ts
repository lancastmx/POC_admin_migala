/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  ui-007
 * title:  EMPTY_STATE — Estado vacío para listas y tablas
 * type:   component
 * tags:   [angular, component, empty-state, placeholder]
 * author: lancast
 * created: 2026-06-10
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 */
import { Component, input } from '@angular/core';

@Component({
  selector: 'migala-empty-state',
  templateUrl: './empty-state.html'
})
export class EmptyState {
  readonly icon = input<string>('');
  readonly title = input<string>('Sin contenido');
  readonly message = input<string>('No hay información disponible en este momento.');
}
