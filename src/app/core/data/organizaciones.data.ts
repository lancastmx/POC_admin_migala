import { Organizacion } from '../models/organizacion';

export const ORGANIZACIONES_DATA: Organizacion[] = [
  {
    id: 'org-coordinacion-nacional',
    nombre: 'Coordinación Nacional',
    siglas: 'CN',
    tipo: 'coordinacion',
    eje: 'operativo',
    descripcion: 'Órgano máximo de gestión operativa y administrativa a nivel nacional. Responsable de ratificar la creación de comisiones, administrar la logística y actuar por consenso siguiendo los principios del <documento id="manifiesto">Manifiesto</documento>. rinde cuentas a la <organo id="org-asamblea-general">Asamblea General</organo>.',
    subgruposIds: ['org-confu', 'org-mesa-enlace'],
    relaciones: [],
    articulosReferencia: ['Artículo 3, V', 'Artículo 110']
  },
  {
    id: 'org-confu',
    nombre: 'Comisión Nacional de Formación y Utopía',
    siglas: 'CONFU',
    tipo: 'grupo_operativo',
    eje: 'operativo',
    parentId: 'org-coordinacion-nacional',
    descripcion: 'Célula operativa responsable de la formación política y teórica de los miembros. Imparte los <documento id="talleres-confu">talleres formativos obligatorios</documento> necesarios para que un <rol id="simpatizante">Simpatizante</rol> califique como <rol id="afiliado">Afiliado</rol> con derecho a voto.',
    subgruposIds: [],
    relaciones: [
      { tipo: 'rinde_cuentas_a', destinoId: 'org-coordinacion-nacional' }
    ],
    articulosReferencia: ['Artículo 6, II']
  },
  {
    id: 'org-mesa-enlace',
    nombre: 'Mesa de Enlace Nacional',
    tipo: 'mesa',
    eje: 'operativo',
    parentId: 'org-coordinacion-nacional',
    descripcion: 'Mesa encargada de la comunicación interna, vinculación entre estados y recepción de propuestas de creación de nuevas comisiones. Canaliza las solicitudes de los <rol id="afiliado">afiliados</rol> hacia la <organo id="org-coordinacion-nacional">Coordinación Nacional</organo>.',
    subgruposIds: [],
    relaciones: [
      { tipo: 'colabora_con', destinoId: 'org-confu' }
    ],
    articulosReferencia: ['Artículo 3, VI', 'Artículo 109']
  },
  {
    id: 'org-comisiones-estatales',
    nombre: 'Comisiones Estatales',
    tipo: 'comision_estatal',
    eje: 'territorial',
    descripcion: 'Representación del Proyecto Migala en cada entidad federativa de México. Agrupa a los miembros residentes del estado (ej: <organo id="org-estatal-09">CDMX</organo>, <organo id="org-estatal-14">Jalisco</organo>). Su objetivo es organizar el trabajo territorial del proyecto y conformar la base para el partido político.',
    subgruposIds: [],
    relaciones: [
      { tipo: 'rinde_cuentas_a', destinoId: 'org-coordinacion-nacional' }
    ],
    articulosReferencia: ['Artículo 3, VII', 'Artículo 6, VII', 'Artículo 97']
  },
  {
    id: 'org-comisiones-tematicas',
    nombre: 'Comisiones Temáticas',
    tipo: 'comision_tematica',
    eje: 'ideologico',
    descripcion: 'Células de estudio y desarrollo de ideología por áreas del conocimiento humano (Salud, Educación, Economía, etc.). Son generadoras de propuestas y productos para enriquecer el <documento id="manifiesto">Manifiesto</documento>. Es obligatorio que todo <rol id="afiliado">Afiliado</rol> participe en al menos una.',
    subgruposIds: [],
    relaciones: [
      { tipo: 'colabora_con', destinoId: 'org-confu' }
    ],
    articulosReferencia: ['Artículo 3, VII', 'Artículo 6, VIII', 'Artículo 108']
  }
];
