/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  data-012
 * title:  PROPUESTA.DATA — Items de la propuesta política
 * type:   data
 * tags:   [angular, data, proposal, political, content]
 * author: lancast
 * created: 2026-06-15
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 *
 * Items de la propuesta política de Proyecto Migala.
 * Extraído de la página propuesta.ts para mantener los datos
 * separados de la lógica de presentación.
 */

export interface PropuestaItem {
  id: string;
  nombre: string;
  icon: string;
  seccion: string;
  detalle: string;
  detallesExtra?: { key: string; val: string }[];
  /** Artículo(s) del reglamento que respaldan este requisito */
  fundamento?: string;
}

export const PROPUESTA_ITEMS: PropuestaItem[] = [
  {
    id: '01',
    seccion: 'Nombre',
    nombre: 'Nombre de la propuesta',
    icon: '🏷️',
    detalle: 'Plantilla Base Reutilizable (Boilerplate) de Transparencia y Auto-Administración para Comisiones Estatales, Temáticas y Grupos Operativos (Nombre en código: POC_admin_migala).',
    fundamento: 'Art. 159, fracc. 1',
    detallesExtra: [
      { key: 'Nombre del Software', val: 'POC_admin_migala' },
      { key: 'Propósito', val: 'Boilerplate / Plantilla Base de Transparencia' },
      { key: 'Tipo de Proyecto', val: 'Herramienta de Software Descentralizada' },
      { key: 'Stack Tecnológico', val: 'Angular 21+ (standalone components, Signals, OnPush) + Tailwind CSS v4 + Bun 1.3.14 + Vitest + Firebase (por definir)' },
      { key: 'Repositorio', val: 'https://github.com/lancastmx/POC_admin_migala' }
    ]
  },
  {
    id: '02',
    seccion: 'Proponente',
    nombre: 'Nombre de la persona que propone',
    icon: '👤',
    detalle: 'Desarrollado de forma abierta por miembros de Proyecto Migala para capacitar y dar soberanía tecnológica a cada órgano local de la organización.',
    fundamento: 'Art. 159, fracc. 2',
    detallesExtra: [
      { key: 'GitHub Proponente', val: 'https://github.com/lancastmx' },
      { key: 'Eje de Participación', val: 'Comisión de Informática y Tecnología' },
      { key: 'Modo de Trabajo', val: 'Código Abierto y Comunitario' },
      { key: 'Rol Requerido', val: 'Contribuidor técnico — cualquier persona con conocimientos de Angular, Firebase o diseño UI puede sumarse' },
      { key: 'Cómo Contribuir', val: 'Hacer fork del repo, crear rama, desarrollar y abrir Pull Request. Revisión por el equipo core.' }
    ]
  },
  {
    id: '03',
    seccion: 'Descripción',
    nombre: 'Descripción de la propuesta',
    icon: '📝',
    detalle: 'Un boilerplate modular en Angular 21+, Tailwind CSS v4 y Signals listo para desplegar. Permite a cualquier Comisión Estatal o Temática crear y autoadministrar su propio portal de transparencia simplemente editando archivos JSON/TypeScript de configuración.',
    fundamento: 'Art. 159, fracc. 3',
    detallesExtra: [
      { key: 'Tecnologías Clave', val: 'Angular 21+ (standalone), Tailwind CSS v4, Signals, Bun, Vitest' },
      { key: 'Componentes Existentes', val: 'Reglamento, Estructura, Archivo, Ruta Crítica, Propuesta, Directorio, Auth (template), Organigrama, Topbar' },
      { key: 'Componentes Pendientes', val: 'Dashboard de usuario, Gestor de perfiles, Roles y permisos (Admin/Enlace/Lector), CRUD de documentos, Panel de analíticas' },
      { key: 'Personalización', val: 'Edición de datos locales en archivos .data.ts (sin necesidad de backend)' },
      { key: 'Arquitectura', val: 'Componentes standalone con detección OnPush, servicios con Signals, lazy loading por ruta' }
    ]
  },
  {
    id: '04',
    seccion: 'Justificación',
    nombre: '¿En qué consiste y cuál es el fin? (Justificación)',
    icon: '💡',
    detalle: 'El reglamento nacional exige un espacio de transparencia (Notion, Reglamento interno o Página web) para consolidar y reconocer formalmente a las comisiones locales. Este boilerplate democratiza el acceso a tecnología premium, permitiendo que comisiones locales cumplan con estos requisitos de forma autónoma, sin costo y de manera soberana.',
    fundamento: 'Art. 159, fracc. 4',
    detallesExtra: [
      { key: 'Foco Principal', val: 'Cumplimiento de requisitos de consolidación (Artículos 158 y 159 del Reglamento Nacional)' },
      { key: 'Soberanía Digital', val: 'Gestión local autónoma de minutas, finanzas y reglamentos (sin dependencia de grandes plataformas)' },
      { key: 'Estandarización', val: 'Mantener la identidad visual y estándares del Proyecto Migala en todas las comisiones' },
      { key: 'Problema que Resuelve', val: 'Actualmente cada comisión local no tiene un espacio digital propio estandarizado, lo que dificulta la transparencia, la rendición de cuentas y la cohesión organizativa.' },
      { key: 'Diferenciador', val: 'Código 100% abierto, autogestionable, sin costo de licencias ni suscripciones' }
    ]
  },
  {
    id: '05',
    seccion: 'Destinatarios',
    nombre: '¿A quién o quiénes va dirigido?',
    icon: '👥',
    detalle: 'A todas las Comisiones Estatales (CE), Comisiones Temáticas (CT) y Grupos Operativos (GO) que requieran auto-administrar su información, y a los afiliados/ciudadanos interesados en auditar cada nodo local.',
    fundamento: 'Art. 159, fracc. 5',
    detallesExtra: [
      { key: 'Administradores Locales', val: 'Enlaces de comunicación y archivo de cada comisión estatal/temática (perfil: admin)' },
      { key: 'Militancia Local', val: 'Afiliados registrados que consultan documentos, minutas y finanzas de su comisión (perfil: lector)' },
      { key: 'Coordinación Nacional', val: 'Órganos nacionales que auditan la transparencia de cada nodo local' },
      { key: 'Sociedad Civil', val: 'Público general con interés en la transparencia horizontal del Proyecto Migala' },
      { key: 'Desarrolladores', val: 'Voluntarios de la Comisión de Informática y Tecnología que mantienen y evolucionan el core' }
    ]
  },
  {
    id: '06',
    seccion: 'Recursos',
    nombre: '¿Qué recursos se necesitan? (RRHH y Materiales)',
    icon: '🛠️',
    detalle: 'Recursos Humanos: 1 o 2 desarrolladores para soporte y mantenimiento del core; 1 enlace de cada comisión local para configurar sus datos. Recursos Materiales: Repositorio plantilla en GitHub y hosting estático gratuito (Firebase Hosting o GitHub Pages).',
    fundamento: 'Art. 159, fracc. 6',
    detallesExtra: [
      { key: 'Soporte del Core', val: 'Desarrolladores voluntarios de la Comisión Nacional de Informática y Tecnología' },
      { key: 'Hosting y Dominio', val: 'Gratuitos y autogestionados por cada comisión local (Firebase Free, GitHub Pages, Cloudflare)' },
      { key: 'Facilidad de Uso', val: 'El enlace local solo edita archivos de datos (sin programar); la plantilla se despliega automáticamente' },
      { key: 'DevOps', val: 'El repositorio incluye configuración de CI/CD (GitHub Actions) para despliegue automático al hacer push' },
      { key: 'Documentación para Devs', val: 'README con instrucciones de desarrollo, testing y contribución. Estructura modular para añadir nuevas secciones' }
    ]
  },
  {
    id: '07',
    seccion: 'Afluencia',
    nombre: '¿Cuál sería la afluencia estimada de personas?',
    icon: '📈',
    detalle: 'Adopción proyectada en las 32 Comisiones Estatales, las 6 Comisiones Temáticas y múltiples grupos operativos, llegando potencialmente a miles de afiliados locales consultando sus portales de manera directa.',
    fundamento: 'Art. 159, fracc. 7',
    detallesExtra: [
      { key: 'Comisiones Objetivo', val: '32 comisiones estatales y 6 temáticas' },
      { key: 'Usuarios Finales', val: 'Toda la militancia y simpatizantes locales en sus respectivos territorios' },
      { key: 'Impacto Organizativo', val: 'Descentralización real del acceso a la información' },
      { key: 'Contribuidores Necesarios', val: '2-3 devs frontend (Angular), 1-2 devs backend (Firebase/Node), 1 diseñador UI/UX, 1 tester por comisión piloto' },
      { key: 'Habilidades Valoradas', val: 'Angular 21+, Tailwind CSS v4, Firebase/Firestore, diseño de sistemas de diseño (design systems)' }
    ]
  },
  {
    id: '08',
    seccion: 'Ubicación',
    nombre: 'En qué lugar se llevará a cabo',
    icon: '🌐',
    detalle: 'Implementación virtual y distribuida a nivel nacional. Cada órgano o comisión local clona, configura y aloja su copia del portal de manera autónoma en la nube.',
    fundamento: 'Art. 159, fracc. 8',
    detallesExtra: [
      { key: 'Desarrollo del Core', val: 'Esfuerzo colaborativo en línea vía GitHub — https://github.com/lancastmx/POC_admin_migala' },
      { key: 'Alojamiento', val: 'Servidores cloud con despliegues independientes y autónomos (Firebase Hosting, GitHub Pages, Cloudflare Pages)' },
      { key: 'Acceso', val: 'Cualquier dispositivo con conexión a internet (responsive: móvil, tablet y escritorio)' },
      { key: 'Idioma', val: 'Español (México) inicialmente; preparado para i18n futuro' }
    ]
  },
  {
    id: '09',
    seccion: 'Cronograma',
    nombre: '¿Cuál será la fecha y la duración?',
    icon: '📅',
    detalle: 'Cronograma actualizado al 16/06/2026 — Hemos completado la fase de documentos básicos (lo que toda comisión debe tener: portada, afiliación, estructura, organigrama, reglamento, ruta crítica, propuesta y directorios). Sin embargo, la UI/UX de usuario logueado (dashboard personal, gestión de perfiles, roles y sesiones) y todo el backend (API REST o Firebase Functions, autenticación, base de datos) está todavía en desarrollo. Julio 2026 se ve optimista como fecha de lanzamiento general — la meta realista es tener un MVP funcional para septiembre-octubre 2026, y el despliegue nacional escalonado durante el primer trimestre de 2027.',
    fundamento: 'Art. 159, fracc. 9',
    detallesExtra: [
      { key: 'Fase 1: Documentos Básicos (POC estático)', val: 'Completada al 16/06/26 — Portada, afiliación, estructura, organigrama, reglamento, ruta crítica, propuesta, directorios y página de autenticación (template). Suite de tests incorporada.' },
      { key: 'Fase 2: UI/UX de sesión y backend', val: 'EN DESARROLLO — Dashboard personal, perfiles por rol (admin/enlace/lector), gestión de archivos, registro de usuarios con verificación. Requiere: autenticación (OAuth/Firebase), base de datos en tiempo real, API de documentos.' },
      { key: 'Fase 3: Piloto con 2 comisiones locales', val: 'Meta: Octubre 2026 — Despliegue de prueba con 2 comisiones estatales reales, manuales de uso, retroalimentación y ajustes.' },
      { key: 'Fase 4: Lanzamiento nacional escalonado', val: 'Meta: 1er trimestre 2027 — Disponibilidad general del repositorio plantilla para cualquier comisión estatal/temática que desee adoptarlo.' },
      { key: 'Hito alcanzado', val: '16/06/2026 — POC estático navegable con 8 secciones informativas completas' }
    ]
  },
  {
    id: '10',
    seccion: 'Contacto',
    nombre: 'Medio para comunicarse',
    icon: '✉️',
    detalle: 'Canales del proponente y soporte del boilerplate para guiar a las comisiones locales en su configuración y despliegue autónomo.',
    fundamento: 'Art. 159, fracc. 10',
    detallesExtra: [
      { key: 'Telegram (Proponente)', val: 't.me/Lancast5' },
      { key: 'GitHub (Repositorio)', val: 'https://github.com/lancastmx/POC_admin_migala' },
      { key: 'GitHub (Perfil)', val: 'https://github.com/lancastmx' },
      { key: 'Canal de Soporte', val: 'Comisión Nacional de Informática y Tecnología (Telegram)' },
      { key: 'Medio Preferido', val: 'Issues de GitHub para temas técnicos; Telegram para coordinación general' }
    ]
  }
];
