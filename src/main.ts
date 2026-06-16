/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  root-004
 * title:  MAIN — Punto de entrada de la aplicación
 * type:   root
 * tags:   [angular, bootstrap, entry-point]
 * author: lancast
 * created: 2026-06-10
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 */
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
