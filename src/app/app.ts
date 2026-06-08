import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topbar } from './layout/topbar/topbar';
import { Footer } from './layout/footer/footer';
import { DarkModeService } from './core/services/dark-mode.service';

@Component({
  selector: 'migala-root',
  imports: [RouterOutlet, Topbar, Footer],
  templateUrl: './app.html'
})
export class App {
  constructor() {
    // DarkModeService se auto-inicializa via providedIn:'root'
    // Se instancia al ser inyectado en Topbar (primer componente que lo necesita)
  }
}
