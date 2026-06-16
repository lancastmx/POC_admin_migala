/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  svc-001
 * title:  DARK_MODE_SERVICE — Gestión de modo oscuro con persistencia
 * type:   service
 * tags:   [angular, service, dark-mode, theme, localStorage]
 * author: lancast
 * created: 2026-06-10
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 */
import { Injectable, signal } from '@angular/core';

const STORAGE_KEY = 'darkMode';

@Injectable({ providedIn: 'root' })
export class DarkModeService {
  readonly isDark = signal(false);

  constructor() {
    const stored = localStorage.getItem(STORAGE_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored !== null ? stored === 'true' : prefersDark;
    this.isDark.set(initial);
    document.documentElement.classList.toggle('dark', initial);
  }

  toggle(): void {
    const next = !this.isDark();
    this.isDark.set(next);
    localStorage.setItem(STORAGE_KEY, String(next));
    document.documentElement.classList.toggle('dark', next);
  }
}
