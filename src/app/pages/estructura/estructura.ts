import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ORGANIZACIONES_DATA } from '../../core/data/organizaciones.data';
import { PROCEDIMIENTOS_DATA } from '../../core/data/procedimientos.data';
import { Organizacion, EjeEstructural } from '../../core/models/organizacion';
import { Procedimiento } from '../../core/models/procedimiento';

export interface TextSegment {
  type: 'text' | 'rol' | 'organo' | 'documento' | 'requisito';
  content: string;
  id?: string;
  tipo?: string;
  valor?: string;
}

@Component({
  selector: 'migala-estructura',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './estructura.html',
  styleUrl: './estructura.css'
})
export class Estructura {
  // ─── Fuentes de Datos ────────────────────────
  protected readonly organizaciones = signal<Organizacion[]>(ORGANIZACIONES_DATA);
  protected readonly procedimientos = signal<Procedimiento[]>(PROCEDIMIENTOS_DATA);

  // ─── Filtros y Selección ─────────────────────
  protected readonly activeTab = signal<'organigrama' | 'procedimientos'>('organigrama');
  protected readonly searchQuery = signal('');
  protected readonly ejeFilter = signal<EjeEstructural | 'todos'>('todos');
  protected readonly selectedOrganId = signal<string>('org-coordinacion-nacional');
  protected readonly selectedProcedureId = signal<string>('proc-crear-comision-tematica');

  // ─── Querys Computadas ───────────────────────
  
  /** Lista de órganos filtrados por búsqueda y eje */
  protected readonly filteredOrganizaciones = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const eje = this.ejeFilter();
    let list = this.organizaciones();

    if (eje !== 'todos') {
      list = list.filter(o => o.eje === eje);
    }

    if (query) {
      list = list.filter(o =>
        o.nombre.toLowerCase().includes(query) ||
        (o.siglas?.toLowerCase().includes(query) ?? false) ||
        o.descripcion.toLowerCase().includes(query)
      );
    }

    return list;
  });

  /** Órgano seleccionado actualmente */
  protected readonly selectedOrgan = computed(() => {
    const id = this.selectedOrganId();
    return this.organizaciones().find(o => o.id === id) ?? null;
  });

  /** Padre del órgano seleccionado */
  protected readonly selectedOrganParent = computed(() => {
    const organ = this.selectedOrgan();
    if (!organ || !organ.parentId) return null;
    return this.organizaciones().find(o => o.id === organ.parentId) ?? null;
  });

  /** Subgrupos del órgano seleccionado */
  protected readonly selectedOrganChildren = computed(() => {
    const organ = this.selectedOrgan();
    if (!organ) return [];
    return this.organizaciones().filter(o => organ.subgruposIds.includes(o.id));
  });

  /** Procedimiento seleccionado actualmente */
  protected readonly selectedProcedure = computed(() => {
    const id = this.selectedProcedureId();
    return this.procedimientos().find(p => p.id === id) ?? null;
  });

  // ─── UI Actions ──────────────────────────────

  protected selectOrgan(id: string): void {
    const exists = this.organizaciones().some(o => o.id === id);
    if (exists) {
      this.selectedOrganId.set(id);
      this.activeTab.set('organigrama'); // Auto switch tab if referencing from FAQ/Procedure
    }
  }

  protected selectProcedure(id: string): void {
    const exists = this.procedimientos().some(p => p.id === id);
    if (exists) {
      this.selectedProcedureId.set(id);
      this.activeTab.set('procedimientos');
    }
  }

  // ─── XML Parser de Textos ────────────────────

  /**
   * Parser seguro que descompone una cadena con formato XML en segmentos tipados.
   * Evita el uso de innerHTML y sanitizaciones inseguras.
   */
  protected parseXmlDescription(text: string): TextSegment[] {
    if (!text) return [];
    const regex = /<(rol|organo|documento|requisito)([^>]*?)>(.*?)<\/\1>/g;
    const segments: TextSegment[] = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      // Texto previo al match
      if (match.index > lastIndex) {
        segments.push({
          type: 'text',
          content: text.slice(lastIndex, match.index)
        });
      }

      const tag = match[1] as 'rol' | 'organo' | 'documento' | 'requisito';
      const attrStr = match[2];
      const content = match[3];

      // Parsear atributos sencillos (id, tipo, valor)
      const attrs: Record<string, string> = {};
      const attrRegex = /(\w+)="([^"]*?)"/g;
      let attrMatch;
      while ((attrMatch = attrRegex.exec(attrStr)) !== null) {
        attrs[attrMatch[1]] = attrMatch[2];
      }

      segments.push({
        type: tag,
        content,
        id: attrs['id'],
        tipo: attrs['tipo'],
        valor: attrs['valor']
      });

      lastIndex = regex.lastIndex;
    }

    // Texto remanente
    if (lastIndex < text.length) {
      segments.push({
        type: 'text',
        content: text.slice(lastIndex)
      });
    }

    return segments;
  }
}
