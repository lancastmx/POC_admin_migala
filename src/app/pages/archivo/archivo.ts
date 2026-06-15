import { Component, OnInit, OnDestroy, signal, computed, effect, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PageBanner } from '../../shared/page-banner/page-banner';
import { SeoService } from '../../core/services/seo.service';
import { ARCHIVOS_DATA } from '../../core/data/archivo.data';
import { ArchivoDocumento } from '../../core/models/archivo';
import { MEXICO } from '../../core/data/entidades.data';
import type { Estado } from '../../core/models/entidad';
import { SOCIAL_NETWORKS } from '../../core/social-networks';
import { RUTA_CRITICA_DATA } from '../../core/data/ruta-critica.data';

interface CategoriaFiltro {
  id: string;
  label: string;
  icon: string;
}

interface PortalInfo {
  id?: string;
  seccion: string;
  acronimo: string;
  logoIcon: string;
  nivel: 'Sin Archivo' | 'Mínimo' | 'Básico' | 'Avanzado' | 'Consolidado';
}

interface EjesExpansionState {
  operativo: boolean;
  tematico: boolean;
  transversal: boolean;
  territorial: boolean;
  estatal: boolean;
}

@Component({
  selector: 'migala-archivo',
  imports: [CommonModule, FormsModule, PageBanner],
  templateUrl: './archivo.html',
  styleUrl: './archivo.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Archivo implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly seoService = inject(SeoService);
  private routeSub?: Subscription;

  protected readonly socialNetworks = SOCIAL_NETWORKS;
  protected readonly rutaCritica = RUTA_CRITICA_DATA;

  // ─── Lógica para la sección de Portales de Transparencia ───
  protected readonly viewMode = signal<'portales' | 'tabla'>('portales');
  protected readonly expandedEjes = signal<EjesExpansionState>({
    operativo: true,
    tematico: true,
    transversal: false,
    territorial: false,
    estatal: false
  });

  protected readonly portalesOperativos: PortalInfo[] = [
    { seccion: 'Contraloría', acronimo: 'CON', logoIcon: '⚖️', nivel: 'Sin Archivo' },
    { seccion: 'Comunicación y Propaganda', acronimo: 'CYP', logoIcon: '📢', nivel: 'Mínimo' },
    { seccion: 'Dirección', acronimo: 'DIR', logoIcon: '🧭', nivel: 'Sin Archivo' },
    { seccion: 'Diálogo y Arbitraje', acronimo: 'DYA', logoIcon: '🤝', nivel: 'Sin Archivo' },
    { seccion: 'Financiera', acronimo: 'FIN', logoIcon: '💳', nivel: 'Sin Archivo' },
    { seccion: 'Formación', acronimo: 'FOR', logoIcon: '⚡', nivel: 'Básico' },
    { seccion: 'Informática', acronimo: 'INF', logoIcon: '💻', nivel: 'Mínimo' },
    { seccion: 'Legal', acronimo: 'LEG', logoIcon: '💼', nivel: 'Sin Archivo' },
    { seccion: 'Político Electoral', acronimo: 'POL', logoIcon: '🗳️', nivel: 'Mínimo' },
    { seccion: 'Transparencia', acronimo: 'TRA', logoIcon: '🔎', nivel: 'Mínimo' }
  ];

  protected readonly portalesTematicos: PortalInfo[] = [
    { seccion: 'Arte y cultura', acronimo: 'AYC', logoIcon: '🎨', nivel: 'Sin Archivo' },
    { seccion: 'Ciencia y Tecnología', acronimo: 'CYT', logoIcon: '🧬', nivel: 'Sin Archivo' },
    { seccion: 'Derechos Humanos', acronimo: 'DHU', logoIcon: '⚔️', nivel: 'Mínimo' },
    { seccion: 'Estudios Económicos', acronimo: 'EEC', logoIcon: '💸', nivel: 'Sin Archivo' },
    { seccion: 'Geopolítica e Historia', acronimo: 'GEH', logoIcon: '📖', nivel: 'Sin Archivo' },
    { seccion: 'Sustentabilidad', acronimo: 'SUS', logoIcon: '☀️', nivel: 'Básico' }
  ];

  protected readonly portalesTransversales: PortalInfo[] = [
    { seccion: 'Personas con Funcionalidad Diversa', acronimo: 'DIS', logoIcon: '🪖', nivel: 'Sin Archivo' },
    { seccion: 'Diversidad', acronimo: 'DIV', logoIcon: '🏳️‍🌈', nivel: 'Sin Archivo' },
    { seccion: 'Masculinidades', acronimo: 'MAS', logoIcon: '🚹', nivel: 'Sin Archivo' },
    { seccion: 'Mujeres', acronimo: 'MUJ', logoIcon: '🚺', nivel: 'Sin Archivo' },
    { seccion: 'Paisanos', acronimo: 'PAI', logoIcon: '🌎', nivel: 'Sin Archivo' },
    { seccion: 'Pueblos Originarios', acronimo: 'POR', logoIcon: '🛖', nivel: 'Sin Archivo' }
  ];

  protected readonly portalesTerritoriales: PortalInfo[] = [
    { seccion: 'Vocería 1° Circunscripción', acronimo: 'VC1', logoIcon: '🟢', nivel: 'Sin Archivo' },
    { seccion: 'Vocería 2° Circunscripción', acronimo: 'VC2', logoIcon: '🟡', nivel: 'Sin Archivo' },
    { seccion: 'Vocería 3° Circunscripción', acronimo: 'VC3', logoIcon: '🟠', nivel: 'Sin Archivo' },
    { seccion: 'Vocería 4° Circunscripción', acronimo: 'VC4', logoIcon: '🔴', nivel: 'Sin Archivo' },
    { seccion: 'Vocería 5° Circunscripción', acronimo: 'VC5', logoIcon: '🟣', nivel: 'Sin Archivo' }
  ];

  protected readonly portalesEstatales = computed<PortalInfo[]>(() => {
    return MEXICO.estados.map(e => {
      let nivel: 'Sin Archivo' | 'Mínimo' | 'Básico' = 'Sin Archivo';
      let logoIcon = '📍';
      if (e.id === '09') { nivel = 'Básico'; logoIcon = '🏛️'; }
      else if (e.id === '14') { nivel = 'Mínimo'; logoIcon = '🌋'; }
      else if (e.id === '19') { nivel = 'Básico'; logoIcon = '⛰️'; }
      else if (e.id === '15') { nivel = 'Mínimo'; logoIcon = '🌲'; }
      else if (e.id === '21') { nivel = 'Mínimo'; logoIcon = '⛪'; }
      else if (e.id === '30') { nivel = 'Mínimo'; logoIcon = '🌴'; }

      return {
        id: e.id,
        seccion: e.nombre,
        acronimo: e.abreviatura.replace('.', ''),
        logoIcon,
        nivel
      };
    });
  });

  // ─── Fuente de Datos ─────────────────────────
  protected readonly documentos = signal<ArchivoDocumento[]>(ARCHIVOS_DATA);
  protected readonly estados = MEXICO.estados;

  // ─── Señales de Filtro ───────────────────────
  protected readonly selectedCategory = signal<string>('inicio');
  protected readonly selectedEje = signal<string>('todos');
  protected readonly selectedFormat = signal<string>('todos');
  protected readonly searchQuery = signal<string>('');
  protected readonly selectedSubseccion = signal<string>('todos');
  protected readonly selectedEstado = signal<string>('todos');
  protected readonly estadosSubmenuExpanded = signal<boolean>(false);

  // ─── Listas de Configuración de Filtros ──────
  protected readonly categorias: CategoriaFiltro[] = [
    { id: 'inicio', label: 'Inicio', icon: '🏠' },
    { id: 'todos', label: 'Todos los archivos', icon: '📁' },
    { id: 'redes-sociales', label: 'Redes Sociales', icon: '👥' },
    { id: 'ruta-critica', label: 'Ruta Crítica', icon: '📌' },
    { id: 'directorios', label: 'Directorios', icon: '📇' },
    { id: 'organigrama', label: 'Organigramas', icon: '🌿' },
    { id: 'sesiones', label: 'Sesiones y Minutas', icon: '📺' },
    { id: 'conversatorios', label: 'Conversatorios', icon: '💬' },
    { id: 'calendario', label: 'Calendarios', icon: '📅' },
    { id: 'patrimonio', label: 'Patrimonio', icon: '💎' },
    { id: 'ingresos-egresos', label: 'Ingresos y Egresos', icon: '🔄' },
    { id: 'tramites-formatos-manuales', label: 'Trámites y Manuales', icon: '🖨️' },
    { id: 'talleres', label: 'Talleres de Formación', icon: '💡' }
  ];

  protected readonly ejes = [
    { id: 'todos', label: 'Todos los ámbitos' },
    { id: 'nacional', label: 'Nacional' },
    { id: 'estatal', label: 'Estatal' },
    { id: 'operativo', label: 'Operativo' },
    { id: 'tematico', label: 'Temático' },
    { id: 'transversal', label: 'Transversalidad' },
    { id: 'territorial', label: 'Territorial (Circunscripciones)' }
  ];

  protected readonly formatos = [
    { id: 'todos', label: 'Todos los formatos' },
    { id: 'pdf', label: 'PDF' },
    { id: 'spreadsheet', label: 'Hojas de Cálculo' },
    { id: 'doc', label: 'Documentos' },
    { id: 'drive', label: 'Google Drive / Calendario' },
    { id: 'video', label: 'Videos y Playlists' }
  ];

  // ─── Consulta Filtrada Reactiva ──────────────
  protected readonly filteredDocumentos = computed(() => {
    const list = this.documentos();
    const cat = this.selectedCategory();
    const eje = this.selectedEje();
    const fmt = this.selectedFormat();
    const query = this.searchQuery().toLowerCase().trim();
    const sub = this.selectedSubseccion();
    const estadoId = this.selectedEstado();

    if (cat === 'inicio') {
      return [];
    }

    return list
      .filter(doc => {
        // 1. Filtrado por categoría
        if (cat !== 'todos' && doc.categoria !== cat) return false;

        // 2. Filtrado por ámbito / eje
        let targetEje = eje;
        if (sub !== 'todos') {
          const info = this.getComisionInfo(sub);
          if (info) targetEje = info.eje;
        } else if (estadoId !== 'todos') {
          targetEje = 'estatal';
        }
        if (targetEje !== 'todos' && doc.eje !== targetEje) return false;

        // 3. Filtrado por formato
        if (fmt !== 'todos' && doc.formato !== fmt) return false;

        // 4. Filtrado por texto de búsqueda
        if (query) {
          const matchesName = doc.nombre.toLowerCase().includes(query);
          const matchesDesc = doc.descripcion.toLowerCase().includes(query);
          const matchesCatLabel = this.getCategoryLabel(doc.categoria).toLowerCase().includes(query);
          const matchesEjeLabel = this.getEjeLabel(doc.eje).toLowerCase().includes(query);
          return matchesName || matchesDesc || matchesCatLabel || matchesEjeLabel;
        }
        return true;
      })
      .map(doc => {
        // A. Personalización por Estado
        if (doc.eje === 'estatal' && estadoId !== 'todos') {
          const estadoObj = MEXICO.estados.find(e => e.id === estadoId);
          if (estadoObj) {
            return {
              ...doc,
              nombre: this.personalizeText(doc.nombre, 'Comisiones Estatales', `Comisión Estatal de ${estadoObj.nombre}`),
              descripcion: this.personalizeDesc(doc.descripcion, estadoObj.nombre)
            };
          }
        }

        // B. Personalización por Subsección
        if (sub !== 'todos') {
          const comisionInfo = this.getComisionInfo(sub);
          if (comisionInfo && doc.eje === comisionInfo.eje) {
            return {
              ...doc,
              nombre: this.personalizeText(doc.nombre, this.getGenericPluralName(doc.eje), `Comisión de ${comisionInfo.seccion}`),
              descripcion: this.personalizeDescComision(doc.descripcion, comisionInfo.seccion)
            };
          }
        }

        return doc;
      });
  });

  constructor() {
    this.seoService.generateTags({
      title: 'Archivo de Documentos - Proyecto Migala',
      description: 'Biblioteca y archivo digital del Proyecto Migala. Descarga reglamentos, rutas críticas, minutas de sesiones, patrimonios y formatos oficiales.',
      url: 'https://poc-admin-migala.web.app/archivo'
    });

    // Auto-switch from 'inicio' to 'todos' when user types search query
    effect(() => {
      const query = this.searchQuery().trim();
      if (query && this.selectedCategory() === 'inicio') {
        this.selectedCategory.set('todos');
      }
    });
  }

  ngOnInit(): void {
    // Escuchar parámetros de consulta de la ruta
    this.routeSub = this.route.queryParams.subscribe(params => {
      if (params['categoria']) {
        const catExists = this.categorias.some(c => c.id === params['categoria']);
        if (catExists) {
          this.selectedCategory.set(params['categoria']);
        }
      }
      if (params['eje']) {
        const ejeExists = this.ejes.some(e => e.id === params['eje']);
        if (ejeExists) {
          this.selectedEje.set(params['eje']);
        }
      }
      if (params['subseccion']) {
        this.selectedSubseccion.set(params['subseccion']);
      }
      if (params['estado']) {
        const estExists = MEXICO.estados.some(e => e.id === params['estado']);
        if (estExists) {
          this.selectedEstado.set(params['estado']);
        }
      }
      if (params['buscar']) {
        this.searchQuery.set(params['buscar']);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  // ─── Métodos de Utilidad ─────────────────────

  protected selectCategory(catId: string): void {
    this.selectedCategory.set(catId);
  }

  protected clearFilters(): void {
    this.selectedCategory.set('todos');
    this.selectedEje.set('todos');
    this.selectedFormat.set('todos');
    this.searchQuery.set('');
    this.selectedSubseccion.set('todos');
    this.selectedEstado.set('todos');
    this.estadosSubmenuExpanded.set(false);
  }

  protected getCategoryLabel(catId: string): string {
    const cat = this.categorias.find(c => c.id === catId);
    return cat ? cat.label : catId;
  }

  protected getEjeLabel(ejeId: string): string {
    const eje = this.ejes.find(e => e.id === ejeId);
    return eje ? eje.label : ejeId;
  }

  protected getFormatIcon(formato: string): string {
    switch (formato) {
      case 'pdf':
        return '📕';
      case 'spreadsheet':
        return '📗';
      case 'doc':
        return '📘';
      case 'drive':
        return '📁';
      case 'video':
        return '▶️';
      default:
        return '📄';
    }
  }

  protected getFormatBadgeClass(formato: string): string {
    switch (formato) {
      case 'pdf':
        return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'spreadsheet':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'doc':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'drive':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'video':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      default:
        return 'bg-neutral-500/10 text-neutral-400 border-neutral-500/20';
    }
  }

  protected toggleEje(ejeId: string): void {
    const key = ejeId as keyof EjesExpansionState;
    this.expandedEjes.update(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  }

  protected getNivelBadgeClass(nivel: string): string {
    switch (nivel) {
      case 'Sin Archivo':
        return 'bg-rose-500/10 text-rose-500 border-rose-500/20 dark:text-rose-400 dark:border-rose-500/20';
      case 'Mínimo':
        return 'bg-amber-500/10 text-amber-600 border-amber-500/20 dark:text-amber-400 dark:border-amber-500/20';
      case 'Básico':
        return 'bg-purple-500/10 text-purple-600 border-purple-500/20 dark:text-purple-400 dark:border-purple-500/20';
      case 'Avanzado':
        return 'bg-sky-500/10 text-sky-600 border-sky-500/20 dark:text-sky-400 dark:border-sky-500/20';
      case 'Consolidado':
        return 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400 dark:border-emerald-500/20';
      default:
        return 'bg-neutral-500/10 text-neutral-500 border-neutral-500/20 dark:text-neutral-400 dark:border-neutral-500/20';
    }
  }

  protected selectSubseccion(subId: string, ejeId: string): void {
    this.selectedSubseccion.set(subId);
    this.selectedEje.set(ejeId);
    this.selectedEstado.set('todos');
    if (this.selectedCategory() === 'inicio') {
      this.selectedCategory.set('todos');
    }
  }

  protected selectEstado(estadoId: string): void {
    this.selectedEstado.set(estadoId);
    this.selectedEje.set('estatal');
    this.selectedSubseccion.set('todos');
    if (this.selectedCategory() === 'inicio') {
      this.selectedCategory.set('todos');
    }
  }

  protected selectEjeSolo(ejeId: string): void {
    this.selectedEje.set(ejeId);
    this.selectedSubseccion.set('todos');
    this.selectedEstado.set('todos');
    if (this.selectedCategory() === 'inicio') {
      this.selectedCategory.set('todos');
    }
  }

  protected selectEstadoFromPortal(estadoId: string): void {
    this.selectEstado(estadoId);
  }

  protected selectSubseccionFromPortal(subId: string, ejeId: string): void {
    this.selectSubseccion(subId, ejeId);
  }

  private personalizeText(text: string, search: string, replace: string): string {
    let res = text;
    res = res.replace(`de la ${search}`, `de la ${replace}`);
    res = res.replace(`de ${search}`, `de la ${replace}`);
    res = res.replace(`y Egresos de ${search}`, `y Egresos de la ${replace}`);
    res = res.replace(search, replace);

    res = res.replace(`de la ${search.toLowerCase()}`, `de la ${replace}`);
    res = res.replace(`de ${search.toLowerCase()}`, `de la ${replace}`);
    res = res.replace(search.toLowerCase(), replace);

    return res;
  }

  private personalizeDesc(desc: string, estadoNombre: string): string {
    return desc
      .replace(/cada una de las 32 comisiones estatales/gi, `la Comisión Estatal de ${estadoNombre}`)
      .replace(/las comisiones estatales/gi, `la Comisión Estatal de ${estadoNombre}`)
      .replace(/las 32 comisiones estatales/gi, `la Comisión Estatal de ${estadoNombre}`)
      .replace(/las comisiones en los estados/gi, `la Comisión Estatal de ${estadoNombre}`)
      .replace(/las tesorerías de las comisiones estatales/gi, `la tesorería de la Comisión Estatal de ${estadoNombre}`);
  }

  private personalizeDescComision(desc: string, comisionNombre: string): string {
    return desc
      .replace(/los grupos operativos/gi, `la Comisión de ${comisionNombre}`)
      .replace(/las comisiones temáticas/gi, `la Comisión de ${comisionNombre}`)
      .replace(/los grupos y comisiones/gi, `la Comisión de ${comisionNombre}`)
      .replace(/los comisiones temáticas/gi, `la Comisión de ${comisionNombre}`)
      .replace(/el Eje Operativo/gi, `la Comisión de ${comisionNombre}`)
      .replace(/el eje operativo/gi, `la Comisión de ${comisionNombre}`)
      .replace(/las coordinaciones operativas/gi, `la Comisión de ${comisionNombre}`)
      .replace(/el grupo de transversalidad/gi, `la Comisión de ${comisionNombre}`)
      .replace(/del grupo de transversalidad/gi, `de la Comisión de ${comisionNombre}`)
      .replace(/de la comisión de transversalidad/gi, `de la Comisión de ${comisionNombre}`)
      .replace(/las vocerías de circunscripción/gi, `la ${comisionNombre}`)
      .replace(/los voceros de las 5 circunscripciones/gi, `la ${comisionNombre}`)
      .replace(/las 5 circunscripciones electorales/gi, `la ${comisionNombre}`)
      .replace(/en las circunscripciones/gi, `en la ${comisionNombre}`);
  }

  private getGenericPluralName(eje: string): string {
    switch (eje) {
      case 'operativo': return 'Grupos Operativos';
      case 'tematico': return 'Comisiones Temáticas';
      case 'transversal': return 'Grupo de Transversalidad';
      case 'territorial': return 'Eje Territorial';
      default: return 'Grupos';
    }
  }

  private getComisionInfo(acronimo: string) {
    const op = this.portalesOperativos.find(p => p.acronimo === acronimo);
    if (op) return { ...op, eje: 'operativo' };
    const tem = this.portalesTematicos.find(p => p.acronimo === acronimo);
    if (tem) return { ...tem, eje: 'tematico' };
    const trans = this.portalesTransversales.find(p => p.acronimo === acronimo);
    if (trans) return { ...trans, eje: 'transversal' };
    const terr = this.portalesTerritoriales.find(p => p.acronimo === acronimo);
    if (terr) return { ...terr, eje: 'territorial' };
    return null;
  }
}

