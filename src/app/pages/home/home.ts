import { Component, inject } from '@angular/core';
import { PageBanner } from '../../shared/page-banner/page-banner';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'migala-home',
  imports: [PageBanner],
  templateUrl: './home.html'
})
export class Home {
  constructor() {
    inject(SeoService).generateTags({
      title: 'Inicio - Transparencia Proyecto Migala',
      description: 'Portal oficial de transparencia y administración del Proyecto Migala. Consulta nuestros reglamentos, manifiesto y actas de comisiones de forma abierta y voluntaria.',
      url: 'https://poc-admin-migala.web.app'
    });
  }
}
