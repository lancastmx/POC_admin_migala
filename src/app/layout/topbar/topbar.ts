import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'migala-topbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './topbar.html'
})
export class Topbar {}
