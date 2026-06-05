import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Transparencia } from './pages/transparencia/transparencia';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'transparencia', component: Transparencia },
];
