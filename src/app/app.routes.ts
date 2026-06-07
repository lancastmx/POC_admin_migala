import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Manifiesto } from './pages/manifiesto/manifiesto';
import { Transparencia } from './pages/transparencia/transparencia';
import { UnderConstruction } from './shared/under-construction/under-construction';
import { PageNotFound } from './shared/page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'manifiesto', component: Manifiesto },
  { path: 'transparencia', component: Transparencia },
  { path: 'archivo', component: UnderConstruction },
  { path: 'privacidad', component: UnderConstruction },
  { path: '**', component: PageNotFound },
];
