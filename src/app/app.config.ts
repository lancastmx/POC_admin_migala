/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  root-002
 * title:  APP_CONFIG — Configuración raíz de la aplicación Angular
 * type:   root
 * tags:   [angular, config, bootstrap, providers]
 * author: lancast
 * created: 2026-06-10
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 */
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
