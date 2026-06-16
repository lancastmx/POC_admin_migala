import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import type { OrganigramaGroup } from '../../archivo';

@Component({
  selector: 'migala-archivo-organigrama',
  standalone: true,
  imports: [],
  templateUrl: './archivo-organigrama.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArchivoOrganigrama {
  @Input({ required: true }) organigramaAgrupado!: OrganigramaGroup[];
  @Input({ required: true }) organigramaSummaryBadges!: { ejeId: string; icon: string; label: string; badgeClass: string }[];
  @Input({ required: true }) ejeDotColors!: Record<string, string>;
  @Input({ required: true }) isTreeNodeExpanded!: (nodeId: string) => boolean;
  @Input({ required: true }) toggleTreeNode!: (nodeId: string) => void;
  @Input({ required: true }) getTipoOrganoIcon!: (tipo: string) => string;
  @Input({ required: true }) getTipoOrganoBadgeClass!: (tipo: string) => string;
  @Input({ required: true }) getTipoOrganoLabel!: (tipo: string) => string;
}
