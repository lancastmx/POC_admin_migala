import { Component, input } from '@angular/core';

@Component({
  selector: 'migala-empty-state',
  templateUrl: './empty-state.html'
})
export class EmptyState {
  readonly icon = input<string>('');
  readonly title = input<string>('Sin contenido');
  readonly message = input<string>('No hay información disponible en este momento.');
}
