/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  page-005
 * title:  ARCHIVO — Archivo de transparencia y organigrama interactivo
 * type:   page
 * tags:   [angular, page, archive, transparency, organigrama, tree-view, directorio, telegram]
 * author: lancast
 * created: 2026-06-10
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 */
import { Component, OnInit, OnDestroy, signal, computed, effect, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PageBanner } from '../../shared/page-banner/page-banner';
import { SeoService } from '../../core/services/seo.service';
import { SEO_DATA } from '../../core/data/seo.data';
import { ARCHIVOS_DATA } from '../../core/data/archivo.data';
import { ArchivoDocumento } from '../../core/models/archivo';
import { MEXICO } from '../../core/data/entidades.data';
import type { Estado } from '../../core/models/entidad';
import { SOCIAL_NETWORKS } from '../../core/data/social-networks.data';
import { RUTA_CRITICA_DATA } from '../../core/data/ruta-critica.data';
import { ORGANIZACIONES_DATA } from '../../core/data/organizaciones.data';
import { Organizacion } from '../../core/models/organizacion';
import { TELEGRAM_LINKS } from '../../core/data/telegram-links';
import {
  PORTALES_OPERATIVOS,
  PORTALES_TEMATICOS,
  PORTALES_TRANSVERSALES,
  PORTALES_TERRITORIALES,
  PortalInfo,
  ACRONIMO_ORG_MAP
} from '../../core/data/portales.data';
import {
  CATEGORIAS,
  EJES_FILTRO,
  FORMATOS_FILTRO,
  ORGANIGRAMA_GRUPOS,
  ORGANIGRAMA_SUMMARY_BADGES,
  EJE_BADGE_CLASSES,
  EJE_ACCORDION_LABELS,
  EJE_DOT_COLORS,
  CategoriaFiltro,
  getTipoOrganoLabel,
  getTipoOrganoBadgeClass,
  getTipoOrganoIcon,
  getFormatIcon,
  getFormatBadgeClass,
  getFormatAction,
  getFormatBadgeLabel,
  getNivelBadgeClass,
  personalizeText,
  personalizeDesc,
  personalizeDescComision,
  getGenericPluralName,
  isMockUrl
} from '../../core/constants/archivo.constants';
import { ESTADO_PORTAL_MAP, ESTADO_PORTAL_DEFAULT } from '../../core/constants/estados-portales.constants';
import { NIVELES_ARCHIVO } from '../../core/data/niveles.data';
import { getRedesComision, getRedesComisionCompleto } from '../../core/data/redes.data';
import { ArchivoFiltros } from './parts/archivo-filtros/archivo-filtros';
import { ArchivoInicio } from './parts/archivo-inicio/archivo-inicio';
import { ArchivoRedesSociales } from './parts/archivo-redes-sociales/archivo-redes-sociales';
import { ArchivoRutaCritica } from './parts/archivo-ruta-critica/archivo-ruta-critica';
import { ArchivoOrganigrama } from './parts/archivo-organigrama/archivo-organigrama';
import { ArchivoDirectorios } from './parts/archivo-directorios/archivo-directorios';
import { ArchivoDocumentos } from './parts/archivo-documentos/archivo-documentos';

// ─── Interfaces del Organigrama ───────────────────────────────────
export interface OrganigramaNode {
  org: Organizacion;
  children: OrganigramaNode[];
}

export interface OrganigramaGroup {
  ejeId: string;
  ejeName: string;
  ejeIcon: string;
  ejeColor: string;
  nodos: OrganigramaNode[];
}
// ───────────────────────────────────────────────────────────────────

interface EjesExpansionState {
  operativo: boolean;
  tematico: boolean;
  transversal: boolean;
  territorial: boolean;
  estatal: boolean;
}

@Component({
  selector: 'migala-archivo',
  imports: [CommonModule, FormsModule, PageBanner, ArchivoFiltros, ArchivoInicio, ArchivoRedesSociales, ArchivoRutaCritica, ArchivoOrganigrama, ArchivoDirectorios, ArchivoDocumentos],
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
  /** Obtiene redes sociales de una comisión/órgano por su ID */
  protected readonly getRedesComision = getRedesComision;
  /** Obtiene redes + Telegram de una comisión/órgano */
  protected readonly getRedesComisionCompleto = getRedesComisionCompleto;
  /** Detecta si una URL es un placeholder (mock) aún sin reemplazar */
  protected readonly isMockUrl = isMockUrl;

  // ─── Lógica para la sección de Portales de Transparencia ───
  protected readonly viewMode = signal<'portales' | 'tabla'>('portales');
  protected readonly expandedEjes = signal<EjesExpansionState>({
    operativo: true,
    tematico: true,
    transversal: false,
    territorial: false,
    estatal: false
  });

  protected readonly portalesOperativos: PortalInfo[] = PORTALES_OPERATIVOS;
  protected readonly portalesTematicos: PortalInfo[] = PORTALES_TEMATICOS;
  protected readonly portalesTransversales: PortalInfo[] = PORTALES_TRANSVERSALES;
  protected readonly portalesTerritoriales: PortalInfo[] = PORTALES_TERRITORIALES;

  protected readonly portalesEstatales = computed<PortalInfo[]>(() => {
    return MEXICO.estados.map(e => {
      const config = ESTADO_PORTAL_MAP[e.id] ?? ESTADO_PORTAL_DEFAULT;

      const stateOrg = this.organizaciones().find(org => org.tipo === 'comision_estatal' && org.nombre.toLowerCase().includes(e.nombre.toLowerCase()));

      return {
        id: e.id,
        seccion: e.nombre,
        acronimo: e.abreviatura.replace('.', ''),
        logoIcon: config.logoIcon,
        nivel: config.nivel as PortalInfo['nivel'],
        telegramUrl: stateOrg?.telegramUrl
      };
    });
  });

  // ─── Fuente de Datos ─────────────────────────
  protected readonly documentos = signal<ArchivoDocumento[]>(ARCHIVOS_DATA);
  protected readonly organizaciones = signal<Organizacion[]>(ORGANIZACIONES_DATA);
  protected readonly estados = MEXICO.estados;

  /** Órganos/comisiones (excluye ejes estructurales y horizontalidad) para vista de redes sociales */
  protected readonly comisiones = computed<Organizacion[]>(() => {
    return this.organizaciones().filter(o => !o.id.startsWith('eje-') && o.id !== 'horizontalidad');
  });

  // ─── Señales de Filtro ───────────────────────
  protected readonly selectedCategory = signal<string>('inicio');
  protected readonly selectedEje = signal<string>('todos');
  protected readonly selectedFormat = signal<string>('todos');
  protected readonly searchQuery = signal<string>('');
  protected readonly selectedSubseccion = signal<string>('todos');
  protected readonly selectedEstado = signal<string>('todos');
  protected readonly estadosSubmenuExpanded = signal<boolean>(false);

  // ─── Listas de Configuración de Filtros ──────
  protected readonly categorias: CategoriaFiltro[] = CATEGORIAS;
  protected readonly ejes = EJES_FILTRO;
  protected readonly formatos = FORMATOS_FILTRO;

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
              nombre: personalizeText(doc.nombre, 'Comisiones Estatales', `Comisión Estatal de ${estadoObj.nombre}`),
              descripcion: personalizeDesc(doc.descripcion, estadoObj.nombre)
            };
          }
        }

        // B. Personalización por Subsección
        if (sub !== 'todos') {
          const comisionInfo = this.getComisionInfo(sub);
          if (comisionInfo && doc.eje === comisionInfo.eje) {
            return {
              ...doc,
              nombre: personalizeText(doc.nombre, getGenericPluralName(doc.eje), `Comisión de ${comisionInfo.seccion}`),
              descripcion: personalizeDescComision(doc.descripcion, comisionInfo.seccion)
            };
          }
        }

        return doc;
      });
  });

  protected readonly filteredOrganizaciones = computed(() => {
    const list = this.organizaciones();
    const cat = this.selectedCategory();
    const eje = this.selectedEje();
    const query = this.searchQuery().toLowerCase().trim();
    const sub = this.selectedSubseccion();
    const estadoId = this.selectedEstado();

    if (cat !== 'directorios') {
      return [];
    }

    return list.filter(org => {
      // 1. Filtrado por Eje / Ámbito
      if (eje !== 'todos') {
        if (eje === 'operativo' && org.eje !== 'operativo') return false;
        if (eje === 'tematico' && org.eje !== 'ideologico') return false;
        if (eje === 'transversal' && org.eje !== 'transversal') return false;
        if (eje === 'territorial' && (org.eje !== 'territorial' || org.tipo === 'comision_estatal')) return false;
        if (eje === 'estatal' && org.tipo !== 'comision_estatal') return false;
      }

      // 2. Filtrado por Subsección (Acrónimo) — usando ACRONIMO_ORG_MAP
      if (sub !== 'todos') {
        const orgId = ACRONIMO_ORG_MAP[sub];
        if (orgId) {
          const matchesIdOrParent = org.id === orgId || org.parentId === orgId;
          if (!matchesIdOrParent) return false;
        } else {
          return false;
        }
      }

      // 3. Filtrado por Estado
      if (estadoId !== 'todos') {
        const estadoObj = MEXICO.estados.find(e => e.id === estadoId);
        if (estadoObj) {
          const nameMatches = org.nombre.toLowerCase().includes(estadoObj.nombre.toLowerCase()) && org.tipo === 'comision_estatal';
          if (!nameMatches) return false;
        }
      }

      // 4. Filtrado por Búsqueda de Texto
      if (query) {
        const matchesName = org.nombre.toLowerCase().includes(query);
        const matchesDesc = org.descripcion.toLowerCase().includes(query);
        const matchesSiglas = org.siglas ? org.siglas.toLowerCase().includes(query) : false;
        const matchesTipo = org.tipo.toLowerCase().includes(query);
        return matchesName || matchesDesc || matchesSiglas || matchesTipo;
      }

      return true;
    });
  });

  // ─── Árbol Jerárquico del Organigrama ────────
  protected readonly organigramaAgrupado = computed<OrganigramaGroup[]>(() => {
    const orgs = this.organizaciones();
    const map = new Map<string, OrganigramaNode>();

    orgs.forEach(org => {
      map.set(org.id, { org, children: [] });
    });

    map.forEach(node => {
      if (node.org.parentId && map.has(node.org.parentId)) {
        map.get(node.org.parentId)!.children.push(node);
      }
    });

    const grupos: OrganigramaGroup[] = ORGANIGRAMA_GRUPOS.map(g => ({ ...g, nodos: [] }));

    grupos.forEach(g => {
      const ejeNode = map.get(`eje-${g.ejeId}`);
      if (ejeNode && ejeNode.children.length > 0) {
        g.nodos.push(...ejeNode.children);
      }
    });

    const hNode = map.get('horizontalidad');
    if (hNode) {
      const gT = grupos.find(gx => gx.ejeId === 'transversal');
      if (gT) gT.nodos.push(hNode);
    }

    return grupos.filter(g => g.nodos.length > 0);
  });

  // ─── Datos y constantes expuestas al template ──
  protected readonly nivelesArchivo = NIVELES_ARCHIVO;
  protected readonly ejeBadgeClasses = EJE_BADGE_CLASSES;
  protected readonly ejeAccordionLabels = EJE_ACCORDION_LABELS;
  protected readonly ejeDotColors = EJE_DOT_COLORS;
  protected readonly organigramaSummaryBadges = ORGANIGRAMA_SUMMARY_BADGES;

  // ─── Funciones de utilidad expuestas al template ──
  // Envoltorios para que el template pueda llamar a funciones importadas
  protected readonly getNivelBadgeClass = getNivelBadgeClass;
  protected readonly getTipoOrganoIcon = getTipoOrganoIcon;
  protected readonly getTipoOrganoBadgeClass = getTipoOrganoBadgeClass;
  protected readonly getTipoOrganoLabel = getTipoOrganoLabel;
  protected readonly getFormatIcon = getFormatIcon;
  protected readonly getFormatBadgeClass = getFormatBadgeClass;
  protected readonly getFormatAction = getFormatAction;
  protected readonly getFormatBadgeLabel = getFormatBadgeLabel;

  // ─── Estado de expansión de nodos en el árbol ───
  protected readonly expandedTreeNodes = signal<Set<string>>(new Set());

  protected toggleTreeNode(nodeId: string): void {
    this.expandedTreeNodes.update(s => {
      const next = new Set(s);
      if (next.has(nodeId)) {
        next.delete(nodeId);
      } else {
        next.add(nodeId);
      }
      return next;
    });
  }

  protected isTreeNodeExpanded(nodeId: string): boolean {
    return this.expandedTreeNodes().has(nodeId);
  }

  constructor() {
    const seo = SEO_DATA['archivo'];
    this.seoService.generateTags({
      title: seo.title,
      description: seo.description,
      url: seo.url
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
    this.routeSub = this.route.queryParams.subscribe(params => {
      let hasParams = false;
      if (params['categoria']) {
        const catExists = this.categorias.some(c => c.id === params['categoria']);
        if (catExists) {
          this.selectedCategory.set(params['categoria']);
          hasParams = true;
        }
      }
      if (params['eje']) {
        const ejeExists = this.ejes.some(e => e.id === params['eje']);
        if (ejeExists) {
          this.selectedEje.set(params['eje']);
          hasParams = true;
        }
      }
      if (params['subseccion']) {
        this.selectedSubseccion.set(params['subseccion']);
        hasParams = true;
      }
      if (params['estado']) {
        const estExists = MEXICO.estados.some(e => e.id === params['estado']);
        if (estExists) {
          this.selectedEstado.set(params['estado']);
          hasParams = true;
        }
      }
      if (params['buscar']) {
        this.searchQuery.set(params['buscar']);
        hasParams = true;
      }
      
      if (hasParams) {
        this.viewMode.set('tabla');
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

  protected toggleEje(ejeId: string): void {
    const key = ejeId as keyof EjesExpansionState;
    this.expandedEjes.update(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
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
