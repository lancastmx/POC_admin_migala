import { Component, signal } from '@angular/core';
import { COMISIONES_TEMATICAS, COMISIONES_ESTATALES, Comision } from '../../core/constants/comisiones.constants';

@Component({
  selector: 'migala-asamblea',
  imports: [],
  templateUrl: './asamblea.html',
  styleUrl: './asamblea.css',
})
export class Asamblea {
  activeTab = signal<string>('general');
  comisionesTematicas = COMISIONES_TEMATICAS;
  comisionesEstatales = COMISIONES_ESTATALES;

  // Mock de las comisiones a las que el usuario está suscrito
  // (Según el reglamento: mínimo 1 estatal y 1 temática)
  misComisionesIds = ['jalisco', 'ciencia'];

  get misComisiones(): Comision[] {
    return [...this.comisionesTematicas, ...this.comisionesEstatales]
      .filter(c => this.misComisionesIds.includes(c.id));
  }

  get activeTabTitle(): string {
    const tab = this.activeTab();
    if (tab === 'general') return 'Timeline Público';
    if (tab === 'about') return 'Acerca de';
    
    const c = [...this.comisionesTematicas, ...this.comisionesEstatales].find(x => x.id === tab);
    return c ? `Comisión: ${c.nombre}` : 'Timeline';
  }
}
