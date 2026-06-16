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
  /** Cómo renderizar los detallesExtra: 'card-grid' (default) | 'timeline' */
  layout?: 'card-grid' | 'timeline';
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
    detalle: 'Es una plataforma web completa que proporciona la interfaz y la estructura de un portal de transparencia para cada Comisión Estatal, Comisión Temática o Grupo Operativo. La parte visible (frontend) ya está armada y lista para mostrar la información de cada comisión. Sin embargo, cada órgano local necesita un programador o mantenedor técnico que se encargue del despliegue, la configuración del backend (Node + TypeScript con API REST y GraphQL), la base de datos (Firebase) y el alojamiento del sitio. La ventaja es que no se parte de cero: la interfaz, los componentes y la lógica base ya están resueltos; el esfuerzo local se concentra en ponerlo en marcha y mantenerlo actualizado.',
    fundamento: 'Art. 159, fracc. 3',
    detallesExtra: [
      { key: 'Stack Frontend', val: 'Angular 21+ (standalone, Signals, OnPush), Tailwind CSS v4, Bun, Vitest' },
      { key: 'Stack Backend', val: 'Node.js + TypeScript, API REST y GraphQL, Firebase (Auth + Firestore + Storage)' },
      { key: 'Componentes Existentes', val: 'Reglamento, Estructura, Archivo, Ruta Crítica, Propuesta, Directorio, Auth (template), Organigrama, Topbar' },
      { key: 'Componentes Pendientes', val: 'Dashboard de usuario, Gestor de perfiles, Roles y permisos (Admin/Enlace/Lector), CRUD de documentos, Panel de analíticas' },
      { key: 'Personalización Local', val: 'Edición de datos de contenido en archivos .data.ts (textos, imágenes, documentos). No requiere backend para la parte estática.' },
      { key: 'Arquitectura', val: 'Frontend standalone + Backend Node/TS desacoplado (principios hexagonal/clean architecture). Comunicación vía REST + GraphQL.' }
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
    detalle: 'Recursos Humanos: Se requiere al menos 1 desarrollador o mantenedor técnico por comisión local para el despliegue, configuración del backend (Node + TypeScript con REST/GraphQL sobre Firebase) y mantenimiento del sitio. A nivel nacional, 2 o 3 desarrolladores mantienen el core (frontend + backend). Cada comisión designa también un enlace no técnico para cargar los datos de contenido (documentos, integrantes, noticias). Recursos Materiales: Repositorio en GitHub con la plantilla, cuenta gratuita de Firebase (Auth + Firestore + Storage) y servicio de hosting (Firebase Hosting, Cloudflare Pages, Vercel, etc.).',
    fundamento: 'Art. 159, fracc. 6',
    detallesExtra: [
      { key: 'Soporte del Core (Nacional)', val: 'Desarrolladores voluntarios de la Comisión Nacional de Informática y Tecnología — mantienen frontend y backend base' },
      { key: 'Mantenedor Local', val: 'Cada comisión requiere 1 persona con conocimientos de Node/TypeScript, Git y Firebase para desplegar y mantener su portal' },
      { key: 'Enlace de Contenido', val: '1 persona por comisión (perfil no técnico) encargada de mantener actualizados los documentos, integrantes y noticias' },
      { key: 'Hosting y Dominio', val: 'Gratuitos y autogestionados por cada comisión local (Firebase Free, Cloudflare Pages, Vercel, GitHub Pages)' },
      { key: 'DevOps', val: 'El repositorio incluye configuración de CI/CD (GitHub Actions) para despliegue automático al hacer push a la rama principal' },
      { key: 'Stack Requerido (backend)', val: 'Node.js 20+, TypeScript, Firebase CLI, conocimiento de REST y GraphQL' },
      { key: 'Stack Requerido (frontend)', val: 'Angular CLI, Bun, Tailwind CSS v4 — opcional para personalizar la interfaz' }
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
      { key: 'Contribuidores Necesarios (Core)', val: '2-3 devs fullstack (Angular + Node/TS), 1 dev backend (Node/TS + REST + GraphQL), 1 diseñador UI/UX' },
      { key: 'Mantenedores Locales', val: '1 programador por comisión (Node/TS + Git + Firebase) para desplegar y mantener su instancia' },
      { key: 'Habilidades Valoradas', val: 'Angular 21+, Node.js + TypeScript, API REST/GraphQL, Firebase (Auth, Firestore, Storage), Tailwind CSS v4, Bun' }
    ]
  },
  {
    id: '08',
    seccion: 'Ubicación',
    nombre: 'En qué lugar se llevará a cabo',
    icon: '🌐',
    detalle: 'Implementación virtual y distribuida a nivel nacional. Cada órgano o comisión local clona el repositorio, configura su backend (Node + TypeScript + Firebase) y despliega su propio portal de manera autónoma. El equipo nacional mantiene el core centralizado, pero cada comisión es responsable de su propia instancia, sus datos y su disponibilidad.',
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
    detalle: 'Cronograma actualizado al 16/06/2026 — Hemos completado la fase de documentos básicos (lo que toda comisión debe tener) y ahora arrancamos con la fase de desarrollo de backend, autenticación y dashboard de usuario. El plan está organizado por semanas para dar visibilidad y facilitar la contribución.',
    layout: 'timeline',
    fundamento: 'Art. 159, fracc. 9',
    detallesExtra: [
      // ─── ✅ COMPLETADO (Semanas 1-24) ───────────────────────
      { key: '✅', val: 'Completado — Semanas 1-24' },
      { key: 'Portada, afiliación y estructura organizativa', val: '✅ Completado — Sem 1-8' },
      { key: 'Organigrama interactivo', val: '✅ Completado — Sem 9' },
      { key: 'Visualizador del Reglamento Nacional', val: '✅ Completado — Sem 10-12' },
      { key: 'Ruta Crítica Nacional + Propuesta', val: '✅ Completado — Sem 13-16' },
      { key: 'Directorios y Archivo (documentos por sección)', val: '✅ Completado — Sem 17-20' },
      { key: 'Página de autenticación (template) + pulido general', val: '✅ Completado — Sem 21-24' },
      // ─── 📋 SIGUIENTES SEMANAS ──────────────────────────────
      { key: '📋', val: 'Objetivos Semanales — Q3-Q4 2026' },
      { key: 'Semana 25 (15-21 Jun)', val: 'Diseñar wireframes del dashboard personal (roles: admin, enlace, lector)' },
      { key: 'Semana 26 (22-28 Jun)', val: 'Configurar Firebase project + Firestore + Firebase Auth (email y Google OAuth)' },
      { key: 'Semana 27 (29 Jun-5 Jul)', val: 'Implementar login, register y verificación de email. Proteger rutas con guards.' },
      { key: 'Semana 28 (6-12 Jul)', val: 'Modelo de datos: Perfiles con roles. CRUD básico de usuarios desde admin.' },
      { key: 'Semana 29 (13-19 Jul)', val: 'Dashboard admin: listar comisiones, asignar roles, ver métricas básicas.' },
      { key: 'Semana 30 (20-26 Jul)', val: 'Dashboard enlace: subir/edit/eliminar documentos de su comisión.' },
      { key: 'Semana 31 (27 Jul-2 Ago)', val: 'Dashboard lector: consultar documentos, filtrar por sección y tipo.' },
      { key: 'Semana 32 (3-9 Ago)', val: 'Sistema de archivos: subida de PDF/imágenes a Firebase Storage.' },
      { key: 'Semana 33 (10-16 Ago)', val: 'Buscador full-text + filtros combinados (sección, tipo, fecha, palabra clave).' },
      { key: 'Semana 34 (17-23 Ago)', val: 'Notificaciones internas: actividad reciente, documentos nuevos por comisión.' },
      { key: 'Semana 35 (24-30 Ago)', val: 'Pruebas unitarias y de integración (Vitest).' },
      { key: 'Semana 36 (31 Ago-6 Sep)', val: 'QA interno: corregir bugs, pulir UI/UX responsive, validar flujos completos.' },
      { key: 'Semana 37-40 (Sep-Oct)', val: 'Preparar piloto: manuales, seleccionar 2 comisiones, onboarding.' },
      { key: 'Semana 41-44 (Oct-Nov)', val: 'Piloto con 2 comisiones reales. Retroalimentación y ajustes.' },
      { key: 'Semana 45-52 (Nov-Dic)', val: 'Refinar según feedback, documentar APIs, preparar release.' },
      { key: 'Q1 2027 (Ene-Mar)', val: 'Lanzamiento nacional escalonado. Repositorio plantilla disponible para todas las comisiones.' }
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
