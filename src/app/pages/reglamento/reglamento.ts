import { Component, computed, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReglamentoService } from '../../core/services/reglamento.service';
import { MEXICO } from '../../core/data/entidades.data';
import { ESTATUS_REGLAMENTO_MAP, REGION_INFO, REGION_ORDER } from '../../core/constants/reglamento.constants';
import type { Estado } from '../../core/models/entidad';
import type { ArticuloType } from '../../core/models/reglamento';

@Component({
  selector: 'migala-reglamento',
  imports: [FormsModule, DecimalPipe, RouterLink],
  templateUrl: './reglamento.html',
  styleUrl: './reglamento.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Reglamento {
  // ─── Servicios ──────────────────────────────
  private readonly regSvc = inject(ReglamentoService);

  // ═══════════════════════════════════════════════
  //  DATOS DEL SERVICIO
  // ═══════════════════════════════════════════════

  /** Reglamento nacional (datos completos) */
  readonly reglamento = this.regSvc.nacional;

  /** Artículos aplanados del nacional */
  readonly allArticles = this.regSvc.allArticles;

  /** Métricas del nacional */
  readonly metrics = this.regSvc.nacionalMetrics;

  /** Catálogo global (nacional + estatales) */
  readonly catalogo = this.regSvc.catalogo;

  /** Estadísticas del catálogo */
  readonly catalogoStats = this.regSvc.catalogoStats;

  /** Referencia al mapa de estatus para el template */
  readonly estatusMap = ESTATUS_REGLAMENTO_MAP;

  // ═══════════════════════════════════════════════
  //  DATOS DE ENTIDADES FEDERATIVAS
  // ═══════════════════════════════════════════════

  readonly estados = MEXICO.estados;
  readonly isEstatalTab = computed(() => this.activeTab() === 'estatales');
  readonly totalMunicipios = computed(() =>
    this.estados.reduce((sum, e) => sum + e.municipios.length, 0)
  );

  /** Regiones de México con metadata visual */
  readonly regionInfo = REGION_INFO;
  readonly regionOrder = REGION_ORDER;

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

  /** Buscador de estados (para el tab estatales) */
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

  /**
   * Estados enriquecidos con metadata del reglamento.
   * Cada entrada tiene: estado + reglamento + estatusConfig + progreso.
   */
  readonly estadosEnriquecidos = computed(() => {
    const map = this.estatalesMap();
    return this.filteredEstados().map(e => {
      const reglamento = map.get(e.id) ?? null;
      const estatusCfg = reglamento
        ? this.getEstatusConfig(reglamento.metadata.estatus)
        : null;
      const progreso = reglamento?.cobertura.progreso ?? 0;
      const progresoBarClass = 'h-full rounded-full transition-all duration-500 ' + (progreso === 100
        ? 'bg-emerald-500'
        : progreso > 0
          ? 'bg-amber-500'
          : 'bg-neutral-700');
      return { estado: e, reglamento, estatusCfg, progreso, progresoBarClass };
    });
  });

  /** Estados enriquecidos agrupados por región (para iterar por región) */
  readonly estadosPorRegionEnriquecidos = computed(() => {
    const enriched = this.estadosEnriquecidos();
    const map = new Map<string, typeof enriched>();
    for (const item of enriched) {
      const region = item.estado.region;
      if (!map.has(region)) map.set(region, []);
      map.get(region)!.push(item);
    }
    return map;
  });

  // ═══════════════════════════════════════════════
  //  TABS
  // ═══════════════════════════════════════════════

  tabs = [
    { id: 'nacional',      name: 'Nacional',           icon: '📜' },
    { id: 'estatales',     name: 'Comisiones Estatales', icon: '🗺️' },
    { id: 'operativos',    name: 'Grupos Operativos',   icon: '⚙️' },
    { id: 'tematicas',     name: 'Comisiones Temáticas', icon: '🎯' },
    { id: 'transversal',   name: 'Transversalidad',     icon: '🔄' },
    { id: 'procedimental', name: 'Procedimientos',      icon: '📋' },
    { id: 'disciplinario', name: 'Conductas y Sanciones', icon: '⚖️' },
    { id: 'normativo',     name: 'Modificaciones',      icon: '📝' },
  ];

  activeTab = signal<string>('nacional');
  activeTabLabel = computed(() => this.tabs.find(t => t.id === this.activeTab())?.name ?? 'Nacional');

  setTab(tabId: string) {
    this.activeTab.set(tabId);
    this.searchQuery.set('');
    this.typeFilter.set(null);
    this.searchEstado.set('');
  }

  // ═══════════════════════════════════════════════
  //  BÚSQUEDA Y FILTROS
  // ═══════════════════════════════════════════════

  searchQuery = signal('');
  typeFilter = signal<ArticuloType | null>(null);
  showToc = signal(false);

  /** Artículos filtrados por tab + búsqueda + tipo */
  readonly filteredArticles = computed(() =>
    this.regSvc.filterArticles(
      this.allArticles(),
      this.activeTab(),
      this.searchQuery(),
      this.typeFilter(),
    )
  );

  /** Stats visibles para el tab activo */
  readonly tabMetrics = computed(() =>
    this.regSvc.calcTabMetrics(this.filteredArticles())
  );

  /** Tipos disponibles para filtrar */
  readonly availableTypes = computed(() =>
    this.regSvc.calcAvailableTypes(this.filteredArticles())
  );

  // ═══════════════════════════════════════════════
  //  TOC (TABLE OF CONTENTS)
  // ═══════════════════════════════════════════════

  readonly toc = computed(() =>
    this.regSvc.generateToc(
      this.regSvc.nacional(),
      this.filteredArticles(),
      this.activeTab(),
    )
  );

  // ═══════════════════════════════════════════════
  //  AGRUPACIÓN PARA RENDER
  // ═══════════════════════════════════════════════

  readonly groupedArticles = computed(() =>
    this.regSvc.groupArticles(this.filteredArticles())
  );

  // ═══════════════════════════════════════════════
  //  HELPERS DE VISUALIZACIÓN (delegados al servicio)
  // ═══════════════════════════════════════════════

  typeLabel = this.regSvc.typeLabel.bind(this.regSvc);
  typeColor = this.regSvc.typeColor.bind(this.regSvc);
  formatReferences = this.regSvc.formatReferences.bind(this.regSvc);

  // ═══════════════════════════════════════════════
  //  HELPERS DE PLANTILLA
  // ═══════════════════════════════════════════════

  /** Mapa rápido: entidadId → ReglamentoTrazable */
  readonly estatalesMap = computed(() => {
    const map = new Map<string, (typeof this.catalogo)['prototype']['estatales'][number]>();
    for (const r of this.catalogo().estatales) {
      if (r.entidadId) map.set(r.entidadId, r);
    }
    return map;
  });

  /** Busca el reglamento trazable de un estado por clave INEGI */
  getReglamentoEstatal(entidadId: string) {
    return this.estatalesMap().get(entidadId) ?? null;
  }

  /** Obtiene la configuración visual de un estatus */
  getEstatusConfig(estatus: string) {
    return this.estatusMap[estatus as keyof typeof this.estatusMap] ?? null;
  }

  // ═══════════════════════════════════════════════
  //  GRAFO: CONSULTAS
  // ═══════════════════════════════════════════════

  /** Obtiene relaciones de grafo para un artículo */
  getGraphRelations(articleId: string) {
    return this.regSvc.getGraphRelations(articleId);
  }

  /** PageRank simplificado de los artículos */
  readonly pageRank = computed(() => this.regSvc.calcPageRank());

  // ═══════════════════════════════════════════════
  //  ACCIONES DE UI
  // ═══════════════════════════════════════════════

  toggleToc() {
    this.showToc.update(v => !v);
  }

  /** Scroll suave a un artículo dentro del contenedor scrolleable */
  scrollToArticle(articleNumber: string) {
    const el = document.getElementById('art-' + articleNumber.replace(/\s+/g, '-'));
    const container = document.getElementById('reglamento-content');
    if (el && container) {
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const top = elRect.top - containerRect.top + container.scrollTop - 16;
      container.scrollTo({ top, behavior: 'smooth' });
    } else {
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.showToc.set(false);
  }
}
