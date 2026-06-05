import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TOP_MENU } from './top-menu';

@Component({
  selector: 'migala-topbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './topbar.html'
})
export class Topbar {
  protected readonly menu = TOP_MENU;
  protected readonly isMenuOpen = signal(false);

  protected toggleMenu(): void {
    this.isMenuOpen.update(v => !v);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
