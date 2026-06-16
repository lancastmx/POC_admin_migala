/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  data-013
 * title:  ONBOARDING.DATA — Guía de Consolidación para Comisiones
 * type:   data
 * tags:   [angular, data, onboarding, consolidation, guide]
 * author: lancast
 * created: 2026-06-16
 * updated: 2026-06-16
 * ───────────────────────────────────────────────────────────────────
 *
 * Define los requisitos, documentos y pasos que cada tipo de
 * comisión debe cumplir para consolidarse, según el Reglamento
 * Nacional (Artículos 107, 109, 112 y relacionados).
 */

// ─── Requisito individual dentro del checklist ───────────────────
export interface OnboardingRequisito {
  id: string;
  texto: string;
  articulo?: string;
  icon: string;
  /** Documentos o entregables concretos que debe producir */
  documentos?: string[];
}

// ─── Tipo de comisión (estatal / temática / transversal) ─────────
export interface OnboardingComisionTipo {
  tipo: 'estatal' | 'tematica' | 'transversal';
  titulo: string;
  siglasLabel: string;
  articulos: string;
  descripcion: string;
  color: string;
  requisitos: OnboardingRequisito[];
}

// ─── Paso del proceso de consolidación ───────────────────────────
export interface OnboardingPaso {
  id: string;
  titulo: string;
  descripcion: string;
  icon: string;
  duracion?: string;
  enlace?: { path: string; label: string };
}

// ─── Catálogo de documento básico ────────────────────────────────
export interface CatalogoDocumento {
  id: string;
  nombre: string;
  descripcion: string;
  obligatorio: boolean;
  aplica: ('estatal' | 'tematica' | 'transversal')[];
  icon: string;
}

// ══════════════════════════════════════════════════════════════════
//  DATA
// ══════════════════════════════════════════════════════════════════

export const COMISIONES_TIPOS: OnboardingComisionTipo[] = [
  {
    tipo: 'estatal',
    titulo: 'Comisión Estatal',
    siglasLabel: 'CE',
    articulos: 'Art. 107',
    color: 'migala',
    descripcion:
      'Órgano que agrupa a la militancia de un estado. Es el centro de operación territorial del Proyecto Migala.',
    requisitos: [
      {
        id: 'ce-representantes',
        texto: 'Nombrar 2 representantes (respetando paridad de género)',
        articulo: 'Art. 107, fracc. I',
        icon: '👥',
        documentos: ['Oficio de designación de representantes', 'Acta de asamblea estatal'],
      },
      {
        id: 'ce-paridad',
        texto: 'Apegarse a las reglas de Paridad de Género y Acciones Afirmativas',
        articulo: 'Art. 107, fracc. II',
        icon: '⚖️',
      },
      {
        id: 'ce-estructura',
        texto: 'Contar con el mínimo de titulares de su estructura orgánica',
        articulo: 'Art. 107, fracc. III',
        icon: '🏛️',
        documentos: [
          'Organigrama estatal con titulares asignados',
          'Formato de registro de integrantes',
        ],
      },
      {
        id: 'ce-reglamento',
        texto: 'Contar con un Reglamento Estatal',
        articulo: 'Art. 107, fracc. IV',
        icon: '📜',
        documentos: ['Reglamento estatal (basado en el Nacional)'],
      },
      {
        id: 'ce-diagnostico',
        texto: 'Contar con un Diagnóstico Interno',
        articulo: 'Art. 107, fracc. V',
        icon: '🔍',
        documentos: ['Documento de diagnóstico estatal'],
      },
      {
        id: 'ce-ruta-critica',
        texto: 'Contar con un Plan de Acción o Ruta Crítica Estatal',
        articulo: 'Art. 107, fracc. VI',
        icon: '🗺️',
        documentos: ['Plan de acción estatal', 'Ruta crítica estatal'],
      },
      {
        id: 'ce-transparencia',
        texto: 'Contar con un Notion o Página de Transparencia',
        articulo: 'Art. 107, fracc. VII',
        icon: '🌐',
        documentos: [
          'Portal de transparencia (este boilerplate)',
          'Catálogo de información fundamental',
        ],
      },
    ],
  },
  {
    tipo: 'tematica',
    titulo: 'Comisión Temática',
    siglasLabel: 'CT',
    articulos: 'Art. 109',
    color: 'teal',
    descripcion:
      'Órgano especializado en un tema específico (Informática, Transparencia, Formación, etc.). Opera a nivel nacional.',
    requisitos: [
      {
        id: 'ct-representantes',
        texto: 'Nombrar 2 representantes (respetando paridad de género)',
        articulo: 'Art. 109, fracc. I',
        icon: '👥',
        documentos: ['Oficio de designación de representantes'],
      },
      {
        id: 'ct-reglamento',
        texto: 'Contar con un Reglamento Interno de Trabajo',
        articulo: 'Art. 109, fracc. II',
        icon: '📜',
        documentos: ['Reglamento interno de la comisión temática'],
      },
      {
        id: 'ct-diagnostico',
        texto: 'Contar con un Diagnóstico Interno',
        articulo: 'Art. 109, fracc. III',
        icon: '🔍',
        documentos: ['Documento de diagnóstico temático'],
      },
      {
        id: 'ct-ruta-critica',
        texto: 'Contar con un Plan de Acción o Ruta Crítica',
        articulo: 'Art. 109, fracc. IV',
        icon: '🗺️',
        documentos: ['Plan de acción temática', 'Ruta crítica temática'],
      },
      {
        id: 'ct-transparencia',
        texto: 'Contar con un Notion o Página de Transparencia',
        articulo: 'Art. 109, fracc. V',
        icon: '🌐',
        documentos: ['Portal de transparencia (este boilerplate)'],
      },
    ],
  },
  {
    tipo: 'transversal',
    titulo: 'Grupo Transversal',
    siglasLabel: 'GT',
    articulos: 'Art. 112',
    color: 'amber',
    descripcion:
      'Grupo de trabajo que atraviesa múltiples ejes. Enfoque en proyectos específicos de corto y mediano plazo.',
    requisitos: [
      {
        id: 'gt-representante',
        texto: 'Nombrar un representante',
        articulo: 'Art. 112, fracc. I',
        icon: '👤',
        documentos: ['Oficio de designación de representante'],
      },
      {
        id: 'gt-reglamento',
        texto: 'Contar con un Reglamento Interno de Trabajo',
        articulo: 'Art. 112, fracc. II',
        icon: '📜',
        documentos: ['Reglamento interno del grupo transversal'],
      },
      {
        id: 'gt-diagnostico',
        texto: 'Contar con un Diagnóstico Interno',
        articulo: 'Art. 112, fracc. III',
        icon: '🔍',
        documentos: ['Documento de diagnóstico'],
      },
      {
        id: 'gt-ruta-critica',
        texto: 'Contar con un Plan de Acción o Ruta Crítica',
        articulo: 'Art. 112, fracc. IV',
        icon: '🗺️',
        documentos: ['Plan de acción', 'Ruta crítica'],
      },
      {
        id: 'gt-transparencia',
        texto: 'Contar con un Notion o Página de Transparencia',
        articulo: 'Art. 112, fracc. V',
        icon: '🌐',
        documentos: ['Portal de transparencia'],
      },
    ],
  },
];

// ══════════════════════════════════════════════════════════════════

export const CATALOGO_DOCUMENTOS: CatalogoDocumento[] = [
  {
    id: 'reglamento-interno',
    nombre: 'Reglamento Interno',
    descripcion:
      'Documento que establece las normas específicas de operación de la comisión, basado en el Reglamento Nacional y adaptado a su contexto local o temático.',
    obligatorio: true,
    aplica: ['estatal', 'tematica', 'transversal'],
    icon: '📜',
  },
  {
    id: 'diagnostico',
    nombre: 'Diagnóstico Interno',
    descripcion:
      'Análisis de la situación actual de la comisión: fortalezas, debilidades, oportunidades y amenazas. Sirve como línea base para el plan de acción.',
    obligatorio: true,
    aplica: ['estatal', 'tematica', 'transversal'],
    icon: '🔍',
  },
  {
    id: 'plan-accion',
    nombre: 'Plan de Acción / Ruta Crítica',
    descripcion:
      'Hoja de ruta con objetivos, actividades, responsables y fechas. Define el rumbo de la comisión en el corto, mediano y largo plazo.',
    obligatorio: true,
    aplica: ['estatal', 'tematica', 'transversal'],
    icon: '🗺️',
  },
  {
    id: 'portal-transparencia',
    nombre: 'Portal de Transparencia',
    descripcion:
      'Espacio digital (Notion o página web) donde se publica la información fundamental de la comisión: integrantes, minutas, finanzas, acuerdos, reglamentos.',
    obligatorio: true,
    aplica: ['estatal', 'tematica', 'transversal'],
    icon: '🌐',
  },
  {
    id: 'minutas',
    nombre: 'Minutas de Reuniones',
    descripcion:
      'Registro escrito de cada reunión ordinaria y extraordinaria, con acuerdos, tareas asignadas y fechas de cumplimiento.',
    obligatorio: true,
    aplica: ['estatal', 'tematica', 'transversal'],
    icon: '📝',
  },
  {
    id: 'padron-integrantes',
    nombre: 'Padrón de Integrantes',
    descripcion:
      'Lista oficial de las personas que integran la comisión, con nombre, cargo, datos de contacto y fecha de ingreso.',
    obligatorio: true,
    aplica: ['estatal', 'tematica'],
    icon: '📋',
  },
  {
    id: 'organigrama',
    nombre: 'Organigrama',
    descripcion:
      'Representación gráfica de la estructura orgánica de la comisión con los titulares de cada área o cargo.',
    obligatorio: true,
    aplica: ['estatal'],
    icon: '🏛️',
  },
  {
    id: 'estados-financieros',
    nombre: 'Estados Financieros',
    descripcion:
      'Registro de ingresos, egresos y saldos de la comisión. Obligatorio si la comisión maneja recursos.',
    obligatorio: false,
    aplica: ['estatal', 'tematica'],
    icon: '💰',
  },
  {
    id: 'inventario',
    nombre: 'Inventario de Bienes',
    descripcion:
      'Lista de bienes muebles e inmuebles de la comisión (equipo de cómputo, mobiliario, vehículos, etc.).',
    obligatorio: false,
    aplica: ['estatal'],
    icon: '📦',
  },
  {
    id: 'convocatorias',
    nombre: 'Convocatorias y Actas',
    descripcion:
      'Convocatorias a reuniones y asambleas, junto con las actas correspondientes firmadas por los asistentes.',
    obligatorio: true,
    aplica: ['estatal', 'tematica', 'transversal'],
    icon: '📯',
  },
];

// ══════════════════════════════════════════════════════════════════

export const PROCESO_CONSOLIDACION: OnboardingPaso[] = [
  {
    id: 'paso-1',
    titulo: 'Reúne a la militancia',
    descripcion:
      'Convoca a las personas interesadas en formar parte de la comisión. Asegura la participación de al menos el mínimo requerido de integrantes y respeta la paridad de género.',
    icon: '📢',
    duracion: '1-2 semanas',
  },
  {
    id: 'paso-2',
    titulo: 'Designa representantes',
    descripcion:
      'Elige a las personas que representarán a la comisión ante la Coordinación Nacional. Las comisiones estatales y temáticas necesitan 2 representantes; los grupos transversales, 1.',
    icon: '👥',
    duracion: '1 semana',
  },
  {
    id: 'paso-3',
    titulo: 'Redacta el Reglamento Interno',
    descripcion:
      'Elabora el reglamento interno de la comisión basándote en el Reglamento Nacional. Define las reglas de operación, sesiones, toma de decisiones y faltas.',
    icon: '📜',
    duracion: '2-4 semanas',
    enlace: { path: '/reglamento', label: 'Consultar Reglamento Nacional' },
  },
  {
    id: 'paso-4',
    titulo: 'Elabora el Diagnóstico Interno',
    descripcion:
      'Analiza la situación actual de tu estado o tema: ¿qué recursos tienen?, ¿qué problemas enfrentan?, ¿qué oportunidades ven? Este documento será la base del plan de acción.',
    icon: '🔍',
    duracion: '2 semanas',
  },
  {
    id: 'paso-5',
    titulo: 'Diseña el Plan de Acción / Ruta Crítica',
    descripcion:
      'Define los objetivos, actividades, responsables y fechas. Este plan debe estar alineado con la Ruta Crítica Nacional.',
    icon: '🗺️',
    duracion: '2-3 semanas',
    enlace: { path: '/ruta-critica', label: 'Ver Ruta Crítica Nacional' },
  },
  {
    id: 'paso-6',
    titulo: 'Abre tu Portal de Transparencia',
    descripcion:
      'Crea el espacio digital donde publicarás la información de la comisión. Puedes usar este mismo boilerplate (POC_admin_migala) o un Notion. Debe contener: integrantes, reglamento, minutas, finanzas y acuerdos.',
    icon: '🌐',
    duracion: '1-2 semanas',
    enlace: { path: '/archivo', label: 'Explorar el Archivo' },
  },
  {
    id: 'paso-7',
    titulo: 'Solicita la Consolidación',
    descripcion:
      'Una vez que cumplas con todos los requisitos, envía una solicitud formal a la Coordinación de Administración, adjuntando la documentación comprobatoria. El Comité de Coordinación y Seguimiento revisará y aprobará.',
    icon: '✅',
    duracion: 'Revisión: 2-4 semanas',
  },
];
