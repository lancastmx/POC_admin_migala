/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  root-001
 * title:  APP — Componente raíz de la aplicación
 * type:   root
 * tags:   [angular, root, component, shell]
 * author: lancast
 * created: 2026-06-10
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 */
import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Topbar } from './layout/topbar/topbar';
import { Footer } from './layout/footer/footer';
import { DarkModeService } from './core/services/dark-mode.service';

@Component({
  selector: 'migala-root',
  imports: [RouterOutlet, Topbar, Footer],
  templateUrl: './app.html'
})
export class App {
  constructor(private router: Router) {
    // DarkModeService se auto-inicializa via providedIn:'root'
    // Se instancia al ser inyectado en Topbar (primer componente que lo necesita)
  }

  get showFooter(): boolean {
    return !this.router.url.includes('/asamblea');
  }
}
