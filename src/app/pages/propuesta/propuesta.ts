import { Component, signal, computed, inject, ChangeDetectionStrategy } from '@angular/core';
import { PageBanner } from '../../shared/page-banner/page-banner';
import { SeoService } from '../../core/services/seo.service';

interface PropuestaItem {
  id: string;
  nombre: string;
  icon: string;
  seccion: string;
  detalle: string;
  detallesExtra?: { key: string; val: string }[];
}

@Component({
  selector: 'migala-propuesta',
  imports: [PageBanner],
  templateUrl: './propuesta.html',
  styleUrl: './propuesta.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Propuesta {
  protected readonly activeTabId = signal<string>('01');

  protected readonly items: PropuestaItem[] = [
    {
      id: '01',
      seccion: 'Nombre',
      nombre: 'Nombre de la propuesta',
      icon: '🏷️',
      detalle: 'Portal de Transparencia Interactiva y Fondo Documental del Proyecto Migala (Nombre en código del software: POC_admin_migala).',
      detallesExtra: [
        { key: 'Nombre Comercial', val: 'Portal de Transparencia' },
        { key: 'Identificador del Sistema', val: 'POC_admin_migala' },
        { key: 'Tipo de Proyecto', val: 'Desarrollo de Software / Herramienta Organizativa' }
      ]
    },
    {
      id: '02',
      seccion: 'Proponente',
      nombre: 'Nombre de la persona que propone',
      icon: '👤',
      detalle: 'Presentado por miembros afiliados del Proyecto Migala de forma voluntaria y colaborativa, impulsando la autogestión tecnológica de la comunidad.',
      detallesExtra: [
        { key: 'Rol', val: 'Afiliados Activos' },
        { key: 'Eje de Participación', val: 'Eje Operativo / Comisión de Informática y Transparencia' },
        { key: 'Modo de Trabajo', val: 'Colaborativo y Descentralizado' }
      ]
    },
    {
      id: '03',
      seccion: 'Descripción',
      nombre: 'Descripción de la propuesta',
      icon: '📝',
      detalle: 'Desarrollo e implementación de una plataforma web interactiva y responsiva orientada a unificar, indexar y hacer accesible al público en general toda la información oficial y de interés público de Proyecto Migala.',
      detallesExtra: [
        { key: 'Tecnologías Clave', val: 'Angular 21+, Tailwind CSS v4, Signals' },
        { key: 'Componentes Core', val: 'Visualizador de Reglamentos, Lector de Manifiesto y Biblioteca de Archivos' },
        { key: 'Accesibilidad', val: 'Reproductor de Audio integrado para lectura inclusiva' }
      ]
    },
    {
      id: '04',
      seccion: 'Justificación',
      nombre: '¿En qué consiste y cuál es el fin? (Justificación)',
      icon: '💡',
      detalle: 'Digitalizar e interconectar la trilogía documental y archivos para resolver la dispersión de datos y facilitar la consulta masiva y descentralizada de reglamentos, minutas, finanzas y calendarios de todos los ejes. Esto promueve la rendición de cuentas, la transparencia voluntaria y facilita la inducción de nuevos miembros del Censo Nacional.',
      detallesExtra: [
        { key: 'Objetivo Principal', val: 'Resolver la fragmentación de datos y archivos oficiales' },
        { key: 'Impacto en Inducción', val: 'Facilita la lectura de los 3 documentos básicos obligatorios' },
        { key: 'Principio Rector', val: 'Publicidad y Transparencia (Artículo 2 del Reglamento)' }
      ]
    },
    {
      id: '05',
      seccion: 'Destinatarios',
      nombre: '¿A quién o quiénes va dirigido?',
      icon: '👥',
      detalle: 'A todos los simpatizantes y afiliados de Proyecto Migala a nivel nacional y estatal, así como a la ciudadanía en general interesada en auditar y conocer nuestra estructura orgánica y reglamentaria.',
      detallesExtra: [
        { key: 'Público Interno', val: 'Voceros, representantes de comisiones, simpatizantes y afiliados' },
        { key: 'Público Externo', val: 'Ciudadanos y organizaciones interesadas en democracia horizontal' },
        { key: 'Alcance Geográfico', val: 'Nacional (las 32 entidades federativas)' }
      ]
    },
    {
      id: '06',
      seccion: 'Recursos',
      nombre: '¿Qué recursos se necesitan? (RRHH y Materiales)',
      icon: '🛠️',
      detalle: 'Recursos Humanos: Desarrolladores Frontend (Angular), Diseñador UX/UI y Enlaces de Transparencia/Archivo. Recursos Materiales: Repositorio en GitHub para control de código, hosting (Firebase Hosting/GitHub Pages de costo cero en niveles iniciales) y un dominio o subdominio oficial.',
      detallesExtra: [
        { key: 'Personal de Desarrollo', val: '1 Frontend Developer (Angular) + Colaboraciones de diseño' },
        { key: 'Costo de Alojamiento', val: '$0.00 MXN (utilizando capas gratuitas de hosting en la nube)' },
        { key: 'Requisitos Especiales', val: 'Asignación de dominio o subdominio por el Área de Informática' }
      ]
    },
    {
      id: '07',
      seccion: 'Afluencia',
      nombre: '¿Cuál sería la afluencia estimada de personas?',
      icon: '📈',
      detalle: 'Uso interno: 1,000+ afiliados activos mensuales en los 32 estados de la República Mexicana. Uso externo: Visitas de ciudadanos interesados en conocer la propuesta política y estructura interna del Proyecto Migala.',
      detallesExtra: [
        { key: 'Tráfico Mensual Estimado', val: '1,500 - 3,000 visitas únicas' },
        { key: 'Picos de Uso', val: 'Durante asambleas nacionales y periodos de afiliación/censos' }
      ]
    },
    {
      id: '08',
      seccion: 'Ubicación',
      nombre: 'En qué lugar se llevará a cabo',
      icon: '🌐',
      detalle: 'El desarrollo y la administración son 100% virtuales y descentralizados. La plataforma estará disponible públicamente en internet a través de cualquier dispositivo móvil o de escritorio.',
      detallesExtra: [
        { key: 'Entorno de Desarrollo', val: 'Virtual (GitHub, Slack/Telegram)' },
        { key: 'Disponibilidad de Servicio', val: '24/7 en línea, multidispositivo' }
      ]
    },
    {
      id: '09',
      seccion: 'Cronograma',
      nombre: '¿Cuál será la fecha y la duración?',
      icon: '📅',
      detalle: 'Fase 1 (POC): Completada y testeada. Fase 2 (Retroalimentación): 2 semanas a partir de la presentación formal. Fase 3 (Lanzamiento): Julio de 2026.',
      detallesExtra: [
        { key: 'Fase 1: Desarrollo Base', val: 'Finalizado (Código base estable y tests unitarios listos)' },
        { key: 'Fase 2: Período de Feedback', val: '15 días naturales tras la aprobación del proyecto' },
        { key: 'Fase 3: Despliegue', val: 'Julio 2026' }
      ]
    },
    {
      id: '10',
      seccion: 'Contacto',
      nombre: 'Medio para comunicarse',
      icon: '✉️',
      detalle: 'Canales oficiales del proponente para resolver dudas sobre el diseño, código y administración de la herramienta.',
      detallesExtra: [
        { key: 'Telegram', val: '@proyectomigalanacional' },
        { key: 'Email', val: 'tecnologia@proyectomigala.mx' },
        { key: 'Canal Alterno', val: 'Grupo de Informática y Tecnología' }
      ]
    }
  ];

  protected readonly activeItem = computed(() => {
    const tabId = this.activeTabId();
    return this.items.find(item => item.id === tabId) || this.items[0];
  });

  constructor() {
    inject(SeoService).generateTags({
      title: 'Propuesta de Portal de Transparencia - Proyecto Migala',
      description: 'Presentación formal de la propuesta de desarrollo del Portal de Transparencia y Archivo de Documentos del Proyecto Migala de acuerdo con el reglamento.',
      url: 'https://poc-admin-migala.web.app/propuesta'
    });
  }

  protected selectTab(id: string): void {
    this.activeTabId.set(id);
  }
}
