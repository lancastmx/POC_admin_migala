import { Procedimiento } from '../models/procedimiento';

export const PROCEDIMIENTOS_DATA: Procedimiento[] = [
  {
    id: 'proc-crear-comision-tematica',
    nombre: 'Creación de una Comisión Temática',
    tldr: 'Para crear una <organo tipo="comision_tematica">Comisión Temática</organo> se requiere una propuesta firmada por al menos <requisito tipo="cantidad" valor="5">5 afiliados vigentes</requisito>, que incluya un <documento>Plan de Trabajo</documento> y sea aprobada por consenso en la <organo id="org-coordinacion-nacional">Coordinación Nacional</organo>.',
    categoria: 'organizacion',
    iniciadoPor: 'Grupo de afiliados (mínimo 5)',
    aprobadoPor: 'Coordinación Nacional',
    requisitos: [
      {
        nombre: 'Grupo Promotor',
        detalle: 'Mínimo <requisito tipo="cantidad" valor="5">5 miembros afiliados</requisito> con derechos vigentes en el padrón',
        opcional: false,
        articuloReferencia: 'Artículo 108'
      },
      {
        nombre: 'Plan de Trabajo Inicial',
        detalle: 'Documento abierto con objetivos, justificación y plan de actividades semestral',
        opcional: false,
        articuloReferencia: 'Artículo 108'
      }
    ],
    pasos: [
      {
        orden: 1,
        accion: 'Conformación del Grupo Promotor',
        descripcion: 'Reunir a los <requisito tipo="cantidad" valor="5">5 afiliados</requisito> interesados y designar un <rol>enlace provisional</rol>.',
        ejecutor: 'Miembros Promotores',
        articuloReferencia: 'Artículo 108'
      },
      {
        orden: 2,
        accion: 'Redacción del Plan de Trabajo',
        descripcion: 'Elaborar el <documento>Plan de Trabajo</documento> con objetivos y cronograma semestral de actividades.',
        ejecutor: 'Miembros Promotores',
        articuloReferencia: 'Artículo 108'
      },
      {
        orden: 3,
        accion: 'Presentación de la Solicitud',
        descripcion: 'Enviar la propuesta y firmas del grupo promotor a la <organo id="org-mesa-enlace">Mesa de Enlace Nacional</organo>.',
        ejecutor: 'Enlace Provisional',
        articuloReferencia: 'Artículo 109'
      },
      {
        orden: 4,
        accion: 'Revisión y Aprobación',
        descripcion: 'La <organo id="org-coordinacion-nacional">Coordinación Nacional</organo> agenda en sesión, evalúa el plan y dictamina la creación por consenso.',
        ejecutor: 'Coordinación Nacional',
        articuloReferencia: 'Artículo 110'
      }
    ],
    articulosRelacionadosIds: ['art-108', 'art-109', 'art-110']
  },
  {
    id: 'proc-afiliacion-completa',
    nombre: 'Proceso de Afiliación de Miembros',
    tldr: 'El proceso para convertirse en <rol id="afiliado">Afiliado</rol> completo (con voz y voto) requiere cumplir con la mayoría de edad, registrarse en el padrón, validar la <documento id="ine">INE</documento>, leer la trilogía documental del proyecto y aprobar los talleres formativos de la <organo id="org-confu">CONFU</organo>.',
    categoria: 'afiliacion',
    iniciadoPor: 'Simpatizante aspirante',
    aprobadoPor: 'Comisión Nacional de Registro / Padrón',
    requisitos: [
      {
        nombre: 'Edad mínima',
        detalle: '<requisito tipo="edad" valor="18">18 años cumplidos</requisito>',
        opcional: false,
        articuloReferencia: 'Artículo 6, III'
      },
      {
        nombre: 'Identificación Oficial',
        detalle: 'Credencial <documento id="ine">INE</documento> vigente y registrada',
        opcional: false,
        articuloReferencia: 'Artículo 6, V'
      },
      {
        nombre: 'Lectura básica',
        detalle: 'Haber leído el <documento id="reglamento">Reglamento Nacional</documento>, el <documento id="manifiesto">Manifiesto e ideario</documento>, y la <documento id="ruta-critica">Ruta Crítica</documento>',
        opcional: false,
        articuloReferencia: 'Artículo 6, I'
      },
      {
        nombre: 'Capacitación básica',
        detalle: 'Aprobar los talleres formativos introductorios impartidos por la <organo id="org-confu">CONFU</organo>',
        opcional: false,
        articuloReferencia: 'Artículo 6, II'
      }
    ],
    pasos: [
      {
        orden: 1,
        accion: 'Registro General',
        descripcion: 'Registrarse en el Padrón General del Proyecto Migala y aceptar el aviso de privacidad.',
        ejecutor: 'Aspirante',
        articuloReferencia: 'Artículo 5'
      },
      {
        orden: 2,
        accion: 'Estudio de Documentos',
        descripcion: 'Leer los tres documentos básicos: <documento id="reglamento">Reglamento</documento>, <documento id="manifiesto">Manifiesto</documento> y <documento id="ruta-critica">Ruta Crítica</documento>.',
        ejecutor: 'Aspirante',
        articuloReferencia: 'Artículo 6, I'
      },
      {
        orden: 3,
        accion: 'Curso CONFU',
        descripcion: 'Asistir y aprobar los talleres formativos impartidos por la <organo id="org-confu">CONFU</organo>.',
        ejecutor: 'Aspirante',
        articuloReferencia: 'Artículo 6, II'
      },
      {
        orden: 4,
        accion: 'Carga de Identificación',
        descripcion: 'Subir la credencial <documento id="ine">INE</documento> para su validación de vigencia y domicilio.',
        ejecutor: 'Aspirante',
        articuloReferencia: 'Artículo 6, V'
      },
      {
        orden: 5,
        accion: 'Asignación Territorial',
        descripcion: 'Vincularse formalmente a la <organo tipo="comision_estatal">Comisión Estatal</organo> correspondiente a su residencia.',
        ejecutor: 'Comisión de Padrón',
        articuloReferencia: 'Artículo 6, VII'
      }
    ],
    articulosRelacionadosIds: ['art-5', 'art-6']
  }
];
