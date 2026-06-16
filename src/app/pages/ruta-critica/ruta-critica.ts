/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  page-ruta-001
 * title:  RUTA_CRITICA — Página de Ruta Crítica Nacional
 * type:   page
 * tags:   [angular, page, ruta-critica, plan-trabajo, roadmap]
 * author: lancast
 * created: 2026-06-16
 * updated: 2026-06-16
 * ───────────────────────────────────────────────────────────────────
 *
 * Página dedicada para la Ruta Crítica Nacional.
 * Usa el modelo RutaCritica y datos RUTA_CRITICA_DATA existentes
 * (los mismos que usa archivo-ruta-critica dentro del Archivo).
 */
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageBanner } from '../../shared/page-banner/page-banner';
import { SeoService } from '../../core/services/seo.service';
import { SEO_DATA } from '../../core/data/seo.data';
import { RUTA_CRITICA_DATA } from '../../core/data/ruta-critica.data';
import type { RutaCriticaObjetivo } from '../../core/models/ruta-critica';

@Component({
  selector: 'migala-ruta-critica',
  imports: [RouterLink, PageBanner],
  templateUrl: './ruta-critica.html'
})
export class RutaCritica {
  constructor() {
    const seo = SEO_DATA['ruta-critica'];
    if (seo) {
      inject(SeoService).generateTags({
        title: seo.title,
        description: seo.description,
        url: seo.url
      });
    }
  }

  protected readonly data = RUTA_CRITICA_DATA;

  protected getObjetivos(tipo: 'principal' | 'secundario'): RutaCriticaObjetivo[] {
    return this.data.objetivos.filter(o => o.tipo === tipo);
  }
}
