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
      detalle: 'Plantilla Base Reutilizable (Boilerplate) de Transparencia y Auto-Administración para Comisiones Estatales, Temáticas y Grupos Operativos (Nombre en código: POC_admin_migala).',
      detallesExtra: [
        { key: 'Nombre del Software', val: 'POC_admin_migala' },
        { key: 'Propósito', val: 'Boilerplate / Plantilla Base de Transparencia' },
        { key: 'Tipo de Proyecto', val: 'Herramienta de Software Descentralizada' }
      ]
    },
    {
      id: '02',
      seccion: 'Proponente',
      nombre: 'Nombre de la persona que propone',
      icon: '👤',
      detalle: 'Desarrollado de forma abierta por miembros de Proyecto Migala para capacitar y dar soberanía tecnológica a cada órgano local de la organización.',
      detallesExtra: [
        { key: 'GitHub Proponente', val: 'https://github.com/lancastmx' },
        { key: 'Eje de Participación', val: 'Comisión de Informática y Tecnología' },
        { key: 'Modo de Trabajo', val: 'Código Abierto y Comunitario' }
      ]
    },
    {
      id: '03',
      seccion: 'Descripción',
      nombre: 'Descripción de la propuesta',
      icon: '📝',
      detalle: 'Un boilerplate modular en Angular 21+, Tailwind CSS v4 y Signals listo para desplegar. Permite a cualquier Comisión Estatal o Temática crear y autoadministrar su propio portal de transparencia simplemente editando archivos JSON/TypeScript de configuración.',
      detallesExtra: [
        { key: 'Tecnologías Clave', val: 'Angular 21+, Tailwind CSS v4, Signals' },
        { key: 'Componentes Core', val: 'Visualizador de Reglamentos, Lector de Manifiesto y Biblioteca de Archivos' },
        { key: 'Personalización', val: 'Edición de datos locales sin necesidad de programar' }
      ]
    },
    {
      id: '04',
      seccion: 'Justificación',
      nombre: '¿En qué consiste y cuál es el fin? (Justificación)',
      icon: '💡',
      detalle: 'El reglamento nacional exige un espacio de transparencia (Notion, Reglamento interno o Página web) para consolidar y reconocer formalmente a las comisiones locales. Este boilerplate democratiza el acceso a tecnología premium, permitiendo que comisiones locales cumplan con estos requisitos de forma autónoma, sin costo y de manera soberana.',
      detallesExtra: [
        { key: 'Foco Principal', val: 'Cumplimiento de requisitos de consolidación (Artículos 158 y 159)' },
        { key: 'Soberanía Digital', val: 'Gestión local autónoma de minutas, finanzas y reglamentos' },
        { key: 'Estandarización', val: 'Mantener la identidad visual y estándares del Proyecto Migala' }
      ]
    },
    {
      id: '05',
      seccion: 'Destinatarios',
      nombre: '¿A quién o quiénes va dirigido?',
      icon: '👥',
      detalle: 'A todas las Comisiones Estatales (CE), Comisiones Temáticas (CT) y Grupos Operativos (GO) que requieran auto-administrar su información, y a los afiliados/ciudadanos interesados en auditar cada nodo local.',
      detallesExtra: [
        { key: 'Administradores Locales', val: 'Enlaces de comunicación y archivo de cada comisión' },
        { key: 'Lectores Locales', val: 'Afiliados y simpatizantes de cada entidad o grupo' },
        { key: 'Sociedad Civil', val: 'Público general con interés en la transparencia horizontal' }
      ]
    },
    {
      id: '06',
      seccion: 'Recursos',
      nombre: '¿Qué recursos se necesitan? (RRHH y Materiales)',
      icon: '🛠️',
      detalle: 'Recursos Humanos: 1 o 2 desarrolladores para soporte y mantenimiento del core; 1 enlace de cada comisión local para configurar sus datos. Recursos Materiales: Repositorio plantilla en GitHub y hosting estático gratuito (Firebase Hosting o GitHub Pages).',
      detallesExtra: [
        { key: 'Soporte del Core', val: 'Desarrolladores voluntarios de Informática Nacional' },
        { key: 'Hosting y Dominio', val: 'Gratuitos y autogestionados por cada comisión local' },
        { key: 'Facilidad de Uso', val: 'No requiere conocimientos avanzados de programación' }
      ]
    },
    {
      id: '07',
      seccion: 'Afluencia',
      nombre: '¿Cuál sería la afluencia estimada de personas?',
      icon: '📈',
      detalle: 'Adopción proyectada en las 32 Comisiones Estatales, las 6 Comisiones Temáticas y múltiples grupos operativos, llegando potencialmente a miles de afiliados locales consultando sus portales de manera directa.',
      detallesExtra: [
        { key: 'Comisiones Objetivo', val: '32 comisiones estatales y 6 temáticas' },
        { key: 'Usuarios Finales', val: 'Toda la militancia y simpatizantes locales en sus respectivos territorios' },
        { key: 'Impacto Organizativo', val: 'Descentralización real del acceso a la información' }
      ]
    },
    {
      id: '08',
      seccion: 'Ubicación',
      nombre: 'En qué lugar se llevará a cabo',
      icon: '🌐',
      detalle: 'Implementación virtual y distribuida a nivel nacional. Cada órgano o comisión local clona, configura y aloja su copia del portal de manera autónoma en la nube.',
      detallesExtra: [
        { key: 'Desarrollo del Core', val: 'Esfuerzo colaborativo en línea (GitHub)' },
        { key: 'Alojamiento', val: 'Servidores cloud con despliegues independientes y autónomos' },
        { key: 'Acceso', val: 'Cualquier dispositivo con conexión a internet' }
      ]
    },
    {
      id: '09',
      seccion: 'Cronograma',
      nombre: '¿Cuál será la fecha y la duración?',
      icon: '📅',
      detalle: 'Fase 1 (POC del Boilerplate): Completada. Fase 2 (Prueba Piloto): Implementación en 2 comisiones estatales piloto (2 semanas). Fase 3 (Lanzamiento Nacional): Despliegue masivo en Julio de 2026.',
      detallesExtra: [
        { key: 'Fase 1: POC funcional', val: 'Completada (con suite de tests integrados)' },
        { key: 'Fase 2: Piloto', val: '2 comisiones locales piloto para validación y manuales' },
        { key: 'Fase 3: Lanzamiento', val: 'Julio 2026 (disponibilidad general del repositorio plantilla)' }
      ]
    },
    {
      id: '10',
      seccion: 'Contacto',
      nombre: 'Medio para comunicarse',
      icon: '✉️',
      detalle: 'Canales del proponente y soporte del boilerplate para guiar a las comisiones locales en su configuración y despliegue autónomo.',
      detallesExtra: [
        { key: 'Telegram', val: 't.me/Lancast5' },
        { key: 'GitHub', val: 'https://github.com/lancastmx' },
        { key: 'Soporte del Core', val: 'Canal de Informática y Tecnología' }
      ]
    }
  ];

  protected readonly activeItem = computed(() => {
    const tabId = this.activeTabId();
    return this.items.find(item => item.id === tabId) || this.items[0];
  });

  constructor() {
    inject(SeoService).generateTags({
      title: 'Propuesta de Plantilla de Transparencia y Auto-Administración - Proyecto Migala',
      description: 'Propuesta formal de una plantilla base (boilerplate) de transparencia y auto-administración para comisiones y órganos de Proyecto Migala.',
      url: 'https://poc-admin-migala.web.app/propuesta'
    });
  }

  protected selectTab(id: string): void {
    this.activeTabId.set(id);
  }

  protected isLink(val: string): boolean {
    return val.startsWith('http://') || val.startsWith('https://') || val.startsWith('t.me/');
  }

  protected getLinkUrl(val: string): string {
    if (val.startsWith('t.me/')) {
      return `https://${val}`;
    }
    return val;
  }
}
