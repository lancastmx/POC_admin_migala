import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import type { WritableSignal } from '@angular/core';
import type { Organizacion } from '../../../../core/models/organizacion';
import type { RedComision } from '../../../../core/models/social-network';

@Component({
  selector: 'migala-archivo-directorios',
  standalone: true,
  imports: [],
  templateUrl: './archivo-directorios.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArchivoDirectorios {
  @Input({ required: true }) filteredOrganizaciones!: Organizacion[];
  @Input({ required: true }) selectedEje!: WritableSignal<string>;
  @Input({ required: true }) selectedSubseccion!: WritableSignal<string>;
  @Input({ required: true }) selectedEstado!: WritableSignal<string>;
  @Input({ required: true }) searchQuery!: WritableSignal<string>;
  @Input({ required: true }) getTipoOrganoLabel!: (tipo: string) => string;
  @Input({ required: true }) getTipoOrganoBadgeClass!: (tipo: string) => string;
  @Input({ required: true }) getTipoOrganoIcon!: (tipo: string) => string;
  @Input({ required: true }) getRedesComisionCompleto!: (orgId: string) => RedComision[];
  @Input({ required: true }) getEjeLabel!: (ejeId: string) => string;
  @Input({ required: true }) clearFilters!: () => void;

  /** Clases de fondo por tipo de red */
  protected readonly tipoBgClass: Partial<Record<string, string>> = {
    social:   'bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-white border-cyan-500/20',
    contacto: 'bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white border-emerald-500/20',
    canal:    'bg-purple-500/10 hover:bg-purple-500 text-purple-400 hover:text-white border-purple-500/20',
  };
}
