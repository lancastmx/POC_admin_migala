import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Transparencia } from './pages/transparencia/transparencia';
import { UnderConstruction } from './shared/under-construction/under-construction';
import { PageNotFound } from './shared/page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'transparencia', component: Transparencia },
  { path: 'archivo', component: UnderConstruction },
  { path: 'privacidad', component: UnderConstruction },
  { path: '**', component: PageNotFound },
];
