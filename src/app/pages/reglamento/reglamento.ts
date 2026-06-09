import { Component, signal } from '@angular/core';
import { REGLAMENTO_DATA } from '../../core/data/reglamento.data';

@Component({
  selector: 'migala-reglamento',
  imports: [],
  templateUrl: './reglamento.html',
  styleUrl: './reglamento.css',
})
export class Reglamento {
  reglamento = signal(REGLAMENTO_DATA);

  tabs = [
    { id: 'nacional', name: 'Nacional' },
    { id: 'estatales', name: 'Comisiones Estatales' },
    { id: 'operativos', name: 'Grupos Operativos' },
    { id: 'tematicas', name: 'Comisiones Temáticas' },
    { id: 'transversalidad', name: 'Grupo de Transversalidad' }
  ];

  activeTab = signal('nacional');

  setTab(tabId: string) {
    this.activeTab.set(tabId);
  }
}
