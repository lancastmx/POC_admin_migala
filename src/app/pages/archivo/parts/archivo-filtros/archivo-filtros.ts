/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  parts-archivo-001
 * title:  ARCHIVO_FILTROS — Panel lateral de filtros del Archivo
 * type:   component
 * tags:   [angular, archivo, filtros, sidebar, filters]
 * author: lancast
 * created: 2026-06-15
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 *
 * Panel lateral de filtros extraído del componente Archivo.
 * Recibe signals + métodos del padre para mantener el estado
 * en el componente principal.
 */

import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { WritableSignal } from '@angular/core';
import type { PortalInfo } from '../../../../core/data/portales.data';

export interface CategoriaFiltro {
  id: string;
  label: string;
  icon: string;
}

export interface EjeFiltro {
  id: string;
  label: string;
}

export interface FormatoFiltro {
  id: string;
  label: string;
}

@Component({
  selector: 'migala-archivo-filtros',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './archivo-filtros.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArchivoFiltros {
  // ─── Signals (mutables desde el template) ──────
  @Input({ required: true }) selectedCategory!: WritableSignal<string>;
  @Input({ required: true }) selectedEje!: WritableSignal<string>;
  @Input({ required: true }) selectedSubseccion!: WritableSignal<string>;
  @Input({ required: true }) selectedEstado!: WritableSignal<string>;
  @Input({ required: true }) selectedFormat!: WritableSignal<string>;
  @Input({ required: true }) estadosSubmenuExpanded!: WritableSignal<boolean>;

  // ─── Data lists ────────────────────────────────
  @Input({ required: true }) categorias!: CategoriaFiltro[];
  @Input({ required: true }) ejes!: EjeFiltro[];
  @Input({ required: true }) formatos!: FormatoFiltro[];
  @Input({ required: true }) portalesOperativos!: PortalInfo[];
  @Input({ required: true }) portalesTematicos!: PortalInfo[];
  @Input({ required: true }) portalesTransversales!: PortalInfo[];
  @Input({ required: true }) portalesTerritoriales!: PortalInfo[];
  @Input({ required: true }) ejeAccordionLabels!: Record<string, { label: string; uppercase: string; badge: string }>;
  @Input({ required: true }) estados!: { id: string; nombre: string; abreviatura: string }[];

  // ─── Callbacks ─────────────────────────────────
  @Input({ required: true }) selectCategory!: (id: string) => void;
  @Input({ required: true }) selectEjeSolo!: (id: string) => void;
  @Input({ required: true }) selectSubseccion!: (subId: string, ejeId: string) => void;
  @Input({ required: true }) selectEstado!: (id: string) => void;
  @Input({ required: true }) clearFilters!: () => void;
}
