/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  page-001
 * title:  HOME — Página de inicio / landing
 * type:   page
 * tags:   [angular, page, home, landing, banner]
 * author: lancast
 * created: 2026-06-10
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 */
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageBanner } from '../../shared/page-banner/page-banner';
import { SeoService } from '../../core/services/seo.service';
import { SEO_DATA } from '../../core/data/seo.data';

@Component({
  selector: 'migala-home',
  imports: [RouterLink, PageBanner],
  templateUrl: './home.html'
})
export class Home {
  constructor() {
    const seo = SEO_DATA['home'];
    inject(SeoService).generateTags({
      title: seo.title,
      description: seo.description,
      url: seo.url
    });
  }
}
