import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import type { SocialNetwork, RedComision } from '../../../../core/models/social-network';
import type { Organizacion } from '../../../../core/models/organizacion';

@Component({
  selector: 'migala-archivo-redes-sociales',
  standalone: true,
  imports: [],
  templateUrl: './archivo-redes-sociales.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArchivoRedesSociales {
  @Input({ required: true }) socialNetworks!: SocialNetwork[];
  @Input({ required: true }) comisiones!: Organizacion[];
  @Input({ required: true }) getRedesComisionCompleto!: (orgId: string) => RedComision[];
}
