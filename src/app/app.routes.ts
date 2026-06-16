/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  root-003
 * title:  APP_ROUTES — Definición de rutas de la aplicación
 * type:   root
 * tags:   [angular, routes, navigation, lazy-loading]
 * author: lancast
 * created: 2026-06-10
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 */
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Manifiesto } from './pages/manifiesto/manifiesto';
import { Transparencia } from './pages/transparencia/transparencia';
import { UnderConstruction } from './shared/under-construction/under-construction';
import { PageNotFound } from './shared/page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', component: Home, title: 'Inicio - Transparencia Proyecto Migala' },
  { path: 'manifiesto', component: Manifiesto, title: 'Manifiesto - Proyecto Migala' },
  { path: 'transparencia', component: Transparencia, title: 'Transparencia - Proyecto Migala' },
  { path: 'reglamento', loadComponent: () => import('./pages/reglamento/reglamento').then(m => m.Reglamento), title: 'Reglamento Nacional - Proyecto Migala' },
  { path: 'reglamento/estatal/:id', loadComponent: () => import('./pages/reglamento/reglamento').then(m => m.Reglamento), title: 'Reglamento Estatal - Proyecto Migala' },
  { path: 'estructura', loadComponent: () => import('./pages/estructura/estructura').then(m => m.Estructura), title: 'Estructura y Gobernanza - Proyecto Migala' },
  { path: 'archivo', loadComponent: () => import('./pages/archivo/archivo').then(m => m.Archivo), title: 'Archivo - Proyecto Migala' },
  { path: 'propuesta', loadComponent: () => import('./pages/propuesta/propuesta').then(m => m.Propuesta), title: 'Propuesta de Proyecto - Proyecto Migala' },
  { path: 'ruta-critica', loadComponent: () => import('./pages/ruta-critica/ruta-critica').then(m => m.RutaCritica), title: 'Ruta Crítica - Proyecto Migala' },
  { path: 'bienvenida', loadComponent: () => import('./pages/onboarding/onboarding'), title: 'Bienvenida y Consolidación - Proyecto Migala' },
  { path: 'auth', loadComponent: () => import('./pages/auth/auth').then(m => m.Auth), title: 'Iniciar Sesión - Proyecto Migala' },
  { path: 'privacidad', component: UnderConstruction, title: 'Aviso de Privacidad - Proyecto Migala' },
  { path: '**', component: PageNotFound, title: 'Página no Encontrada - Proyecto Migala' },
];
