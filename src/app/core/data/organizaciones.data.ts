import { Organizacion } from '../models/organizacion';

export const ORGANIZACIONES_DATA: Organizacion[] = [
  // ─── NIVEL 1: EJES ESTRUCTURALES Y HORIZONTALIDAD ─────────────────
  {
    id: 'eje-operativo',
    nombre: 'Eje Operativo',
    tipo: 'area',
    eje: 'operativo',
    descripcion: 'Eje encargado del funcionamiento técnico, administrativo, formativo, legal, financiero y operativo a nivel nacional. Coordina las comisiones de soporte y los comités nacionales.',
    subgruposIds: [
      'area-direccion',
      'area-administrativa',
      'area-financiera',
      'area-formacion',
      'area-politico-electoral',
      'area-transparencia',
      'area-informatica',
      'area-comunicacion',
      'area-contraloria',
      'area-legal',
      'area-dialogo'
    ],
    relaciones: [],
    articulosReferencia: ['Artículo 3']
  },
  {
    id: 'eje-territorial',
    nombre: 'Eje Territorial',
    tipo: 'coordinacion',
    eje: 'territorial',
    descripcion: 'Eje encargado del despliegue geográfico de Proyecto Migala en todo México. Organizado formalmente en cinco circunscripciones electorales federales, las cuales agrupan a las 32 comisiones estatales.',
    subgruposIds: [
      'circunscripcion-1',
      'circunscripcion-2',
      'circunscripcion-3',
      'circunscripcion-4',
      'circunscripcion-5'
    ],
    relaciones: [],
    articulosReferencia: ['Artículo 97']
  },
  {
    id: 'eje-especializado',
    nombre: 'Eje Especializado',
    tipo: 'coordinacion',
    eje: 'ideologico',
    descripcion: 'Eje dedicado a la investigación teórica, ideológica y técnica en áreas de especialización, formulando las tesis programáticas del proyecto y las reformas al <documento id="manifiesto">Manifiesto</documento>.',
    subgruposIds: [
      'esp-derechos-humanos',
      'esp-arte-cultura',
      'esp-estudios-economicos',
      'esp-geopolitica-historia',
      'esp-ciencia-tecnologia',
      'esp-sustentabilidad'
    ],
    relaciones: [],
    articulosReferencia: ['Artículo 108']
  },
  {
    id: 'eje-transversalidad',
    nombre: 'Eje de Transversalidad',
    tipo: 'coordinacion',
    eje: 'transversal',
    descripcion: 'Eje integrador que asegura la representación activa, equitativa e incluyente de grupos vulnerables, minorías e identidades históricamente relegadas de la participación política.',
    subgruposIds: [
      'tran-diversidad',
      'tran-mujeres',
      'tran-funcionalidad-diversa',
      'tran-paisanos',
      'tran-masculinidades',
      'tran-pueblos-originarios'
    ],
    relaciones: [],
    articulosReferencia: ['Artículo 112']
  },
  {
    id: 'horizontalidad',
    nombre: 'Horizontalidad (Plaza Pública)',
    tipo: 'asamblea',
    eje: 'transversal',
    descripcion: 'El foro nacional de participación ciudadana directa, debate y deliberación soberana de Proyecto Migala. Funciona de manera horizontal mediante asambleas abiertas de simpatizantes y afiliados.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: ['Artículo 2']
  },

  // ─── EJE OPERATIVO: ÁREAS DE SEGUNDO NIVEL ──────────────────────────
  {
    id: 'area-direccion',
    nombre: 'Área de Dirección',
    tipo: 'area',
    eje: 'operativo',
    parentId: 'eje-operativo',
    descripcion: 'Coordina la representación política, la vocería nacional y las relaciones estratégicas del proyecto.',
    subgruposIds: ['org-coordinacion-nacional', 'dir-mesa-voceros', 'dir-mesa-recaudacion'],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'area-administrativa',
    nombre: 'Área Administrativa',
    tipo: 'area',
    eje: 'operativo',
    parentId: 'eje-operativo',
    descripcion: 'Administra la comunicación interna, los accesos a plataformas, la inducción de nuevos miembros y el soporte logístico.',
    subgruposIds: [
      'adm-coordinacion-seguimiento',
      'adm-coordinacion-administracion',
      'adm-orientacion-bienvenida',
      'adm-gestion-proyectos',
      'adm-comunicacion-interna',
      'org-mesa-enlace'
    ],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'area-financiera',
    nombre: 'Área Financiera',
    tipo: 'area',
    eje: 'operativo',
    parentId: 'eje-operativo',
    descripcion: 'Supervisa el flujo económico de la organización, la contabilidad interna, las glosas contables e ingresos/egresos.',
    subgruposIds: [
      'fin-tesoreria',
      'fin-proveeduria',
      'fin-egresos',
      'fin-glosa',
      'fin-contabilidad',
      'fin-ingresos'
    ],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'area-formacion',
    nombre: 'Área de Formación',
    tipo: 'area',
    eje: 'operativo',
    parentId: 'eje-operativo',
    descripcion: 'Responsable de capacitar teórica y políticamente a los miembros mediante la Escuela de Cuadros y talleres.',
    subgruposIds: [
      'form-estudios-politicos',
      'form-manifiesto',
      'form-talleres-escuela',
      'org-confu'
    ],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'area-politico-electoral',
    nombre: 'Área Político Electoral',
    tipo: 'area',
    eje: 'operativo',
    parentId: 'eje-operativo',
    descripcion: 'Desarrolla la planeación de candidaturas de afiliación, campañas ciudadanas y estrategia de registro electoral.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'area-transparencia',
    nombre: 'Área de Transparencia',
    tipo: 'area',
    eje: 'operativo',
    parentId: 'eje-operativo',
    descripcion: 'Mantiene la publicidad de los datos oficiales, actas de asambleas y finanzas accesibles a toda la militancia.',
    subgruposIds: ['trans-comite', 'trans-lupa-ciudadana'],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'area-informatica',
    nombre: 'Área de Informática',
    tipo: 'area',
    eje: 'operativo',
    parentId: 'eje-operativo',
    descripcion: 'Desarrolla la infraestructura tecnológica, sitios de transparencia, herramientas de padrón y bots de moderación.',
    subgruposIds: ['inf-estrategia-digital', 'inf-programadores'],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'area-comunicacion',
    nombre: 'Área de Comunicación y Propaganda',
    tipo: 'area',
    eje: 'operativo',
    parentId: 'eje-operativo',
    descripcion: 'Diseña la identidad de imagen institucional, edita el boletín/noticias oficiales y coordina redes sociales.',
    subgruposIds: [
      'com-coordinacion-propaganda',
      'com-diseno-multimedia',
      'com-redaccion',
      'com-noticiero'
    ],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'area-contraloria',
    nombre: 'Área de Contraloría',
    tipo: 'area',
    eje: 'operativo',
    parentId: 'eje-operativo',
    descripcion: 'Audita y fiscaliza los procesos del proyecto, investiga omisiones normativas y canaliza quejas de afiliados.',
    subgruposIds: ['cont-comite-sancionador', 'cont-auditoria', 'cont-investigacion'],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'area-legal',
    nombre: 'Área Legal',
    tipo: 'area',
    eje: 'operativo',
    parentId: 'eje-operativo',
    descripcion: 'Da certeza reglamentaria interna, apoya en el registro de la Asociación Civil y elabora actas notariales.',
    subgruposIds: ['leg-comite-juridico', 'leg-comite-sociedades', 'leg-grupo-estatutos'],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'area-dialogo',
    nombre: 'Área de Diálogo y Arbitraje',
    tipo: 'area',
    eje: 'operativo',
    parentId: 'eje-operativo',
    descripcion: 'Resuelve desacuerdos interpersonales de manera pacífica promoviendo la conciliación y arbitraje democrático.',
    subgruposIds: ['dial-conciliacion-mediacion', 'dial-grupo-investigacion', 'dial-arbitraje-sanciones'],
    relaciones: [],
    articulosReferencia: []
  },

  // ─── EJE OPERATIVO: COMITÉS Y MESAS DE TERCER NIVEL ──────────────────
  // Área de Dirección
  {
    id: 'org-coordinacion-nacional',
    nombre: 'Coordinación General',
    tipo: 'coordinacion',
    eje: 'operativo',
    parentId: 'area-direccion',
    descripcion: 'Coordinación general del área y articulación de las diferentes mesas de trabajo a nivel nacional.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: ['Artículo 110']
  },
  {
    id: 'dir-mesa-voceros',
    nombre: 'Mesa de Voceros',
    tipo: 'mesa',
    eje: 'operativo',
    parentId: 'area-direccion',
    descripcion: 'Mesa colegiada que coordina la vocería y declaraciones externas en representación de la militancia.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'dir-mesa-recaudacion',
    nombre: 'Mesa de Recaudación de Fondos',
    tipo: 'mesa',
    eje: 'operativo',
    parentId: 'area-direccion',
    descripcion: 'Diseña metodologías de fondeo y campañas periódicas de donación colectiva.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },

  // Área de Formación
  {
    id: 'form-estudios-politicos',
    nombre: 'Comité de Estudios Políticos y Sociales',
    tipo: 'comite',
    eje: 'operativo',
    parentId: 'area-formacion',
    descripcion: 'Comité que elabora cuadernillos de discusión ideológica y análisis sociológicos del entorno nacional.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'form-manifiesto',
    nombre: 'Comité de Manifiesto',
    tipo: 'comite',
    eje: 'operativo',
    parentId: 'area-formacion',
    descripcion: 'Sistematiza las aportaciones de las comisiones temáticas para actualizar e imprimir dinamismo al Manifiesto.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'form-talleres-escuela',
    nombre: 'Comité de Talleres Formativos y Escuela de Cuadros',
    tipo: 'comite',
    eje: 'operativo',
    parentId: 'area-formacion',
    descripcion: 'Establece los programas educativos, seminarios y foros formativos permanentes para afiliados.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'org-confu',
    nombre: 'Comité Nacional de Formación y Utopía',
    siglas: 'CONFU',
    tipo: 'comite',
    eje: 'operativo',
    parentId: 'area-formacion',
    descripcion: 'Valida, imparte y evalúa los cursos y talleres de inducción básica indispensables para la habilitación de voto en asambleas.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: ['Artículo 6, II']
  },

  // Área Administrativa
  {
    id: 'adm-coordinacion-seguimiento',
    nombre: 'Comisión de Coordinación y Seguimiento',
    tipo: 'comite',
    eje: 'operativo',
    parentId: 'area-administrativa',
    descripcion: 'Supervisa el cumplimiento de las metas de trabajo operativas y la vinculación de proyectos.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'adm-coordinacion-administracion',
    nombre: 'Coordinación de Administración',
    tipo: 'coordinacion',
    eje: 'operativo',
    parentId: 'area-administrativa',
    descripcion: 'Gestiona la infraestructura, herramientas de comunicación de equipos y bases documentales.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'adm-orientacion-bienvenida',
    nombre: 'Comité de Orientación y Bienvenida',
    tipo: 'comite',
    eje: 'operativo',
    parentId: 'area-administrativa',
    descripcion: 'Canaliza y acompaña a los nuevos registrados en su proceso de inserción en comisiones y talleres.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'adm-gestion-proyectos',
    nombre: 'Comité de Gestión de Proyectos',
    tipo: 'comite',
    eje: 'operativo',
    parentId: 'area-administrativa',
    descripcion: 'Valida metodológicamente las propuestas que se plantean para su ejecución transversal en la asamblea.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'adm-comunicacion-interna',
    nombre: 'Comité de Comunicación Interna',
    tipo: 'comite',
    eje: 'operativo',
    parentId: 'area-administrativa',
    descripcion: 'Diseña y mantiene los canales de boletines internos y circulares de carácter obligatorio.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'org-mesa-enlace',
    nombre: 'Mesa de Enlace Nacional',
    tipo: 'mesa',
    eje: 'operativo',
    parentId: 'area-administrativa',
    descripcion: 'Mesa técnica encargada de la comunicación organizativa y vinculación entre las distintas comisiones estatales y temáticas.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: ['Artículo 109']
  },

  // Área de Transparencia
  {
    id: 'trans-comite',
    nombre: 'Comité de Transparencia',
    tipo: 'comite',
    eje: 'operativo',
    parentId: 'area-transparencia',
    descripcion: 'Órgano que coordina los sitios web de publicación obligatoria y responde consultas de afiliados.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'trans-lupa-ciudadana',
    nombre: 'Grupo de Lupa Ciudadana',
    tipo: 'grupo_operativo',
    eje: 'operativo',
    parentId: 'area-transparencia',
    descripcion: 'Audita y promueve que los cargos de coordinación sigan las pautas éticas en el manejo de comisiones.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },

  // Área de Contraloría
  {
    id: 'cont-comite-sancionador',
    nombre: 'Comité Sancionador',
    tipo: 'comite',
    eje: 'operativo',
    parentId: 'area-contraloria',
    descripcion: 'Determina las amonestaciones, suspensiones o llamadas de atención de acuerdo al reglamento nacional.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'cont-auditoria',
    nombre: 'Comité de Auditoría',
    tipo: 'comite',
    eje: 'operativo',
    parentId: 'area-contraloria',
    descripcion: 'Audita de manera aleatoria o por denuncia el manejo contable de fondos estatales y nacionales.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'cont-investigacion',
    nombre: 'Comité de Investigación Contralora',
    tipo: 'comite',
    eje: 'operativo',
    parentId: 'area-contraloria',
    descripcion: 'Comité que investiga denuncias sobre supuestas faltas de horizontalidad o acoso en los espacios de militancia.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },

  // Área de Comunicación y Propaganda
  {
    id: 'com-coordinacion-propaganda',
    nombre: 'Coordinación General de Propaganda e Imagen',
    tipo: 'coordinacion',
    eje: 'operativo',
    parentId: 'area-comunicacion',
    descripcion: 'Coordinación del área de comunicación encargada de resguardar el manual de imagen y branding de Migala.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'com-diseno-multimedia',
    nombre: 'Mesa de Diseño Multimedia',
    tipo: 'mesa',
    eje: 'operativo',
    parentId: 'area-comunicacion',
    descripcion: 'Elaboración de infografías, folletos, edición de podcast y videos informativos.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'com-redaccion',
    nombre: 'Mesa de Redacción',
    tipo: 'mesa',
    eje: 'operativo',
    parentId: 'area-comunicacion',
    descripcion: 'Redacción de comunicados de prensa y articulado explicativo del Manifiesto.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'com-noticiero',
    nombre: 'Mesa de Noticiero',
    tipo: 'mesa',
    eje: 'operativo',
    parentId: 'area-comunicacion',
    descripcion: 'Investigación periodística de los hechos relevantes de la vida pública y transmisión periódica del noticiario.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },

  // Área de Informática (Con subdivisiones de nivel 4)
  {
    id: 'inf-estrategia-digital',
    nombre: 'Coordinación de Estrategia Digital',
    tipo: 'coordinacion',
    eje: 'operativo',
    parentId: 'area-informatica',
    descripcion: 'Coordina los canales digitales de moderación y bases seguras de patrocinios.',
    subgruposIds: ['inf-mesa-administradores', 'inf-padron-patrocinadores'],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'inf-mesa-administradores',
    nombre: 'Mesa de Administradores',
    tipo: 'mesa',
    eje: 'operativo',
    parentId: 'inf-estrategia-digital',
    descripcion: 'Administración técnica y moderación en servidores de comunicación oficiales de la red de Migala.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'inf-padron-patrocinadores',
    nombre: 'Padrón de Patrocinadores',
    tipo: 'mesa',
    eje: 'operativo',
    parentId: 'inf-estrategia-digital',
    descripcion: 'Administra y resguarda con encriptación segura el padrón de afiliados y donadores.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'inf-programadores',
    nombre: 'Coordinación de Programadores',
    tipo: 'coordinacion',
    eje: 'operativo',
    parentId: 'area-informatica',
    descripcion: 'Célula de desarrollo tecnológico, hosting, git y optimización de software libre.',
    subgruposIds: [
      'inf-mesa-recepcion',
      'inf-mesa-ejecucion',
      'inf-mesa-tecnica',
      'inf-mesa-aprendizaje'
    ],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'inf-mesa-recepcion',
    nombre: 'Mesa de Recepción de Administración de Proyectos',
    tipo: 'mesa',
    eje: 'operativo',
    parentId: 'inf-programadores',
    descripcion: 'Revisa y prioriza las necesidades de automatización interna y diseño de plataformas.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'inf-mesa-ejecucion',
    nombre: 'Mesa de Ejecución de Proyectos',
    tipo: 'mesa',
    eje: 'operativo',
    parentId: 'inf-programadores',
    descripcion: 'Desarrolladores dedicados al código de los aplicativos (como esta SPA en Angular).',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'inf-mesa-tecnica',
    nombre: 'Mesa Técnica y Asesoría',
    tipo: 'mesa',
    eje: 'operativo',
    parentId: 'inf-programadores',
    descripcion: 'Resuelve bugs críticos y ayuda a comisiones locales en el despliegue de sus páginas web.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'inf-mesa-aprendizaje',
    nombre: 'Mesa de Aprendizaje',
    tipo: 'mesa',
    eje: 'operativo',
    parentId: 'inf-programadores',
    descripcion: 'Talleres prácticos de tecnologías web y software libre para afiliados que quieren iniciarse en el desarrollo.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },

  // Área Financiera
  {
    id: 'fin-tesoreria',
    nombre: 'Coordinación de Tesorería',
    tipo: 'coordinacion',
    eje: 'operativo',
    parentId: 'area-financiera',
    descripcion: 'Gestión nacional de las cuentas corrientes de ahorro y de apoyo en el Proyecto Migala.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'fin-proveeduria',
    nombre: 'Comité de Proveeduría',
    tipo: 'comite',
    eje: 'operativo',
    parentId: 'area-financiera',
    descripcion: 'Mapea compras, proveedores éticos y evalúa presupuestos en cotizaciones nacionales.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'fin-egresos',
    nombre: 'Comité de Egresos',
    tipo: 'comite',
    eje: 'operativo',
    parentId: 'area-financiera',
    descripcion: 'Comité a cargo del control interno y validación de las salidas financieras aprobadas.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'fin-glosa',
    nombre: 'Comité de Glosa',
    tipo: 'comite',
    eje: 'operativo',
    parentId: 'area-financiera',
    descripcion: 'Comité auditor contable enfocado en la transparencia voluntaria hacia los afiliados.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'fin-contabilidad',
    nombre: 'Comité de Contabilidad',
    tipo: 'comite',
    eje: 'operativo',
    parentId: 'area-financiera',
    descripcion: 'Elabora conciliaciones, estados de pérdidas y ganancias, y declaraciones informativas.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'fin-ingresos',
    nombre: 'Comité de Ingresos',
    tipo: 'comite',
    eje: 'operativo',
    parentId: 'area-financiera',
    descripcion: 'Registra los donativos recurrentes, ventas de material de difusión y campañas.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },

  // Área Legal
  {
    id: 'leg-comite-juridico',
    nombre: 'Comité Jurídico',
    tipo: 'comite',
    eje: 'operativo',
    parentId: 'area-legal',
    descripcion: 'Atención a controversias de reglamento y registro de marcas o logos nacionales.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'leg-comite-sociedades',
    nombre: 'Comité de Sociedades, Cooperativas y Sindicatos',
    tipo: 'comite',
    eje: 'operativo',
    parentId: 'area-legal',
    descripcion: 'Fomenta el diseño de cooperativas de trabajo, proyectos de autoempleo y sindicatos democráticos.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'leg-grupo-estatutos',
    nombre: 'Grupo de Estatutos y Reglamentos',
    tipo: 'grupo_operativo',
    eje: 'operativo',
    parentId: 'area-legal',
    descripcion: 'Apoyo a las comisiones locales en la redacción armonizada de sus reglamentaciones internas.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },

  // Área de Diálogo y Arbitraje
  {
    id: 'dial-conciliacion-mediacion',
    nombre: 'Comité de Conciliación y Mediación',
    tipo: 'comite',
    eje: 'operativo',
    parentId: 'area-dialogo',
    descripcion: 'Espacio para lograr la mediación y evitar procesos sancionatorios formales.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'dial-grupo-investigacion',
    nombre: 'Grupo de Investigación',
    tipo: 'grupo_operativo',
    eje: 'operativo',
    parentId: 'area-dialogo',
    descripcion: 'Recaba declaraciones y pruebas en denuncias por discriminación, acoso o violencia.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'dial-arbitraje-sanciones',
    nombre: 'Comité de Arbitraje y Sanciones',
    tipo: 'comite',
    eje: 'operativo',
    parentId: 'area-dialogo',
    descripcion: 'Establece sentencias y medidas reparadoras obligatorias por consenso colegiado.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },

  // ─── EJE TERRITORIAL: CIRCUNSCRIPCIONES DE SEGUNDO NIVEL ──────────────
  {
    id: 'circunscripcion-1',
    nombre: 'Primera Circunscripción',
    tipo: 'coordinacion',
    eje: 'territorial',
    parentId: 'eje-territorial',
    descripcion: 'Región territorial electoral del Noroeste y Occidente de México. Comprende la coordinación de 8 estados.',
    subgruposIds: [
      'est-baja-california',
      'est-baja-california-sur',
      'est-sonora',
      'est-chihuahua',
      'est-sinaloa',
      'est-durango',
      'est-jalisco',
      'est-nayarit'
    ],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'circunscripcion-2',
    nombre: 'Segunda Circunscripción',
    tipo: 'coordinacion',
    eje: 'territorial',
    parentId: 'eje-territorial',
    descripcion: 'Región territorial electoral del Norte y Noreste de México. Comprende la coordinación de 7 estados.',
    subgruposIds: [
      'est-aguascalientes',
      'est-coahuila',
      'est-guanajuato',
      'est-nuevo-leon',
      'est-san-luis-potosi',
      'est-tamaulipas',
      'est-zacatecas'
    ],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'circunscripcion-3',
    nombre: 'Tercera Circunscripción',
    tipo: 'coordinacion',
    eje: 'territorial',
    parentId: 'eje-territorial',
    descripcion: 'Región territorial electoral del Sureste de México. Comprende la coordinación de 7 estados.',
    subgruposIds: [
      'est-campeche',
      'est-chiapas',
      'est-oaxaca',
      'est-quintana-roo',
      'est-tabasco',
      'est-veracruz',
      'est-yucatan'
    ],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'circunscripcion-4',
    nombre: 'Cuarta Circunscripción',
    tipo: 'coordinacion',
    eje: 'territorial',
    parentId: 'eje-territorial',
    descripcion: 'Región territorial electoral del Centro y Sur de México. Comprende la coordinación de 6 estados.',
    subgruposIds: [
      'est-cdmx',
      'est-guerrero',
      'est-hidalgo',
      'est-morelos',
      'est-puebla',
      'est-tlaxcala'
    ],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'circunscripcion-5',
    nombre: 'Quinta Circunscripción',
    tipo: 'coordinacion',
    eje: 'territorial',
    parentId: 'eje-territorial',
    descripcion: 'Región territorial electoral del Centro y Occidente de México. Comprende la coordinación de 4 estados.',
    subgruposIds: [
      'est-colima',
      'est-edomex',
      'est-michoacan',
      'est-queretaro'
    ],
    relaciones: [],
    articulosReferencia: []
  },

  // ─── EJE TERRITORIAL: COMISIONES ESTATALES DE TERCER NIVEL ─────────────
  // Primera Circunscripción
  {
    id: 'est-baja-california',
    nombre: 'Baja California',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-1',
    descripcion: 'Comisión Estatal de Baja California. Organiza las asambleas locales en el estado fronterizo.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'est-baja-california-sur',
    nombre: 'Baja California Sur',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-1',
    descripcion: 'Comisión Estatal de Baja California Sur. Organiza y consolida los núcleos locales de discusión.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'est-sonora',
    nombre: 'Sonora',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-1',
    descripcion: 'Comisión Estatal de Sonora. Coordinación de militantes sonorenses.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'est-chihuahua',
    nombre: 'Chihuahua',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-1',
    descripcion: 'Comisión Estatal de Chihuahua. Trabajo territorial en el estado norteño.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'est-sinaloa',
    nombre: 'Sinaloa',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-1',
    descripcion: 'Comisión Estatal de Sinaloa. Organización y foros territoriales.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'est-durango',
    nombre: 'Durango',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-1',
    descripcion: 'Comisión Estatal de Durango. Célula de trabajo comunitario descentralizado.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'est-jalisco',
    nombre: 'Jalisco',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-1',
    descripcion: 'Comisión Estatal de Jalisco. Uno de los núcleos con mayor participación local.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'est-nayarit',
    nombre: 'Nayarit',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-1',
    descripcion: 'Comisión Estatal de Nayarit. Organización comunitaria territorial.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },

  // Segunda Circunscripción
  {
    id: 'est-aguascalientes',
    nombre: 'Aguascalientes',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-2',
    descripcion: 'Comisión Estatal de Aguascalientes. Célula territorial de asamblea local.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'est-coahuila',
    nombre: 'Coahuila',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-2',
    descripcion: 'Comisión Estatal de Coahuila. Coordinación norte y comités municipales.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'est-guanajuato',
    nombre: 'Guanajuato',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-2',
    descripcion: 'Comisión Estatal de Guanajuato. Impulso del proyecto en la región del Bajío.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'est-nuevo-leon',
    nombre: 'Nuevo León',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-2',
    descripcion: 'Comisión Estatal de Nuevo León. Célula de trabajo territorial en la zona metropolitana de Monterrey.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'est-san-luis-potosi',
    nombre: 'San Luis Potosí',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-2',
    descripcion: 'Comisión Estatal de San Luis Potosí. Vinculación y organización.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'est-tamaulipas',
    nombre: 'Tamaulipas',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-2',
    descripcion: 'Comisión Estatal de Tamaulipas. Trabajo a ras de suelo y foros temáticos.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'est-zacatecas',
    nombre: 'Zacatecas',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-2',
    descripcion: 'Comisión Estatal de Zacatecas. Fomenta la participación comunitaria.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },

  // Tercera Circunscripción
  {
    id: 'est-campeche',
    nombre: 'Campeche',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-3',
    descripcion: 'Comisión Estatal de Campeche. Trabajo territorial peninsular en asamblea.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'est-chiapas',
    nombre: 'Chiapas',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-3',
    descripcion: 'Comisión Estatal de Chiapas. Integrada al desarrollo territorial en el sur del país.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'est-oaxaca',
    nombre: 'Oaxaca',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-3',
    descripcion: 'Comisión Estatal de Oaxaca. Foros de debate e inducción.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'est-quintana-roo',
    nombre: 'Quintana Roo',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-3',
    descripcion: 'Comisión Estatal de Quintana Roo. Enlace territorial y comités locales.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'est-tabasco',
    nombre: 'Tabasco',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-3',
    descripcion: 'Comisión Estatal de Tabasco. Promueve debates locales programáticos.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'est-veracruz',
    nombre: 'Veracruz',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-3',
    descripcion: 'Comisión Estatal de Veracruz. Coordinación de asambleas distritales y locales.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'est-yucatan',
    nombre: 'Yucatán',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-3',
    descripcion: 'Comisión Estatal de Yucatán. Célula territorial activa peninsular.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },

  // Cuarta Circunscripción
  {
    id: 'est-cdmx',
    nombre: 'Ciudad de México',
    siglas: 'CDMX',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-4',
    descripcion: 'Comisión Estatal de la Ciudad de México. Núcleo con asambleas permanentes por alcaldías.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'est-guerrero',
    nombre: 'Guerrero',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-4',
    descripcion: 'Comisión Estatal de Guerrero. Foco en la base popular comunitaria.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'est-hidalgo',
    nombre: 'Hidalgo',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-4',
    descripcion: 'Comisión Estatal de Hidalgo. Célula territorial activa.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'est-morelos',
    nombre: 'Morelos',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-4',
    descripcion: 'Comisión Estatal de Morelos. Organización y comités territoriales.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'est-puebla',
    nombre: 'Puebla',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-4',
    descripcion: 'Comisión Estatal de Puebla. Célula de trabajo comunitario y capacitación local.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'est-tlaxcala',
    nombre: 'Tlaxcala',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-4',
    descripcion: 'Comisión Estatal de Tlaxcala. Actividades de debate y organización.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },

  // Quinta Circunscripción
  {
    id: 'est-colima',
    nombre: 'Colima',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-5',
    descripcion: 'Comisión Estatal de Colima. Consolidación y asambleas locales.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'est-edomex',
    nombre: 'Estado de México',
    siglas: 'EDOMEX',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-5',
    descripcion: 'Comisión Estatal del Estado de México. Amplia red en distritos y municipios del estado.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'est-michoacan',
    nombre: 'Michoacán',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-5',
    descripcion: 'Comisión Estatal de Michoacán. Organización territorial y asamblea.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'est-queretaro',
    nombre: 'Querétaro',
    tipo: 'comision_estatal',
    eje: 'territorial',
    parentId: 'circunscripcion-5',
    descripcion: 'Comisión Estatal de Querétaro. Organización comunitaria.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },

  // ─── EJE ESPECIALIZADO: COMISIONES TEMÁTICAS ──────────────────────────
  {
    id: 'esp-derechos-humanos',
    nombre: 'Derechos Humanos',
    tipo: 'comision_tematica',
    eje: 'ideologico',
    parentId: 'eje-especializado',
    descripcion: 'Investiga y diseña propuestas programáticas relativas a garantías individuales, colectivas y memoria histórica.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'esp-arte-cultura',
    nombre: 'Arte y Cultura',
    tipo: 'comision_tematica',
    eje: 'ideologico',
    parentId: 'eje-especializado',
    descripcion: 'Elabora propuestas culturales orientadas al fomento de la creatividad, acceso libre a contenidos y memoria comunitaria.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'esp-estudios-economicos',
    nombre: 'Estudios Económicos',
    tipo: 'comision_tematica',
    eje: 'ideologico',
    parentId: 'eje-especializado',
    descripcion: 'Desarrolla el plan de economía social, fomento de cooperativas de trabajo y sustentabilidad fiscal.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'esp-geopolitica-historia',
    nombre: 'Geopolítica e Historia',
    tipo: 'comision_tematica',
    eje: 'ideologico',
    parentId: 'eje-especializado',
    descripcion: 'Estudio crítico del panorama global e internacional de México, así como de la evolución de la soberanía nacional.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'esp-ciencia-tecnologia',
    nombre: 'Ciencia y Tecnología',
    tipo: 'comision_tematica',
    eje: 'ideologico',
    parentId: 'eje-especializado',
    descripcion: 'Promueve la soberanía tecnológica, la alfabetización digital, el software libre y la adopción científica en la administración.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'esp-sustentabilidad',
    nombre: 'Sustentabilidad',
    tipo: 'comision_tematica',
    eje: 'ideologico',
    parentId: 'eje-especializado',
    descripcion: 'Investiga la mitigación del cambio climático, el manejo ético del agua, de residuos y la soberanía alimentaria.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },

  // ─── EJE DE TRANSVERSALIDAD: GRUPOS DE INCLUSIÓN ────────────────────
  {
    id: 'tran-diversidad',
    nombre: 'Grupo de Diversidad',
    tipo: 'grupo_operativo',
    eje: 'transversal',
    parentId: 'eje-transversalidad',
    descripcion: 'Garantiza la transversalización de la agenda LGBTIQ+ y asesora en la mediación contra la discriminación.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'tran-mujeres',
    nombre: 'Grupo de Mujeres',
    tipo: 'grupo_operativo',
    eje: 'transversal',
    parentId: 'eje-transversalidad',
    descripcion: 'Impulsa la equidad de género, la agenda feminista y previene situaciones de violencia patriarcal en el proyecto.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'tran-funcionalidad-diversa',
    nombre: 'Grupo de Personas de Funcionalidad Diversa',
    tipo: 'grupo_operativo',
    eje: 'transversal',
    parentId: 'eje-transversalidad',
    descripcion: 'Genera lineamientos y herramientas de accesibilidad universal para que toda la militancia participe equitativamente.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'tran-paisanos',
    nombre: 'Grupo de Paisanos',
    tipo: 'grupo_operativo',
    eje: 'transversal',
    parentId: 'eje-transversalidad',
    descripcion: 'Organización de los comités de simpatizantes y afiliados mexicanos en el extranjero (migrantes).',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'tran-masculinidades',
    nombre: 'Grupo de Masculinidades',
    tipo: 'grupo_operativo',
    eje: 'transversal',
    parentId: 'eje-transversalidad',
    descripcion: 'Espacio de concientización y deconstrucción de la masculinidad hegemónica para promover relaciones sanas.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  },
  {
    id: 'tran-pueblos-originarios',
    nombre: 'Grupo de Pueblos Originarios',
    tipo: 'grupo_operativo',
    eje: 'transversal',
    parentId: 'eje-transversalidad',
    descripcion: 'Preserva la libre determinación y autonomía de las representaciones indígenas y afromexicanas dentro de Migala.',
    subgruposIds: [],
    relaciones: [],
    articulosReferencia: []
  }
];
