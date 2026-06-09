import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { REGLAMENTO_DATA } from '../../core/data/reglamento.data';

// ─── Tipos locales (duplicados del modelo para evitar dependencias del Language Service) ───
type ArticuloType =
  | 'principio' | 'definicion' | 'requisito' | 'procedimiento'
  | 'sancion' | 'estructura' | 'derecho' | 'obligacion'
  | 'transitorio' | 'glosario';

type ArticuloCluster =
  | 'nacional' | 'operativo' | 'territorial' | 'especializado'
  | 'transversal' | 'procedimental' | 'disciplinario' | 'normativo';

interface Fragment {
  type: 'paragraph' | 'listItem' | 'condition' | 'exception' | 'quote';
  content: string;
  level: number;
  listType?: 'roman' | 'letter' | 'number' | 'bullet';
  listMarker?: string;
}

interface Referencia {
  articleNum: string;
  context: string;
}

interface ReglamentoMetrics {
  totalTitulos: number;
  totalCapitulos: number;
  totalArticulos: number;
  totalPalabras: number;
  distribucionTipo: Partial<Record<ArticuloType, number>>;
  distribucionCluster: Record<ArticuloCluster, number>;
  averageWordsPerArticle: number;
}

/** Artículo aplanado con metadata de título/capítulo */
interface ArticuloConMeta {
  number: string;
  content: string;
  type: ArticuloType;
  cluster: ArticuloCluster;
  tags: string[];
  keyConcepts: string[];
  references: Referencia[];
  fragments: Fragment[];
  wordCount: number;
  hasList: boolean;
  hasConditions: boolean;
  tituloName: string;
  capituloName: string;
}

@Component({
  selector: 'migala-reglamento',
  imports: [FormsModule, DecimalPipe],
  templateUrl: './reglamento.html',
  styleUrl: './reglamento.css',
})
export class Reglamento {
  // ─── Datos fuente ──────────────────────────────
  reglamento = signal(REGLAMENTO_DATA);
  metrics = computed<ReglamentoMetrics | null>(() => this.reglamento().metrics ?? null);

  // ─── Tabs ──────────────────────────────────────
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
  }

  // ─── Búsqueda y filtros ────────────────────────
  searchQuery = signal('');
  typeFilter = signal<ArticuloType | null>(null);
  showToc = signal(false);

  /** Todos los artículos aplanados con su metadata de título/capítulo */
  allArticles = computed<ArticuloConMeta[]>(() => {
    const arts: ArticuloConMeta[] = [];
    for (const t of this.reglamento().titulos) {
      for (const c of t.capitulos) {
        for (const a of c.articulos) {
          arts.push({ ...a, tituloName: t.name, capituloName: c.name });
        }
      }
    }
    return arts;
  });

  /** Artículos filtrados por tab + búsqueda + tipo */
  filteredArticles = computed(() => {
    const tab = this.activeTab();
    const query = this.searchQuery().toLowerCase().trim();
    const typeFilter = this.typeFilter();

    return this.allArticles().filter(a => {
      // Filtro por cluster (tab)
      if (tab !== 'nacional' && a.cluster !== tab) return false;

      // Filtro por texto
      if (query) {
        const inContent = a.content.toLowerCase().includes(query);
        const inNumber = a.number.toLowerCase().includes(query);
        const inTags = a.tags.some(t => t.includes(query));
        const inTitle = a.tituloName.toLowerCase().includes(query);
        const inChapter = a.capituloName.toLowerCase().includes(query);
        if (!(inContent || inNumber || inTags || inTitle || inChapter)) return false;
      }

      // Filtro por tipo semántico
      if (typeFilter && a.type !== typeFilter) return false;

      return true;
    });
  });

  /** Stats visibles para el tab activo */
  tabMetrics = computed(() => {
    const arts = this.filteredArticles();
    const total = arts.length;
    const byType = {} as Record<string, number>;
    for (const a of arts) {
      byType[a.type] = (byType[a.type] || 0) + 1;
    }
    const totalWords = arts.reduce((s, a) => s + a.wordCount, 0);
    return { total, byType, totalWords, avgWords: total ? Math.round(totalWords / total) : 0 };
  });

  // ─── TOC (Table of Contents) ───────────────────
  toc = computed(() => {
    const tab = this.activeTab();
    const filtered = this.filteredArticles();

    const findFirst = (predicate: (a: ArticuloConMeta) => boolean): string | null => {
      return filtered.find(predicate)?.number ?? null;
    };

    return this.reglamento().titulos
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
  });

  // ─── Tipos disponibles para filtrar ────────────
  availableTypes = computed<{ type: ArticuloType; label: string; count: number }[]>(() => {
    const counts: Partial<Record<ArticuloType, number>> = {};
    for (const a of this.filteredArticles()) {
      counts[a.type] = (counts[a.type] || 0) + 1;
    }
    return (Object.entries(counts) as [ArticuloType, number][])
      .map(([type, count]) => ({ type, label: this.typeLabel(type), count }))
      .sort((a, b) => b.count - a.count);
  });

  typeLabel(type: ArticuloType): string {
    const labels: Record<ArticuloType, string> = {
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
    return labels[type] ?? type;
  }

  typeColor(type: ArticuloType): string {
    const colors: Record<ArticuloType, string> = {
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
    return colors[type] ?? 'bg-neutral-500/20 text-neutral-300 border-neutral-500/30';
  }

  // ─── Formateo de referencias cruzadas ──────────
  formatReferences(refs: Referencia[]): string[] {
    return [...new Set(refs.map(r => r.articleNum))];
  }

  toggleToc() {
    this.showToc.update(v => !v);
  }

  // ─── Agrupación de artículos para render ───────
  groupArticles(articles: ArticuloConMeta[]) {
    const groups: { titulo: string; tituloIcono: string; articulos: ArticuloConMeta[] }[] = [];
    const tituloMap = new Map<string, ArticuloConMeta[]>();

    for (const a of articles) {
      const key = a.tituloName;
      if (!tituloMap.has(key)) {
        tituloMap.set(key, []);
      }
      tituloMap.get(key)!.push(a);
    }

    const iconos: Record<string, string> = {
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

    for (const [titulo, arts] of tituloMap) {
      const lower = titulo.toLowerCase();
      const icono = Object.entries(iconos).find(([k]) => lower.includes(k))?.[1] ?? '📄';
      groups.push({ titulo, tituloIcono: icono, articulos: arts });
    }

    return groups;
  }

  // ─── Scroll a artículo ─────────────────────────
  scrollToArticle(articleNumber: string) {
    const el = document.getElementById('art-' + articleNumber.replace(/\s+/g, '-'));
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.showToc.set(false);
  }
}
