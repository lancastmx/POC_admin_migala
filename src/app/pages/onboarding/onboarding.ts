import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageBanner } from '../../shared/page-banner/page-banner';
import {
  COMISIONES_TIPOS,
  CATALOGO_DOCUMENTOS,
  PROCESO_CONSOLIDACION,
  OnboardingComisionTipo,
} from '../../core/data/onboarding.data';

type Seccion = 'checklist' | 'documentos' | 'proceso';

interface SeccionItem {
  key: Seccion;
  label: string;
  icon: string;
}

@Component({
  selector: 'migala-onboarding',
  standalone: true,
  imports: [CommonModule, RouterModule, PageBanner],
  templateUrl: './onboarding.html',
  styleUrls: ['./onboarding.css'],
})
export default class OnboardingComponent {
  readonly comisionesTipos = COMISIONES_TIPOS;
  readonly catalogoDocumentos = CATALOGO_DOCUMENTOS;
  readonly procesoConsolidacion = PROCESO_CONSOLIDACION;

  readonly secciones: SeccionItem[] = [
    { key: 'checklist', label: '✅ Checklist por Comisión', icon: '✅' },
    { key: 'documentos', label: '📋 Catálogo de Documentos', icon: '📋' },
    { key: 'proceso', label: '🔷 Paso a Paso', icon: '🔷' },
  ];

  activeSeccion = signal<Seccion>('checklist');
  selectedTipo = signal<'estatal' | 'tematica' | 'transversal'>('estatal');

  readonly selectedComision = computed<OnboardingComisionTipo>(() => {
    return this.comisionesTipos.find((c) => c.tipo === this.selectedTipo())!;
  });

  readonly completados = signal<Set<string>>(new Set());

  toggleRequisito(id: string) {
    this.completados.update((set) => {
      const newSet = new Set(set);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }

  readonly progreso = computed(() => {
    const reqs = this.selectedComision().requisitos;
    const total = reqs.length;
    const done = [...this.completados()].filter((id) =>
      reqs.some((r) => r.id === id)
    ).length;
    return total > 0 ? Math.round((done / total) * 100) : 0;
  });

  readonly todosCompletados = computed(
    () => this.progreso() === 100
  );

  selectSeccion(seccion: Seccion) {
    this.activeSeccion.set(seccion);
  }
}
