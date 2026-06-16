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
  @Input({ required: true }) getRedesComision!: (orgId: string) => RedComision[];
  @Input({ required: true }) getEjeLabel!: (ejeId: string) => string;
  @Input({ required: true }) clearFilters!: () => void;
}
