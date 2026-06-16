/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  svc-003
 * title:  REGLAMENTO_SERVICE — Lógica de negocio del Reglamento Nacional
 * type:   service
 * tags:   [angular, service, regulations, full-text, search, articles]
 * author: lancast
 * created: 2026-06-10
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 *
 * ReglamentoService
 *
 *  Motor de consultas para el sistema de reglamentos
 *  trazables. Proporciona:
 *    - Catálogo nacional + estatal
 *    - Búsqueda y filtrado semántico
 *    - Traversal de grafos (relaciones entre artículos)
 *    - Métricas y estadísticas
 *    - Cobertura y progreso
 *  ─────────────────────────────────────────────── */
import { Injectable, computed, signal } from '@angular/core';
import { REGLAMENTO_DATA } from '../data/reglamento.data';
import { REGLAMENTOS_ESTATALES, getCatalogoGlobal } from '../data/reglamento-estatal.data';
import type {
  Reglamento,
  Articulo,
  ArticuloConMeta,
  ArticuloType,
  ArticuloCluster,
  ReglamentoMetrics,
} from '../models/reglamento';
import type {
  ReglamentoTrazable,
  CatalogoMetrics,
  EstatusReglamento,
  RelacionArticulo,
} from '../models/reglamento-trazable';

// ═══════════════════════════════════════════════
//  INTERFACES PÚBLICAS
// ═══════════════════════════════════════════════

export interface FlattenedArticle extends Articulo {
  tituloName: string;
  capituloName: string;
  /** ID del reglamento al que pertenece */
  reglamentoId: string;
  /** Ámbito del reglamento */
  ambito: string;
}

export interface TabMetrics {
  total: number;
  byType: Record<string, number>;
  totalWords: number;
  avgWords: number;
}

export interface GroupedArticles {
  titulo: string;
  tituloIcono: string;
  articulos: FlattenedArticle[];
}

// ═══════════════════════════════════════════════
//  CONSTANTES LOCALES
// ═══════════════════════════════════════════════

const TYPE_LABELS: Record<ArticuloType, string> = {
  principio: 'Principio',
  definicion: 'Definición',
  requisito: 'Requisito',
  procedimiento: 'Procedimiento',
  sancion: 'Sanción',
  estructura: 'Estructura',
  derecho: 'Derecho',
  obligacion: 'Obligación',
  transitorio: 'Transitorio',
  glosario: 'Glosario',
};

const TYPE_COLORS: Record<ArticuloType, string> = {
  principio: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  definicion: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  requisito: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  procedimiento: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  sancion: 'bg-red-500/20 text-red-300 border-red-500/30',
  estructura: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  derecho: 'bg-green-500/20 text-green-300 border-green-500/30',
  obligacion: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  transitorio: 'bg-slate-500/20 text-slate-300 border-slate-500/30',
  glosario: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
};

const GROUP_ICONS: Record<string, string> = {
  'primero': '📜',
  'segundo': '📚',
  'tercero': '🏗️',
  'cuarto': '📅',
  'quinto': '🗳️',
  'sexto': '📁',
  'séptimo': '⚖️',
  'septimo': '⚖️',
  'octavo': '📝',
};

@Injectable({ providedIn: 'root' })
export class ReglamentoService {
  // ═══════════════════════════════════════════════
  //  FUENTES DE DATOS
  // ═══════════════════════════════════════════════

  /** Reglamento nacional (datos completos) */
  readonly nacional = signal<Reglamento>(REGLAMENTO_DATA);

  /** Catálogo de reglamentos estatales (solo trazabilidad, sin articulado) */
  readonly estatales = signal<ReglamentoTrazable[]>(REGLAMENTOS_ESTATALES);

  /** Catálogo global combinado */
  readonly catalogo = computed(() => getCatalogoGlobal());

  // ═══════════════════════════════════════════════
  //  ARTÍCULOS APLANADOS
  // ═══════════════════════════════════════════════

  /** Todos los artículos del reglamento nacional aplanados con metadata */
  readonly allArticles = computed<FlattenedArticle[]>(() => {
    const reg = this.nacional();
    const arts: FlattenedArticle[] = [];
    for (const t of reg.titulos) {
      for (const c of t.capitulos) {
        for (const a of c.articulos) {
          arts.push({
            ...a,
            tituloName: t.name,
            capituloName: c.name,
            reglamentoId: reg.id ?? 'nacional',
            ambito: reg.ambito ?? 'nacional',
          });
        }
      }
    }
    return arts;
  });

  // ═══════════════════════════════════════════════
  //  FILTRADO
  // ═══════════════════════════════════════════════

  /**
   * Filtra artículos por cluster (tab), búsqueda textual y tipo semántico.
   * Es pura: recibe señales, devuelve artículo filtrado.
   */
  filterArticles(
    articles: FlattenedArticle[],
    tab: string,
    query: string,
    typeFilter: ArticuloType | null,
  ): FlattenedArticle[] {
    const q = query.toLowerCase().trim();

    return articles.filter(a => {
      // Filtro por cluster (tab)
      if (tab !== 'nacional' && a.cluster !== tab) return false;

      // Filtro por texto
      if (q) {
        const fields = [
          a.content,
          a.number,
          ...a.tags,
          a.tituloName,
          a.capituloName,
        ];
        if (!fields.some(f => f.toLowerCase().includes(q))) return false;
      }

      // Filtro por tipo semántico
      if (typeFilter && a.type !== typeFilter) return false;

      return true;
    });
  }

  // ═══════════════════════════════════════════════
  //  MÉTRICAS
  // ═══════════════════════════════════════════════

  /** Calcula métricas para un conjunto de artículos */
  calcTabMetrics(articles: FlattenedArticle[]): TabMetrics {
    const total = articles.length;
    const byType: Record<string, number> = {};
    let totalWords = 0;

    for (const a of articles) {
      byType[a.type] = (byType[a.type] || 0) + 1;
      totalWords += a.wordCount;
    }

    return {
      total,
      byType,
      totalWords,
      avgWords: total ? Math.round(totalWords / total) : 0,
    };
  }

  /** Tipos disponibles para filtrar con sus conteos */
  calcAvailableTypes(articles: FlattenedArticle[]): { type: ArticuloType; label: string; count: number }[] {
    const counts: Partial<Record<ArticuloType, number>> = {};
    for (const a of articles) {
      counts[a.type] = (counts[a.type] || 0) + 1;
    }
    return (Object.entries(counts) as [ArticuloType, number][])
      .map(([type, count]) => ({ type, label: this.typeLabel(type), count }))
      .sort((a, b) => b.count - a.count);
  }

  // ═══════════════════════════════════════════════
  //  AGRUPACIÓN
  // ═══════════════════════════════════════════════

  /** Agrupa artículos por título para render */
  groupArticles(articles: FlattenedArticle[]): GroupedArticles[] {
    const tituloMap = new Map<string, FlattenedArticle[]>();

    for (const a of articles) {
      const key = a.tituloName;
      if (!tituloMap.has(key)) tituloMap.set(key, []);
      tituloMap.get(key)!.push(a);
    }

    return Array.from(tituloMap.entries()).map(([titulo, articulos]) => {
      const lower = titulo.toLowerCase();
      const icono = Object.entries(GROUP_ICONS).find(([k]) => lower.includes(k))?.[1] ?? '📄';
      return { titulo, tituloIcono: icono, articulos };
    });
  }

  // ═══════════════════════════════════════════════
  //  TOC (TABLE OF CONTENTS)
  // ═══════════════════════════════════════════════

  generateToc(reglamento: Reglamento, filteredArticles: FlattenedArticle[], tab: string) {
    const findFirst = (predicate: (a: FlattenedArticle) => boolean): string | null => {
      return filteredArticles.find(predicate)?.number ?? null;
    };

    return reglamento.titulos
      .map(t => {
        const tituloFirst = findFirst(a => a.tituloName === t.name);
        return {
          name: t.name,
          firstArticleNumber: tituloFirst,
          totalArticulos: t.totalArticulos ?? 0,
          capitulos: t.capitulos
            .filter(c => tab === 'nacional' || c.articulos.some(a => a.cluster === tab))
            .map(c => ({
              name: c.name,
              count: tab === 'nacional'
                ? c.articulos.length
                : c.articulos.filter(a => a.cluster === tab).length,
              firstArticleNumber: findFirst(a => a.capituloName === c.name),
            }))
            .filter(c => c.count > 0),
        };
      })
      .filter(t => t.capitulos.length > 0);
  }

  // ═══════════════════════════════════════════════
  //  GRAFO: RELACIONES ENTRE ARTÍCULOS
  // ═══════════════════════════════════════════════

  /**
   * Obtiene todas las relaciones de grafo de un artículo.
   * Incluye tanto las relaciones salientes como las entrantes.
   */
  getGraphRelations(articleId: string): {
    salientes: RelacionArticulo[];
    entrantes: { desde: string; relacion: RelacionArticulo }[];
  } {
    const salientes: RelacionArticulo[] = [];
    const entrantes: { desde: string; relacion: RelacionArticulo }[] = [];

    for (const a of this.allArticles()) {
      if (a.id === articleId && a.relaciones) {
        salientes.push(...a.relaciones);
      }
      if (a.relaciones?.some(r => r.destinoId === articleId)) {
        const rel = a.relaciones.find(r => r.destinoId === articleId)!;
        entrantes.push({ desde: a.id ?? a.number, relacion: rel });
      }
    }

    return { salientes, entrantes };
  }

  /**
   * Encuentra el camino más corto entre dos artículos en el grafo
   * (BFS simple). Útil para navegación semántica.
   */
  shortestPath(fromId: string, toId: string): string[] | null {
    if (fromId === toId) return [fromId];

    const graph = new Map<string, string[]>();
    for (const a of this.allArticles()) {
      const neighbors = (a.relaciones ?? []).map(r => r.destinoId);
      if (a.id) graph.set(a.id, neighbors);
    }

    const visited = new Set<string>([fromId]);
    const queue: { node: string; path: string[] }[] = [{ node: fromId, path: [fromId] }];

    while (queue.length > 0) {
      const { node, path } = queue.shift()!;
      const neighbors = graph.get(node) ?? [];

      for (const neighbor of neighbors) {
        if (neighbor === toId) return [...path, neighbor];
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push({ node: neighbor, path: [...path, neighbor] });
        }
      }
    }

    return null; // No hay conexión
  }

  /**
   * Calcula el PageRank simplificado de los artículos
   * (para identificar los más relevantes del grafo).
   */
  calcPageRank(iterations = 10, damping = 0.85): Map<string, number> {
    const articles = this.allArticles();
    const nodeIds = articles.filter(a => a.id).map(a => a.id!);
    const n = nodeIds.length;
    if (n === 0) return new Map();

    const pr = new Map<string, number>(nodeIds.map(id => [id, 1 / n]));
    const outDegree = new Map<string, number>();

    for (const a of articles) {
      outDegree.set(a.id ?? '', a.relaciones?.length ?? 0);
    }

    for (let iter = 0; iter < iterations; iter++) {
      const newPr = new Map<string, number>();
      let danglingSum = 0;

      // Suma de nodos sin aristas salientes
      for (const [id, rank] of pr) {
        if ((outDegree.get(id) ?? 0) === 0) danglingSum += rank;
      }

      for (const id of nodeIds) {
        let sum = 0;
        for (const a of articles) {
          if (a.relaciones?.some(r => r.destinoId === id)) {
            const srcId = a.id!;
            sum += (pr.get(srcId) ?? 0) / (outDegree.get(srcId) ?? 1);
          }
        }
        const rank = (1 - damping) / n + damping * (sum + danglingSum / n);
        newPr.set(id, rank);
      }

      // Normalizar
      const total = Array.from(newPr.values()).reduce((s, v) => s + v, 0);
      for (const [id, rank] of newPr) {
        newPr.set(id, rank / total);
      }

      // Swap
      for (const [id, rank] of newPr) {
        pr.set(id, rank);
      }
    }

    return pr;
  }

  // ═══════════════════════════════════════════════
  //  HELPERS DE VISUALIZACIÓN
  // ═══════════════════════════════════════════════

  typeLabel(type: ArticuloType): string {
    return TYPE_LABELS[type] ?? type;
  }

  typeColor(type: ArticuloType): string {
    return TYPE_COLORS[type] ?? 'bg-neutral-500/20 text-neutral-300 border-neutral-500/30';
  }

  /** Formatea referencias a números únicos */
  formatReferences(refs: { articleNum: string }[]): string[] {
    return [...new Set(refs.map(r => r.articleNum))];
  }

  // ═══════════════════════════════════════════════
  //  MÉTRICAS GLOBALES DEL SISTEMA
  // ═══════════════════════════════════════════════

  /** Obtiene las métricas del reglamento nacional */
  nacionalMetrics = computed<ReglamentoMetrics | null>(() => this.nacional().metrics ?? null);

  /** Obtiene estadísticas del catálogo completo */
  catalogoStats = computed(() => {
    const estatales = this.estatales();
    const porEstatus: Record<EstatusReglamento, number> = {} as any;
    let progresoSum = 0;
    let countConArticulado = 0;

    for (const e of estatales) {
      const s = e.metadata.estatus;
      porEstatus[s] = (porEstatus[s] || 0) + 1;
      progresoSum += e.cobertura.progreso;
      if (e.cobertura.tieneArticulado) countConArticulado++;
    }

    return {
      totalEstatales: estatales.length,
      porEstatus,
      progresoPromedio: Math.round(progresoSum / estatales.length),
      cobertura: Math.round((countConArticulado / estatales.length) * 100),
      vigentes: porEstatus['vigente'] ?? 0,
      enProgreso: (porEstatus['borrador'] ?? 0) + (porEstatus['en_revision'] ?? 0),
      inexistentes: porEstatus['inexistente'] ?? 0,
    };
  });
}
