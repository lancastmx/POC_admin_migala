/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  page-007
 * title:  TRANSPARENCIA — Portal de transparencia y rendición de cuentas
 * type:   page
 * tags:   [angular, page, transparency, accountability, contact, social]
 * author: lancast
 * created: 2026-06-10
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 */
import { Component, signal, computed, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PageBanner } from '../../shared/page-banner/page-banner';
import { SOCIAL_NETWORKS } from '../../core/data/social-networks.data';
import { SeoService } from '../../core/services/seo.service';
import { SEO_DATA } from '../../core/data/seo.data';
import { MEXICO } from '../../core/data/entidades.data';
import type { Estado } from '../../core/models/entidad';
import { REGION_INFO, REGION_ORDER } from '../../core/constants/reglamento.constants';
import { TRANSPARENCIA_SECTIONS, TransparenciaSection } from '../../core/data/transparencia.data';

@Component({
  selector: 'migala-transparencia',
  imports: [PageBanner, RouterLink, FormsModule],
  templateUrl: './transparencia.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Transparencia {
  // Signal to track the currently open section ID in the accordion
  protected readonly openSectionId = signal<string | null>(null);

  // Expose core social networks to template
  protected readonly socialNetworks = SOCIAL_NETWORKS;

  // ─── Datos de entidades federativas ────────────
  readonly estados = MEXICO.estados;
  readonly totalMunicipios = computed(() =>
    this.estados.reduce((sum, e) => sum + e.municipios.length, 0)
  );

  /** Regiones de México con metadata visual */
  readonly regionInfo = REGION_INFO;

  /** Estados agrupados por región */
  readonly estadosPorRegion = computed(() => {
    const map = new Map<string, Estado[]>();
    for (const e of this.estados) {
      const region = e.region;
      if (!map.has(region)) map.set(region, []);
      map.get(region)!.push(e);
    }
    return map;
  });

  /** Buscador de estados */
  searchEstado = signal('');
  readonly filteredEstados = computed(() => {
    const q = this.searchEstado().toLowerCase().trim();
    if (!q) return this.estados;
    return this.estados.filter(e =>
      e.nombre.toLowerCase().includes(q) ||
      e.capital.toLowerCase().includes(q) ||
      e.abreviatura.toLowerCase().includes(q)
    );
  });

  /** Orden de regiones */
  readonly regionOrder = REGION_ORDER;

  /** Secciones del portal de transparencia */
  protected readonly sections: TransparenciaSection[] = TRANSPARENCIA_SECTIONS;

  constructor() {
    const seo = SEO_DATA['transparencia'];
    inject(SeoService).generateTags({
      title: seo.title,
      description: seo.description,
      url: seo.url
    });
  }

  // Action method to toggle sections open/close
  protected toggleSection(id: string): void {
    this.openSectionId.set(this.openSectionId() === id ? null : id);
  }

  /** Fallback para imágenes que no cargan */
  protected onImgError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img) img.src = 'assets/img/Logo.png';
  }
}
