import { Component, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageBanner } from '../../shared/page-banner/page-banner';
import { SOCIAL_NETWORKS } from '../../core/social-networks';
import { SeoService } from '../../core/services/seo.service';

interface TransparenciaItem {
  name: string;
  route: string;
}

interface TransparenciaSection {
  id: string;
  title: string;
  icon: string;
  description: string;
  items: TransparenciaItem[];
}

@Component({
  selector: 'migala-transparencia',
  imports: [PageBanner, RouterLink],
  templateUrl: './transparencia.html'
})
export class Transparencia {
  // Signal to track the currently open section ID in the accordion
  protected readonly openSectionId = signal<string | null>(null);

  // Expose core social networks to template
  protected readonly socialNetworks = SOCIAL_NETWORKS;

  constructor() {
    inject(SeoService).generateTags({
      title: 'Transparencia - Proyecto Migala',
      description: 'Acceso abierto y público a reglamentos, actas de sesiones, conversatorios, finanzas y patrimonio del Proyecto Migala de forma voluntaria y honesta.',
      url: 'https://poc-admin-migala.web.app/transparencia'
    });
  }

  // Complete data for the Transparency sections with routes
  protected readonly sections: TransparenciaSection[] = [
    {
      id: 'redes-sociales',
      title: 'Redes Sociales',
      icon: '👥',
      description: 'Aquí podrás encontrar las redes oficiales del Proyecto Migala a nivel nacional, cualquier otra red social que no sea éstas no son oficiales. Sin embargo cabe aclarar que los diferentes grupos y Comisiones Estatales pueden tener sus propias redes para diversos fines pero esas las podrás encontrar en el encabezado "Directorio".',
      items: [
        { name: 'Directorio de Redes de Comisiones Estatales', route: '/archivo' }
      ]
    },
    {
      id: 'manifiesto',
      title: 'Manifiesto',
      icon: '📋',
      description: 'Aquí podrás encontrar nuestra última versión de nuestro Manifiesto, el cual es considerado uno de los tres documentos básicos. El propósito del Manifiesto es comunicar nuestros principios, así como, nuestra ideología política de manera formal y pública.',
      items: [
        { name: 'I.- Manifiesto Proyecto Migala', route: '/manifiesto' }
      ]
    },
    {
      id: 'reglamento',
      title: 'Reglamento',
      icon: '🏛️',
      description: 'Aquí podrás encontrar el Reglamento Nacional, al igual que los reglamentos de los diferentes ejes que componen el Proyecto Migala. El Reglamento es uno de tres documentos básicos del Proyecto Migala, el cual sirve para regular la conducta de los miembros y simpatizantes del Proyecto Migala, señalar cual es la estructura organizacional, además de procedimientos del PM.',
      items: [
        { name: 'I.- Reglamento Nacional', route: '/reglamento' },
        { name: 'II.- Reglamentos de Comisiones Estatales', route: '/reglamento' },
        { name: 'III.- Reglamentos de Grupos Operativos', route: '/reglamento' },
        { name: 'IV.- Reglamentos de Comisiones Temáticas', route: '/reglamento' },
        { name: 'V.- Reglamentos de Grupo de Transversalidad', route: '/reglamento' }
      ]
    },
    {
      id: 'ruta-critica',
      title: 'Ruta Crítica',
      icon: '📌',
      description: 'Aquí podrás encontrar la Ruta Crítica nacional, así como, las estatales. La Ruta Crítica es una de los tres documentos básicos del Proyecto Migala. La Ruta Crítica tiene la función de recopilar las tareas o pasos a seguir para llevar a cabo el objetivo del Proyecto Migala que es la conformación del Partido Nacional.',
      items: [
        { name: 'I.- Ruta Crítica Nacional', route: '/archivo' },
        { name: 'II.- Ruta Crítica de Comisiones Estatales', route: '/archivo' },
        { name: 'III.- Ruta Crítica de Grupos Operativos', route: '/archivo' },
        { name: 'IV.- Ruta Crítica de Comisiones Temáticas', route: '/archivo' },
        { name: 'V.- Ruta Crítica de Grupo de Transversalidad', route: '/archivo' }
      ]
    },
    {
      id: 'directorios',
      title: 'Directorios',
      icon: '📇',
      description: 'Aquí podrás encontrar el Directorio del Proyecto Migala, el cual incluye a los cuatro ejes fundamentales. El Directorio sirve para recopilar datos que permitan identificar y/o faciliten acceder a los diferentes grupos que componen la Proyecto Migala, así como el nombre de los representantes o coordinadores de los grupos, así como, las redes sociales oficiales de los diferentes grupos y comisiones.',
      items: [
        { name: 'I.- Directorio de Comisiones Estatales', route: '/archivo' },
        { name: 'II.- Directorio de Grupos Operativos', route: '/archivo' },
        { name: 'III.- Directorio de Comisiones Temáticas', route: '/archivo' },
        { name: 'IV.- Directorio de Grupo de Transversalidad', route: '/archivo' }
      ]
    },
    {
      id: 'organigrama',
      title: 'Organigrama',
      icon: '🌿',
      description: 'Aquí podrás encontrar de forma gráfica la estructura del Proyecto Migala. El PM, se compone de cuatro ejes; El Eje Operativo, que concentra a las áreas de trabajo que garantizan la horizontalidad en el PM; El Eje Territorial, que concentra a las Comisiones Estatales cuya función es representar a las treinta y dos entidades federativas, que son la base del proyecto Migala; El Eje en Materia de Transversalidad, cuya función es la de garantizar la igualdad y equidad en el PM; El Eje Especializado en Temas Ideológicos, su principal función es la de desarrollar cuestiones relacionadas a las áreas del conocimiento humano relevantes para el Manifiesto, en otras palabras son las generadoras de ideología dentro del PM.',
      items: [
        { name: 'I.- Organigrama Nacional', route: '/archivo' },
        { name: 'II.- Organigrama de Comisiones Estatales', route: '/archivo' }
      ]
    },
    {
      id: 'sesiones',
      title: 'Sesiones',
      icon: '📺',
      description: 'Aquí podrás encontrar el listado de sesiones, así como, de sus ordenes del día, Minutas y videos. La función de las sesiones es la de tomar acuerdos de forma democrática y horizontal de forma pública y transparente, ocasionalmente servirán con fines informativos y de seguimiento. Existen dos tipos de sesiones, las ordinarias y extraordinarias, las cuales podrás conocer en el Reglamento Nacional o en el manual de "¿Cómo hacer una sesión?".',
      items: [
        { name: 'I.- Sesiones de Comisiones Estatales', route: '/archivo' },
        { name: 'II.- Sesiones de Grupos Operativos', route: '/archivo' },
        { name: 'III.- Sesiones de Comisiones Temáticas', route: '/archivo' },
        { name: 'IV.- Sesiones de Grupo de Transversalidad', route: '/archivo' }
      ]
    },
    {
      id: 'conversatorios',
      title: 'Conversatorios',
      icon: '💬',
      description: 'Aquí podrás encontrar el listado de los conversatorios realizados por el Proyecto Migala. Los Conversatorios tienen la función de ser una técnica de encuentro académico entre uno o más teóricos, intelectuales o expertos y una audiencia con la que, en conjunto, analizan y reflexionan acerca de un tema en variados campos del conocimiento, ofreciendo nuevas perspectivas a partir de sus experiencias.',
      items: [
        { name: 'I.- Conversatorios de Comisiones Estatales', route: '/archivo' },
        { name: 'II.- Conversatorios de Grupos Operativos', route: '/archivo' },
        { name: 'III.- Conversatorios de Comisiones Temáticas', route: '/archivo' },
        { name: 'IV.- Conversatorios de Grupo de Transversalidad', route: '/archivo' }
      ]
    },
    {
      id: 'calendario',
      title: 'Calendario de Actividades y Eventos',
      icon: '📅',
      description: 'Aquí podrás encontrar el calendario de los diferentes ejes donde se concentran las actividades y eventos pasados, actuales y futuros, con el fin de publicitarlos.',
      items: [
        { name: 'I.- Calendario de Actividades y Eventos de Comisiones Estatales', route: '/archivo' },
        { name: 'II.- Calendario de Actividades y Eventos de Grupos Operativos', route: '/archivo' },
        { name: 'III.- Calendario de Actividades y Eventos de Comisiones Temáticas', route: '/archivo' },
        { name: 'IV.- Calendario de Actividades y Eventos de Grupo de Transversalidad', route: '/archivo' }
      ]
    },
    {
      id: 'patrimonio',
      title: 'Patrimonio Proyecto Migala',
      icon: '💎',
      description: 'Aquí podrás encontrar el listado del patrimonio del Proyecto Migala. Ésto tiene el fin de hacer público los bienes que componen al proyecto, además de poder identificarlos para realizar su solicitud de uso en caso de estar en la disponibilidad.',
      items: [
        { name: 'I.- Patrimonio de Nacional', route: '/archivo' },
        { name: 'II.- Patrimonio de Comisiones Estatales', route: '/archivo' }
      ]
    },
    {
      id: 'ingresos-egresos',
      title: 'Ingresos y Egresos',
      icon: '🔄',
      description: 'Aquí podrás encontrar los ingresos y gastos del Proyecto Migala.',
      items: [
        { name: 'I.- Ingresos Nacionales', route: '/archivo' },
        { name: 'II.- Ingresos de Comisiones Estatales', route: '/archivo' },
        { name: 'III.- Egresos Nacionales', route: '/archivo' },
        { name: 'IV.- Egresos de Comisiones Estatales', route: '/archivo' }
      ]
    },
    {
      id: 'tramites-formatos-manuales',
      title: 'Trámites, Formatos y Manuales',
      icon: '🖨️',
      description: 'Aquí podrás encontrar tres cosas: los trámites, formatos y manuales del Proyecto Migala.\n\nLos Trámites consisten en cualquier solicitud o entrega de información que los miembros hacen a los diferentes órganos del PM, con el fin de cumplir con una responsabilidad, obtener un permiso o autorización, iniciar un procedimiento, y/o registrar información necesaria.\n\nLos Formatos son los documentos que sirven para clasificar, guardar y ordenar información requerida.\n\nLos Manuales son una recopilación de pasos o aspectos básicos con el fin de comprender un proceso o funcionamiento de algo de forma ordenado y conciso.',
      items: [
        { name: 'I.- Tramites, Formatos y Manuales Nacionales', route: '/archivo' },
        { name: 'II.- Tramites, Formatos y Manuales de Comisiones Estatales', route: '/archivo' }
      ]
    },
    {
      id: 'talleres',
      title: 'Talleres',
      icon: '💡',
      description: 'Aquí podrás encontrar el listado de todo los Talleres que ofrece el Proyecto Migala con el fin de formar y capacitar a los miembros del Proyecto Migala con el fin de generar personas preparadas, informadas y capaces de desarrollarse dentro del PM, así como, formar políticamente a los miembros.',
      items: [
        { name: 'I.- Talleres Nacionales', route: '/archivo' },
        { name: 'II.- Talleres de Comisiones Estatales', route: '/archivo' }
      ]
    }
  ];

  // Action method to toggle sections open/close
  protected toggleSection(id: string): void {
    this.openSectionId.set(this.openSectionId() === id ? null : id);
  }
}
