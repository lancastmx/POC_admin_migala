/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  ui-003
 * title:  FOOTER — Pie de página institucional
 * type:   component
 * tags:   [angular, layout, footer, social-networks]
 * author: lancast
 * created: 2026-06-10
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 */
import { Component } from '@angular/core';
import { SOCIAL_NETWORKS } from '../../core/data/social-networks.data';

@Component({
  selector: 'migala-footer',
  templateUrl: './footer.html'
})
export class Footer {
  protected readonly socialNetworks = SOCIAL_NETWORKS;
}
