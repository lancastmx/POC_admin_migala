import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import type { WritableSignal } from '@angular/core';
import type { PortalInfo } from '../../../../core/data/portales.data';
import type { NivelArchivo } from '../../../../core/data/niveles.data';

@Component({
  selector: 'migala-archivo-inicio',
  standalone: true,
  imports: [],
  templateUrl: './archivo-inicio.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArchivoInicio {
  @Input({ required: true }) nivelesArchivo!: NivelArchivo[];
  @Input({ required: true }) viewMode!: WritableSignal<'portales' | 'tabla'>;
  @Input({ required: true }) expandedEjes!: WritableSignal<{ operativo: boolean; tematico: boolean; transversal: boolean; territorial: boolean; estatal: boolean }>;
  @Input({ required: true }) portalesOperativos!: PortalInfo[];
  @Input({ required: true }) portalesTematicos!: PortalInfo[];
  @Input({ required: true }) portalesTransversales!: PortalInfo[];
  @Input({ required: true }) portalesTerritoriales!: PortalInfo[];
  @Input({ required: true }) portalesEstatales!: PortalInfo[];
  @Input({ required: true }) ejeAccordionLabels!: Record<string, { label: string; uppercase: string; badge: string }>;
  @Input({ required: true }) ejeBadgeClasses!: Record<string, string>;
  @Input({ required: true }) toggleEje!: (ejeId: string) => void;
  @Input({ required: true }) selectSubseccionFromPortal!: (subId: string, ejeId: string) => void;
  @Input({ required: true }) selectEstadoFromPortal!: (estadoId: string) => void;
  @Input({ required: true }) selectCategory!: (id: string) => void;
  @Input({ required: true }) getNivelBadgeClass!: (nivel: string) => string;
  @Input({ required: true }) getCategoryLabel!: (catId: string) => string;
}
