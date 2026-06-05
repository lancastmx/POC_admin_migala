import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TOP_MENU } from './top-menu';

@Component({
  selector: 'migala-topbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './topbar.html'
})
export class Topbar {
  protected readonly menu = TOP_MENU;
}
