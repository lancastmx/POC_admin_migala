/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  page-003
 * title:  PROPUESTA — Propuesta política de Proyecto Migala
 * type:   page
 * tags:   [angular, page, proposal, political, agenda]
 * author: lancast
 * created: 2026-06-10
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 */
import { Component, signal, computed, inject, ChangeDetectionStrategy } from '@angular/core';
import { PageBanner } from '../../shared/page-banner/page-banner';
import { SeoService } from '../../core/services/seo.service';
import { SEO_DATA } from '../../core/data/seo.data';
import { PROPUESTA_ITEMS, PropuestaItem } from '../../core/data/propuesta.data';

@Component({
  selector: 'migala-propuesta',
  imports: [PageBanner],
  templateUrl: './propuesta.html',
  styleUrl: './propuesta.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Propuesta {
  protected readonly activeTabId = signal<string>('01');
  protected readonly items: PropuestaItem[] = PROPUESTA_ITEMS;
  protected readonly totalItems = computed(() => this.items.length);

  protected readonly activeItem = computed(() => {
    const tabId = this.activeTabId();
    return this.items.find(item => item.id === tabId) || this.items[0];
  });

  constructor() {
    const seo = SEO_DATA['propuesta'];
    inject(SeoService).generateTags({
      title: seo.title,
      description: seo.description,
      url: seo.url
    });
  }

  protected selectTab(id: string): void {
    this.activeTabId.set(id);
  }

  protected isLink(val: string): boolean {
    return val.startsWith('http://') || val.startsWith('https://') || val.startsWith('t.me/');
  }

  protected getLinkUrl(val: string): string {
    if (val.startsWith('t.me/')) {
      return `https://${val}`;
    }
    return val;
  }
}
