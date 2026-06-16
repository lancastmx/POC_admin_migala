import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import type { RutaCritica } from '../../../../core/models/ruta-critica';

@Component({
  selector: 'migala-archivo-ruta-critica',
  standalone: true,
  imports: [],
  templateUrl: './archivo-ruta-critica.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArchivoRutaCritica {
  @Input({ required: true }) rutaCritica!: RutaCritica;
}
