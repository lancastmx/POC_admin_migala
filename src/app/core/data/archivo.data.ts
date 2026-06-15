import { ArchivoDocumento } from '../models/archivo';

export const ARCHIVOS_DATA: ArchivoDocumento[] = [
  // ─── Redes Sociales ──────────────────────────
  {
    id: 'doc-redes-estatales',
    nombre: 'Directorio de Redes de Comisiones Estatales',
    descripcion: 'Listado oficial con enlaces a las cuentas oficiales de Facebook, Twitter, Instagram y Telegram de cada una de las 32 comisiones estatales del Proyecto Migala.',
    categoria: 'redes-sociales',
    eje: 'estatal',
    fecha: '2026-01-10',
    fileUrl: 'https://docs.google.com/spreadsheets/d/mock-redes-estatales',
    formato: 'spreadsheet',
    peso: 'Enlace a Drive'
  },

  // ─── Ruta Crítica ────────────────────────────
  {
    id: 'doc-ruta-nacional',
    nombre: 'I.- Ruta Crítica Nacional',
    descripcion: 'Documento base nacional que define la hoja de ruta, fases, hitos y actividades críticas indispensables para lograr el registro legal como Partido Político Nacional en México.',
    categoria: 'ruta-critica',
    eje: 'nacional',
    fecha: '2026-03-15',
    fileUrl: 'https://drive.google.com/file/d/mock-ruta_critica_nacional/view',
    formato: 'pdf',
    peso: '3.2 MB'
  },
  {
    id: 'doc-ruta-estatales',
    nombre: 'II.- Ruta Crítica de Comisiones Estatales',
    descripcion: 'Guía metodológica que detalla los pasos para que cada Comisión Estatal alcance la madurez organizativa, afiliaciones y asambleas locales requeridas por el INE.',
    categoria: 'ruta-critica',
    eje: 'estatal',
    fecha: '2026-03-20',
    fileUrl: 'https://drive.google.com/file/d/mock-ruta_critica_estatales/view',
    formato: 'pdf',
    peso: '2.8 MB'
  },
  {
    id: 'doc-ruta-operativos',
    nombre: 'III.- Ruta Crítica de Grupos Operativos',
    descripcion: 'Plan de trabajo operativo para las áreas de finanzas, legal, comunicación y tecnología, enfocados en dar soporte logístico a la ruta nacional.',
    categoria: 'ruta-critica',
    eje: 'operativo',
    fecha: '2026-04-01',
    fileUrl: 'https://drive.google.com/file/d/mock-ruta_critica_operativos/view',
    formato: 'pdf',
    peso: '1.9 MB'
  },
  {
    id: 'doc-ruta-tematicas',
    nombre: 'IV.- Ruta Crítica de Comisiones Temáticas',
    descripcion: 'Estrategia para el desarrollo de propuestas programáticas e ideológicas por área de conocimiento, alineadas al Manifiesto Nacional.',
    categoria: 'ruta-critica',
    eje: 'tematico',
    fecha: '2026-04-05',
    fileUrl: 'https://drive.google.com/file/d/mock-ruta_critica_tematicas/view',
    formato: 'pdf',
    peso: '2.1 MB'
  },
  {
    id: 'doc-ruta-transversalidad',
    nombre: 'V.- Ruta Crítica de Grupo de Transversalidad',
    descripcion: 'Lineamientos de inclusión, género y equidad que deben acompañar a todo el proceso organizativo y asambleas de la ruta crítica nacional.',
    categoria: 'ruta-critica',
    eje: 'transversal',
    fecha: '2026-04-10',
    fileUrl: 'https://drive.google.com/file/d/mock-ruta_critica_transversalidad/view',
    formato: 'pdf',
    peso: '1.5 MB'
  },

  // ─── Directorios ─────────────────────────────
  {
    id: 'doc-dir-estatales',
    nombre: 'I.- Directorio de Comisiones Estatales',
    descripcion: 'Directorio de contacto de los voceros y enlaces de las 32 comisiones estatales del Proyecto Migala, con correos y cuentas verificadas.',
    categoria: 'directorios',
    eje: 'estatal',
    fecha: '2026-05-01',
    fileUrl: 'https://docs.google.com/spreadsheets/d/mock-dir-estatales',
    formato: 'spreadsheet',
    peso: 'Enlace a Drive'
  },
  {
    id: 'doc-dir-operativos',
    nombre: 'II.- Directorio de Grupos Operativos',
    descripcion: 'Contactos oficiales del Eje Operativo: Área de Comunicación, Área de Tecnología, Área de Legal, Área de Finanzas y CONFU.',
    categoria: 'directorios',
    eje: 'operativo',
    fecha: '2026-05-02',
    fileUrl: 'https://docs.google.com/spreadsheets/d/mock-dir-operativos',
    formato: 'spreadsheet',
    peso: 'Enlace a Drive'
  },
  {
    id: 'doc-dir-tematicas',
    nombre: 'III.- Directorio de Comisiones Temáticas',
    descripcion: 'Listado de las Comisiones Temáticas de Ciencia, Medio Ambiente, Derechos Humanos, Economía y Educación con sus respectivos coordinadores.',
    categoria: 'directorios',
    eje: 'tematico',
    fecha: '2026-05-03',
    fileUrl: 'https://docs.google.com/spreadsheets/d/mock-dir-tematicas',
    formato: 'spreadsheet',
    peso: 'Enlace a Drive'
  },
  {
    id: 'doc-dir-transversal',
    nombre: 'IV.- Directorio de Grupo de Transversalidad',
    descripcion: 'Datos de contacto para el canal oficial de atención a quejas, comisiones de género y enlaces de transversalidad regional.',
    categoria: 'directorios',
    eje: 'transversal',
    fecha: '2026-05-04',
    fileUrl: 'https://docs.google.com/spreadsheets/d/mock-dir-transversal',
    formato: 'spreadsheet',
    peso: 'Enlace a Drive'
  },

  // ─── Organigramas ────────────────────────────
  {
    id: 'doc-org-nacional',
    nombre: 'I.- Organigrama Nacional',
    descripcion: 'Representación visual y estructurada de las relaciones de gobernanza, asamblea nacional, coordinaciones operativas y ejes del Proyecto Migala.',
    categoria: 'organigrama',
    eje: 'nacional',
    fecha: '2026-02-15',
    fileUrl: 'https://drive.google.com/file/d/mock-organigrama_nacional/view',
    formato: 'pdf',
    peso: '4.5 MB'
  },
  {
    id: 'doc-org-estatales',
    nombre: 'II.- Organigrama de Comisiones Estatales',
    descripcion: 'Esquema tipo que define la estructura organizativa interna sugerida para las comisiones estatales y sus respectivas asambleas locales.',
    categoria: 'organigrama',
    eje: 'estatal',
    fecha: '2026-02-20',
    fileUrl: 'https://drive.google.com/file/d/mock-organigrama_comisiones_estatales/view',
    formato: 'pdf',
    peso: '3.1 MB'
  },

  // ─── Sesiones ────────────────────────────────
  {
    id: 'doc-sesiones-estatales',
    nombre: 'I.- Sesiones de Comisiones Estatales',
    descripcion: 'Historial de actas, minutas y enlaces a las grabaciones en YouTube de las sesiones plenarias llevadas a cabo por las comisiones de los estados.',
    categoria: 'sesiones',
    eje: 'estatal',
    fecha: '2026-06-01',
    fileUrl: 'https://youtube.com/playlist?list=mock-sesiones-estatales',
    formato: 'video',
    peso: 'Lista de videos'
  },
  {
    id: 'doc-sesiones-operativos',
    nombre: 'II.- Sesiones de Grupos Operativos',
    descripcion: 'Repositorio de minutas y transmisiones de las reuniones semanales de seguimiento técnico del Eje Operativo nacional.',
    categoria: 'sesiones',
    eje: 'operativo',
    fecha: '2026-06-02',
    fileUrl: 'https://youtube.com/playlist?list=mock-sesiones-operativos',
    formato: 'video',
    peso: 'Lista de videos'
  },
  {
    id: 'doc-sesiones-tematicas',
    nombre: 'III.- Sesiones de Comisiones Temáticas',
    descripcion: 'Grabaciones de los debates científicos, económicos y sociales que realizan las comisiones especializadas en la conformación de la plataforma programática.',
    categoria: 'sesiones',
    eje: 'tematico',
    fecha: '2026-06-03',
    fileUrl: 'https://youtube.com/playlist?list=mock-sesiones-tematicas',
    formato: 'video',
    peso: 'Lista de videos'
  },
  {
    id: 'doc-sesiones-transversal',
    nombre: 'IV.- Sesiones de Grupo de Transversalidad',
    descripcion: 'Registros de las reuniones de evaluación del cumplimiento de protocolos de equidad de género e inclusión dentro de los espacios de debate.',
    categoria: 'sesiones',
    eje: 'transversal',
    fecha: '2026-06-04',
    fileUrl: 'https://youtube.com/playlist?list=mock-sesiones-transversal',
    formato: 'video',
    peso: 'Lista de videos'
  },

  // ─── Conversatorios ──────────────────────────
  {
    id: 'doc-conv-estatales',
    nombre: 'I.- Conversatorios de Comisiones Estatales',
    descripcion: 'Encuentros de diálogo ciudadano organizados a nivel local para discutir problemáticas del agua, seguridad, transporte y ecología en cada estado.',
    categoria: 'conversatorios',
    eje: 'estatal',
    fecha: '2026-05-10',
    fileUrl: 'https://youtube.com/playlist?list=mock-conv-estatales',
    formato: 'video',
    peso: 'Lista de videos'
  },
  {
    id: 'doc-conv-operativos',
    nombre: 'II.- Conversatorios de Grupos Operativos',
    descripcion: 'Charlas explicativas impartidas por el equipo de tecnología y legal sobre el uso de herramientas de votación digital y democracia interna.',
    categoria: 'conversatorios',
    eje: 'operativo',
    fecha: '2026-05-12',
    fileUrl: 'https://youtube.com/playlist?list=mock-conv-operativos',
    formato: 'video',
    peso: 'Lista de videos'
  },
  {
    id: 'doc-conv-tematicas',
    nombre: 'III.- Conversatorios de Comisiones Temáticas',
    descripcion: 'Conversatorios con académicos de universidades nacionales sobre transición energética, soberanía alimentaria y reforma fiscal.',
    categoria: 'conversatorios',
    eje: 'tematico',
    fecha: '2026-05-15',
    fileUrl: 'https://youtube.com/playlist?list=mock-conv-tematicas',
    formato: 'video',
    peso: 'Lista de videos'
  },
  {
    id: 'doc-conv-transversal',
    nombre: 'IV.- Conversatorios de Grupo de Transversalidad',
    descripcion: 'Paneles de discusión sobre feminismo, disidencias sexuales y pueblos originarios en la política mexicana contemporánea.',
    categoria: 'conversatorios',
    eje: 'transversal',
    fecha: '2026-05-18',
    fileUrl: 'https://youtube.com/playlist?list=mock-conv-transversal',
    formato: 'video',
    peso: 'Lista de videos'
  },

  // ─── Calendarios ─────────────────────────────
  {
    id: 'doc-cal-estatales',
    nombre: 'I.- Calendario de Actividades y Eventos de Comisiones Estatales',
    descripcion: 'Calendario dinámico con fechas de asambleas informativas presenciales, volanteo y eventos de afiliación en las plazas públicas estatales.',
    categoria: 'calendario',
    eje: 'estatal',
    fecha: '2026-06-12',
    fileUrl: 'https://calendar.google.com/calendar/u/0/r/mock-cal-estatales',
    formato: 'drive',
    peso: 'Google Calendar'
  },
  {
    id: 'doc-cal-operativos',
    nombre: 'II.- Calendario de Actividades y Eventos de Grupos Operativos',
    descripcion: 'Fechas de despliegue de software, auditorías de finanzas y cierres trimestrales de reportes para la transparencia de fondos.',
    categoria: 'calendario',
    eje: 'operativo',
    fecha: '2026-06-12',
    fileUrl: 'https://calendar.google.com/calendar/u/0/r/mock-cal-operativos',
    formato: 'drive',
    peso: 'Google Calendar'
  },
  {
    id: 'doc-cal-tematicas',
    nombre: 'III.- Calendario de Actividades y Eventos de Comisiones Temáticas',
    descripcion: 'Cronograma de entregas de borradores programáticos por comisión temática, fechas de revisión técnica y asambleas ideológicas.',
    categoria: 'calendario',
    eje: 'tematico',
    fecha: '2026-06-12',
    fileUrl: 'https://calendar.google.com/calendar/u/0/r/mock-cal-tematicas',
    formato: 'drive',
    peso: 'Google Calendar'
  },
  {
    id: 'doc-cal-transversal',
    nombre: 'IV.- Calendario de Actividades y Eventos de Grupo de Transversalidad',
    descripcion: 'Programación de talleres de sensibilización interna, mesas de diálogo de género y capacitaciones en protocolos contra la violencia política.',
    categoria: 'calendario',
    eje: 'transversal',
    fecha: '2026-06-12',
    fileUrl: 'https://calendar.google.com/calendar/u/0/r/mock-cal-transversal',
    formato: 'drive',
    peso: 'Google Calendar'
  },

  // ─── Patrimonio ──────────────────────────────
  {
    id: 'doc-patrimonio-nacional',
    nombre: 'I.- Patrimonio de Nacional',
    descripcion: 'Inventario auditado de los bienes físicos propiedad del Proyecto Migala a nivel federal (servidores, equipo de grabación, stands, mobiliario de oficina).',
    categoria: 'patrimonio',
    eje: 'nacional',
    fecha: '2026-04-30',
    fileUrl: 'https://drive.google.com/file/d/mock-inventario_patrimonio_nacional/view',
    formato: 'spreadsheet',
    peso: '1.2 MB'
  },
  {
    id: 'doc-patrimonio-estatales',
    nombre: 'II.- Patrimonio de Comisiones Estatales',
    descripcion: 'Desglose detallado de los bienes materiales resguardados por cada una de las comisiones en los estados, financiados por aportaciones voluntarias locales.',
    categoria: 'patrimonio',
    eje: 'estatal',
    fecha: '2026-04-30',
    fileUrl: 'https://drive.google.com/file/d/mock-inventario_patrimonio_estatales/view',
    formato: 'spreadsheet',
    peso: '2.5 MB'
  },

  // ─── Finanzas (Ingresos y Egresos) ────────────
  {
    id: 'doc-ingresos-nacionales',
    nombre: 'I.- Ingresos Nacionales',
    descripcion: 'Balance general de ingresos nacionales, reportando las aportaciones voluntarias a través de Patreon, donaciones directas y eventos de recaudación.',
    categoria: 'ingresos-egresos',
    eje: 'nacional',
    fecha: '2026-05-31',
    fileUrl: 'https://drive.google.com/file/d/mock-ingresos_nacionales_2026/view',
    formato: 'spreadsheet',
    peso: '1.8 MB'
  },
  {
    id: 'doc-ingresos-estatales',
    nombre: 'II.- Ingresos de Comisiones Estatales',
    descripcion: 'Libro contable de aportaciones locales recolectadas por las tesorerías de las comisiones estatales para la renta de espacios y papelería.',
    categoria: 'ingresos-egresos',
    eje: 'estatal',
    fecha: '2026-05-31',
    fileUrl: 'https://drive.google.com/file/d/mock-ingresos_estatales_2026/view',
    formato: 'spreadsheet',
    peso: '2.2 MB'
  },
  {
    id: 'doc-egresos-nacionales',
    nombre: 'III.- Egresos Nacionales',
    descripcion: 'Bitácora mensual de gastos del comité nacional: pagos de servidores de internet, licencias de software, viáticos de asambleas legales y fletes.',
    categoria: 'ingresos-egresos',
    eje: 'nacional',
    fecha: '2026-05-31',
    fileUrl: 'https://drive.google.com/file/d/mock-egresos_nacionales_2026/view',
    formato: 'spreadsheet',
    peso: '2.0 MB'
  },
  {
    id: 'doc-egresos-estatales',
    nombre: 'IV.- Egresos de Comisiones Estatales',
    descripcion: 'Comprobación de gastos locales efectuados por las comisiones estatales, incluyendo viáticos de enlace y renta de sillas para mítines.',
    categoria: 'ingresos-egresos',
    eje: 'estatal',
    fecha: '2026-05-31',
    fileUrl: 'https://drive.google.com/file/d/mock-egresos_estatales_2026/view',
    formato: 'spreadsheet',
    peso: '2.7 MB'
  },

  // ─── Trámites, Formatos y Manuales ───────────
  {
    id: 'doc-formatos-nacionales',
    nombre: 'I.- Tramites, Formatos y Manuales Nacionales',
    descripcion: 'Compendio de formatos descargables para afiliación, propuestas reglamentarias, manuales para moderar asambleas y guías de comunicación oficial.',
    categoria: 'tramites-formatos-manuales',
    eje: 'nacional',
    fecha: '2026-02-01',
    fileUrl: 'https://drive.google.com/file/d/mock-manuales_y_formatos_nacionales/view',
    formato: 'doc',
    peso: '8.4 MB'
  },
  {
    id: 'doc-formatos-estatales',
    nombre: 'II.- Tramites, Formatos y Manuales de Comisiones Estatales',
    descripcion: 'Formatos homologados locales, guías para solicitar asambleas estatales extraordinarias y protocolos de resolución pacífica de conflictos.',
    categoria: 'tramites-formatos-manuales',
    eje: 'estatal',
    fecha: '2026-02-05',
    fileUrl: 'https://drive.google.com/file/d/mock-manuales_y_formatos_estatales/view',
    formato: 'doc',
    peso: '6.1 MB'
  },

  // ─── Talleres ────────────────────────────────
  {
    id: 'doc-talleres-nacionales',
    nombre: 'I.- Talleres Nacionales',
    descripcion: 'Videos y manuales de apoyo de los talleres nacionales de formación política básica, oratoria, historia del movimiento obrero y economía crítica.',
    categoria: 'talleres',
    eje: 'nacional',
    fecha: '2026-03-01',
    fileUrl: 'https://youtube.com/playlist?list=mock-talleres-nacionales',
    formato: 'video',
    peso: 'Lista de videos'
  },
  {
    id: 'doc-talleres-estatales',
    nombre: 'II.- Talleres de Comisiones Estatales',
    descripcion: 'Compilación de grabaciones de talleres organizados por comisiones locales en temas de huertos comunitarios, primeros auxilios e historia regional.',
    categoria: 'talleres',
    eje: 'estatal',
    fecha: '2026-03-05',
    fileUrl: 'https://youtube.com/playlist?list=mock-talleres-estatales',
    formato: 'video',
    peso: 'Lista de videos'
  },

  // ─── Acta Constitutiva (Reglamentos Adicionales / Acta Oficial) ───────────
  {
    id: 'acta-constitutiva',
    nombre: 'Acta Constitutiva de la Asociación Civil',
    descripcion: 'Acta notariada que formaliza la constitución legal de la Asociación Civil que da soporte patrimonial y formal a las operaciones del Proyecto Migala.',
    categoria: 'tramites-formatos-manuales',
    eje: 'nacional',
    fecha: '2025-08-14',
    fileUrl: 'https://drive.google.com/file/d/mock-acta_constitutiva_migala_ac/view',
    formato: 'pdf',
    peso: '5.6 MB'
  },

  // ─── Eje Territorial (Circunscripciones) ──────────────────────────────────
  {
    id: 'doc-ruta-territorial',
    nombre: 'Ruta Crítica del Eje Territorial',
    descripcion: 'Guía metodológica para la coordinación de las vocerías de circunscripción y su enlace con las comisiones estatales.',
    categoria: 'ruta-critica',
    eje: 'territorial',
    fecha: '2026-03-22',
    fileUrl: 'https://drive.google.com/file/d/mock-ruta_critica_territorial/view',
    formato: 'pdf',
    peso: '1.7 MB'
  },
  {
    id: 'doc-dir-territorial',
    nombre: 'Directorio de Vocerías de Circunscripción',
    descripcion: 'Datos de contacto oficiales de los voceros designados para cada una de las 5 circunscripciones electorales.',
    categoria: 'directorios',
    eje: 'territorial',
    fecha: '2026-05-05',
    fileUrl: 'https://docs.google.com/spreadsheets/d/mock-dir-territorial',
    formato: 'spreadsheet',
    peso: 'Enlace a Drive'
  },
  {
    id: 'doc-sesiones-territorial',
    nombre: 'Sesiones del Eje Territorial',
    descripcion: 'Minutas y grabaciones de las reuniones de coordinación entre los voceros de las 5 circunscripciones.',
    categoria: 'sesiones',
    eje: 'territorial',
    fecha: '2026-06-05',
    fileUrl: 'https://youtube.com/playlist?list=mock-sesiones-territorial',
    formato: 'video',
    peso: 'Lista de videos'
  },
  {
    id: 'doc-cal-territorial',
    nombre: 'Calendario de Actividades del Eje Territorial',
    descripcion: 'Cronograma de asambleas informativas y eventos de difusión organizados en las circunscripciones.',
    categoria: 'calendario',
    eje: 'territorial',
    fecha: '2026-06-12',
    fileUrl: 'https://calendar.google.com/calendar/u/0/r/mock-cal-territorial',
    formato: 'drive',
    peso: 'Google Calendar'
  }
];
