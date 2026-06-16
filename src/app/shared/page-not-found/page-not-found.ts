/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  ui-005
 * title:  PAGE_NOT_FOUND — Página de error 404
 * type:   component
 * tags:   [angular, component, error, 404, not-found]
 * author: lancast
 * created: 2026-06-10
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 */
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'migala-page-not-found',
  imports: [RouterLink],
  templateUrl: './page-not-found.html'
})
export class PageNotFound {}
