import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topbar } from './layout/topbar/topbar';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'migala-root',
  imports: [RouterOutlet, Topbar, Footer],
  templateUrl: './app.html'
})
export class App {}
