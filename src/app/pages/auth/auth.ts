/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  page-auth-001
 * title:  AUTH — Página de autenticación (template)
 * type:   page
 * tags:   [angular, page, auth, login, register, account]
 * author: lancast
 * created: 2026-06-16
 * updated: 2026-06-16
 * ───────────────────────────────────────────────────────────────────
 */
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

export type AuthTab = 'login' | 'register' | 'account';

@Component({
  selector: 'migala-auth',
  imports: [RouterLink],
  templateUrl: './auth.html'
})
export class Auth {
  protected readonly activeTab = signal<AuthTab>('login');

  protected setTab(tab: AuthTab): void {
    this.activeTab.set(tab);
  }
}
