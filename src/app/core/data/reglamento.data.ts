import { Reglamento } from '../models/reglamento';
import type { ReglamentoCobertura, ReglamentoMetadata } from '../models/reglamento-trazable';

/** UUID v4 determinístico a partir de un seed (para IDs estables) */
function uuidFromSeed(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const chr = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  const h = Math.abs(hash).toString(16).padStart(8, '0');
  return `${h.slice(0, 8)}-${h.slice(4, 8)}-4${h.slice(0, 3)}-a${h.slice(2, 5)}-${h.slice(0, 12).padEnd(12, '0')}`;
}

export const REGLAMENTO_DATA: Reglamento = {
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "ambito": "nacional",
  "title": "PROYECTO MIGALA REGLAMENTO NACIONAL",
  "lastModified": "16-09-2023",
  "titulos": [
    {
      "name": "TÍTULO PRIMERO: De las generalidades",
      "capitulos": [
        {
          "name": "Capítulo I: Objeto del reglamento",
          "articulos": [
            {
              "number": "Artículo 1.-",
              "content": "El presente reglamento es de orden público y observancia\ngeneral para los miembros del Proyecto Migala. Tiene por objeto regular y\ndelimitar las responsabilidades de las áreas mediante la regulación de la\nestructura del Proyecto, así como de las comisiones estatales, comisiones\ntemáticas e integrantes del Proyecto Migala; además de marcar pautas\noperativas generales. Así como regular conductas, contribuir al desarrollo y\nmantenimiento de una sana convivencia desde la creación de normativas y\nacuerdos.\nLo señalado en el presente artículo es de cumplimiento obligatorio para toda\npersona que forme parte de Proyecto Migala, así como invitados.",
              "type": "estructura",
              "cluster": "nacional",
              "tags": [
                "arte-cultura",
                "estructura"
              ],
              "keyConcepts": [
                "Comisiones estatal"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El presente reglamento es de orden público y observancia",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "general para los miembros del Proyecto Migala. Tiene por objeto regular y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "delimitar las responsabilidades de las áreas mediante la regulación de la",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "estructura del Proyecto, así como de las comisiones estatales, comisiones",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "temáticas e integrantes del Proyecto Migala; además de marcar pautas",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "operativas generales. Así como regular conductas, contribuir al desarrollo y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "mantenimiento de una sana convivencia desde la creación de normativas y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "acuerdos.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Lo señalado en el presente artículo es de cumplimiento obligatorio para toda",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "persona que forme parte de Proyecto Migala, así como invitados.",
                  "level": 0
                }
              ],
              "wordCount": 96,
              "hasList": false,
              "hasConditions": false
            }
          ]
        },
        {
          "name": "Capítulo II: Principios del reglamento",
          "articulos": [
            {
              "number": "Artículo 2.-",
              "content": "Los siguientes principios serán rectores del presente reglamento.\nninguna normativa podrá ir en contra de ellos y son horizontalidad, paridad,\nacciones afirmativas y transversalidad, soberanía, principio de las dos vacas.\nHorizontalidad; el Proyecto Migala siempre deberá estar organizado y tomará\nlas decisiones de la forma más igualitaria posible entre los miembros, evitando\nla centralización en la representatividad, espacios de diálogo y el ejercicio de\nla toma decisiones.\nParidad; El Proyecto Migala siempre buscará propiciar la paridad de género,\nmanteniendo una participación y representación equilibrada entre hombres y\nmujeres, sobre todo en la toma de decisiones.\nAcciones afirmativas; Siempre se ponderarán las posturas y acciones que\ncompensen los grupos de personas en condiciones de vulnerabilidad, que\npresentan brechas y rezagos, marginados en el ejercicio de sus derechos,\nsobre aquellos más beneficiados por el sistema.\nDiálogo; Se deberá preponderar la comunicación entre los grupos e individuos\npara la toma de decisiones, aquellas acciones o documentos que no sean\nabiertos al diálogo serán inválidos dentro del proyecto Migala.\nPrincipio de las dos vacas; “Juntos pensamos mejor” por lo cual con el fin de\ndarle legitimidad y validez a los actos dentro del proyecto migala siempre\ndeberán estar abiertos a la participación de cualquier afiliado para ampliar la\nperspectiva.\nSoberanía; Ninguna persona o grupo está por encima del proyecto migala,\ntodos somos uno y uno lo somos todos, por lo cual ninguna voz mandará por\nencima del proyecto, sólo entre todos nos dirigimos.\nCerteza; Todo decisión deberá otorgar seguridad y certidumbre a los\nmiembros, en virtud de que permite conocer si las acciones los órganos son\napegadas a derecho y garantiza que los procedimientos sean completamente\nverificables, fidedignos y confiables\nPublicidad; Todos los acuerdos y decisiones que se tomen dentro del proyecto\nmigala deberán constar en grabación cargada a los portales de transparencia\nde los grupos, así como, mantener registro mediante documentos abiertos.\nTransparencia; Se debe buscar la máxima revelación de información,\nmediante la ampliación unilateral del catálogo de información fundamental de\nlibre acceso del Proyecto Migala.\nFundar y Motivar; Toda resolución emitida dentro del Proyecto Migala deberá\nexpresar los preceptos aplicables al asunto motivo del acto y las\ncircunstancias especiales, razones particulares o causas inmediatas que se\nhayan tenido en consideración para el actuar.",
              "type": "principio",
              "cluster": "nacional",
              "tags": [
                "afiliado",
                "comunicacion",
                "dialogo",
                "formacion",
                "horizontalidad",
                "mujeres",
                "paridad",
                "principio",
                "transparencia"
              ],
              "keyConcepts": [
                "Acciones afirmativa",
                "Paridad de género",
                "Principio de las dos vacas"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Los siguientes principios serán rectores del presente reglamento.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "ninguna normativa podrá ir en contra de ellos y son horizontalidad, paridad,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "acciones afirmativas y transversalidad, soberanía, principio de las dos vacas.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Horizontalidad; el Proyecto Migala siempre deberá estar organizado y tomará",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "las decisiones de la forma más igualitaria posible entre los miembros, evitando",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "la centralización en la representatividad, espacios de diálogo y el ejercicio de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "la toma decisiones.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Paridad; El Proyecto Migala siempre buscará propiciar la paridad de género,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "manteniendo una participación y representación equilibrada entre hombres y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "mujeres, sobre todo en la toma de decisiones.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Acciones afirmativas; Siempre se ponderarán las posturas y acciones que",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "compensen los grupos de personas en condiciones de vulnerabilidad, que",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "presentan brechas y rezagos, marginados en el ejercicio de sus derechos,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "sobre aquellos más beneficiados por el sistema.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Diálogo; Se deberá preponderar la comunicación entre los grupos e individuos",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "para la toma de decisiones, aquellas acciones o documentos que no sean",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "abiertos al diálogo serán inválidos dentro del proyecto Migala.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Principio de las dos vacas; “Juntos pensamos mejor” por lo cual con el fin de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "darle legitimidad y validez a los actos dentro del proyecto migala siempre",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "deberán estar abiertos a la participación de cualquier afiliado para ampliar la",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "perspectiva.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Soberanía; Ninguna persona o grupo está por encima del proyecto migala,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "todos somos uno y uno lo somos todos, por lo cual ninguna voz mandará por",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "encima del proyecto, sólo entre todos nos dirigimos.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Certeza; Todo decisión deberá otorgar seguridad y certidumbre a los",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "miembros, en virtud de que permite conocer si las acciones los órganos son",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "apegadas a derecho y garantiza que los procedimientos sean completamente",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "verificables, fidedignos y confiables",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Publicidad; Todos los acuerdos y decisiones que se tomen dentro del proyecto",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "migala deberán constar en grabación cargada a los portales de transparencia",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "de los grupos, así como, mantener registro mediante documentos abiertos.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Transparencia; Se debe buscar la máxima revelación de información,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "mediante la ampliación unilateral del catálogo de información fundamental de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "libre acceso del Proyecto Migala.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Fundar y Motivar; Toda resolución emitida dentro del Proyecto Migala deberá",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "expresar los preceptos aplicables al asunto motivo del acto y las",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "circunstancias especiales, razones particulares o causas inmediatas que se",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "hayan tenido en consideración para el actuar.",
                  "level": 0
                }
              ],
              "wordCount": 371,
              "hasList": false,
              "hasConditions": false
            }
          ]
        },
        {
          "name": "Capítulo III: Glosario",
          "articulos": [
            {
              "number": "Artículo 3.-",
              "content": "Para los efectos de este Reglamento se entenderá por:\nI. Acciones Afirmativas; Acciones cuyo objetivo es compensar las\ncondiciones de grupos de personas históricamente relegadas, tales\ncomo de Diversidad Sexual, Pueblos Originarios, Discapacitados,\nMigrantes y Afromexicanas.\nII. Órganos; Es cualquier área, coordinación, comité, o grupo que integre\nla estructura organizacional del proyecto migala.\nIII. Miembros; Es el conjunto de afiliados y simpatizantes.\nIV. Áreas;Son las estructuras organizacionales más amplias dentro del\nproyecto migala que integran coordinaciones y temas afines.\nV. Coordinación; Son los grupos internos del Proyecto Migala, existen para\natender necesidades del proyecto y realizan tareas específicas; que se\npueden conformar con Comités.\nComité; Son los grupos de organización interna del Proyecto Migala,\nexisten para atender necesidades del proyecto y realizan tareas\nespecíficas; se pueden conformar con Mesas.\nVI. Mesa; Son un grupo de personas no tan extenso que tiene una sola\ntarea en específico (p. ej. voceros, enlaces operativos), por lo general\nespecialistas y con un perfil muy específico/especializado con el fin de\nauxiliar y apoyar a los grupos a los que están integrados.\nVII. Comisión; Son los órganos que agrupan personas por temas y estados.\nSon el centro y la parte más importante del Proyecto Migala. Crean\nproductos específicos y proyectos de su área o Estado.\nVIII. Titularidad; Es el cargo o rol al cual se le delegó una responsabilidad\nmediante una figura dentro de algún reglamento del proyecto migala.\nIX. Espacio amigable; lugar físico o digital que cuente con las\ncaracterísticas necesarias para que los asistentes puedan sentirse en\nconfianza para emitir comentarios, seguros para disfrutar su estadía y\nplenos para expresar sus sentires.\nX. Diálogo; Es una conversación en la que se prioriza el conocer y\ncomprender el punto de vista del otro antes de opinar o decidir.\nXI. Consenso; Es una decisión grupal tomada por común acuerdo,\nmediante diálogo y no mediante imposición o manipulación.\nXII. Incluyente; Dar igual valor a las personas al poner de manifiesto la\ndiversidad que compone a la sociedad y dar visibilidad a quienes en ella\nparticipan.\nXIII. Participativo; Una actividad que busca la intervención directa de los\ninvolucrados en sus procesos.\nXIV. Público; Es algo que se hace a la vista de todos, siendo un sitio, acto o\ninformación de libre acceso que pertenece a todos.\nXV. Documento abierto; archivo digital generalmente de corte\nadministrativo que puede ser abierto y editado por algún programa que\nsea gratuito o que no conlleve un gasto extra para poder visualizarlo.\nXVI. Documento editable; archivo que permita ser modificado sin\nprocedimientos extras, después de ser abierto en algún dispositivo\ndigital.",
              "type": "definicion",
              "cluster": "nacional",
              "tags": [
                "afiliado",
                "arte-cultura",
                "definicion",
                "dialogo",
                "diversidad",
                "formacion",
                "manifiesto",
                "migrantes",
                "pueblos-originarios",
                "simpatizante",
                "voceros"
              ],
              "keyConcepts": [
                "Acciones afirmativa",
                "Espacio amigable"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Para los efectos de este Reglamento se entenderá por:",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "I. Acciones Afirmativas; Acciones cuyo objetivo es compensar las",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "condiciones de grupos de personas históricamente relegadas, tales",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "como de Diversidad Sexual, Pueblos Originarios, Discapacitados,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Migrantes y Afromexicanas.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "II. Órganos; Es cualquier área, coordinación, comité, o grupo que integre",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "la estructura organizacional del proyecto migala.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "III. Miembros; Es el conjunto de afiliados y simpatizantes.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "IV. Áreas;Son las estructuras organizacionales más amplias dentro del",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "proyecto migala que integran coordinaciones y temas afines.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "V. Coordinación; Son los grupos internos del Proyecto Migala, existen para",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "atender necesidades del proyecto y realizan tareas específicas; que se",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "pueden conformar con Comités.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Comité; Son los grupos de organización interna del Proyecto Migala,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "existen para atender necesidades del proyecto y realizan tareas",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "específicas; se pueden conformar con Mesas.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "VI. Mesa; Son un grupo de personas no tan extenso que tiene una sola",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "tarea en específico (p. ej. voceros, enlaces operativos), por lo general",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "especialistas y con un perfil muy específico/especializado con el fin de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "auxiliar y apoyar a los grupos a los que están integrados.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "VII. Comisión; Son los órganos que agrupan personas por temas y estados.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "Son el centro y la parte más importante del Proyecto Migala. Crean",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "productos específicos y proyectos de su área o Estado.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "VIII. Titularidad; Es el cargo o rol al cual se le delegó una responsabilidad",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "mediante una figura dentro de algún reglamento del proyecto migala.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "IX. Espacio amigable; lugar físico o digital que cuente con las",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "características necesarias para que los asistentes puedan sentirse en",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "confianza para emitir comentarios, seguros para disfrutar su estadía y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "plenos para expresar sus sentires.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "X. Diálogo; Es una conversación en la que se prioriza el conocer y",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "comprender el punto de vista del otro antes de opinar o decidir.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "XI. Consenso; Es una decisión grupal tomada por común acuerdo,",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "mediante diálogo y no mediante imposición o manipulación.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "XII. Incluyente; Dar igual valor a las personas al poner de manifiesto la",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "diversidad que compone a la sociedad y dar visibilidad a quienes en ella",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "participan.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "XIII. Participativo; Una actividad que busca la intervención directa de los",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "involucrados en sus procesos.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "XIV. Público; Es algo que se hace a la vista de todos, siendo un sitio, acto o",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "información de libre acceso que pertenece a todos.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "XV. Documento abierto; archivo digital generalmente de corte",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "administrativo que puede ser abierto y editado por algún programa que",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "sea gratuito o que no conlleve un gasto extra para poder visualizarlo.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "XVI. Documento editable; archivo que permita ser modificado sin",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "procedimientos extras, después de ser abierto en algún dispositivo",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "digital.",
                  "level": 0
                }
              ],
              "wordCount": 428,
              "hasList": true,
              "hasConditions": false
            }
          ]
        },
        {
          "name": "Capítulo IV: Requisitos y Obligaciones para formar parte al Proyecto Migala",
          "articulos": [
            {
              "number": "Artículo 4.-",
              "content": "Los miembros que confluyen en el Proyecto Migala podrán ser\nsimpatizantes o bien afiliados:\nSimpatizantes: son aquellos que pueden asistir a todas las reuniones del\nProyecto Migala en General, con voz y capacidad para presentar propuestas y\nproyectos, sin embargo, no tendrán derecho a voto, ni posibilidad de ser\npostulados como candidatos ni titulares del Proyecto Migala.\nAfiliados: son aquellos que poseen el derecho a asistir a todas las reuniones\ndel Proyecto Migala en General, con voz y voto, con capacidad para presentar\npropuestas y proyectos. Además podrán formar parte de los grupos operativos\ny ser propuestos para ocupar titularidades dentro de la organización del\nProyecto Migala, así como, tendrán posibilidad de ser electos para candidatos\ny precandidatos en cargos de elección popular por parte de Migala.",
              "type": "derecho",
              "cluster": "nacional",
              "tags": [
                "afiliado",
                "arte-cultura",
                "derecho",
                "simpatizante",
                "votacion"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Los miembros que confluyen en el Proyecto Migala podrán ser",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "simpatizantes o bien afiliados:",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Simpatizantes: son aquellos que pueden asistir a todas las reuniones del",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Proyecto Migala en General, con voz y capacidad para presentar propuestas y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "proyectos, sin embargo, no tendrán derecho a voto, ni posibilidad de ser",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "postulados como candidatos ni titulares del Proyecto Migala.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Afiliados: son aquellos que poseen el derecho a asistir a todas las reuniones",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "del Proyecto Migala en General, con voz y voto, con capacidad para presentar",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "propuestas y proyectos. Además podrán formar parte de los grupos operativos",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "y ser propuestos para ocupar titularidades dentro de la organización del",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Proyecto Migala, así como, tendrán posibilidad de ser electos para candidatos",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "y precandidatos en cargos de elección popular por parte de Migala.",
                  "level": 0
                }
              ],
              "wordCount": 127,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 5.-",
              "content": "Son requisitos de los Simpatizantes y Afiliados:\nI. Ser mexicano naturalizado o de nacimiento.\nII. Contar con al menos los 15 años de edad cumplidos.\nIII. Estar registrado en el Padrón General del Proyecto Migala.\nIV. Aceptar el Aviso de Privacidad.",
              "type": "requisito",
              "cluster": "nacional",
              "tags": [
                "afiliado",
                "requisito",
                "simpatizante"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Son requisitos de los Simpatizantes y Afiliados:",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "I. Ser mexicano naturalizado o de nacimiento.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "II. Contar con al menos los 15 años de edad cumplidos.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "III. Estar registrado en el Padrón General del Proyecto Migala.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "IV. Aceptar el Aviso de Privacidad.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                }
              ],
              "wordCount": 41,
              "hasList": true,
              "hasConditions": false
            },
            {
              "number": "Artículo 6.-",
              "content": "Requerimientos adicionales para afiliados del Proyecto Migala:\nI. Haber leído los documentos básicos (Reglamento, Manifiesto y Ruta\nCrítica).\nII. Cursar los talleres formativos básicos impartidos por la Comisión\nNacional de Formación y Utopía (CONFU).\nIII. Ser mayor de dieciocho años.\nIV. Ser mexicano de nacimiento.\nV. Contar con INE vigente.\nVI. Estar registrado en el Padrón de Afiliados.\nVII. Formar parte de la Comisión Estatal en la que competa\nterritorialmente su residencia.\nVIII. Formar parte de mínimo una Comisión Temática.",
              "type": "requisito",
              "cluster": "nacional",
              "tags": [
                "afiliado",
                "arte-cultura",
                "formacion",
                "manifiesto",
                "requisito"
              ],
              "keyConcepts": [
                "Comisión estatal",
                "Comisión temática"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Requerimientos adicionales para afiliados del Proyecto Migala:",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "I. Haber leído los documentos básicos (Reglamento, Manifiesto y Ruta",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "Crítica).",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "II. Cursar los talleres formativos básicos impartidos por la Comisión",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "Nacional de Formación y Utopía (CONFU).",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "III. Ser mayor de dieciocho años.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "IV. Ser mexicano de nacimiento.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "V. Contar con INE vigente.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "VI. Estar registrado en el Padrón de Afiliados.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "VII. Formar parte de la Comisión Estatal en la que competa",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "territorialmente su residencia.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "VIII. Formar parte de mínimo una Comisión Temática.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                }
              ],
              "wordCount": 80,
              "hasList": true,
              "hasConditions": false
            },
            {
              "number": "Artículo 7.-",
              "content": "Será obligatorio para los afiliados de Proyecto Migala estar dentro\nde estas redes y plataformas:\nA. Telegram de su comisión estatal;\nB. Estar suscrito al canal de YouTube oficial del PM nacional y estatal (que\nte corresponda).",
              "type": "obligacion",
              "cluster": "nacional",
              "tags": [
                "afiliado",
                "obligacion"
              ],
              "keyConcepts": [
                "Comisión estatal"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Será obligatorio para los afiliados de Proyecto Migala estar dentro",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "de estas redes y plataformas:",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "A. Telegram de su comisión estatal;",
                  "level": 0,
                  "listType": "letter",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "B. Estar suscrito al canal de YouTube oficial del PM nacional y estatal (que",
                  "level": 0,
                  "listType": "letter",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "te corresponda).",
                  "level": 0
                }
              ],
              "wordCount": 37,
              "hasList": true,
              "hasConditions": false
            },
            {
              "number": "Artículo 8.-",
              "content": "Todos los miembros del Proyecto Migala tendrán la obligación de\nrespetar el presente reglamento y las normativas que emanen de él.",
              "type": "obligacion",
              "cluster": "nacional",
              "tags": [
                "obligacion"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Todos los miembros del Proyecto Migala tendrán la obligación de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "respetar el presente reglamento y las normativas que emanen de él.",
                  "level": 0
                }
              ],
              "wordCount": 21,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 9.-",
              "content": "Las personas que no cuenten con la nacionalidad mexicana se les\npermitirá la entrada al Proyecto Migala en sus redes, únicamente como oyente\nteniendo posibilidad de opinar, sin contar con la posibilidad de incidir\ninternamente.",
              "type": "estructura",
              "cluster": "nacional",
              "tags": [
                "estructura"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Las personas que no cuenten con la nacionalidad mexicana se les",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "permitirá la entrada al Proyecto Migala en sus redes, únicamente como oyente",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "teniendo posibilidad de opinar, sin contar con la posibilidad de incidir",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "internamente.",
                  "level": 0
                }
              ],
              "wordCount": 35,
              "hasList": false,
              "hasConditions": false
            }
          ]
        }
      ],
      "totalArticulos": 9,
      "totalPalabras": 1236
    },
    {
      "name": "TITULO SEGUNDO: De los documentos básicos",
      "capitulos": [
        {
          "name": "Capítulo I: Generalidades",
          "articulos": [
            {
              "number": "Artículo 10.-",
              "content": "Los documentos básicos del Proyecto Migala son El Reglamento,\nEl Manifiesto y La Ruta Crítica. Estos determinarán la línea ideológica, los\nfines y acciones que desarrollaremos como Proyecto Migala y sientan las bases\ngenerales de acción así como nuestra estructura operativa .\nEl Manifiesto es la declaración pública de principios, ideología e intenciones\noficiales del Proyecto Migala.\nEl Reglamento es una normativa general de aplicación para todos los\nmiembros del proyecto migala, con el fin de ejecutar las reglas de conducta\naquí descritas, así como, definir la estructura orgánica del Proyecto.\nLa Ruta Crítica es la serie de tareas o acciones que se tomarán para llegar a\nmaterializar lo dicho en manifiesto y reglamento.",
              "type": "estructura",
              "cluster": "nacional",
              "tags": [
                "estructura",
                "manifiesto",
                "ruta-critica"
              ],
              "keyConcepts": [
                "Ruta crítica"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Los documentos básicos del Proyecto Migala son El Reglamento,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "El Manifiesto y La Ruta Crítica. Estos determinarán la línea ideológica, los",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "fines y acciones que desarrollaremos como Proyecto Migala y sientan las bases",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "generales de acción así como nuestra estructura operativa .",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "El Manifiesto es la declaración pública de principios, ideología e intenciones",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "oficiales del Proyecto Migala.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "El Reglamento es una normativa general de aplicación para todos los",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "miembros del proyecto migala, con el fin de ejecutar las reglas de conducta",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "aquí descritas, así como, definir la estructura orgánica del Proyecto.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "La Ruta Crítica es la serie de tareas o acciones que se tomarán para llegar a",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "materializar lo dicho en manifiesto y reglamento.",
                  "level": 0
                }
              ],
              "wordCount": 114,
              "hasList": false,
              "hasConditions": false
            }
          ]
        }
      ],
      "totalArticulos": 1,
      "totalPalabras": 114
    },
    {
      "name": "TÍTULO TERCERO: Organización y funciones del Proyecto Migala",
      "capitulos": [
        {
          "name": "Capítulo I: Estructura",
          "articulos": [
            {
              "number": "Artículo 11.-",
              "content": "El Proyecto Migala se conforma de diversas Áreas y Comisiones,\ncuya finalidad es la organización horizontal, democrática y plural; que cuenta\ncon la facilidad de participación de los miembros.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El Proyecto Migala se conforma de diversas Áreas y Comisiones,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "cuya finalidad es la organización horizontal, democrática y plural; que cuenta",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "con la facilidad de participación de los miembros.",
                  "level": 0
                }
              ],
              "wordCount": 29,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 12.-",
              "content": "Dentro del Proyecto Migala todos los órganos de estructura\ndeberán regirse por el principio de paridad de género, consistente en la\nigualdad sustantiva entre mujeres y hombres.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura",
                "mujeres",
                "paridad"
              ],
              "keyConcepts": [
                "Paridad de género",
                "Principio de paridad"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Dentro del Proyecto Migala todos los órganos de estructura",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "deberán regirse por el principio de paridad de género, consistente en la",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "igualdad sustantiva entre mujeres y hombres.",
                  "level": 0
                }
              ],
              "wordCount": 27,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 13.-",
              "content": "La paridad de género será aplicada con la siguiente regla:\nPara los titulares de cualquier órgano del proyecto migala deberá de\nponderarse el 50% de mujeres y el 50% de hombres.\nEn caso de no cumplirse con la paridad de género, como acción afirmativa, se\nbuscará que el porcentaje de personas del mismo género sea una relación de\n60% y 40%; sin embargo, en esta situación el órgano carente de este principio,\ndeberá de acordar dos proyectos con la finalidad corregir y acelerar esta\ncircunstancia en pro de cumplir con la Paridad de Género en coordinación\ncon el grupo de identidad de género que tenga la menor proporción en\nrelación a la paridad. Las medidas tomadas no podrán durar más de 6 meses.\nEn el caso del anterior párrafo, si no se llega a la paridad de género en el lapso\nseñalado, el Área Político Electoral impondrá medidas de acción afirmativa\npara compensar la desigualdad, creando medidas de acción afirmativa que\npropicien la paridad.\nLos Grupos de Perspectiva de Género quedarán exentos de este principio.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura",
                "mujeres",
                "paridad",
                "politico-electoral"
              ],
              "keyConcepts": [
                "Acción afirmativa",
                "Paridad de género"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "La paridad de género será aplicada con la siguiente regla:",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Para los titulares de cualquier órgano del proyecto migala deberá de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "ponderarse el 50% de mujeres y el 50% de hombres.",
                  "level": 0
                },
                {
                  "type": "condition",
                  "content": "En caso de no cumplirse con la paridad de género, como acción afirmativa, se",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "buscará que el porcentaje de personas del mismo género sea una relación de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "60% y 40%; sin embargo, en esta situación el órgano carente de este principio,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "deberá de acordar dos proyectos con la finalidad corregir y acelerar esta",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "circunstancia en pro de cumplir con la Paridad de Género en coordinación",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "con el grupo de identidad de género que tenga la menor proporción en",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "relación a la paridad. Las medidas tomadas no podrán durar más de 6 meses.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "En el caso del anterior párrafo, si no se llega a la paridad de género en el lapso",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "señalado, el Área Político Electoral impondrá medidas de acción afirmativa",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "para compensar la desigualdad, creando medidas de acción afirmativa que",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "propicien la paridad.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Los Grupos de Perspectiva de Género quedarán exentos de este principio.",
                  "level": 0
                }
              ],
              "wordCount": 175,
              "hasList": false,
              "hasConditions": true
            },
            {
              "number": "Artículo 14.-",
              "content": "Los titulares de los órganos deberán ejercer sus facultades de\nforma imparcial, con un enfoque de protección de su área, aclarando los\ncomentarios que sean a título personal y no de donde forma parte.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "arte-cultura",
                "estructura"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Los titulares de los órganos deberán ejercer sus facultades de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "forma imparcial, con un enfoque de protección de su área, aclarando los",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "comentarios que sean a título personal y no de donde forma parte.",
                  "level": 0
                }
              ],
              "wordCount": 34,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 15.-",
              "content": "El Proyecto Migala se estructurará en cuatro ejes: el eje\nterritorial que tendrá como pilar fundamental a las 32 comisiones estatales; el\neje especializado compuesto por las comisiones temáticas; el eje en materia de\ntransversalidad, por último, un eje operativo con órganos garantes de\nhorizontalidad.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura",
                "horizontalidad"
              ],
              "keyConcepts": [
                "Comisiones estatal",
                "Comisiones temática"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El Proyecto Migala se estructurará en cuatro ejes: el eje",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "territorial que tendrá como pilar fundamental a las 32 comisiones estatales; el",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "eje especializado compuesto por las comisiones temáticas; el eje en materia de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "transversalidad, por último, un eje operativo con órganos garantes de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "horizontalidad.",
                  "level": 0
                }
              ],
              "wordCount": 45,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 16.-",
              "content": "Será el Eje Territorial las Comisiones Estatales que representan a\nlos 32 entidades federativas de los Estados Unidos Mexicanos.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura"
              ],
              "keyConcepts": [
                "Comisiones estatal"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Será el Eje Territorial las Comisiones Estatales que representan a",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "los 32 entidades federativas de los Estados Unidos Mexicanos.",
                  "level": 0
                }
              ],
              "wordCount": 19,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 17.-",
              "content": "Será el Eje Especializado temas ideológicos las siguientes\nComisiones Temáticas:\na. Arte y cultura\nb. Ciencia y Tecnología\nc. Estudios Económicos\nd. Geopolítica e Historia\ne. Sustentabilidad\nf. Derechos Humanos",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "arte-cultura",
                "ciencia-tecnologia",
                "derechos-humanos",
                "economia",
                "estructura",
                "geopolitica-historia",
                "sustentabilidad"
              ],
              "keyConcepts": [
                "Comisiones temática"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Será el Eje Especializado temas ideológicos las siguientes",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Comisiones Temáticas:",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "a. Arte y cultura",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "b. Ciencia y Tecnología",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "c. Estudios Económicos",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "d. Geopolítica e Historia",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "e. Sustentabilidad",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "f. Derechos Humanos",
                  "level": 0
                }
              ],
              "wordCount": 30,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 18.-",
              "content": "Será el Eje Operativo los siguientes Órganos Garantes de\nHorizontalidad:\na. Área de Dirección;\nb. Área de Formación;\nc. Área Administrativa;\nd. Área de Transparencia;\ne. Área de Contraloría;\nf. Área de Comunicación y Propaganda;\ng. Área de Informática;\nh. Área Político Electoral;\ni. Área Financiera;\nj. Área Legal;\nk. Área de Diálogo y Arbitraje.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "comunicacion",
                "contraloria",
                "dialogo",
                "dialogo-arbitraje",
                "estructura",
                "financiero",
                "formacion",
                "horizontalidad",
                "informatica",
                "legal",
                "politico-electoral",
                "transparencia"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Será el Eje Operativo los siguientes Órganos Garantes de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Horizontalidad:",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "a. Área de Dirección;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "b. Área de Formación;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "c. Área Administrativa;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "d. Área de Transparencia;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "e. Área de Contraloría;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "f. Área de Comunicación y Propaganda;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "g. Área de Informática;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "h. Área Político Electoral;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "i. Área Financiera;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "j. Área Legal;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "k. Área de Diálogo y Arbitraje.",
                  "level": 0
                }
              ],
              "wordCount": 55,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 19.-",
              "content": "Será el Eje en Materia de Transversalidad los siguientes Grupos:\na. Grupo de Mujeres\nb. Grupo de Masculinidades\nc. Grupo de Diversidad\nd. Grupo de Pueblos Originarios\ne. Grupo de Personas con Funcionalidad Diversa\nf. Grupo de Paisanos",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "diversidad",
                "estructura",
                "funcionalidad-diversa",
                "migrantes",
                "mujeres",
                "pueblos-originarios"
              ],
              "keyConcepts": [
                "Grupo de diversidad",
                "Grupo de masculinidades",
                "Grupo de mujeres"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Será el Eje en Materia de Transversalidad los siguientes Grupos:",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "a. Grupo de Mujeres",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "b. Grupo de Masculinidades",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "c. Grupo de Diversidad",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "d. Grupo de Pueblos Originarios",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "e. Grupo de Personas con Funcionalidad Diversa",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "f. Grupo de Paisanos",
                  "level": 0
                }
              ],
              "wordCount": 38,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 20.-",
              "content": "Todos los integrantes del Proyecto Migala podrán unirse a\ncualquiera de las Áreas antes mencionadas, para ello tendrán que apegarse a\nlos requisitos especificados en sus reglamentos individuales.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura",
                "legal"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Todos los integrantes del Proyecto Migala podrán unirse a",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "cualquiera de las Áreas antes mencionadas, para ello tendrán que apegarse a",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "los requisitos especificados en sus reglamentos individuales.",
                  "level": 0
                }
              ],
              "wordCount": 28,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 21.-",
              "content": "Los miembros del Proyecto Migala no podrán ser titulares de más\nde un Órgano.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Los miembros del Proyecto Migala no podrán ser titulares de más",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "de un Órgano.",
                  "level": 0
                }
              ],
              "wordCount": 14,
              "hasList": false,
              "hasConditions": false
            }
          ]
        },
        {
          "name": "Capítulo II: Área de Dirección",
          "articulos": [
            {
              "number": "Artículo 22.-",
              "content": "El Área de Dirección será tripartita:\nA. Coordinación General;\nB. Mesa de recaudación de fondos;\nC. Mesa de voceros.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura",
                "recaudacion",
                "voceros"
              ],
              "keyConcepts": [
                "Coordinación general"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El Área de Dirección será tripartita:",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "A. Coordinación General;",
                  "level": 0,
                  "listType": "letter",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "B. Mesa de recaudación de fondos;",
                  "level": 0,
                  "listType": "letter",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "C. Mesa de voceros.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                }
              ],
              "wordCount": 19,
              "hasList": true,
              "hasConditions": false
            },
            {
              "number": "Artículo 23.-",
              "content": "La Coordinación General tendrá la facultad para dirigir al\nProyecto Migala Nacional mediante el diálogo, consenso y votación de los\nmiembros de esta Coordinación a través de la elaboración de la ruta crítica,\nesta será elaborada mediante los proyectos presentados por esta coordinación\ny los que hayan sido propuestos y aprobados por parte de los miembros de\nProyecto Migala mediante el Comité de Gestión de Proyectos.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "arte-cultura",
                "dialogo",
                "estructura",
                "ruta-critica",
                "votacion"
              ],
              "keyConcepts": [
                "Coordinación general",
                "Ruta crítica"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "La Coordinación General tendrá la facultad para dirigir al",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Proyecto Migala Nacional mediante el diálogo, consenso y votación de los",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "miembros de esta Coordinación a través de la elaboración de la ruta crítica,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "esta será elaborada mediante los proyectos presentados por esta coordinación",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "y los que hayan sido propuestos y aprobados por parte de los miembros de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Proyecto Migala mediante el Comité de Gestión de Proyectos.",
                  "level": 0
                }
              ],
              "wordCount": 66,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 24.-",
              "content": "Para ser integrante de la Coordinación General será requisito:\n1. Estar registrado correctamente como Afiliado.\n2. Contar con el tiempo adecuado para atender las sesiones de\nCoordinación General.\n3. Contar con la asistencia efectiva de al menos el 45% de las sesiones de\nsu comisión estatal.\n4. No contar con proceso interno activo de conciliación, diálogo y arbitraje,\nasí como de contraloría.",
              "type": "requisito",
              "cluster": "operativo",
              "tags": [
                "afiliado",
                "contraloria",
                "dialogo",
                "dialogo-arbitraje",
                "requisito",
                "sesiones"
              ],
              "keyConcepts": [
                "Comisión estatal",
                "Coordinación general"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Para ser integrante de la Coordinación General será requisito:",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "1. Estar registrado correctamente como Afiliado.",
                  "level": 0,
                  "listType": "number",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "2. Contar con el tiempo adecuado para atender las sesiones de",
                  "level": 0,
                  "listType": "number",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "Coordinación General.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "3. Contar con la asistencia efectiva de al menos el 45% de las sesiones de",
                  "level": 0,
                  "listType": "number",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "su comisión estatal.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "4. No contar con proceso interno activo de conciliación, diálogo y arbitraje,",
                  "level": 0,
                  "listType": "number",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "así como de contraloría.",
                  "level": 0
                }
              ],
              "wordCount": 62,
              "hasList": true,
              "hasConditions": false
            },
            {
              "number": "Artículo 25.-",
              "content": "La Coordinación General se compondrá por dieciséis afiliados\ndel Proyecto Migala en paridad de género, seleccionados mediante un proceso\nelectoral. Para ser elegible, se deberá cumplir cabalmente los requisitos\nmencionados en el anterior artículo.",
              "type": "requisito",
              "cluster": "operativo",
              "tags": [
                "afiliado",
                "paridad",
                "requisito"
              ],
              "keyConcepts": [
                "Coordinación general",
                "Paridad de género"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "La Coordinación General se compondrá por dieciséis afiliados",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "del Proyecto Migala en paridad de género, seleccionados mediante un proceso",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "electoral. Para ser elegible, se deberá cumplir cabalmente los requisitos",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "mencionados en el anterior artículo.",
                  "level": 0
                }
              ],
              "wordCount": 34,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 26.-",
              "content": "La distribución de los integrantes será de la siguiente forma\nsiguiendo el principio de paridad (1 mujer, 1 hombre y una 1 acción afirmativa\nrespetando el principio de paridad de género).\n● 3 miembros serán seleccionados por los estados que conforman la\ncircunscripción 1 de nuestro país.\n● 3 miembros serán seleccionados por los estados que conforman la\ncircunscripción 2 de nuestro país.\n● 3 miembros serán seleccionados por los estados que conforman la\ncircunscripción 3 de nuestro país.\n● 3 miembros serán seleccionados por los estados que conforman la\ncircunscripción 4 de nuestro país.\n● 3 miembros serán seleccionados por los estados que conforman la\ncircunscripción 5 de nuestro país.\n● El último miembro será elegido por los anteriores miembros.\nCualquier situación extraordinaria que surja sobre esta distribución en este\nartículo deberá ser deliberada por el Área político-electoral.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura",
                "paridad"
              ],
              "keyConcepts": [
                "Acción afirmativa",
                "Paridad de género",
                "Principio de paridad"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "La distribución de los integrantes será de la siguiente forma",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "siguiendo el principio de paridad (1 mujer, 1 hombre y una 1 acción afirmativa",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "respetando el principio de paridad de género).",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "3 miembros serán seleccionados por los estados que conforman la",
                  "level": 0,
                  "listType": "bullet"
                },
                {
                  "type": "paragraph",
                  "content": "circunscripción 1 de nuestro país.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "3 miembros serán seleccionados por los estados que conforman la",
                  "level": 0,
                  "listType": "bullet"
                },
                {
                  "type": "paragraph",
                  "content": "circunscripción 2 de nuestro país.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "3 miembros serán seleccionados por los estados que conforman la",
                  "level": 0,
                  "listType": "bullet"
                },
                {
                  "type": "paragraph",
                  "content": "circunscripción 3 de nuestro país.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "3 miembros serán seleccionados por los estados que conforman la",
                  "level": 0,
                  "listType": "bullet"
                },
                {
                  "type": "paragraph",
                  "content": "circunscripción 4 de nuestro país.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "3 miembros serán seleccionados por los estados que conforman la",
                  "level": 0,
                  "listType": "bullet"
                },
                {
                  "type": "paragraph",
                  "content": "circunscripción 5 de nuestro país.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "El último miembro será elegido por los anteriores miembros.",
                  "level": 0,
                  "listType": "bullet"
                },
                {
                  "type": "paragraph",
                  "content": "Cualquier situación extraordinaria que surja sobre esta distribución en este",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "artículo deberá ser deliberada por el Área político-electoral.",
                  "level": 0
                }
              ],
              "wordCount": 139,
              "hasList": true,
              "hasConditions": false
            },
            {
              "number": "Artículo 27.-",
              "content": "En caso de incumplimiento de las funciones delegadas a los\nmiembros del área, cualquier persona mediante el Área de Contraloría podrá\niniciar un procedimiento de destitución del cargo con apego al Título Sexto\ndel presente reglamento.",
              "type": "procedimiento",
              "cluster": "operativo",
              "tags": [
                "contraloria",
                "procedimiento"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "condition",
                  "content": "En caso de incumplimiento de las funciones delegadas a los",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "miembros del área, cualquier persona mediante el Área de Contraloría podrá",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "iniciar un procedimiento de destitución del cargo con apego al Título Sexto",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "del presente reglamento.",
                  "level": 0
                }
              ],
              "wordCount": 36,
              "hasList": false,
              "hasConditions": true
            },
            {
              "number": "Artículo 28.-",
              "content": "La Coordinación General deberá de recibir propuestas de\nproyectos, comentarios, preguntas y sugerencias mediante la Coordinación de\nAdministración, las cuales serán expuestas en al menos un directo mensual en\ncanal oficial de YouTube para dar legitimidad a la visión democrática del\nProyecto Migala.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "administracion",
                "estructura"
              ],
              "keyConcepts": [
                "Coordinación general"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "La Coordinación General deberá de recibir propuestas de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "proyectos, comentarios, preguntas y sugerencias mediante la Coordinación de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Administración, las cuales serán expuestas en al menos un directo mensual en",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "canal oficial de YouTube para dar legitimidad a la visión democrática del",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Proyecto Migala.",
                  "level": 0
                }
              ],
              "wordCount": 43,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 29.-",
              "content": "La Coordinación General tendrá la obligación de elaborar\ninformes trimestrales con los resultados de sus actividades y funciones en\napego al Título Quinto de este reglamento.",
              "type": "obligacion",
              "cluster": "operativo",
              "tags": [
                "obligacion"
              ],
              "keyConcepts": [
                "Coordinación general"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "La Coordinación General tendrá la obligación de elaborar",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "informes trimestrales con los resultados de sus actividades y funciones en",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "apego al Título Quinto de este reglamento.",
                  "level": 0
                }
              ],
              "wordCount": 26,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 30.-",
              "content": "La Coordinación General deberá renovarse de manera ordinaria\ncada año, eligiendo nuevamente a todos sus miembros bajo las cláusulas que el\ncomité político-electoral elabore y la Coordinación General actual publique en\ntiempo y forma en el Notion o página web.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura"
              ],
              "keyConcepts": [
                "Coordinación general"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "La Coordinación General deberá renovarse de manera ordinaria",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "cada año, eligiendo nuevamente a todos sus miembros bajo las cláusulas que el",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "comité político-electoral elabore y la Coordinación General actual publique en",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "tiempo y forma en el Notion o página web.",
                  "level": 0
                }
              ],
              "wordCount": 40,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 31.-",
              "content": "La Coordinación General podrá limitar las acciones y proyectos\nde las coordinaciones, comisiones estatales y temáticas solo en casos en que\nse contrapongan al presente reglamento, derechos humanos, intereses del\nProyecto Migala, el manifiesto o pongan en peligro la existencia del Proyecto.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "derechos-humanos",
                "estructura",
                "manifiesto"
              ],
              "keyConcepts": [
                "Comisiones estatal",
                "Coordinación general"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "La Coordinación General podrá limitar las acciones y proyectos",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "de las coordinaciones, comisiones estatales y temáticas solo en casos en que",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "se contrapongan al presente reglamento, derechos humanos, intereses del",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Proyecto Migala, el manifiesto o pongan en peligro la existencia del Proyecto.",
                  "level": 0
                }
              ],
              "wordCount": 42,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 32.-",
              "content": "Esta Coordinación fungirá como órgano de apelación en caso de\ninconformidad en las resoluciones dictadas por el Área de Conciliación y\nArbitraje, así como de Contraloría.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "contraloria",
                "dialogo-arbitraje",
                "estructura"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Esta Coordinación fungirá como órgano de apelación en caso de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "inconformidad en las resoluciones dictadas por el Área de Conciliación y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Arbitraje, así como de Contraloría.",
                  "level": 0
                }
              ],
              "wordCount": 26,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 33.-",
              "content": "La Coordinación General podrá convenir alianzas estratégicas\ncon otros entes políticos, conforme al artículo 78 del presente reglamento.\nLas alianzas estratégicas de las que habla el presente artículo se podrán tomar\na nombre del conjunto del Proyecto Migala, futuro Partido Migala o la forma\nde organización que ésta determine, como pueden ser cooperativas,\nasociaciones civiles o sociedades de cualquier tipo en su conjunto nacional;\nsin embargo, las alianzas estatales quedarán excluidas de la toma de\ndecisiones de la Coordinación General, únicamente podrán intervenir cuando\nlas visiones y valores de los posibles aliados se contrapongan al presente\nreglamento, derechos humanos, intereses del Proyecto Migala, el manifiesto o\npongan en peligro la existencia del Proyecto.\nEn relación con el párrafo anterior, se tendrá que justificar la intervención\nmediante un escrito donde se funde y motive la decisión, además de hacerla\npública, pudiendo ser apelada mediante el Comité de Arbitraje y Sanciones, el\ncual tendrá que requerir que a la Comisión Estatal afectado, así como, la\nCoordinación General, y expresen lo que a sus intereses convenga, pudiendo\napoyarse en el Área Político Electoral como fuente de consulta para emitir una\nresolución.",
              "type": "derecho",
              "cluster": "operativo",
              "tags": [
                "alianzas",
                "derecho",
                "derechos-humanos",
                "manifiesto",
                "politico-electoral",
                "sancion"
              ],
              "keyConcepts": [
                "Comisión estatal",
                "Comité de arbitraje",
                "Coordinación general"
              ],
              "references": [
                {
                  "articleNum": "artículo 78",
                  "context": "con otros entes políticos, conforme al artículo 78 del presente reglamento. Las alianzas e"
                }
              ],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "La Coordinación General podrá convenir alianzas estratégicas",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "con otros entes políticos, conforme al artículo 78 del presente reglamento.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Las alianzas estratégicas de las que habla el presente artículo se podrán tomar",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "a nombre del conjunto del Proyecto Migala, futuro Partido Migala o la forma",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "de organización que ésta determine, como pueden ser cooperativas,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "asociaciones civiles o sociedades de cualquier tipo en su conjunto nacional;",
                  "level": 0
                },
                {
                  "type": "exception",
                  "content": "sin embargo, las alianzas estatales quedarán excluidas de la toma de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "decisiones de la Coordinación General, únicamente podrán intervenir cuando",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "las visiones y valores de los posibles aliados se contrapongan al presente",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "reglamento, derechos humanos, intereses del Proyecto Migala, el manifiesto o",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "pongan en peligro la existencia del Proyecto.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "En relación con el párrafo anterior, se tendrá que justificar la intervención",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "mediante un escrito donde se funde y motive la decisión, además de hacerla",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "pública, pudiendo ser apelada mediante el Comité de Arbitraje y Sanciones, el",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "cual tendrá que requerir que a la Comisión Estatal afectado, así como, la",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Coordinación General, y expresen lo que a sus intereses convenga, pudiendo",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "apoyarse en el Área Político Electoral como fuente de consulta para emitir una",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "resolución.",
                  "level": 0
                }
              ],
              "wordCount": 188,
              "hasList": false,
              "hasConditions": true
            },
            {
              "number": "Artículo 34.-",
              "content": "La mesa de voceros tendrá la función de comunicar de lo interno\nhacia lo externo los mensajes oficiales acordados por esta, esto incluye las\ncampañas para reclutar nuevos miembros, ser la voz e imagen del movimiento\ny ser quienes se presenten ante los medios de comunicación.\nA nivel nacional se contará inicialmente con 5 voceros, 1 por circunscripción,\nasí como con 2 voceros por comisión estatal, respetando el principio de\nparidad de género por entidad activa que pueda proveerlos, los cuales\ndecidirán quién será el vocero representante de la circunscripción. El periodo\nen el cargo para todos los voceros será de 1 año, culminando el mismo día que\nse entró en funciones; para el caso de los estatales, la designación se realizará\nde forma interna a la comisión que corresponda; para el caso de los\ncircunscripcionales, el proceso de elección comenzará 6 meses después de la\ndesignación de voceros estatales, y los aspirantes surgirán de esta misma\nmesa. Por lo cual, en caso de resultar seleccionado como vocero de\ncircunscripción, el sujeto deberá llevar a cabo ambos cargos de forma paralela.\nLa mesa de voceros deberá llevar registro de las fechas en las que se realizan\ntodos los procesos. El número de voceros por entidad activa podrá crecer\nconforme vayan madurando por cada 150 miembros activos se podrá lanzar\nuna dupla nueva de voceros para esa entidad.\nQue los interesados cuenten con buena oratoria, inteligencia emocional,\ncapacidad de diálogo e improvisación será oportuno, para ello habrán de\ntomar a más tardar al inicio de su nombramiento los talleres de la escuela de\ncuadros que se imparte en la CONFU de manera obligatoria, además tendrán\nque estudiar las diferentes normativas y manifiesto del Proyecto Migala.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "arte-cultura",
                "comunicacion",
                "dialogo",
                "estructura",
                "formacion",
                "manifiesto",
                "paridad",
                "voceros"
              ],
              "keyConcepts": [
                "Comisión estatal",
                "Paridad de género"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "La mesa de voceros tendrá la función de comunicar de lo interno",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "hacia lo externo los mensajes oficiales acordados por esta, esto incluye las",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "campañas para reclutar nuevos miembros, ser la voz e imagen del movimiento",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "y ser quienes se presenten ante los medios de comunicación.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "A nivel nacional se contará inicialmente con 5 voceros, 1 por circunscripción,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "así como con 2 voceros por comisión estatal, respetando el principio de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "paridad de género por entidad activa que pueda proveerlos, los cuales",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "decidirán quién será el vocero representante de la circunscripción. El periodo",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "en el cargo para todos los voceros será de 1 año, culminando el mismo día que",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "se entró en funciones; para el caso de los estatales, la designación se realizará",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "de forma interna a la comisión que corresponda; para el caso de los",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "circunscripcionales, el proceso de elección comenzará 6 meses después de la",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "designación de voceros estatales, y los aspirantes surgirán de esta misma",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "mesa. Por lo cual, en caso de resultar seleccionado como vocero de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "circunscripción, el sujeto deberá llevar a cabo ambos cargos de forma paralela.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "La mesa de voceros deberá llevar registro de las fechas en las que se realizan",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "todos los procesos. El número de voceros por entidad activa podrá crecer",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "conforme vayan madurando por cada 150 miembros activos se podrá lanzar",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "una dupla nueva de voceros para esa entidad.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Que los interesados cuenten con buena oratoria, inteligencia emocional,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "capacidad de diálogo e improvisación será oportuno, para ello habrán de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "tomar a más tardar al inicio de su nombramiento los talleres de la escuela de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "cuadros que se imparte en la CONFU de manera obligatoria, además tendrán",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "que estudiar las diferentes normativas y manifiesto del Proyecto Migala.",
                  "level": 0
                }
              ],
              "wordCount": 284,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 35.-",
              "content": "Aquellos que quieran ser voceros estatales deberán contar con el\nrespaldo de su comisión a partir de su proceso interno, y peticionar por\nescrito su intención a Coordinación General, quien habrá de darles quórum en\nsu próxima sesión para una entrevista en la que se le permita exponer su\nagenda a desarrollar. De considerarlo adecuado Coordinación General dará\naprobación y entrará en vigor su nombramiento como Vocero de su respectiva\ncomisión estatal.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura",
                "sesiones",
                "voceros"
              ],
              "keyConcepts": [
                "Comisión estatal",
                "Coordinación general"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Aquellos que quieran ser voceros estatales deberán contar con el",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "respaldo de su comisión a partir de su proceso interno, y peticionar por",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "escrito su intención a Coordinación General, quien habrá de darles quórum en",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "su próxima sesión para una entrevista en la que se le permita exponer su",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "agenda a desarrollar. De considerarlo adecuado Coordinación General dará",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "aprobación y entrará en vigor su nombramiento como Vocero de su respectiva",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "comisión estatal.",
                  "level": 0
                }
              ],
              "wordCount": 72,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 36.-",
              "content": "El Vocero durará un año en cargo, tiempo después del cual, su\ncomisión podrá solicitar un reemplazo en caso de haber nuevos interesados o\nperfiles para impulsar. De caso contrario, el vocero en funciones se puede\nreelegir, por medio de una sesión de la comisión estatal que corresponda o de\nla mesa de voceros, según sea el caso. Todas las resoluciones deben ser\nratificadas por la Coordinación General.\nSi algún vocero deja la responsabilidad antes de terminar su año de vigencia,\nsu comisión estatal habrá de determinar si se releva o deja el espacio vacío,\nteniendo en claro que los voceros funcionan en dupla de paridad de género.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura",
                "paridad",
                "sesiones",
                "voceros"
              ],
              "keyConcepts": [
                "Comisión estatal",
                "Coordinación general",
                "Paridad de género"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El Vocero durará un año en cargo, tiempo después del cual, su",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "comisión podrá solicitar un reemplazo en caso de haber nuevos interesados o",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "perfiles para impulsar. De caso contrario, el vocero en funciones se puede",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "reelegir, por medio de una sesión de la comisión estatal que corresponda o de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "la mesa de voceros, según sea el caso. Todas las resoluciones deben ser",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "ratificadas por la Coordinación General.",
                  "level": 0
                },
                {
                  "type": "condition",
                  "content": "Si algún vocero deja la responsabilidad antes de terminar su año de vigencia,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "su comisión estatal habrá de determinar si se releva o deja el espacio vacío,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "teniendo en claro que los voceros funcionan en dupla de paridad de género.",
                  "level": 0
                }
              ],
              "wordCount": 108,
              "hasList": false,
              "hasConditions": true
            },
            {
              "number": "Artículo 37.-",
              "content": "Una vez que entra en vigor o deja de estarlo un vocero, es\nresponsabilidad de la comisión, hacer las anotaciones pertinentes en su página\nweb o notion, así como notificar al área de transparencia para que haga las\nactualizaciones pertinentes conforme al título III capítulo V del presente\nreglamento.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura",
                "transparencia"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "condition",
                  "content": "Una vez que entra en vigor o deja de estarlo un vocero, es",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "responsabilidad de la comisión, hacer las anotaciones pertinentes en su página",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "web o notion, así como notificar al área de transparencia para que haga las",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "actualizaciones pertinentes conforme al título III capítulo V del presente",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "reglamento.",
                  "level": 0
                }
              ],
              "wordCount": 49,
              "hasList": false,
              "hasConditions": true
            },
            {
              "number": "Artículo 38.-",
              "content": "La Mesa de voceros será la encargada de aprobar los mensajes de\nlo interno a lo externo que sean elaborados por el área de comunicación o\ncualquier mensaje del Proyecto Migala.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "comunicacion",
                "estructura",
                "voceros"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "La Mesa de voceros será la encargada de aprobar los mensajes de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "lo interno a lo externo que sean elaborados por el área de comunicación o",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "cualquier mensaje del Proyecto Migala.",
                  "level": 0
                }
              ],
              "wordCount": 31,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 39.-",
              "content": "La mesa de recaudación y búsqueda de fondos se encargará de\nbuscar ingresos lícitos para el Proyecto Migala.\nEl tipo de recursos podrán ser en especie (valuado a precio relativo de\nmercado) o recurso económico (papel moneda, cheque o transferencia).\nLos recursos económicos que sean conseguidos por esta mesa serán\nentregados a la coordinación de contabilidad del área financiera por el método\nque está considere adecuado para su resguardo y distribución si fuera el caso,\nal tiempo que se le entrega la documentación que respalde de manera clara y\nefectiva la procedencia y finalidad de los mismos para fines fiscales y\ndocumentales y que la coordinación de contabilidad habrá de hacer llegar al\nárea de transparencia por los medios que esta área establezca.\nPara los recursos en especie se deberá informar a la coordinación de\ncontabilidad el recurso obtenido, su naturaleza y cualidades (si es perecedero,\nrequiere cuidados particulares, es de naturaleza digital, tamaño o formas\npeculiares) así como la finalidad de la misma, y mantener en resguardo el\nrecurso hasta que contabilidad decida el método de entrega de dicho recurso\nque se hará siguiendo sus instrucciones, al tiempo que se le entrega la\ndocumentación que respalde de manera clara y efectiva la procedencia y\nfinalidad de los mismos para fines fiscales y documentales y que la\ncoordinación de contabilidad habrá de hacer llegar al área de transparencia\npor los medios que esta área establezca.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "economia",
                "estructura",
                "financiero",
                "recaudacion",
                "transparencia"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "La mesa de recaudación y búsqueda de fondos se encargará de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "buscar ingresos lícitos para el Proyecto Migala.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "El tipo de recursos podrán ser en especie (valuado a precio relativo de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "mercado) o recurso económico (papel moneda, cheque o transferencia).",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Los recursos económicos que sean conseguidos por esta mesa serán",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "entregados a la coordinación de contabilidad del área financiera por el método",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "que está considere adecuado para su resguardo y distribución si fuera el caso,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "al tiempo que se le entrega la documentación que respalde de manera clara y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "efectiva la procedencia y finalidad de los mismos para fines fiscales y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "documentales y que la coordinación de contabilidad habrá de hacer llegar al",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "área de transparencia por los medios que esta área establezca.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Para los recursos en especie se deberá informar a la coordinación de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "contabilidad el recurso obtenido, su naturaleza y cualidades (si es perecedero,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "requiere cuidados particulares, es de naturaleza digital, tamaño o formas",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "peculiares) así como la finalidad de la misma, y mantener en resguardo el",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "recurso hasta que contabilidad decida el método de entrega de dicho recurso",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "que se hará siguiendo sus instrucciones, al tiempo que se le entrega la",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "documentación que respalde de manera clara y efectiva la procedencia y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "finalidad de los mismos para fines fiscales y documentales y que la",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "coordinación de contabilidad habrá de hacer llegar al área de transparencia",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "por los medios que esta área establezca.",
                  "level": 0
                }
              ],
              "wordCount": 235,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 40.-",
              "content": "Estará integrada por miembros que gocen de conocimiento del\nproceso para participar en convocatorias, municipales, estatales, nacionales e\ninternacionales, que permitan competir por recursos económicos para la\nrealización de proyectos dentro del territorio nacional.",
              "type": "procedimiento",
              "cluster": "operativo",
              "tags": [
                "economia",
                "procedimiento",
                "proyectos"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Estará integrada por miembros que gocen de conocimiento del",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "proceso para participar en convocatorias, municipales, estatales, nacionales e",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "internacionales, que permitan competir por recursos económicos para la",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "realización de proyectos dentro del territorio nacional.",
                  "level": 0
                }
              ],
              "wordCount": 34,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 41.-",
              "content": "Esta mesa buscará convocatorias que puedan aplicar las\ncomisiones estatales, temática y de transversalidad y les hará llegar los links\npara que evalúen su capacidad.",
              "type": "procedimiento",
              "cluster": "operativo",
              "tags": [
                "procedimiento"
              ],
              "keyConcepts": [
                "Comisiones estatal"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Esta mesa buscará convocatorias que puedan aplicar las",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "comisiones estatales, temática y de transversalidad y les hará llegar los links",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "para que evalúen su capacidad.",
                  "level": 0
                }
              ],
              "wordCount": 25,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 42.-",
              "content": "Serán apoyo administrativo y asesores para las comisiones\nestatales y grupos temáticos, siendo estos los primeros interesados en\nparticipar en alguna convocatoria.",
              "type": "procedimiento",
              "cluster": "operativo",
              "tags": [
                "procedimiento"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Serán apoyo administrativo y asesores para las comisiones",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "estatales y grupos temáticos, siendo estos los primeros interesados en",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "participar en alguna convocatoria.",
                  "level": 0
                }
              ],
              "wordCount": 22,
              "hasList": false,
              "hasConditions": false
            }
          ]
        },
        {
          "name": "Capítulo III: Área de Formación",
          "articulos": [
            {
              "number": "Artículo 43.-",
              "content": "El área de formación estará compuesto por:\nA. Coordinación Nacional de Formación y Utopía (CONFU)\na. Comité de Manifiesto;\nb. Comité de Talleres formativos y Escuela de Cuadros;\nc. Comité de estudios políticos y sociales.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura",
                "formacion",
                "manifiesto"
              ],
              "keyConcepts": [
                "Escuela de cuadros"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El área de formación estará compuesto por:",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "A. Coordinación Nacional de Formación y Utopía (CONFU)",
                  "level": 0,
                  "listType": "letter",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "a. Comité de Manifiesto;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "b. Comité de Talleres formativos y Escuela de Cuadros;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "c. Comité de estudios políticos y sociales.",
                  "level": 0
                }
              ],
              "wordCount": 35,
              "hasList": true,
              "hasConditions": false
            },
            {
              "number": "Artículo 44.-",
              "content": "El Área de Formación poseerá una coordinación la cual será\nconformada por los dos representantes de la CONFU; quienes fungirán como\nresponsables, además serán el punto de unión, quienes tendrán a su cargo\nadministrar los chats de telegram, así como el Notion del área y demás\nplataformas digitales necesarias, velar por la armonía y que se cumplan los\nobjetivos de la ruta crítica asignada a esta área.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura",
                "formacion",
                "ruta-critica"
              ],
              "keyConcepts": [
                "Ruta crítica"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El Área de Formación poseerá una coordinación la cual será",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "conformada por los dos representantes de la CONFU; quienes fungirán como",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "responsables, además serán el punto de unión, quienes tendrán a su cargo",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "administrar los chats de telegram, así como el Notion del área y demás",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "plataformas digitales necesarias, velar por la armonía y que se cumplan los",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "objetivos de la ruta crítica asignada a esta área.",
                  "level": 0
                }
              ],
              "wordCount": 67,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 45.-",
              "content": "La Coordinación Nacional de Formación y Utopía se encargará\nde la ideología, formación y capacitación de los miembros, así como de la\ngeneración de ética y valores del Proyecto Migala. Además es el encargado de\naprobar, modificar o derogar partes del Manifiesto con los mecanismos\ndesignados en el reglamento interno del área.\nAdemás, será la encargada de la aprobación, creación, modificación y\ndisolución de los órganos que componen el eje especializado y de\ntransversalidad.\nPara la creación, eliminación, o modificación de las estructuras internas del\neje especializado y de transversalidad del Proyecto Migala pertinentes a este\nreglamento, la Coordinación Nacional de Formación y Utopía deberá de\npresentar el proyecto integral que justifique de manera clara la necesidad y\nfinalidad de este movimiento orgánico a la Coordinación General tras lo que\ndeberán resolver las dudas que puedan surgir. Una vez hecho este ejercicio se\ndará por aprobado el documento.\nCuando se trate de disolución, se habrá de contar con la aprobación unánime\nde los ejes especializados y de transversalidad para proceder con la extinción.\nEsta deliberación deberá ser transmitida en el canal de Proyecto Migala\nsiguiendo las reglas que marque el reglamento interno de esta área. De ser\naprobado, bastará con mandar vía redes sociales oficiales del Proyecto Migala\nun comunicado informando de manera simple y clara qué órgano se extingue y\nquién será el encargado de dicha tarea a partir de ese momento.\nLos procesos de disolución podrán ser apelados ante la Coordinación General,\nante la cual se habrá de presentar un documento que incluya las razones que\nel peticionante considere suficientes para que la disolución no se lleve a cabo.\nLa Coordinación General analizará y solicitará información a esta área para\npoder elegir de manera informada y en su siguiente sesión emitirá una postura\nque podrá ser a favor o en contra.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "arte-cultura",
                "estructura",
                "formacion",
                "manifiesto",
                "sesiones"
              ],
              "keyConcepts": [
                "Coordinación general"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "La Coordinación Nacional de Formación y Utopía se encargará",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "de la ideología, formación y capacitación de los miembros, así como de la",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "generación de ética y valores del Proyecto Migala. Además es el encargado de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "aprobar, modificar o derogar partes del Manifiesto con los mecanismos",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "designados en el reglamento interno del área.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Además, será la encargada de la aprobación, creación, modificación y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "disolución de los órganos que componen el eje especializado y de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "transversalidad.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Para la creación, eliminación, o modificación de las estructuras internas del",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "eje especializado y de transversalidad del Proyecto Migala pertinentes a este",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "reglamento, la Coordinación Nacional de Formación y Utopía deberá de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "presentar el proyecto integral que justifique de manera clara la necesidad y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "finalidad de este movimiento orgánico a la Coordinación General tras lo que",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "deberán resolver las dudas que puedan surgir. Una vez hecho este ejercicio se",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "dará por aprobado el documento.",
                  "level": 0
                },
                {
                  "type": "condition",
                  "content": "Cuando se trate de disolución, se habrá de contar con la aprobación unánime",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "de los ejes especializados y de transversalidad para proceder con la extinción.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Esta deliberación deberá ser transmitida en el canal de Proyecto Migala",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "siguiendo las reglas que marque el reglamento interno de esta área. De ser",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "aprobado, bastará con mandar vía redes sociales oficiales del Proyecto Migala",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "un comunicado informando de manera simple y clara qué órgano se extingue y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "quién será el encargado de dicha tarea a partir de ese momento.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Los procesos de disolución podrán ser apelados ante la Coordinación General,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "ante la cual se habrá de presentar un documento que incluya las razones que",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "el peticionante considere suficientes para que la disolución no se lleve a cabo.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "La Coordinación General analizará y solicitará información a esta área para",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "poder elegir de manera informada y en su siguiente sesión emitirá una postura",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "que podrá ser a favor o en contra.",
                  "level": 0
                }
              ],
              "wordCount": 303,
              "hasList": false,
              "hasConditions": true
            },
            {
              "number": "Artículo 46.-",
              "content": "El Comité de Manifiesto encargado de la creación del Manifiesto\ndel proyecto migala así como gestionar los diálogos pertinentes con los ejes\ntransversales y especializados que considere necesarios para cumplir su fin.\nEste comité no tendrá representantes, sólo un encargado de moderar las\nreuniones.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "dialogo",
                "estructura",
                "manifiesto"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El Comité de Manifiesto encargado de la creación del Manifiesto",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "del proyecto migala así como gestionar los diálogos pertinentes con los ejes",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "transversales y especializados que considere necesarios para cumplir su fin.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Este comité no tendrá representantes, sólo un encargado de moderar las",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "reuniones.",
                  "level": 0
                }
              ],
              "wordCount": 44,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 47.-",
              "content": "El Comité de Talleres Formativos y Escuela de Cuadros se\nencarga de la creación, actualización e impartición de los talleres nacionales a\nlos integrantes del Proyecto Migala.\nLa Escuela de Cuadros en consenso con el área Político-Electoral\ndeterminarán el temario, sistematización, ponentes y formato de entrega de\nestos talleres.\nPara la entrada en vigor de la Escuela de Cuadros habrá de seguir los\nsiguientes lineamientos;\n1. En sesión de Coordinación General esta mesa habrá de presentar el\nproyecto que incluya temario, sistematización y formato de entrega de\nlos mismos.\n2. La Coordinación General habrá de tomar al menos el primer tema que\nincluya el proyecto presentado para emitir su opinión que podrá ser a\nfavor o enviarse a revisión.\n3. Una vez aprobadas o Subsanadas las observaciones emitidas por\nCoordinación General el proyecto será aprobado y agregado a la ruta\ncrítica del Proyecto Migala y empezará a impartirse a discreción de la\nCONFU.\n4. Se emitirá un comunicado nacional por redes sociales oficiales y los\nmedios que considere la Coordinación General pertinentes para que\ntodos los miembros interesados en participar puedan revisar temarios,\nfechas, duración, requisitos y finalidad de la misma.\nLos talleres que no sean contemplados para la Escuela de Cuadros esta mesa\ntrabajará a discreción y el requisito de presentar a Coordinación General para\nsu aprobación no será necesario, dejando como único requisito los mismos\nque la CONFU establezca en su propio reglamento interno.",
              "type": "procedimiento",
              "cluster": "operativo",
              "tags": [
                "formacion",
                "procedimiento",
                "sesiones"
              ],
              "keyConcepts": [
                "Coordinación general",
                "Escuela de cuadros"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El Comité de Talleres Formativos y Escuela de Cuadros se",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "encarga de la creación, actualización e impartición de los talleres nacionales a",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "los integrantes del Proyecto Migala.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "La Escuela de Cuadros en consenso con el área Político-Electoral",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "determinarán el temario, sistematización, ponentes y formato de entrega de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "estos talleres.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Para la entrada en vigor de la Escuela de Cuadros habrá de seguir los",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "siguientes lineamientos;",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "1. En sesión de Coordinación General esta mesa habrá de presentar el",
                  "level": 0,
                  "listType": "number",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "proyecto que incluya temario, sistematización y formato de entrega de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "los mismos.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "2. La Coordinación General habrá de tomar al menos el primer tema que",
                  "level": 0,
                  "listType": "number",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "incluya el proyecto presentado para emitir su opinión que podrá ser a",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "favor o enviarse a revisión.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "3. Una vez aprobadas o Subsanadas las observaciones emitidas por",
                  "level": 0,
                  "listType": "number",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "Coordinación General el proyecto será aprobado y agregado a la ruta",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "crítica del Proyecto Migala y empezará a impartirse a discreción de la",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "CONFU.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "4. Se emitirá un comunicado nacional por redes sociales oficiales y los",
                  "level": 0,
                  "listType": "number",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "medios que considere la Coordinación General pertinentes para que",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "todos los miembros interesados en participar puedan revisar temarios,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "fechas, duración, requisitos y finalidad de la misma.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Los talleres que no sean contemplados para la Escuela de Cuadros esta mesa",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "trabajará a discreción y el requisito de presentar a Coordinación General para",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "su aprobación no será necesario, dejando como único requisito los mismos",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "que la CONFU establezca en su propio reglamento interno.",
                  "level": 0
                }
              ],
              "wordCount": 236,
              "hasList": true,
              "hasConditions": false
            },
            {
              "number": "Artículo 48.-",
              "content": "El Comité de estudios políticos y sociales, se encargará del\nanálisis y debate de distintas obras de cualquier medio que sean aplicables y\nútiles para la formación de los miembros del proyecto, el cual se llevará a cabo\nen conjunto con el Club de Lecturas del grupo temático de Arte y Cultura.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "arte-cultura",
                "estructura",
                "formacion",
                "proyectos"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El Comité de estudios políticos y sociales, se encargará del",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "análisis y debate de distintas obras de cualquier medio que sean aplicables y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "útiles para la formación de los miembros del proyecto, el cual se llevará a cabo",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "en conjunto con el Club de Lecturas del grupo temático de Arte y Cultura.",
                  "level": 0
                }
              ],
              "wordCount": 52,
              "hasList": false,
              "hasConditions": false
            }
          ]
        },
        {
          "name": "Capítulo IV: Área de Administración",
          "articulos": [
            {
              "number": "Artículo 49.-",
              "content": "El Área de Administración se conformará por:\nA. Coordinación de Administración;\nB. Comité de Gestión de Proyectos;\nC. Comité de Orientación y Bienvenida;\nD. Comité de Comunicación Interna;\nE. Comisión de Coordinación y Seguimiento.\nLa Coordinación de Administración y cada Comité del Área de Administración\nposeerá dos representantes respectivamente; estos fungirán como\nresponsables, además de enlace entre los comités. Los representantes\ndeberán administrar los chats de telegram, el Notion del área y demás\nplataformas digitales necesarias para la correcta comunicación de Proyecto\nMigala. Además, deberán velar por la armonía del Área de Administración y\nque cumpla con los objetivos de su ruta crítica asignada.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "administracion",
                "comunicacion",
                "estructura",
                "proyectos",
                "ruta-critica"
              ],
              "keyConcepts": [
                "Ruta crítica"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El Área de Administración se conformará por:",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "A. Coordinación de Administración;",
                  "level": 0,
                  "listType": "letter",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "B. Comité de Gestión de Proyectos;",
                  "level": 0,
                  "listType": "letter",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "C. Comité de Orientación y Bienvenida;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "D. Comité de Comunicación Interna;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "E. Comisión de Coordinación y Seguimiento.",
                  "level": 0,
                  "listType": "letter",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "La Coordinación de Administración y cada Comité del Área de Administración",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "poseerá dos representantes respectivamente; estos fungirán como",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "responsables, además de enlace entre los comités. Los representantes",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "deberán administrar los chats de telegram, el Notion del área y demás",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "plataformas digitales necesarias para la correcta comunicación de Proyecto",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Migala. Además, deberán velar por la armonía del Área de Administración y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "que cumpla con los objetivos de su ruta crítica asignada.",
                  "level": 0
                }
              ],
              "wordCount": 104,
              "hasList": true,
              "hasConditions": false
            },
            {
              "number": "Artículo 50.-",
              "content": "La Coordinación de Administración será la encargada de la\naprobación, creación, modificación y disolución de los Órganos\npertenecientes al eje operativo, también la creación del organigrama nacional,\nconforme a los lineamientos que la misma genere; además, la gestión de\nbienes y recursos físicos del Proyecto Migala en lo Nacional para el\ncumplimiento de la ruta crítica.\nAdemás tendrán la obligación de recopilar los diagnósticos de las Comisiones\nTemáticas y los Grupos Transversales.\nPara la creación, eliminación, o modificación de las estructuras internas del\neje operativo del Proyecto Migala pertinentes a este reglamento, la\nCoordinación de Administración deberá de presentar el proyecto integral que\njustifique de manera clara la necesidad y finalidad de este movimiento\norgánico a la Coordinación General tras lo que deberán resolver las dudas que\npuedan surgir. Una vez hecho este ejercicio se dará por aprobado el\ndocumento.\nCuando se trate de disolución, se habrá de contar con la aprobación unánime\nde los ejes operativos para proceder con la extinción. Esta deliberación deberá\nser transmitida en el canal de Proyecto Migala siguiendo las reglas que marque\nel reglamento interno de esta área. De ser aprobado, bastará con mandar vía\nredes sociales oficiales del Proyecto Migala un comunicado informando de\nmanera simple y clara qué órgano se extingue y quién será el encargado de\ndicha tarea a partir de ese momento.\nLos procesos de disolución podrán ser apelados ante la Coordinación General,\nante la cual se habrá de presentar un documento que incluya las razones que\nel peticionante considere suficientes para que la disolución no se lleve a cabo.\nLa Coordinación General analizará y solicitará información a esta área para\npoder elegir de manera informada y en su siguiente sesión emitirá una postura\nque podrá ser a favor o en contra.",
              "type": "obligacion",
              "cluster": "operativo",
              "tags": [
                "administracion",
                "formacion",
                "obligacion",
                "ruta-critica",
                "sesiones"
              ],
              "keyConcepts": [
                "Coordinación general",
                "Ruta crítica"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "La Coordinación de Administración será la encargada de la",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "aprobación, creación, modificación y disolución de los Órganos",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "pertenecientes al eje operativo, también la creación del organigrama nacional,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "conforme a los lineamientos que la misma genere; además, la gestión de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "bienes y recursos físicos del Proyecto Migala en lo Nacional para el",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "cumplimiento de la ruta crítica.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Además tendrán la obligación de recopilar los diagnósticos de las Comisiones",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Temáticas y los Grupos Transversales.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Para la creación, eliminación, o modificación de las estructuras internas del",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "eje operativo del Proyecto Migala pertinentes a este reglamento, la",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Coordinación de Administración deberá de presentar el proyecto integral que",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "justifique de manera clara la necesidad y finalidad de este movimiento",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "orgánico a la Coordinación General tras lo que deberán resolver las dudas que",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "puedan surgir. Una vez hecho este ejercicio se dará por aprobado el",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "documento.",
                  "level": 0
                },
                {
                  "type": "condition",
                  "content": "Cuando se trate de disolución, se habrá de contar con la aprobación unánime",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "de los ejes operativos para proceder con la extinción. Esta deliberación deberá",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "ser transmitida en el canal de Proyecto Migala siguiendo las reglas que marque",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "el reglamento interno de esta área. De ser aprobado, bastará con mandar vía",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "redes sociales oficiales del Proyecto Migala un comunicado informando de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "manera simple y clara qué órgano se extingue y quién será el encargado de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "dicha tarea a partir de ese momento.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Los procesos de disolución podrán ser apelados ante la Coordinación General,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "ante la cual se habrá de presentar un documento que incluya las razones que",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "el peticionante considere suficientes para que la disolución no se lleve a cabo.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "La Coordinación General analizará y solicitará información a esta área para",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "poder elegir de manera informada y en su siguiente sesión emitirá una postura",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "que podrá ser a favor o en contra.",
                  "level": 0
                }
              ],
              "wordCount": 292,
              "hasList": false,
              "hasConditions": true
            },
            {
              "number": "Artículo 51.-",
              "content": "El Comité de Gestión de Proyectos, se encargará de tener un\nprotocolo para recopilar las iniciativas, los proyectos y necesidades de los\ndiversos grupos que componen el Proyecto Migala, así como, de cualquier\nintegrante como individuo que busque generar su propuesta.\nDeberán de procesar la información recabada para que tenga orden, viabilidad\ny coherencia, con el fin de brindarles formalidad para presentarlos a votación\ny posterior ejecución; también éste Comité recopilará informes de los\nresultados de los proyectos para generar estadísticas y datos útiles para futura\ntoma de decisiones.\nCon relación a los proyectos estatales, las comisiones deberán de brindar el\nnombre y el link que contenga la descripción de sus proyectos aprobados y\nejecutados con el fin de que el Comité de Gestión de Proyectos tenga esta\ninformación.\nEl presente Comité podrá brindar sugerencias a las comisiones estatales en\nmateria de proyectos y a petición de parte podrán apoyarlos siguiendo lo\nseñalado en el párrafo uno y dos de este artículo.",
              "type": "obligacion",
              "cluster": "operativo",
              "tags": [
                "arte-cultura",
                "formacion",
                "obligacion",
                "votacion"
              ],
              "keyConcepts": [
                "Comisiones estatal"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El Comité de Gestión de Proyectos, se encargará de tener un",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "protocolo para recopilar las iniciativas, los proyectos y necesidades de los",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "diversos grupos que componen el Proyecto Migala, así como, de cualquier",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "integrante como individuo que busque generar su propuesta.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Deberán de procesar la información recabada para que tenga orden, viabilidad",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "y coherencia, con el fin de brindarles formalidad para presentarlos a votación",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "y posterior ejecución; también éste Comité recopilará informes de los",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "resultados de los proyectos para generar estadísticas y datos útiles para futura",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "toma de decisiones.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Con relación a los proyectos estatales, las comisiones deberán de brindar el",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "nombre y el link que contenga la descripción de sus proyectos aprobados y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "ejecutados con el fin de que el Comité de Gestión de Proyectos tenga esta",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "información.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "El presente Comité podrá brindar sugerencias a las comisiones estatales en",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "materia de proyectos y a petición de parte podrán apoyarlos siguiendo lo",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "señalado en el párrafo uno y dos de este artículo.",
                  "level": 0
                }
              ],
              "wordCount": 162,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 52.-",
              "content": "El Comité de Orientación y Bienvenida se encargará de recibir a\ntodos los miembros nuevos del Proyecto Migala, registrarán a los mismos en el\npadrón oficial además de gestionarlo, impartirán el primer contacto de forma\nque puedan orientarlos mediante pláticas para conocer la organización del\nProyecto Migala y prepararlos para recibir los talleres formativos, además les\nbrindarán consejo a los miembros del Proyecto Migala con el fin solventar sus\ninquietudes relacionadas al mismo, y dirigiendolos hacia las áreas o comités\ncompetentes.\nAdemás este comité tendrá la obligación de apoyar con los mensajes del\n“cyber bot” en la plataforma telegram referentes a dudas y comentarios.",
              "type": "obligacion",
              "cluster": "operativo",
              "tags": [
                "obligacion"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El Comité de Orientación y Bienvenida se encargará de recibir a",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "todos los miembros nuevos del Proyecto Migala, registrarán a los mismos en el",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "padrón oficial además de gestionarlo, impartirán el primer contacto de forma",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "que puedan orientarlos mediante pláticas para conocer la organización del",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Proyecto Migala y prepararlos para recibir los talleres formativos, además les",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "brindarán consejo a los miembros del Proyecto Migala con el fin solventar sus",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "inquietudes relacionadas al mismo, y dirigiendolos hacia las áreas o comités",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "competentes.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Además este comité tendrá la obligación de apoyar con los mensajes del",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "“cyber bot” en la plataforma telegram referentes a dudas y comentarios.",
                  "level": 0
                }
              ],
              "wordCount": 104,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 53.-",
              "content": "El Comité de Comunicación Interna tendrá la función principal\nde agilizar la interacción entre todas las áreas y comisiones del Proyecto\nMigala con el fin de evitar malentendidos, obstrucciones de trabajo y\neficientar los proyectos; mediante propuestas de trabajo y soluciones\ncoordinadas; además de gestionar el chat general de telegram del Proyecto\nMigala denominado “Plaza Pública Proyecto Migala”.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "comunicacion",
                "estructura"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El Comité de Comunicación Interna tendrá la función principal",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "de agilizar la interacción entre todas las áreas y comisiones del Proyecto",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Migala con el fin de evitar malentendidos, obstrucciones de trabajo y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "eficientar los proyectos; mediante propuestas de trabajo y soluciones",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "coordinadas; además de gestionar el chat general de telegram del Proyecto",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Migala denominado “Plaza Pública Proyecto Migala”.",
                  "level": 0
                }
              ],
              "wordCount": 58,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 54.-",
              "content": "La Comisión de Coordinación y Seguimiento tendrá como\nfunción brindar apoyo a los grupos en formación para que se consoliden como\ncomisiones, cumpliendo todos los requisitos, además de recopilar y brindar la\norientación en los diagnósticos, una vez conformadas todas las comisiones\nestatales ésta comisión se disolverá.\nEn caso de considerarlo necesario la coordinación de administración podrá\nsolicitar el resurgimiento de esta comisión.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "administracion",
                "estructura",
                "formacion"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "La Comisión de Coordinación y Seguimiento tendrá como",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "función brindar apoyo a los grupos en formación para que se consoliden como",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "comisiones, cumpliendo todos los requisitos, además de recopilar y brindar la",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "orientación en los diagnósticos, una vez conformadas todas las comisiones",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "estatales ésta comisión se disolverá.",
                  "level": 0
                },
                {
                  "type": "condition",
                  "content": "En caso de considerarlo necesario la coordinación de administración podrá",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "solicitar el resurgimiento de esta comisión.",
                  "level": 0
                }
              ],
              "wordCount": 63,
              "hasList": false,
              "hasConditions": true
            }
          ]
        },
        {
          "name": "Capítulo V: Área de Transparencia",
          "articulos": [
            {
              "number": "Artículo 55.-",
              "content": "El área de Transparencia, se integra por:\nA. Comité de Transparencia;\nB. Grupo de Lupa ciudadana.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura",
                "transparencia"
              ],
              "keyConcepts": [
                "Comité de transparencia"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El área de Transparencia, se integra por:",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "A. Comité de Transparencia;",
                  "level": 0,
                  "listType": "letter",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "B. Grupo de Lupa ciudadana.",
                  "level": 0,
                  "listType": "letter",
                  "listMarker": ""
                }
              ],
              "wordCount": 16,
              "hasList": true,
              "hasConditions": false
            },
            {
              "number": "Artículo 56.-",
              "content": "El Comité de Transparencia será el encargado de transparentar\nla información que genere el Proyecto Migala mediante (Notion y/o páginas),\nasí como fungir como órgano protector de los datos personales y sensibles\ndentro del proyecto; además de recibir preguntas y dar respuestas a los\nmiembros del Proyecto Migala hagan para las diversas Áreas Nacionales y las\nComisiones Temáticas, generando sus propios lineamientos; también es\nresponsable de orientar y capacitar los grupos o miembros que lo soliciten en\nla materia.",
              "type": "procedimiento",
              "cluster": "operativo",
              "tags": [
                "formacion",
                "procedimiento",
                "transparencia"
              ],
              "keyConcepts": [
                "Comisiones temática",
                "Comité de transparencia"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El Comité de Transparencia será el encargado de transparentar",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "la información que genere el Proyecto Migala mediante (Notion y/o páginas),",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "así como fungir como órgano protector de los datos personales y sensibles",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "dentro del proyecto; además de recibir preguntas y dar respuestas a los",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "miembros del Proyecto Migala hagan para las diversas Áreas Nacionales y las",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Comisiones Temáticas, generando sus propios lineamientos; también es",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "responsable de orientar y capacitar los grupos o miembros que lo soliciten en",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "la materia.",
                  "level": 0
                }
              ],
              "wordCount": 79,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 57.-",
              "content": "Lupa Ciudadana es el grupo enfocado en la realización de\nsolicitudes de información hacia otros sujetos obligados, además servirá como\nun lugar para fomentar y aprender acerca de transparencia, protección de\ndatos personales y Participación Ciudadana, además podrá cooperar en\nmateria de Participación Ciudadana con el Área de Político-Electoral.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura",
                "formacion",
                "transparencia"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Lupa Ciudadana es el grupo enfocado en la realización de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "solicitudes de información hacia otros sujetos obligados, además servirá como",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "un lugar para fomentar y aprender acerca de transparencia, protección de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "datos personales y Participación Ciudadana, además podrá cooperar en",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "materia de Participación Ciudadana con el Área de Político-Electoral.",
                  "level": 0
                }
              ],
              "wordCount": 49,
              "hasList": false,
              "hasConditions": false
            }
          ]
        },
        {
          "name": "Capítulo VI: Área de Contraloría",
          "articulos": [
            {
              "number": "Artículo 58.-",
              "content": "El área de Contraloría, se integra por:\nA) Contraloría\na) Comité de Auditoría;\nb) Comité de Investigación;\nc) Comité Sancionador.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "auditoria",
                "contraloria",
                "estructura",
                "sancion"
              ],
              "keyConcepts": [
                "Comité de auditoría",
                "Comité de investigación"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El área de Contraloría, se integra por:",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "A) Contraloría",
                  "level": 0,
                  "listType": "letter",
                  "listMarker": "A)"
                },
                {
                  "type": "paragraph",
                  "content": "a) Comité de Auditoría;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "b) Comité de Investigación;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "c) Comité Sancionador.",
                  "level": 0
                }
              ],
              "wordCount": 20,
              "hasList": true,
              "hasConditions": false
            },
            {
              "number": "Artículo 59.-",
              "content": "La Contraloría se encargará de vigilar el cumplimiento de la\nnormativa del Proyecto Migala, pudiendo investigar y sancionar únicamente\nlas faltas y excesos de los titulares de los órganos de Proyecto Migala, por\núltimo podrán hacer auditorías de las finanzas del Proyecto Migala. Entre sus\nobligaciones está el generar informes detallados por trimestre.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "auditoria",
                "contraloria",
                "estructura",
                "sancion"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "La Contraloría se encargará de vigilar el cumplimiento de la",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "normativa del Proyecto Migala, pudiendo investigar y sancionar únicamente",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "las faltas y excesos de los titulares de los órganos de Proyecto Migala, por",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "último podrán hacer auditorías de las finanzas del Proyecto Migala. Entre sus",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "obligaciones está el generar informes detallados por trimestre.",
                  "level": 0
                }
              ],
              "wordCount": 53,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 60.-",
              "content": "El Comité de Auditoría como su nombre lo dice será el\nencargado de realizar las auditorías a todos los grupos de proyecto migala sin\nexcepción; todos los grupos están obligados a remitir la información que\nsolicite el presente comité en los términos que señale el reglamento interno.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "auditoria",
                "estructura",
                "formacion"
              ],
              "keyConcepts": [
                "Comité de auditoría"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El Comité de Auditoría como su nombre lo dice será el",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "encargado de realizar las auditorías a todos los grupos de proyecto migala sin",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "excepción; todos los grupos están obligados a remitir la información que",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "solicite el presente comité en los términos que señale el reglamento interno.",
                  "level": 0
                }
              ],
              "wordCount": 47,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 61.-",
              "content": "El Comité de Investigación será el encargado de recopilar las\npruebas y narraciones de hechos, para generar una carpeta de investigación\nque remitirán al Comité Sancionador en términos del reglamento interno.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura",
                "sancion"
              ],
              "keyConcepts": [
                "Comité de investigación"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El Comité de Investigación será el encargado de recopilar las",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "pruebas y narraciones de hechos, para generar una carpeta de investigación",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "que remitirán al Comité Sancionador en términos del reglamento interno.",
                  "level": 0
                }
              ],
              "wordCount": 31,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 62.-",
              "content": "El Comité Sancionador tendrá la facultad de sancionar a los\nmiembros que posean una titularidad dentro del Proyecto Migala que hayan\ncometido una falta a las normativas que rigen al mismo.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura",
                "sancion"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El Comité Sancionador tendrá la facultad de sancionar a los",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "miembros que posean una titularidad dentro del Proyecto Migala que hayan",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "cometido una falta a las normativas que rigen al mismo.",
                  "level": 0
                }
              ],
              "wordCount": 31,
              "hasList": false,
              "hasConditions": false
            }
          ]
        },
        {
          "name": "Capítulo VII: Área de Comunicación y Propaganda",
          "articulos": [
            {
              "number": "Artículo 63.-",
              "content": "El área de Comunicación, se integra por:\nA) Coordinación General de Propaganda e Imagen (GPI);\na) Mesa de Redacción;\nb) Mesa de Noticiero;\nc) Mesa de Diseño Multimedia.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "comunicacion",
                "estructura"
              ],
              "keyConcepts": [
                "Coordinación general"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El área de Comunicación, se integra por:",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "A) Coordinación General de Propaganda e Imagen (GPI);",
                  "level": 0,
                  "listType": "letter",
                  "listMarker": "A)"
                },
                {
                  "type": "paragraph",
                  "content": "a) Mesa de Redacción;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "b) Mesa de Noticiero;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "c) Mesa de Diseño Multimedia.",
                  "level": 0
                }
              ],
              "wordCount": 28,
              "hasList": true,
              "hasConditions": false
            },
            {
              "number": "Artículo 64.-",
              "content": "La Coordinación General de Propaganda e Imagen se encargará\nde la imagen del Proyecto Migala y su difusión a nivel externo, así como la\nelaboración de estrategias publicitarias, definir estrategias digitales y de\ncampo en favor de atraer a personas que se quieran unir al movimiento;\nademás de temas relacionados.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura"
              ],
              "keyConcepts": [
                "Coordinación general"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "La Coordinación General de Propaganda e Imagen se encargará",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "de la imagen del Proyecto Migala y su difusión a nivel externo, así como la",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "elaboración de estrategias publicitarias, definir estrategias digitales y de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "campo en favor de atraer a personas que se quieran unir al movimiento;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "además de temas relacionados.",
                  "level": 0
                }
              ],
              "wordCount": 50,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 65.-",
              "content": "La Mesa de Redacción será la encargada de garantizar que todos\nlos anuncios oficiales hacia el exterior del PM y/o documentos realizados en el\nPM, se realicen con sintaxis, gramática y ortografía, con la finalidad de\nproyectar eficientemente lo que se quiere decir. Se integra con personas con\nun perfil específico con conocimientos en redacción y estilo.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "La Mesa de Redacción será la encargada de garantizar que todos",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "los anuncios oficiales hacia el exterior del PM y/o documentos realizados en el",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "PM, se realicen con sintaxis, gramática y ortografía, con la finalidad de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "proyectar eficientemente lo que se quiere decir. Se integra con personas con",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "un perfil específico con conocimientos en redacción y estilo.",
                  "level": 0
                }
              ],
              "wordCount": 57,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 66.-",
              "content": "La Mesa de Noticiero es la encargada de organizar y coordinar el\ntrabajo de los periodistas y las publicaciones/comentarios que se hagan a\nnombre del PM dentro del Noticiero.\nTodo material audio visual tendrá que tener fundamentos veraces y que eviten\ntanto la desinformación como las falacias.\nEl contenido que produzca ésta Mesa no puede ir en contra de lo estipulado\nen el reglamento vigente de Proyecto Migala ni ir en detrimento de la Ruta\nCrítica vigente.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura",
                "formacion"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "La Mesa de Noticiero es la encargada de organizar y coordinar el",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "trabajo de los periodistas y las publicaciones/comentarios que se hagan a",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "nombre del PM dentro del Noticiero.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Todo material audio visual tendrá que tener fundamentos veraces y que eviten",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "tanto la desinformación como las falacias.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "El contenido que produzca ésta Mesa no puede ir en contra de lo estipulado",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "en el reglamento vigente de Proyecto Migala ni ir en detrimento de la Ruta",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Crítica vigente.",
                  "level": 0
                }
              ],
              "wordCount": 77,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 67.-",
              "content": "Mesa de Diseño Multimedia se encargará de la creación y apoyo\nen el diseño de contenido multimedia para proyecto migala en general,\nasesorías para grupos en específico que requieran aprender a crear contenido\nmultimedia a petición de parte, además de plantillas que guarden relación con\nlos Manuales de Identidad del Proyecto Migala, así como, apoyo a la\nCoordinación General de Propaganda e Imagen para llevar a cabo sus\nfacultades, por último, creación y modificación de los manuales de identidad.",
              "type": "procedimiento",
              "cluster": "operativo",
              "tags": [
                "arte-cultura",
                "procedimiento"
              ],
              "keyConcepts": [
                "Coordinación general"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Mesa de Diseño Multimedia se encargará de la creación y apoyo",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "en el diseño de contenido multimedia para proyecto migala en general,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "asesorías para grupos en específico que requieran aprender a crear contenido",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "multimedia a petición de parte, además de plantillas que guarden relación con",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "los Manuales de Identidad del Proyecto Migala, así como, apoyo a la",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Coordinación General de Propaganda e Imagen para llevar a cabo sus",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "facultades, por último, creación y modificación de los manuales de identidad.",
                  "level": 0
                }
              ],
              "wordCount": 79,
              "hasList": false,
              "hasConditions": false
            }
          ]
        },
        {
          "name": "Capítulo VIII: Área de Informática",
          "articulos": [
            {
              "number": "Artículo 68.-",
              "content": "El Área de Informática, se integra por:\nA) La Coordinación de Programadores.\na) Mesa de Recepción y Distribución de Proyectos;\nb) Mesa de Ejecución de Proyectos;\nc) Mesa Técnica y Asesoría;\nd) Mesa de Aprendizaje.\nB) La Coordinación de Estrategia Digital.\na) Mesa de Administradores;\nb) Padrón de Patrocinadores.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura",
                "informatica",
                "proyectos"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El Área de Informática, se integra por:",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "A) La Coordinación de Programadores.",
                  "level": 0,
                  "listType": "letter",
                  "listMarker": "A)"
                },
                {
                  "type": "paragraph",
                  "content": "a) Mesa de Recepción y Distribución de Proyectos;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "b) Mesa de Ejecución de Proyectos;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "c) Mesa Técnica y Asesoría;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "d) Mesa de Aprendizaje.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "B) La Coordinación de Estrategia Digital.",
                  "level": 0,
                  "listType": "letter",
                  "listMarker": "B)"
                },
                {
                  "type": "paragraph",
                  "content": "a) Mesa de Administradores;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "b) Padrón de Patrocinadores.",
                  "level": 0
                }
              ],
              "wordCount": 49,
              "hasList": true,
              "hasConditions": false
            },
            {
              "number": "Artículo 69.-",
              "content": "A la Coordinación de Programadores le compete el desarrollo de\nsoftware, así como brindar capacitaciones, asesorías, despliegue de\nsoluciones, además de la ciberseguridad del proyecto.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura",
                "proyectos"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "A la Coordinación de Programadores le compete el desarrollo de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "software, así como brindar capacitaciones, asesorías, despliegue de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "soluciones, además de la ciberseguridad del proyecto.",
                  "level": 0
                }
              ],
              "wordCount": 25,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 70.-",
              "content": "La mesa de Recepción y distribución de proyectos será la\nencargada de recibir las propuestas acordadas de proyectos de programación,\nademás de distribuir el trabajo en los integrantes de la coordinación.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura",
                "informatica",
                "proyectos"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "La mesa de Recepción y distribución de proyectos será la",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "encargada de recibir las propuestas acordadas de proyectos de programación,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "además de distribuir el trabajo en los integrantes de la coordinación.",
                  "level": 0
                }
              ],
              "wordCount": 31,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 71.-",
              "content": "La Mesa de Ejecución de Proyectos, será la responsable de\ndesarrollar los proyectos recibidos de la Mesa de Recepción de Proyectos y\nDistribución, acordando el mejor estilo de trabajo para cada caso individual.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura",
                "proyectos"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "La Mesa de Ejecución de Proyectos, será la responsable de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "desarrollar los proyectos recibidos de la Mesa de Recepción de Proyectos y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Distribución, acordando el mejor estilo de trabajo para cada caso individual.",
                  "level": 0
                }
              ],
              "wordCount": 33,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 72.-",
              "content": "La Mesa Técnica y Asesoría, será la responsable de dar las\nrecomendaciones relacionadas a la adquisición, presupuesto, cuidado y\nmodificación de los software generados o adquiridos por el Proyecto Migala.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "La Mesa Técnica y Asesoría, será la responsable de dar las",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "recomendaciones relacionadas a la adquisición, presupuesto, cuidado y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "modificación de los software generados o adquiridos por el Proyecto Migala.",
                  "level": 0
                }
              ],
              "wordCount": 30,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 73.-",
              "content": "La Mesa de Aprendizaje, será el lugar donde las personas que\nbusquen aprender o generar proyectos con un fin social, puedan reunirse y\nmaterializarlos.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura",
                "proyectos"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "La Mesa de Aprendizaje, será el lugar donde las personas que",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "busquen aprender o generar proyectos con un fin social, puedan reunirse y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "materializarlos.",
                  "level": 0
                }
              ],
              "wordCount": 24,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 74.-",
              "content": "La Coordinación de Estrategia Digital se encargará de manejar\nlas redes sociales internas en el sentido de darles mantenimiento, gestión,\ncreación y supresión, ésto incluye la creación de claves de transmisión, lo\nrelacionado a los bots de telegram, además de designar la persona que posea\nlos accesos de contraseñas de cuentas de redes sociales, dispositivos móviles,\nuso de números telefónicos y resguardo de chip de teléfonos.\nLos ejes territoriales serán propietarios de sus redes sociales, sin embargo,\nEstrategia Digital deberá contar con los accesos de recuperación de sus\ncuentas de redes.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura",
                "informatica"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "La Coordinación de Estrategia Digital se encargará de manejar",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "las redes sociales internas en el sentido de darles mantenimiento, gestión,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "creación y supresión, ésto incluye la creación de claves de transmisión, lo",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "relacionado a los bots de telegram, además de designar la persona que posea",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "los accesos de contraseñas de cuentas de redes sociales, dispositivos móviles,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "uso de números telefónicos y resguardo de chip de teléfonos.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Los ejes territoriales serán propietarios de sus redes sociales, sin embargo,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Estrategia Digital deberá contar con los accesos de recuperación de sus",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "cuentas de redes.",
                  "level": 0
                }
              ],
              "wordCount": 91,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 75.-",
              "content": "La Mesa de administradores será la responsable de tener la\nposesión y administración de la cuentas de redes sociales, teniendo que\nproteger las contraseñas, información personal de las personas que crearon\nlas cuentas o pagaron, protegiendo sus datos bancarios; contar con la\npropiedad físico y digital, así como los instrumentos de acceso.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "administracion",
                "estructura",
                "formacion",
                "sesiones"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "La Mesa de administradores será la responsable de tener la",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "posesión y administración de la cuentas de redes sociales, teniendo que",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "proteger las contraseñas, información personal de las personas que crearon",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "las cuentas o pagaron, protegiendo sus datos bancarios; contar con la",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "propiedad físico y digital, así como los instrumentos de acceso.",
                  "level": 0
                }
              ],
              "wordCount": 52,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 76.-",
              "content": "El Padrón de Patrocinadores será el registro de quienes\nentregarán los recursos para mensualidades, pagos únicos de dueño, así como\nrenovaciones o rentas de cuentas sociales y difusión, en caso de que no haya\ningresos suficientes en el proyecto migala y éstas personas estén dispuestas a\naportarlos sin esperar reembolso.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El Padrón de Patrocinadores será el registro de quienes",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "entregarán los recursos para mensualidades, pagos únicos de dueño, así como",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "renovaciones o rentas de cuentas sociales y difusión, en caso de que no haya",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "ingresos suficientes en el proyecto migala y éstas personas estén dispuestas a",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "aportarlos sin esperar reembolso.",
                  "level": 0
                }
              ],
              "wordCount": 50,
              "hasList": false,
              "hasConditions": false
            }
          ]
        },
        {
          "name": "Capítulo IX: Área Político Electoral",
          "articulos": [
            {
              "number": "Artículo 77.-",
              "content": "El área Político Electoral se conforma por el Comité Político\nElectoral y sus funciones serán las de asesorar, planear estrategias, capacitar\nen materia político electoral en colaboración con el Área de Formación,\nademás de ratificar las alianzas tomadas por la Coordinación General, así\ncomo los Comités Estatales.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "alianzas",
                "estructura",
                "formacion",
                "politico-electoral"
              ],
              "keyConcepts": [
                "Coordinación general"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El área Político Electoral se conforma por el Comité Político",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Electoral y sus funciones serán las de asesorar, planear estrategias, capacitar",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "en materia político electoral en colaboración con el Área de Formación,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "además de ratificar las alianzas tomadas por la Coordinación General, así",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "como los Comités Estatales.",
                  "level": 0
                }
              ],
              "wordCount": 47,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 78.-",
              "content": "El Comité Político Electoral tendrá la atribución de poder definir\nsi alguna alianza nacional o estatal es conveniente. En casos estatales sólo será\nopinión y no es vinculante, en temas nacionales será necesario contar con\nvisto bueno de este comité para poder someterlo a votación.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "alianzas",
                "estructura",
                "politico-electoral",
                "votacion"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El Comité Político Electoral tendrá la atribución de poder definir",
                  "level": 0
                },
                {
                  "type": "condition",
                  "content": "si alguna alianza nacional o estatal es conveniente. En casos estatales sólo será",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "opinión y no es vinculante, en temas nacionales será necesario contar con",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "visto bueno de este comité para poder someterlo a votación.",
                  "level": 0
                }
              ],
              "wordCount": 45,
              "hasList": false,
              "hasConditions": true
            },
            {
              "number": "Artículo 79.-",
              "content": "Cuando un comité estatal decida participar en un proceso\nelectoral, será tarea de este comité capacitarlos en la medida de lo posible en\nlos temas políticos electorales que el comité estatal requiera y solicite.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "condition",
                  "content": "Cuando un comité estatal decida participar en un proceso",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "electoral, será tarea de este comité capacitarlos en la medida de lo posible en",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "los temas políticos electorales que el comité estatal requiera y solicite.",
                  "level": 0
                }
              ],
              "wordCount": 34,
              "hasList": false,
              "hasConditions": true
            },
            {
              "number": "Artículo 80.-",
              "content": "El comité político electoral será el encargado de realizar las\nbases para el proceso de las convocatorias y el proceso electoral de los\nmiembros de la Coordinación General.",
              "type": "procedimiento",
              "cluster": "operativo",
              "tags": [
                "politico-electoral",
                "procedimiento"
              ],
              "keyConcepts": [
                "Coordinación general"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El comité político electoral será el encargado de realizar las",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "bases para el proceso de las convocatorias y el proceso electoral de los",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "miembros de la Coordinación General.",
                  "level": 0
                }
              ],
              "wordCount": 28,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 81.-",
              "content": "El comité político electoral servirá como un lugar para fomentar\ny aprender acerca de Participación Ciudadana, además podrá cooperar con el\nÁrea de Transparencia en dicha materia.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura",
                "politico-electoral",
                "transparencia"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El comité político electoral servirá como un lugar para fomentar",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "y aprender acerca de Participación Ciudadana, además podrá cooperar con el",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Área de Transparencia en dicha materia.",
                  "level": 0
                }
              ],
              "wordCount": 27,
              "hasList": false,
              "hasConditions": false
            }
          ]
        },
        {
          "name": "Capítulo X: Área Financiera",
          "articulos": [
            {
              "number": "Artículo 82.-",
              "content": "El área Financiera se conforma por:\nA) Coordinación de Tesorería.\na) Comité de Contabilidad;\nb) Comité de Ingresos;\nc) Comité de Egresos;\nd) Comité de Glosa;\ne) Comité de Proveeduría.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura",
                "financiero",
                "tesoreria"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El área Financiera se conforma por:",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "A) Coordinación de Tesorería.",
                  "level": 0,
                  "listType": "letter",
                  "listMarker": "A)"
                },
                {
                  "type": "paragraph",
                  "content": "a) Comité de Contabilidad;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "b) Comité de Ingresos;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "c) Comité de Egresos;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "d) Comité de Glosa;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "e) Comité de Proveeduría.",
                  "level": 0
                }
              ],
              "wordCount": 30,
              "hasList": true,
              "hasConditions": false
            },
            {
              "number": "Artículo 83.-",
              "content": "La Coordinación de Tesorería será la encargada de informar,\nreportar y opinar sobre temas relacionados a los ingresos, egresos, patrimonio\ny la contabilidad del Proyecto Migala; además será quien otorgue los pagos de\ngastos del Proyecto mediante una valoración de alternativas más eficientes.\nSumado a lo anterior deberá de remitir reportes trimestrales al área de\ntransparencia acerca de la información generada de los estados financieros.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura",
                "financiero",
                "formacion",
                "tesoreria",
                "transparencia"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "La Coordinación de Tesorería será la encargada de informar,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "reportar y opinar sobre temas relacionados a los ingresos, egresos, patrimonio",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "y la contabilidad del Proyecto Migala; además será quien otorgue los pagos de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "gastos del Proyecto mediante una valoración de alternativas más eficientes.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Sumado a lo anterior deberá de remitir reportes trimestrales al área de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "transparencia acerca de la información generada de los estados financieros.",
                  "level": 0
                }
              ],
              "wordCount": 65,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 84.-",
              "content": "El Comité de contabilidad se encargará de proponer estrategias\npara la administración de los recursos nacionales, declaraciones, elaborar los\nestados financieros y administrar los estados de cuentas así como las cuentas\nbancarias del Proyecto Migala. Además, se encarga de realizar los reportes\nanuales y las auditorías.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "administracion",
                "auditoria",
                "estructura",
                "financiero"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El Comité de contabilidad se encargará de proponer estrategias",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "para la administración de los recursos nacionales, declaraciones, elaborar los",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "estados financieros y administrar los estados de cuentas así como las cuentas",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "bancarias del Proyecto Migala. Además, se encarga de realizar los reportes",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "anuales y las auditorías.",
                  "level": 0
                }
              ],
              "wordCount": 46,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 85.-",
              "content": "El Comité de ingresos será el encargado de recibir y resguardar\ntodos los ingresos en dinero y en especie del Proyecto Migala para el fin que\nsea aprobado.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El Comité de ingresos será el encargado de recibir y resguardar",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "todos los ingresos en dinero y en especie del Proyecto Migala para el fin que",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "sea aprobado.",
                  "level": 0
                }
              ],
              "wordCount": 28,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 86.-",
              "content": "El Comité de egresos tendrá la función de otorgar a las\ncomisiones que requieran un apoyo financiero los recursos aprobados por la\nCoordinación General y que hayan sido revisados por este mismo Comité.\nAdemás, se encargará de revisar, ordenar y administrar todas las compras\npreviamente aprobadas y también deberán hacer un estudio de mercado para\nsatisfacer las necesidades del proyecto con la mayor eficiencia posible\ntomando en cuenta el tiempo de compra y consulta, la urgencia, los precios y\nel uso.",
              "type": "obligacion",
              "cluster": "operativo",
              "tags": [
                "ciencia-tecnologia",
                "financiero",
                "obligacion",
                "proyectos"
              ],
              "keyConcepts": [
                "Coordinación general"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El Comité de egresos tendrá la función de otorgar a las",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "comisiones que requieran un apoyo financiero los recursos aprobados por la",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Coordinación General y que hayan sido revisados por este mismo Comité.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Además, se encargará de revisar, ordenar y administrar todas las compras",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "previamente aprobadas y también deberán hacer un estudio de mercado para",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "satisfacer las necesidades del proyecto con la mayor eficiencia posible",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "tomando en cuenta el tiempo de compra y consulta, la urgencia, los precios y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "el uso.",
                  "level": 0
                }
              ],
              "wordCount": 81,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 87.-",
              "content": "El Comité de glosa tendrá la función de promover la creación y\norganización del área financiera de las comisiones estatales mediante asesoría\ny acompañamiento. Una vez constituidos, auditar y fiscalizar.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura",
                "financiero"
              ],
              "keyConcepts": [
                "Comisiones estatal"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El Comité de glosa tendrá la función de promover la creación y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "organización del área financiera de las comisiones estatales mediante asesoría",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "y acompañamiento. Una vez constituidos, auditar y fiscalizar.",
                  "level": 0
                }
              ],
              "wordCount": 30,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 88.-",
              "content": "El Comité de proveeduría se encargará de llevar a cabo un\npadrón de todos y cada uno de los bienes muebles e inmuebles que\npertenezcan a Proyecto Migala. Además, podrá solicitar cualquier tipo de\ncomprobante financiero a cualquier Grupo del Proyecto Migala al que se le\nhaya otorgado recursos con un fin específico.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura",
                "financiero"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El Comité de proveeduría se encargará de llevar a cabo un",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "padrón de todos y cada uno de los bienes muebles e inmuebles que",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "pertenezcan a Proyecto Migala. Además, podrá solicitar cualquier tipo de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "comprobante financiero a cualquier Grupo del Proyecto Migala al que se le",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "haya otorgado recursos con un fin específico.",
                  "level": 0
                }
              ],
              "wordCount": 53,
              "hasList": false,
              "hasConditions": false
            }
          ]
        },
        {
          "name": "Capítulo XI: Área Legal",
          "articulos": [
            {
              "number": "Artículo 89.-",
              "content": "El Área Legal se integra por:\na) Comité Jurídico;\nb) Grupo de Estatutos y Reglamentos;\nc) Comité de Sociedades, Cooperativas y Sindicatos.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura",
                "legal"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El Área Legal se integra por:",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "a) Comité Jurídico;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "b) Grupo de Estatutos y Reglamentos;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "c) Comité de Sociedades, Cooperativas y Sindicatos.",
                  "level": 0
                }
              ],
              "wordCount": 22,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 90.-",
              "content": "El Comité Jurídico se encargará de revisar los reglamentos,\nproyectos, eventos y demás actividades con un enfoque jurídico, es decir,\nrevisarán que estén con apego a la ley aplicable, además podrá tener abogados\ny estudiantes que brinden asesorías jurídicas hacia las áreas y los miembros\ndel Proyecto Migala con temas internos.\nPueden designar delegados, autorizados, asesores legales y abogados patronos\nen asuntos que afecten o involucren al proyecto.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura",
                "legal"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El Comité Jurídico se encargará de revisar los reglamentos,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "proyectos, eventos y demás actividades con un enfoque jurídico, es decir,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "revisarán que estén con apego a la ley aplicable, además podrá tener abogados",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "y estudiantes que brinden asesorías jurídicas hacia las áreas y los miembros",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "del Proyecto Migala con temas internos.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Pueden designar delegados, autorizados, asesores legales y abogados patronos",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "en asuntos que afecten o involucren al proyecto.",
                  "level": 0
                }
              ],
              "wordCount": 68,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 91.-",
              "content": "El Grupo de Estatutos y Reglamentos se encargará de la creación\ndel reglamento y los estatutos a nivel nacional; además de impartir los talleres\nrelacionados a la creación de los reglamentos, revisar el reglamento nacional\nasí como el de otras áreas y sus reformas propuestas para que estén con apego\na la ley aplicable. Cada área tendrá la obligación de crear sus propios\nreglamentos.",
              "type": "obligacion",
              "cluster": "operativo",
              "tags": [
                "legal",
                "obligacion"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El Grupo de Estatutos y Reglamentos se encargará de la creación",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "del reglamento y los estatutos a nivel nacional; además de impartir los talleres",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "relacionados a la creación de los reglamentos, revisar el reglamento nacional",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "así como el de otras áreas y sus reformas propuestas para que estén con apego",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "a la ley aplicable. Cada área tendrá la obligación de crear sus propios",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "reglamentos.",
                  "level": 0
                }
              ],
              "wordCount": 64,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 92.-",
              "content": "El Comité de Sociedades, Cooperativas y Sindicatos, será\nencargado de estudiar, asesorar y facilitar la creación y capacitación para\nformar Fundaciones, Asociaciones, Cooperativas y Sindicatos, además de\ndarles seguimiento.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "estructura"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El Comité de Sociedades, Cooperativas y Sindicatos, será",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "encargado de estudiar, asesorar y facilitar la creación y capacitación para",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "formar Fundaciones, Asociaciones, Cooperativas y Sindicatos, además de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "darles seguimiento.",
                  "level": 0
                }
              ],
              "wordCount": 29,
              "hasList": false,
              "hasConditions": false
            }
          ]
        },
        {
          "name": "Capitulo XII: Área de Diálogo y Arbitraje",
          "articulos": [
            {
              "number": "Artículo 93.-",
              "content": "El Área de Diálogo y Arbitraje estará compuesto por:\na) Comité de Conciliación y Mediación.\nb) Comité de Arbitraje y Sanciones.\nc) Grupo de Investigación.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "dialogo",
                "dialogo-arbitraje",
                "estructura",
                "sancion"
              ],
              "keyConcepts": [
                "Comité de arbitraje",
                "Comité de conciliación"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El Área de Diálogo y Arbitraje estará compuesto por:",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "a) Comité de Conciliación y Mediación.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "b) Comité de Arbitraje y Sanciones.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "c) Grupo de Investigación.",
                  "level": 0
                }
              ],
              "wordCount": 25,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 94.-",
              "content": "Será la principal función del Comité de Conciliación y Mediación\nfacilitar y propiciar el diálogo para que los miembros del Proyecto Migala que\ntengan un conflicto puedan resolverlo.",
              "type": "estructura",
              "cluster": "operativo",
              "tags": [
                "dialogo",
                "dialogo-arbitraje",
                "estructura"
              ],
              "keyConcepts": [
                "Comité de conciliación"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Será la principal función del Comité de Conciliación y Mediación",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "facilitar y propiciar el diálogo para que los miembros del Proyecto Migala que",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "tengan un conflicto puedan resolverlo.",
                  "level": 0
                }
              ],
              "wordCount": 28,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 95.-",
              "content": "El comité de Arbitraje y Sanciones, se encargará en las\nsituaciones que no sea posible la conciliación o mediación, realizando un\nprocedimiento y emitiendo una resolución para el caso concreto en apego al\ntítulo sexto del presente reglamento y sus propios manuales operativos.",
              "type": "procedimiento",
              "cluster": "operativo",
              "tags": [
                "dialogo-arbitraje",
                "procedimiento",
                "sancion"
              ],
              "keyConcepts": [
                "Comité de arbitraje"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El comité de Arbitraje y Sanciones, se encargará en las",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "situaciones que no sea posible la conciliación o mediación, realizando un",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "procedimiento y emitiendo una resolución para el caso concreto en apego al",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "título sexto del presente reglamento y sus propios manuales operativos.",
                  "level": 0
                }
              ],
              "wordCount": 43,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 96.-",
              "content": "El Grupo de Investigación será el responsable de recabar los\nhechos y pruebas de los procedimientos del comité de Arbitraje y Sanciones.",
              "type": "procedimiento",
              "cluster": "operativo",
              "tags": [
                "procedimiento",
                "sancion"
              ],
              "keyConcepts": [
                "Comité de arbitraje"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El Grupo de Investigación será el responsable de recabar los",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "hechos y pruebas de los procedimientos del comité de Arbitraje y Sanciones.",
                  "level": 0
                }
              ],
              "wordCount": 22,
              "hasList": false,
              "hasConditions": false
            }
          ]
        },
        {
          "name": "Capítulo XIII: Comisiones Estatales",
          "articulos": [
            {
              "number": "Artículo 97.-",
              "content": "Las comisiones estatales estarán integradas por un interés\ncomún territorial, enfocado en las problemáticas sociales, económicas,\nculturales y políticas de los Estados, así como, la generación de posturas y\nproyectos regionales; además dichas comisiones serán la base y el cuerpo del\nProyecto Migala, cuyo objetivo es aplicar la ruta Crítica Nacional y Estatal,\nestando a la par.",
              "type": "estructura",
              "cluster": "territorial",
              "tags": [
                "arte-cultura",
                "estructura",
                "ruta-critica"
              ],
              "keyConcepts": [
                "Comisiones estatal",
                "Ruta crítica"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Las comisiones estatales estarán integradas por un interés",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "común territorial, enfocado en las problemáticas sociales, económicas,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "culturales y políticas de los Estados, así como, la generación de posturas y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "proyectos regionales; además dichas comisiones serán la base y el cuerpo del",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Proyecto Migala, cuyo objetivo es aplicar la ruta Crítica Nacional y Estatal,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "estando a la par.",
                  "level": 0
                }
              ],
              "wordCount": 57,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 98.-",
              "content": "Para llevar a cabo la práctica de las decisiones se tendrá que\nmantener una comunicación abierta con los demás órganos, con el fin de\ngarantizar la mayor horizontalidad posible y aplicar el principio de las dos\nvacas.",
              "type": "procedimiento",
              "cluster": "territorial",
              "tags": [
                "comunicacion",
                "horizontalidad",
                "procedimiento"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Para llevar a cabo la práctica de las decisiones se tendrá que",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "mantener una comunicación abierta con los demás órganos, con el fin de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "garantizar la mayor horizontalidad posible y aplicar el principio de las dos",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "vacas.",
                  "level": 0
                }
              ],
              "wordCount": 37,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 99.-",
              "content": "Las comisiones estatales tendrán que generar sus propios\nreglamentos, los cuales no podrán estar en contra del presente reglamento.",
              "type": "estructura",
              "cluster": "territorial",
              "tags": [
                "estructura",
                "legal"
              ],
              "keyConcepts": [
                "Comisiones estatal"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Las comisiones estatales tendrán que generar sus propios",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "reglamentos, los cuales no podrán estar en contra del presente reglamento.",
                  "level": 0
                }
              ],
              "wordCount": 19,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 100.-",
              "content": "Las comisiones deberán procurar en sus sesiones,\nconversatorios y reuniones, intervenciones transversales, es decir, alternando\nel uso de la voz de forma equitativa, tomando en cuenta no sólo a las mujeres y\nhombres, sino aquellos grupos relegados social e históricamente, hasta agotar\nel punto de discusión o llegar a un acuerdo.",
              "type": "obligacion",
              "cluster": "territorial",
              "tags": [
                "mujeres",
                "obligacion",
                "sesiones"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Las comisiones deberán procurar en sus sesiones,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "conversatorios y reuniones, intervenciones transversales, es decir, alternando",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "el uso de la voz de forma equitativa, tomando en cuenta no sólo a las mujeres y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "hombres, sino aquellos grupos relegados social e históricamente, hasta agotar",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "el punto de discusión o llegar a un acuerdo.",
                  "level": 0
                }
              ],
              "wordCount": 51,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 101.-",
              "content": "Para fortalecer a las comisiones estatales se tendrá que crear un\nespacio amigable, evitando las conductas prohibidas y fomentando el\nacercamiento y convivencia entre los miembros de la comisión.",
              "type": "sancion",
              "cluster": "territorial",
              "tags": [
                "sancion"
              ],
              "keyConcepts": [
                "Comisiones estatal",
                "Espacio amigable"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Para fortalecer a las comisiones estatales se tendrá que crear un",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "espacio amigable, evitando las conductas prohibidas y fomentando el",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "acercamiento y convivencia entre los miembros de la comisión.",
                  "level": 0
                }
              ],
              "wordCount": 29,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 102.-",
              "content": "Las comisiones estatales podrán forjar alianzas con otros entes\npolíticos, siempre que no se contrapongan con el presente reglamento ni al\nmanifiesto. El comité Político-Electoral emitirá un posicionamiento no\nvinculante que podrán tomar como referencia si así lo consideran.\nLas alianzas deberán aprobarse mediante acuerdo tomado en Sesión\nOrdinaria, contando con la aprobación de dos terceras partes de la totalidad\nde los afiliados de la Comisión Estatal; además tendrán que ser Publicadas en\nel Notion o Portal Web de transparencia, sumado a que se tendrá que ser\nnotificado a nivel Nacional mediante el Cyber Bot y grupo nacional oficial de\nFacebook y todas las redes sociales Estatales.",
              "type": "obligacion",
              "cluster": "territorial",
              "tags": [
                "afiliado",
                "alianzas",
                "arte-cultura",
                "manifiesto",
                "obligacion",
                "sesiones",
                "transparencia"
              ],
              "keyConcepts": [
                "Comisiones estatal",
                "Comisión estatal"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Las comisiones estatales podrán forjar alianzas con otros entes",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "políticos, siempre que no se contrapongan con el presente reglamento ni al",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "manifiesto. El comité Político-Electoral emitirá un posicionamiento no",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "vinculante que podrán tomar como referencia si así lo consideran.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Las alianzas deberán aprobarse mediante acuerdo tomado en Sesión",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Ordinaria, contando con la aprobación de dos terceras partes de la totalidad",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "de los afiliados de la Comisión Estatal; además tendrán que ser Publicadas en",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "el Notion o Portal Web de transparencia, sumado a que se tendrá que ser",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "notificado a nivel Nacional mediante el Cyber Bot y grupo nacional oficial de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Facebook y todas las redes sociales Estatales.",
                  "level": 0
                }
              ],
              "wordCount": 107,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 103.-",
              "content": "Las comisiones tendrán la obligación de crear una comunidad\ndonde todas las personas puedan converger en un espacio físico/digital donde\nse reintegre la política a la sociedad, dejando de lado el elitismo, la\ndiscriminación, la corrupción, los intereses personales fuera de este, así como\nconsolidando un lugar con espacios seguros que será de todos.",
              "type": "obligacion",
              "cluster": "territorial",
              "tags": [
                "obligacion"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Las comisiones tendrán la obligación de crear una comunidad",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "donde todas las personas puedan converger en un espacio físico/digital donde",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "se reintegre la política a la sociedad, dejando de lado el elitismo, la",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "discriminación, la corrupción, los intereses personales fuera de este, así como",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "consolidando un lugar con espacios seguros que será de todos.",
                  "level": 0
                }
              ],
              "wordCount": 54,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 104.-",
              "content": "Las comisiones tendrán la obligación de formar personas en\ntemas especializados por cuestiones territoriales que no pertenezcan a Mesa\nde Talleres de manifiesto ni CONFU.",
              "type": "obligacion",
              "cluster": "territorial",
              "tags": [
                "formacion",
                "manifiesto",
                "obligacion"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Las comisiones tendrán la obligación de formar personas en",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "temas especializados por cuestiones territoriales que no pertenezcan a Mesa",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "de Talleres de manifiesto ni CONFU.",
                  "level": 0
                }
              ],
              "wordCount": 25,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 105.-",
              "content": "El pilar de las comisiones es la búsqueda de la mayor\nhorizontalidad posible con relación a la democracia.",
              "type": "estructura",
              "cluster": "territorial",
              "tags": [
                "estructura",
                "horizontalidad"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El pilar de las comisiones es la búsqueda de la mayor",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "horizontalidad posible con relación a la democracia.",
                  "level": 0
                }
              ],
              "wordCount": 18,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 106.-",
              "content": "Las comisiones estarán sujetas a lo señalado en el reglamento de\ntransparencia.",
              "type": "estructura",
              "cluster": "territorial",
              "tags": [
                "estructura",
                "transparencia"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Las comisiones estarán sujetas a lo señalado en el reglamento de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "transparencia.",
                  "level": 0
                }
              ],
              "wordCount": 12,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 107.-",
              "content": "Los requisitos para conformar una comisión estatal serán los\nsiguientes:\nI. Nombrar 2 representantes, respetando la paridad de género.\nII. Estar apegado a las reglas de Paridad de Género y Acciones Afirmativas.\nIII. Contar con el mínimo de titulares de su estructura orgánica.\nIV. Contar con un reglamento estatal.\nV. Contar con un diagnóstico interno.\nVI. Contar con un plan de acción o ruta crítica estatal.\nVII. Contar con un Notion o Página de Transparencia.\nEn caso de no cumplir con los requisitos, serán considerados Grupos en\nFormación hasta que logren rebasar sus limitaciones estructurales, de\norganización o convocatoria, según sea el caso. Tendrán que ser apoyados por\nel Comité de Coordinación y Seguimiento.\nUna vez que consideren haber cumplido con los requisitos se deberá de enviar\nuna petición formal a la Coordinación de Administración para que realicen una\nrevisión y en su caso aprobación para otorgar el reconocimiento como\nComisión.",
              "type": "requisito",
              "cluster": "territorial",
              "tags": [
                "administracion",
                "formacion",
                "paridad",
                "requisito",
                "ruta-critica",
                "transparencia"
              ],
              "keyConcepts": [
                "Acciones afirmativa",
                "Comisión estatal",
                "Paridad de género",
                "Ruta crítica"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Los requisitos para conformar una comisión estatal serán los",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "siguientes:",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "I. Nombrar 2 representantes, respetando la paridad de género.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "II. Estar apegado a las reglas de Paridad de Género y Acciones Afirmativas.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "III. Contar con el mínimo de titulares de su estructura orgánica.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "IV. Contar con un reglamento estatal.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "V. Contar con un diagnóstico interno.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "VI. Contar con un plan de acción o ruta crítica estatal.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "VII. Contar con un Notion o Página de Transparencia.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "condition",
                  "content": "En caso de no cumplir con los requisitos, serán considerados Grupos en",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Formación hasta que logren rebasar sus limitaciones estructurales, de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "organización o convocatoria, según sea el caso. Tendrán que ser apoyados por",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "el Comité de Coordinación y Seguimiento.",
                  "level": 0
                },
                {
                  "type": "condition",
                  "content": "Una vez que consideren haber cumplido con los requisitos se deberá de enviar",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "una petición formal a la Coordinación de Administración para que realicen una",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "revisión y en su caso aprobación para otorgar el reconocimiento como",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Comisión.",
                  "level": 0
                }
              ],
              "wordCount": 151,
              "hasList": true,
              "hasConditions": true
            }
          ]
        },
        {
          "name": "Capítulo XIV: Comisiones Temáticas",
          "articulos": [
            {
              "number": "Artículo 108.-",
              "content": "Las comisiones temáticas tendrán el enfoque de desarrollar\ncuestiones relacionadas a las áreas del conocimiento humano relevantes para\nel Manifiesto, generando posturas, proyectos y acciones políticas para el\nProyecto Migala.\nA. Arte y cultura\nB. Ciencia y Tecnología\nC. Estudios Económicos\nD. Geopolítica e Historia\nE. Sustentabilidad\nF. Derechos Humanos",
              "type": "estructura",
              "cluster": "especializado",
              "tags": [
                "arte-cultura",
                "ciencia-tecnologia",
                "derechos-humanos",
                "economia",
                "estructura",
                "geopolitica-historia",
                "manifiesto",
                "sustentabilidad"
              ],
              "keyConcepts": [
                "Comisiones temática"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Las comisiones temáticas tendrán el enfoque de desarrollar",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "cuestiones relacionadas a las áreas del conocimiento humano relevantes para",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "el Manifiesto, generando posturas, proyectos y acciones políticas para el",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Proyecto Migala.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "A. Arte y cultura",
                  "level": 0,
                  "listType": "letter",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "B. Ciencia y Tecnología",
                  "level": 0,
                  "listType": "letter",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "C. Estudios Económicos",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "D. Geopolítica e Historia",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "E. Sustentabilidad",
                  "level": 0,
                  "listType": "letter",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "F. Derechos Humanos",
                  "level": 0,
                  "listType": "letter",
                  "listMarker": ""
                }
              ],
              "wordCount": 50,
              "hasList": true,
              "hasConditions": false
            },
            {
              "number": "Artículo 109.-",
              "content": "Requisitos para conformar una comisión temática serán los\nsiguientes:\nI. Nombrar 2 representantes, respetando la paridad de género.\nII. Contar con un reglamento interno de trabajo.\nIII. Contar con un plan de acción o ruta crítica.\nIV. Contar con un diagnóstico interno.\nV. Contar con un Notion o Página de Transparencia.",
              "type": "requisito",
              "cluster": "especializado",
              "tags": [
                "paridad",
                "requisito",
                "ruta-critica",
                "transparencia"
              ],
              "keyConcepts": [
                "Comisión temática",
                "Paridad de género",
                "Ruta crítica"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Requisitos para conformar una comisión temática serán los",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "siguientes:",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "I. Nombrar 2 representantes, respetando la paridad de género.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "II. Contar con un reglamento interno de trabajo.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "III. Contar con un plan de acción o ruta crítica.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "IV. Contar con un diagnóstico interno.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "V. Contar con un Notion o Página de Transparencia.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                }
              ],
              "wordCount": 51,
              "hasList": true,
              "hasConditions": false
            },
            {
              "number": "Artículo 110.-",
              "content": "Las comisiones temáticas tendrán las mismas obligaciones y\nresponsabilidades que los grupos estatales, con excepción de los requisitos.",
              "type": "estructura",
              "cluster": "especializado",
              "tags": [
                "estructura"
              ],
              "keyConcepts": [
                "Comisiones temática"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Las comisiones temáticas tendrán las mismas obligaciones y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "responsabilidades que los grupos estatales, con excepción de los requisitos.",
                  "level": 0
                }
              ],
              "wordCount": 18,
              "hasList": false,
              "hasConditions": false
            }
          ]
        },
        {
          "name": "Capítulo XV: Grupos Transversales",
          "articulos": [
            {
              "number": "Artículo 111.-",
              "content": "Los Grupos Transversales tienen el principal objetivo de\nfomentar la transversalidad en el Proyecto Migala, es decir, buscan la\nincorporación de perspectivas y posturas de personas en condiciones de\nvulnerabilidad, que presentan brechas y rezagos, tomando en cuenta las\nimplicaciones que tienen las legislaciones, políticas públicas, actividades\nadministrativas, económicas, sociales y culturales que presenta nuestro país;\nademás de manifestarlo mediante el manifiesto\nA. Grupo de Mujeres\nB. Grupo de Masculinidades\nC. Grupo de Diversidad\nD. Grupo de Pueblos Originarios\nE. Grupo de Personas con Funcionalidad Diversa\nF. Grupo de Paisanos",
              "type": "estructura",
              "cluster": "transversal",
              "tags": [
                "arte-cultura",
                "diversidad",
                "estructura",
                "funcionalidad-diversa",
                "manifiesto",
                "migrantes",
                "mujeres",
                "pueblos-originarios"
              ],
              "keyConcepts": [
                "Grupo de diversidad",
                "Grupo de masculinidades",
                "Grupo de mujeres"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Los Grupos Transversales tienen el principal objetivo de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "fomentar la transversalidad en el Proyecto Migala, es decir, buscan la",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "incorporación de perspectivas y posturas de personas en condiciones de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "vulnerabilidad, que presentan brechas y rezagos, tomando en cuenta las",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "implicaciones que tienen las legislaciones, políticas públicas, actividades",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "administrativas, económicas, sociales y culturales que presenta nuestro país;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "además de manifestarlo mediante el manifiesto",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "A. Grupo de Mujeres",
                  "level": 0,
                  "listType": "letter",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "B. Grupo de Masculinidades",
                  "level": 0,
                  "listType": "letter",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "C. Grupo de Diversidad",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "D. Grupo de Pueblos Originarios",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "E. Grupo de Personas con Funcionalidad Diversa",
                  "level": 0,
                  "listType": "letter",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "F. Grupo de Paisanos",
                  "level": 0,
                  "listType": "letter",
                  "listMarker": ""
                }
              ],
              "wordCount": 90,
              "hasList": true,
              "hasConditions": false
            },
            {
              "number": "Artículo 112.-",
              "content": "Los requisitos para conformar un Grupo transversal serán los\nsiguientes:\nI. Nombrar un representante.\nII. Contar con un reglamento interno de trabajo.\nIII. Contar con un plan de acción o ruta crítica.\nIV. Contar con un diagnóstico interno.\nV. Contar con un Notion o Página de Transparencia.",
              "type": "requisito",
              "cluster": "transversal",
              "tags": [
                "requisito",
                "ruta-critica",
                "transparencia"
              ],
              "keyConcepts": [
                "Grupo transversal",
                "Ruta crítica"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Los requisitos para conformar un Grupo transversal serán los",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "siguientes:",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "I. Nombrar un representante.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "II. Contar con un reglamento interno de trabajo.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "III. Contar con un plan de acción o ruta crítica.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "IV. Contar con un diagnóstico interno.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "V. Contar con un Notion o Página de Transparencia.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                }
              ],
              "wordCount": 47,
              "hasList": true,
              "hasConditions": false
            },
            {
              "number": "Artículo 113.-",
              "content": "Los Grupos Transversales tendrán las mismas obligaciones y\nresponsabilidades que los grupos estatales, con la excepción de los requisitos y\ndel principio de paridad de género.",
              "type": "estructura",
              "cluster": "transversal",
              "tags": [
                "estructura",
                "paridad"
              ],
              "keyConcepts": [
                "Paridad de género",
                "Principio de paridad"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Los Grupos Transversales tendrán las mismas obligaciones y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "responsabilidades que los grupos estatales, con la excepción de los requisitos y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "del principio de paridad de género.",
                  "level": 0
                }
              ],
              "wordCount": 26,
              "hasList": false,
              "hasConditions": false
            }
          ]
        }
      ],
      "totalArticulos": 103,
      "totalPalabras": 6254
    },
    {
      "name": "TITULO CUARTO: Sesiones, Conversatorios y Cualquier tipo de reunión",
      "capitulos": [
        {
          "name": "Capítulo I: Generalidades",
          "articulos": [
            {
              "number": "Artículo 114.-",
              "content": "En lo que corresponde a todo tipo de reuniones presenciales o\nvirtuales, los órganos tendrán que estar apegados a las disposiciones de este\nTítulo, además de generar el procedimiento en sus reglamentos individuales.",
              "type": "procedimiento",
              "cluster": "procedimental",
              "tags": [
                "legal",
                "procedimiento"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "En lo que corresponde a todo tipo de reuniones presenciales o",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "virtuales, los órganos tendrán que estar apegados a las disposiciones de este",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Título, además de generar el procedimiento en sus reglamentos individuales.",
                  "level": 0
                }
              ],
              "wordCount": 33,
              "hasList": false,
              "hasConditions": false
            }
          ]
        },
        {
          "name": "Capítulo II: De las Sesiones Ordinarias y Extraordinarias en lo general",
          "articulos": [
            {
              "number": "Artículo 115.-",
              "content": "Los miembros del proyecto Migala podrán reunirse en sesiones\nordinarias o extraordinarias cada vez que un integrante de los órganos lo\nsolicite en su área respectiva; en caso de sesiones presenciales, se deberá de\nseguir con lo dicho en este capítulo.\nLa petición podrá hacerse verbal o por escrito, la cual tendrá que ser\nacompañada por una propuesta de orden día, esto puede ser con el proyecto o\ntema a discutir y/o aprobar.\nLos titulares de los roles clasificarán la naturaleza de la petición de sesionar\n(ordinaria o extraordinaria) y la harán pública.\nLas convocatorias deberán de tener un tiempo mínimo para publicitarlo, que\ndeberá estar señalado en los reglamentos individuales.\nPara considerar formal y oficial una sesión se requiere como mínimo que:\nI. Orden del día;\nII. Transcurran los días estipulados para la convocatoria en cada caso;\nIII. Esté presente por lo menos un titular del grupo;\nIV. Sea pública, es decir que sea grabada y subida al canal oficial de\nYouTube del Proyecto Migala Nacional, como mínimo, o en caso de los\nejes Territoriales, Temáticos y Transversales en su YouTube oficial;\nV. Contar con un minuta escrita en algún documento que pueda editarse;\nVI. Designar un moderador;\nVII. Y demás requisitos que consideren en sus reglamentos internos.",
              "type": "procedimiento",
              "cluster": "procedimental",
              "tags": [
                "legal",
                "procedimiento",
                "sesiones"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Los miembros del proyecto Migala podrán reunirse en sesiones",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "ordinarias o extraordinarias cada vez que un integrante de los órganos lo",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "solicite en su área respectiva; en caso de sesiones presenciales, se deberá de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "seguir con lo dicho en este capítulo.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "La petición podrá hacerse verbal o por escrito, la cual tendrá que ser",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "acompañada por una propuesta de orden día, esto puede ser con el proyecto o",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "tema a discutir y/o aprobar.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Los titulares de los roles clasificarán la naturaleza de la petición de sesionar",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "(ordinaria o extraordinaria) y la harán pública.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Las convocatorias deberán de tener un tiempo mínimo para publicitarlo, que",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "deberá estar señalado en los reglamentos individuales.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Para considerar formal y oficial una sesión se requiere como mínimo que:",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "I. Orden del día;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "II. Transcurran los días estipulados para la convocatoria en cada caso;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "III. Esté presente por lo menos un titular del grupo;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "IV. Sea pública, es decir que sea grabada y subida al canal oficial de",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "YouTube del Proyecto Migala Nacional, como mínimo, o en caso de los",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "ejes Territoriales, Temáticos y Transversales en su YouTube oficial;",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "V. Contar con un minuta escrita en algún documento que pueda editarse;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "VI. Designar un moderador;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "VII. Y demás requisitos que consideren en sus reglamentos internos.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                }
              ],
              "wordCount": 209,
              "hasList": true,
              "hasConditions": false
            }
          ]
        },
        {
          "name": "Capítulo III: De las Sesiones Ordinarias",
          "articulos": [
            {
              "number": "Artículo 116.-",
              "content": "Las Sesiones Ordinarias son aquellas reuniones cuyo tema a\ntratar impacta la base de la organización, administración de los órganos;\nsiempre que cumplan lo establecido en la normativa.",
              "type": "estructura",
              "cluster": "procedimental",
              "tags": [
                "administracion",
                "estructura",
                "sesiones"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Las Sesiones Ordinarias son aquellas reuniones cuyo tema a",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "tratar impacta la base de la organización, administración de los órganos;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "siempre que cumplan lo establecido en la normativa.",
                  "level": 0
                }
              ],
              "wordCount": 28,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 117.-",
              "content": "Las Sesiones Ordinarias principalmente versarán de los\nsiguientes temas:\nI. Adiciones, Modificaciones y Derogaciones a su Reglamento;\nII. Temas solicitados por la CG;\nIII. Adiciones, Modificaciones y Derogaciones de atribuciones de roles;\nIV. Elecciones de personas para ocupar una titularidad;\nV. Cualquier tema que trasciende al funcionamiento del Proyecto Migala;\nVI. Ruta Crítica;\nVII. Destitución de uno o varios titulares.",
              "type": "estructura",
              "cluster": "procedimental",
              "tags": [
                "estructura",
                "ruta-critica",
                "sesiones"
              ],
              "keyConcepts": [
                "Ruta crítica"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Las Sesiones Ordinarias principalmente versarán de los",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "siguientes temas:",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "I. Adiciones, Modificaciones y Derogaciones a su Reglamento;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "II. Temas solicitados por la CG;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "III. Adiciones, Modificaciones y Derogaciones de atribuciones de roles;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "IV. Elecciones de personas para ocupar una titularidad;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "V. Cualquier tema que trasciende al funcionamiento del Proyecto Migala;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "VI. Ruta Crítica;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "VII. Destitución de uno o varios titulares.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                }
              ],
              "wordCount": 60,
              "hasList": true,
              "hasConditions": false
            }
          ]
        },
        {
          "name": "Capítulo IV: De las Sesiones Extraordinarias",
          "articulos": [
            {
              "number": "Artículo 118.-",
              "content": "Las Sesiones Extraordinarias son las reuniones, cuyo contenido\nNO impacte en la organización ni dirección del órgano; además de aquellas\nque determine el titular; siempre que cumplan lo establecido en la normativa.",
              "type": "estructura",
              "cluster": "procedimental",
              "tags": [
                "estructura",
                "sesiones"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Las Sesiones Extraordinarias son las reuniones, cuyo contenido",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "NO impacte en la organización ni dirección del órgano; además de aquellas",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "que determine el titular; siempre que cumplan lo establecido en la normativa.",
                  "level": 0
                }
              ],
              "wordCount": 32,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 119.-",
              "content": "Las Sesiones Extraordinarias únicamente versarán en aquellos\ntemas que no estén señalados en las sesiones ordinarias.",
              "type": "estructura",
              "cluster": "procedimental",
              "tags": [
                "estructura",
                "sesiones"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Las Sesiones Extraordinarias únicamente versarán en aquellos",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "temas que no estén señalados en las sesiones ordinarias.",
                  "level": 0
                }
              ],
              "wordCount": 16,
              "hasList": false,
              "hasConditions": false
            }
          ]
        },
        {
          "name": "Capítulo V: De las Reuniones de trabajo",
          "articulos": [
            {
              "number": "Artículo 120.-",
              "content": "Dentro de las reuniones de trabajo no se tomarán acuerdos,\nsino que serán el lugar donde se generan lluvias de ideas, sugerencias y\nborradores para planes de trabajo y dar seguimiento a los acuerdos tomados\nen sesiones.",
              "type": "estructura",
              "cluster": "procedimental",
              "tags": [
                "estructura",
                "sesiones"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Dentro de las reuniones de trabajo no se tomarán acuerdos,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "sino que serán el lugar donde se generan lluvias de ideas, sugerencias y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "borradores para planes de trabajo y dar seguimiento a los acuerdos tomados",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "en sesiones.",
                  "level": 0
                }
              ],
              "wordCount": 37,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 121.-",
              "content": "No será necesario grabar las reuniones de trabajo pues al no\ngenerarse acuerdos no posee el carácter de público, sin embargo, las\nreuniones de trabajo deberán estar abiertas para todos los integrantes del\nórgano.",
              "type": "estructura",
              "cluster": "procedimental",
              "tags": [
                "estructura"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "No será necesario grabar las reuniones de trabajo pues al no",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "generarse acuerdos no posee el carácter de público, sin embargo, las",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "reuniones de trabajo deberán estar abiertas para todos los integrantes del",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "órgano.",
                  "level": 0
                }
              ],
              "wordCount": 34,
              "hasList": false,
              "hasConditions": false
            }
          ]
        },
        {
          "name": "Capítulo VI: Conversatorios",
          "articulos": [
            {
              "number": "Artículo 122.-",
              "content": "Con el fin de reforzar el proceso formativo y de compartir\nconocimientos al interior del Proyecto Migala habrán de realizarse eventos\nformativos a manera de conversatorios / tertulias / mesas redondas / debates\n/ charlas de café / simposios o cualquier otro método que sea propuesto por\nalgún miembro o invitado y que abone a esta meta.",
              "type": "estructura",
              "cluster": "procedimental",
              "tags": [
                "estructura",
                "sesiones"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Con el fin de reforzar el proceso formativo y de compartir",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "conocimientos al interior del Proyecto Migala habrán de realizarse eventos",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "formativos a manera de conversatorios / tertulias / mesas redondas / debates",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "/ charlas de café / simposios o cualquier otro método que sea propuesto por",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "algún miembro o invitado y que abone a esta meta.",
                  "level": 0
                }
              ],
              "wordCount": 57,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 123.-",
              "content": "Los conversatorios podrán realizarse por cualquier simpatizante\no afiliado, estos pueden invitar a cualquier miembro del Proyecto Migala o\nfuera de este, si cuentan con la posibilidad, para compartir su conocimiento\nsobre alguna temática en particular mediante lo señalado en el anterior\nartículo.",
              "type": "estructura",
              "cluster": "procedimental",
              "tags": [
                "afiliado",
                "estructura",
                "sesiones",
                "simpatizante"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Los conversatorios podrán realizarse por cualquier simpatizante",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "o afiliado, estos pueden invitar a cualquier miembro del Proyecto Migala o",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "fuera de este, si cuentan con la posibilidad, para compartir su conocimiento",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "sobre alguna temática en particular mediante lo señalado en el anterior",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "artículo.",
                  "level": 0
                }
              ],
              "wordCount": 43,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 124.-",
              "content": "Los Conversatorios deberán ser Públicos y contar con un orden\ndel día o lista de temas, además deberán ser grabados en el Youtube Nacional o\ncomo mínimo en sus canales de YouTube oficiales de su grupo.",
              "type": "estructura",
              "cluster": "procedimental",
              "tags": [
                "estructura",
                "sesiones"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Los Conversatorios deberán ser Públicos y contar con un orden",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "del día o lista de temas, además deberán ser grabados en el Youtube Nacional o",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "como mínimo en sus canales de YouTube oficiales de su grupo.",
                  "level": 0
                }
              ],
              "wordCount": 36,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 125.-",
              "content": "Se deberá de realizar un flyer que tendrá que publicarse en los\ntelegramas oficiales de cada órgano. En caso de ser de participación nacional\nserá obligatorio mandarlo al bot de los chat de avisos nacionales.",
              "type": "obligacion",
              "cluster": "procedimental",
              "tags": [
                "obligacion"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Se deberá de realizar un flyer que tendrá que publicarse en los",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "telegramas oficiales de cada órgano. En caso de ser de participación nacional",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "será obligatorio mandarlo al bot de los chat de avisos nacionales.",
                  "level": 0
                }
              ],
              "wordCount": 35,
              "hasList": false,
              "hasConditions": false
            }
          ]
        }
      ],
      "totalArticulos": 12,
      "totalPalabras": 620
    },
    {
      "name": "TÍTULO QUINTO: De las votaciones y formas de tomar acuerdos",
      "capitulos": [
        {
          "name": "Capítulo I: Sobre la toma de Acuerdos",
          "articulos": [
            {
              "number": "Artículo 126.-",
              "content": "Apegado a la horizontalidad, en el Proyecto Migala se deberán\nde tomar acuerdos mediante el diálogo abierto, participativo, incluyente y\npúblico, apegado al principio de las dos vacas, logrando consensos; además\ncondensando la información para todos.",
              "type": "principio",
              "cluster": "procedimental",
              "tags": [
                "dialogo",
                "formacion",
                "horizontalidad",
                "principio"
              ],
              "keyConcepts": [
                "Principio de las dos vacas"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Apegado a la horizontalidad, en el Proyecto Migala se deberán",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "de tomar acuerdos mediante el diálogo abierto, participativo, incluyente y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "público, apegado al principio de las dos vacas, logrando consensos; además",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "condensando la información para todos.",
                  "level": 0
                }
              ],
              "wordCount": 36,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 127.-",
              "content": "En caso de la toma de decisiones de los Órganos del Proyecto\nMigala, deberán de considerar este Título, pudiendo generar sus propios\nmecanismos de toma de decisiones, sin ir en contra del presente Título.",
              "type": "estructura",
              "cluster": "procedimental",
              "tags": [
                "estructura",
                "proyectos"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "condition",
                  "content": "En caso de la toma de decisiones de los Órganos del Proyecto",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Migala, deberán de considerar este Título, pudiendo generar sus propios",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "mecanismos de toma de decisiones, sin ir en contra del presente Título.",
                  "level": 0
                }
              ],
              "wordCount": 34,
              "hasList": false,
              "hasConditions": true
            },
            {
              "number": "Artículo 128.-",
              "content": "Los acuerdos o decisiones deberán ser tomadas en sesión\npresencial o virtual, cumpliendo con todos los requisitos del Título III.",
              "type": "estructura",
              "cluster": "procedimental",
              "tags": [
                "estructura",
                "sesiones"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Los acuerdos o decisiones deberán ser tomadas en sesión",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "presencial o virtual, cumpliendo con todos los requisitos del Título III.",
                  "level": 0
                }
              ],
              "wordCount": 20,
              "hasList": false,
              "hasConditions": false
            }
          ]
        },
        {
          "name": "Capítulo II: De las Votaciones",
          "articulos": [
            {
              "number": "Artículo 129.-",
              "content": "Las votaciones serán abiertas, participativas, incluyentes y\npúblicas, condensadas para los Afiliados del Proyecto Migala, dentro de sus\nrespectivos Órganos.",
              "type": "procedimiento",
              "cluster": "procedimental",
              "tags": [
                "afiliado",
                "procedimiento",
                "votacion"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Las votaciones serán abiertas, participativas, incluyentes y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "públicas, condensadas para los Afiliados del Proyecto Migala, dentro de sus",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "respectivos Órganos.",
                  "level": 0
                }
              ],
              "wordCount": 20,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 130.-",
              "content": "Existirán los siguientes tipos de votaciones:\nI.- Votaciones en Jitsi, las encuestas se podrán realizar mediante ésta\nplataforma en la opción de “Polls” o “Encuestas” pudiendo generar la pregunta\nprincipal, así como, dos o más opciones de votación, teniendo que tomar\ncaptura de pantalla y agregandola al sub-chat de #Votaciones de Telegram;\nII.- Votaciones en Telegram, las encuestas se podrán realizar en ésta\nplataforma mediante la opción de “attach” o “adjuntar” archivos, donde se\nencontrará la opción de “Polls” o “Encuesta” con la posibilidad de generar la\npregunta principal, de igual manera dos o más opciones de votación. Éstas\nvotaciones se tendrán que generar en el sub-chat de #Votaciones de\nTelegram;\nIII.- Voto a Mano Alzada, se podrá realizar en sesiones presenciales y/o\nvirtuales, considerando que, cuando sean presenciales, como su nombre lo\ndice, deberán de levantar la mano para manifestar su aprobación o rechazo\nsegún lo consideré la persona que modere; en sesiones virtuales se podrá usar\nla opción de “Levantar o bajar mano”; en casos que la plataforma no contenga\nesta opción se podrán tomar en cuenta los emojis, números, letras o cualquier\nmanifestación en el chat que considere el moderador;\nIV.- Cuestionario en Google Forms, éstas encuestas se usan mediante Google\nApps, utilizando el apartado de “Formularios” o “Form”, pudiendo generar\ndocumentos con información más amplia y de diversos formatos.",
              "type": "procedimiento",
              "cluster": "procedimental",
              "tags": [
                "formacion",
                "procedimiento",
                "sesiones",
                "votacion"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Existirán los siguientes tipos de votaciones:",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "I.- Votaciones en Jitsi, las encuestas se podrán realizar mediante ésta",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "plataforma en la opción de “Polls” o “Encuestas” pudiendo generar la pregunta",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "principal, así como, dos o más opciones de votación, teniendo que tomar",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "captura de pantalla y agregandola al sub-chat de #Votaciones de Telegram;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "II.- Votaciones en Telegram, las encuestas se podrán realizar en ésta",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "plataforma mediante la opción de “attach” o “adjuntar” archivos, donde se",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "encontrará la opción de “Polls” o “Encuesta” con la posibilidad de generar la",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "pregunta principal, de igual manera dos o más opciones de votación. Éstas",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "votaciones se tendrán que generar en el sub-chat de #Votaciones de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Telegram;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "III.- Voto a Mano Alzada, se podrá realizar en sesiones presenciales y/o",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "virtuales, considerando que, cuando sean presenciales, como su nombre lo",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "dice, deberán de levantar la mano para manifestar su aprobación o rechazo",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "según lo consideré la persona que modere; en sesiones virtuales se podrá usar",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "la opción de “Levantar o bajar mano”; en casos que la plataforma no contenga",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "esta opción se podrán tomar en cuenta los emojis, números, letras o cualquier",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "manifestación en el chat que considere el moderador;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "IV.- Cuestionario en Google Forms, éstas encuestas se usan mediante Google",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Apps, utilizando el apartado de “Formularios” o “Form”, pudiendo generar",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "documentos con información más amplia y de diversos formatos.",
                  "level": 0
                }
              ],
              "wordCount": 223,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 131.-",
              "content": "Los distintos tipos de votaciones, se podrán usar de las\nsiguientes formas:\nI. Votaciones Económicas; Son aquellas que se implementan durante las\nsesiones, su duración no podrá rebasar los 2 minutos. Pudiendo ser mediante\nJitsi, Telegram o Mano alzada, los moderadores de la sesión tienen que explicar\nclaramente el tema de la votación antes de iniciarla;\nII. Votaciones Largas; Son aquellas que tendrán una duración de cinco a siete\ndías naturales, iniciando al día siguiente de haberlas generado. Éstas se\nllevarán a cabo con el fin de llegar a la mayor cantidad de afiliados posibles, así\ncomo, brindar la mayor cantidad de información del tema de votación. Se\nrealizarán a través del Telegram o Google Forms, éstas deberán incluir un\nresumen del tema de la votación, además si la votación nace a raíz de una\nsesión se deberá de pegar el hipervínculo de la misma, además de la mayor\ncantidad de información posible.",
              "type": "procedimiento",
              "cluster": "procedimental",
              "tags": [
                "afiliado",
                "formacion",
                "procedimiento",
                "sesiones",
                "votacion"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Los distintos tipos de votaciones, se podrán usar de las",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "siguientes formas:",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "I. Votaciones Económicas; Son aquellas que se implementan durante las",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "sesiones, su duración no podrá rebasar los 2 minutos. Pudiendo ser mediante",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Jitsi, Telegram o Mano alzada, los moderadores de la sesión tienen que explicar",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "claramente el tema de la votación antes de iniciarla;",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "II. Votaciones Largas; Son aquellas que tendrán una duración de cinco a siete",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "días naturales, iniciando al día siguiente de haberlas generado. Éstas se",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "llevarán a cabo con el fin de llegar a la mayor cantidad de afiliados posibles, así",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "como, brindar la mayor cantidad de información del tema de votación. Se",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "realizarán a través del Telegram o Google Forms, éstas deberán incluir un",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "resumen del tema de la votación, además si la votación nace a raíz de una",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "sesión se deberá de pegar el hipervínculo de la misma, además de la mayor",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "cantidad de información posible.",
                  "level": 0
                }
              ],
              "wordCount": 153,
              "hasList": true,
              "hasConditions": false
            },
            {
              "number": "Artículo 132.-",
              "content": "El responsable de generar las votaciones deberá de ser elegido\npor los mismos afiliados de los grupos.",
              "type": "procedimiento",
              "cluster": "procedimental",
              "tags": [
                "afiliado",
                "procedimiento",
                "votacion"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El responsable de generar las votaciones deberá de ser elegido",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "por los mismos afiliados de los grupos.",
                  "level": 0
                }
              ],
              "wordCount": 17,
              "hasList": false,
              "hasConditions": false
            }
          ]
        }
      ],
      "totalArticulos": 7,
      "totalPalabras": 503
    },
    {
      "name": "TÍTULO SEXTO: De la Información Generada y Recabada",
      "capitulos": [
        {
          "name": "Capítulo I: Qué Documentos se generan",
          "articulos": [
            {
              "number": "Artículo 133.-",
              "content": "Los órganos generarán la siguiente información oficial y pública.\nI. La relativa a Redes Sociales;\nII. Organigrama;\nIII. Directorio;\nIV. Sesiones;\nV. Órdenes del Día;\nVI. Minutas de Sesiones;\nVII. Conversatorios;\nVIII. Trámites y Formatos;\nIX. Calendario de Actividades o Eventos;\nX. Listado de Patrimonio;\nXI. Ingresos y Egresos;\nXII. Padrón de miembros;\nXIII. Informes de Resultados;\nXIV. Lista de interesados a ser titulares;\nXV. Avisos de privacidad;\nXVI. Reglamentos;\nXVII. Manifiesto;\nXVIII. Ruta Crítica.",
              "type": "estructura",
              "cluster": "procedimental",
              "tags": [
                "estructura",
                "formacion",
                "legal",
                "manifiesto",
                "ruta-critica",
                "sesiones"
              ],
              "keyConcepts": [
                "Ruta crítica"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Los órganos generarán la siguiente información oficial y pública.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "I. La relativa a Redes Sociales;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "II. Organigrama;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "III. Directorio;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "IV. Sesiones;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "V. Órdenes del Día;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "VI. Minutas de Sesiones;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "VII. Conversatorios;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "VIII. Trámites y Formatos;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "IX. Calendario de Actividades o Eventos;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "X. Listado de Patrimonio;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "XI. Ingresos y Egresos;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "XII. Padrón de miembros;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "XIII. Informes de Resultados;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "XIV. Lista de interesados a ser titulares;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "XV. Avisos de privacidad;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "XVI. Reglamentos;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "XVII. Manifiesto;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "XVIII. Ruta Crítica.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                }
              ],
              "wordCount": 75,
              "hasList": true,
              "hasConditions": false
            },
            {
              "number": "Artículo 134.-",
              "content": "La información que no es pública es aquella que sea utilizada\ncomo medio de trabajo, la cual será administrada según los reglamentos\ninternos.",
              "type": "estructura",
              "cluster": "procedimental",
              "tags": [
                "estructura",
                "formacion",
                "legal"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "La información que no es pública es aquella que sea utilizada",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "como medio de trabajo, la cual será administrada según los reglamentos",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "internos.",
                  "level": 0
                }
              ],
              "wordCount": 23,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 135.-",
              "content": "Aquella información que sea compartida por agentes externos al\nproyecto migala deberá indicarlo en el lugar que lo comparte, además no\npodrá realizarlo de forma reiterada para evitar spam de propaganda de otras\norganizaciones.",
              "type": "estructura",
              "cluster": "procedimental",
              "tags": [
                "arte-cultura",
                "estructura",
                "formacion"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Aquella información que sea compartida por agentes externos al",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "proyecto migala deberá indicarlo en el lugar que lo comparte, además no",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "podrá realizarlo de forma reiterada para evitar spam de propaganda de otras",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "organizaciones.",
                  "level": 0
                }
              ],
              "wordCount": 34,
              "hasList": false,
              "hasConditions": false
            }
          ]
        },
        {
          "name": "Capítulo II: Del Almacenamiento",
          "articulos": [
            {
              "number": "Artículo 136.-",
              "content": "El almacenamiento de información deberá llevarse a cabo por\nparte del titular designado por los órganos del Proyecto Migala en sus\nreglamentos individuales, toda vez que son necesarios para propiciar la\ntransparencia en el Proyecto Migala.",
              "type": "estructura",
              "cluster": "procedimental",
              "tags": [
                "arte-cultura",
                "estructura",
                "formacion",
                "legal",
                "transparencia"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El almacenamiento de información deberá llevarse a cabo por",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "parte del titular designado por los órganos del Proyecto Migala en sus",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "reglamentos individuales, toda vez que son necesarios para propiciar la",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "transparencia en el Proyecto Migala.",
                  "level": 0
                }
              ],
              "wordCount": 36,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 137.-",
              "content": "El almacenamiento se llevará a cabo en los siguientes medios:\nA. La cuenta de Notion o página web;\nB. Los canales de Youtube oficiales;\nC. Telegram;\nD. Plataformas de respaldo en nube que puedan compartirse\npúblicamente.",
              "type": "estructura",
              "cluster": "procedimental",
              "tags": [
                "estructura"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El almacenamiento se llevará a cabo en los siguientes medios:",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "A. La cuenta de Notion o página web;",
                  "level": 0,
                  "listType": "letter",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "B. Los canales de Youtube oficiales;",
                  "level": 0,
                  "listType": "letter",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "C. Telegram;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "D. Plataformas de respaldo en nube que puedan compartirse",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "públicamente.",
                  "level": 0
                }
              ],
              "wordCount": 36,
              "hasList": true,
              "hasConditions": false
            },
            {
              "number": "Artículo 138.-",
              "content": "Los lineamientos de publicación y de archivo deberán de\nemitirse en el Reglamento de Transparencia.",
              "type": "procedimiento",
              "cluster": "procedimental",
              "tags": [
                "procedimiento",
                "transparencia"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Los lineamientos de publicación y de archivo deberán de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "emitirse en el Reglamento de Transparencia.",
                  "level": 0
                }
              ],
              "wordCount": 15,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 139.-",
              "content": "Las comisiones estatales pueden tener su propio youtube cuya\npropiedad será de ellos, además las temáticas y transversales podrán poseer\nsus propios canales sin embargo la propiedad será de estrategia digital; los\ngrupos operativos se manejan por el youtube nacional sin excepción ha crear\nsus canales propios.",
              "type": "estructura",
              "cluster": "procedimental",
              "tags": [
                "estructura",
                "informatica"
              ],
              "keyConcepts": [
                "Comisiones estatal"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Las comisiones estatales pueden tener su propio youtube cuya",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "propiedad será de ellos, además las temáticas y transversales podrán poseer",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "sus propios canales sin embargo la propiedad será de estrategia digital; los",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "grupos operativos se manejan por el youtube nacional sin excepción ha crear",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "sus canales propios.",
                  "level": 0
                }
              ],
              "wordCount": 47,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 140.-",
              "content": "Los grupos podrán almacenar su información tanto la que es o\nno pública en dispositivos de almacenamiento físico, sin embargo deberán\nestar alineados a los lineamientos de protección de información que señale\nestrategia digital, los lineamientos de protección de datos personales y\nsensibles emitido por el área de transparencia, así como, los reglamentos\ninternos de los grupos.",
              "type": "procedimiento",
              "cluster": "procedimental",
              "tags": [
                "formacion",
                "informatica",
                "legal",
                "procedimiento",
                "transparencia"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Los grupos podrán almacenar su información tanto la que es o",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "no pública en dispositivos de almacenamiento físico, sin embargo deberán",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "estar alineados a los lineamientos de protección de información que señale",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "estrategia digital, los lineamientos de protección de datos personales y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "sensibles emitido por el área de transparencia, así como, los reglamentos",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "internos de los grupos.",
                  "level": 0
                }
              ],
              "wordCount": 57,
              "hasList": false,
              "hasConditions": false
            }
          ]
        }
      ],
      "totalArticulos": 8,
      "totalPalabras": 323
    },
    {
      "name": "TÍTULO SÉPTIMO: Conductas Prohibidas y Sanciones",
      "capitulos": [
        {
          "name": "Capítulo I: Las Conductas Prohibidas",
          "articulos": [
            {
              "number": "Artículo 141.-",
              "content": "Estas conductas fueron listadas y consideradas prohibidas para\ngenerar un espacio amigable/seguro para la sana interacción de los miembros\ndel Proyecto Migala, siendo las siguientes:\nSerán competencia de Contraloría, la siguientes conductas prohibidas:\nI. Hostigar, se entenderá por el asedio de manera reiterada a una\npersona abusando de su relación de subordinación o titularidad, en su\nesfera privada, ya sea en chats de redes sociales o en lo personal,\nponiendo en una situación incómoda a la persona y ésta ya haya\nmanifestado de su incomodidad;\nII. Revelar datos personales y sensibles, que estén al cuidado de un\ntitular, sin la autorización del propietario; entendiéndose como datos\npersonales aquellos que hagan identificable a una persona y datos\nsensibles aquella información que de hacerse pública puede causar un\ndaño o discriminación al propietario de los mismos. Por ejemplo,\nnombre completo, número de teléfono personal, domicilio, origen de\nresidencia, expediente médico, datos laborales, etc.\nIII. Incumplir con las obligaciones de los Roles o asumir las facultades que\nno le competen;\nIV. Llevar a cabo cualquier tipo de sabotaje administrativo hacía Proyecto\nMigala;\nV. Malversar los recursos del Proyecto Migala;\nVI. Nepotismo; Hacer uso indebido de los recursos tanto humanos como\nmateriales de la comisión para generar un beneficio personal, a\nfamiliares o conocidos cercanos de forma clandestina;\nVII. Centralizar la dirección de Proyecto Migala en una persona o grupo\nreducido de personas, dado que el fundamento de este grupo es lograr\nla mayor horizontalidad posible tomando en cuenta la opinión de\ntodos;\nVIII. Proponer o acordar, siendo titular, a los demás el “ponerse la camiseta”,\n“chambear” o hacer burnout y retirarse de la acción propuesta sin\njustificación.\nSerán competencia del Área de Diálogo y Arbitraje:\nI. El acoso; se entenderá por el asedio de manera reiterada a una\npersona en su esfera privada, ya sea de manera privada en chats de\nredes sociales o en lo personal, poniendo en una situación incómoda a\nla persona y esta ya haya manifestado de forma verbal su incomodidad;\nII. La discriminación; la cual se entenderá por la distinción, la exclución o\nla restricción de derechos por el motivo de una o varias características\nfísicas, de personalidad o de su forma de vida.\nIII. Mansplaining; es el acto de explicar algo a alguien en un modo que\nsugiere que la otra persona es estúpida; usado especialmente cuando\nun hombre explica a una mujer algo que ella en realidad ya entiende;\nIV. Realizar spam de forma deliberada;\nV. Desviar los temas durante sesiones con comentarios fuera de contexto\nde manera deliberada;\nVI. Interrumpir de manera activa las participaciones en sesiones y\nconversatorios, sin haberle otorgado un turno;\nVII. Realizar conductas violentas de manera física, verbal o escrita hacia los\nintegrantes del Proyecto Migala;\nVIII. Apropiarse de manera ilegítima de los bienes tanto físicos y morales\ndel Proyecto Migala;\nIX. Hablar por la Comisiones a título personal sin respetar la voluntad de\nlos demás integrantes de ésta;\nX. Realizar difamación del Proyecto Migala, así como de sus miembros;\nXI. Realizar bromas hirientes;\nXII. Revictimización: Expresar que una víctima de cualquier acoso o\nagresión, independientemente del sexo, puede ser:\nA. Culpable, por haber sufrido agresión\nB. Desechada, por expresar su opinión, por considerar que su\nexperiencia es no válida;\nXIII. Conductas de ataque directo o generalización contra la persona;\nejemplo, que sea mujer, no binario u hombre en lugar de su\nargumento;\nXIV. Asumir que es lo mejor para otras personas sin que se haya solicitado\nsu opinión;\nXV. Tomar las cosas de manera personal;\nXVI. Entrar en estados defensivos, no todo se trata de ganar, no siempre\ndebes tener la razón;\nXVII. Pensamientos extremistas: se entenderá por extremismo aquellas\nconductas y pensamientos desproporcionados radicales que atenten a\nlos derechos humanos y que no tengan relación o cabida con la\ntolerancia;\nXVIII. Caer en redundancias salvo que se solicite una mayor amplitud del\ntema;\nXIX. Acudir a las sesiones bajo un estado que afecte tu juicio;\nXX. Hacerse poseedor de información personal y sensible de forma\nclandestina como miembro hacia otros miembros;\nXXI. Proponer o acordar, sin ser titular, a los demás el “ponerse la camiseta”,\n“chambear” o hacer burnout y retirarse de la acción propuesta sin\njustificación;\nXXII. Hacerse pasar por otro miembro del proyecto migala.",
              "type": "definicion",
              "cluster": "disciplinario",
              "tags": [
                "contraloria",
                "definicion",
                "derechos-humanos",
                "dialogo",
                "dialogo-arbitraje",
                "formacion",
                "horizontalidad",
                "sesiones"
              ],
              "keyConcepts": [
                "Espacio amigable"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Estas conductas fueron listadas y consideradas prohibidas para",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "generar un espacio amigable/seguro para la sana interacción de los miembros",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "del Proyecto Migala, siendo las siguientes:",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Serán competencia de Contraloría, la siguientes conductas prohibidas:",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "I. Hostigar, se entenderá por el asedio de manera reiterada a una",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "persona abusando de su relación de subordinación o titularidad, en su",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "esfera privada, ya sea en chats de redes sociales o en lo personal,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "poniendo en una situación incómoda a la persona y ésta ya haya",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "manifestado de su incomodidad;",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "II. Revelar datos personales y sensibles, que estén al cuidado de un",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "titular, sin la autorización del propietario; entendiéndose como datos",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "personales aquellos que hagan identificable a una persona y datos",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "sensibles aquella información que de hacerse pública puede causar un",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "daño o discriminación al propietario de los mismos. Por ejemplo,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "nombre completo, número de teléfono personal, domicilio, origen de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "residencia, expediente médico, datos laborales, etc.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "III. Incumplir con las obligaciones de los Roles o asumir las facultades que",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "no le competen;",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "IV. Llevar a cabo cualquier tipo de sabotaje administrativo hacía Proyecto",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "Migala;",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "V. Malversar los recursos del Proyecto Migala;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "VI. Nepotismo; Hacer uso indebido de los recursos tanto humanos como",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "materiales de la comisión para generar un beneficio personal, a",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "familiares o conocidos cercanos de forma clandestina;",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "VII. Centralizar la dirección de Proyecto Migala en una persona o grupo",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "reducido de personas, dado que el fundamento de este grupo es lograr",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "la mayor horizontalidad posible tomando en cuenta la opinión de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "todos;",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "VIII. Proponer o acordar, siendo titular, a los demás el “ponerse la camiseta”,",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "“chambear” o hacer burnout y retirarse de la acción propuesta sin",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "justificación.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Serán competencia del Área de Diálogo y Arbitraje:",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "I. El acoso; se entenderá por el asedio de manera reiterada a una",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "persona en su esfera privada, ya sea de manera privada en chats de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "redes sociales o en lo personal, poniendo en una situación incómoda a",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "la persona y esta ya haya manifestado de forma verbal su incomodidad;",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "II. La discriminación; la cual se entenderá por la distinción, la exclución o",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "la restricción de derechos por el motivo de una o varias características",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "físicas, de personalidad o de su forma de vida.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "III. Mansplaining; es el acto de explicar algo a alguien en un modo que",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "sugiere que la otra persona es estúpida; usado especialmente cuando",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "un hombre explica a una mujer algo que ella en realidad ya entiende;",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "IV. Realizar spam de forma deliberada;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "V. Desviar los temas durante sesiones con comentarios fuera de contexto",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "de manera deliberada;",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "VI. Interrumpir de manera activa las participaciones en sesiones y",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "conversatorios, sin haberle otorgado un turno;",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "VII. Realizar conductas violentas de manera física, verbal o escrita hacia los",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "integrantes del Proyecto Migala;",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "VIII. Apropiarse de manera ilegítima de los bienes tanto físicos y morales",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "del Proyecto Migala;",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "IX. Hablar por la Comisiones a título personal sin respetar la voluntad de",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "los demás integrantes de ésta;",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "X. Realizar difamación del Proyecto Migala, así como de sus miembros;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "XI. Realizar bromas hirientes;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "XII. Revictimización: Expresar que una víctima de cualquier acoso o",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "agresión, independientemente del sexo, puede ser:",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "A. Culpable, por haber sufrido agresión",
                  "level": 0,
                  "listType": "letter",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "B. Desechada, por expresar su opinión, por considerar que su",
                  "level": 0,
                  "listType": "letter",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "experiencia es no válida;",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "XIII. Conductas de ataque directo o generalización contra la persona;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "ejemplo, que sea mujer, no binario u hombre en lugar de su",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "argumento;",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "XIV. Asumir que es lo mejor para otras personas sin que se haya solicitado",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "su opinión;",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "XV. Tomar las cosas de manera personal;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "XVI. Entrar en estados defensivos, no todo se trata de ganar, no siempre",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "debes tener la razón;",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "XVII. Pensamientos extremistas: se entenderá por extremismo aquellas",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "conductas y pensamientos desproporcionados radicales que atenten a",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "los derechos humanos y que no tengan relación o cabida con la",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "tolerancia;",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "XVIII. Caer en redundancias salvo que se solicite una mayor amplitud del",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "tema;",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "XIX. Acudir a las sesiones bajo un estado que afecte tu juicio;",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "XX. Hacerse poseedor de información personal y sensible de forma",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "clandestina como miembro hacia otros miembros;",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "XXI. Proponer o acordar, sin ser titular, a los demás el “ponerse la camiseta”,",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "“chambear” o hacer burnout y retirarse de la acción propuesta sin",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "justificación;",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "XXII. Hacerse pasar por otro miembro del proyecto migala.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                }
              ],
              "wordCount": 707,
              "hasList": true,
              "hasConditions": false
            }
          ]
        },
        {
          "name": "Capítulo II: Las sanciones",
          "articulos": [
            {
              "number": "Artículo 142.-",
              "content": "Las sanciones tendrán en todo momento el fin último de\nestimular un cambio a mejor de la conducta amonestada. Por lo que las\nsanciones serán las siguientes:\nI. Presentar una investigación relacionada con el tema de la conducta\nprohibida que cometió, (en su caso, de manera irrespetuosa), que le haya\npermitido empatizar y generar mayor conocimiento y respeto al tópico\nen concreto.\nII. Disculparse en privado o públicamente; ésta última, deberá ser por\nescrito y/o en video en todas las redes sociales de la comisión con\nexcepción de YouTube.\nIII. Ser silenciado en los chats de las redes sociales según el daño que haya\nocasionado.\nIV. Suspensión temporal de los derechos como Afiliado o Simpatizante\ndentro del Proyecto Migala.\nV. Ser expulsado.",
              "type": "sancion",
              "cluster": "disciplinario",
              "tags": [
                "afiliado",
                "sancion",
                "simpatizante"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Las sanciones tendrán en todo momento el fin último de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "estimular un cambio a mejor de la conducta amonestada. Por lo que las",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "sanciones serán las siguientes:",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "I. Presentar una investigación relacionada con el tema de la conducta",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "prohibida que cometió, (en su caso, de manera irrespetuosa), que le haya",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "permitido empatizar y generar mayor conocimiento y respeto al tópico",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "en concreto.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "II. Disculparse en privado o públicamente; ésta última, deberá ser por",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "escrito y/o en video en todas las redes sociales de la comisión con",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "excepción de YouTube.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "III. Ser silenciado en los chats de las redes sociales según el daño que haya",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "ocasionado.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "IV. Suspensión temporal de los derechos como Afiliado o Simpatizante",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "dentro del Proyecto Migala.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "V. Ser expulsado.",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                }
              ],
              "wordCount": 122,
              "hasList": true,
              "hasConditions": false
            },
            {
              "number": "Artículo 143.-",
              "content": "En caso que la conducta sea un delito o falta administrativa\nseñalado por alguna autoridad municipal, estatal o federal, el Proyecto Migala\nhará los procedimientos de denuncia y/o acompañamiento pertinentes, sólo sí\nafectan a otros miembros.",
              "type": "procedimiento",
              "cluster": "disciplinario",
              "tags": [
                "procedimiento"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "En caso que la conducta sea un delito o falta administrativa",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "señalado por alguna autoridad municipal, estatal o federal, el Proyecto Migala",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "hará los procedimientos de denuncia y/o acompañamiento pertinentes, sólo sí",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "afectan a otros miembros.",
                  "level": 0
                }
              ],
              "wordCount": 36,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 144.-",
              "content": "Las personas que estén bajo un proceso judicial por falta de\npago de pensión alimenticia, violencia intrafamiliar, violación, acoso,\nhostigamiento o cualquier otro delito que afecte a grupos vulnerables, quedará\nautomaticamente suspendido del proyecto, perdiendo temporalmente sus\nderechos de miembro, hasta que mediante sentencia judicial se demuestra su\ninocencia, o haya cumplido su condena, además de haber recibido perdón por\nescrito de la victima.",
              "type": "estructura",
              "cluster": "disciplinario",
              "tags": [
                "estructura",
                "proyectos"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Las personas que estén bajo un proceso judicial por falta de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "pago de pensión alimenticia, violencia intrafamiliar, violación, acoso,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "hostigamiento o cualquier otro delito que afecte a grupos vulnerables, quedará",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "automaticamente suspendido del proyecto, perdiendo temporalmente sus",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "derechos de miembro, hasta que mediante sentencia judicial se demuestra su",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "inocencia, o haya cumplido su condena, además de haber recibido perdón por",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "escrito de la victima.",
                  "level": 0
                }
              ],
              "wordCount": 64,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 145.-",
              "content": "En caso de querer reintegrarse o levantar la suspensión del\nProyecto Migala deberán de iniciar un procedimiento ante el Comité de\nConciliación, Mediación y Arbitraje, en el sentido de llegar a un convenio en el\nque se tenga el fin de demostrar un claro arrepentimiento que se base en\nhechos.",
              "type": "procedimiento",
              "cluster": "disciplinario",
              "tags": [
                "dialogo-arbitraje",
                "procedimiento"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "condition",
                  "content": "En caso de querer reintegrarse o levantar la suspensión del",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Proyecto Migala deberán de iniciar un procedimiento ante el Comité de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Conciliación, Mediación y Arbitraje, en el sentido de llegar a un convenio en el",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "que se tenga el fin de demostrar un claro arrepentimiento que se base en",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "hechos.",
                  "level": 0
                }
              ],
              "wordCount": 50,
              "hasList": false,
              "hasConditions": true
            },
            {
              "number": "Artículo 146.-",
              "content": "En el caso de que se cometa una afectación negativa a algún\nmiembro o al mismo Proyecto Migala que no esté contemplado en éste\nreglamento, el Área de Diálogo y Arbitraje, y Contraloría, deberá resolver sobre\nel hecho, fundando y motivando cualesquiera sea su resolución",
              "type": "estructura",
              "cluster": "disciplinario",
              "tags": [
                "contraloria",
                "dialogo",
                "dialogo-arbitraje",
                "estructura"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "En el caso de que se cometa una afectación negativa a algún",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "miembro o al mismo Proyecto Migala que no esté contemplado en éste",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "reglamento, el Área de Diálogo y Arbitraje, y Contraloría, deberá resolver sobre",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "el hecho, fundando y motivando cualesquiera sea su resolución",
                  "level": 0
                }
              ],
              "wordCount": 45,
              "hasList": false,
              "hasConditions": false
            }
          ]
        },
        {
          "name": "Capítulo III: Del procedimiento sancionatorio",
          "articulos": [
            {
              "number": "Artículo 147.-",
              "content": "El procedimiento sancionatorio únicamente se podrá realizar si\nno se llegó a un acuerdo en la Comisión de Conciliación y Mediación,\nteniendo que resolver el Comité de Arbitraje y Sanciones; por otro lado,\ncuando se trate de las conductas prohibidas que le competen a la contraloría\ntodas serán sancionatorias sin opción a mediar en caso de que se haya\ndeterminado alguna responsabilidad.",
              "type": "sancion",
              "cluster": "disciplinario",
              "tags": [
                "contraloria",
                "dialogo-arbitraje",
                "sancion"
              ],
              "keyConcepts": [
                "Comité de arbitraje"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El procedimiento sancionatorio únicamente se podrá realizar si",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "no se llegó a un acuerdo en la Comisión de Conciliación y Mediación,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "teniendo que resolver el Comité de Arbitraje y Sanciones; por otro lado,",
                  "level": 0
                },
                {
                  "type": "condition",
                  "content": "cuando se trate de las conductas prohibidas que le competen a la contraloría",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "todas serán sancionatorias sin opción a mediar en caso de que se haya",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "determinado alguna responsabilidad.",
                  "level": 0
                }
              ],
              "wordCount": 62,
              "hasList": false,
              "hasConditions": true
            },
            {
              "number": "Artículo 148.-",
              "content": "Para llevar a cabo un proceso de sanción se deberá distinguir\nentre la naturaleza de la acción , es decir, dejar claro si es una sanción\nadministrativa o si es correspondiente a diálogo y arbitraje, teniendo que\nrecurrir al área competente para iniciar el proceso.",
              "type": "procedimiento",
              "cluster": "disciplinario",
              "tags": [
                "dialogo",
                "dialogo-arbitraje",
                "procedimiento",
                "sancion"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Para llevar a cabo un proceso de sanción se deberá distinguir",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "entre la naturaleza de la acción , es decir, dejar claro si es una sanción",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "administrativa o si es correspondiente a diálogo y arbitraje, teniendo que",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "recurrir al área competente para iniciar el proceso.",
                  "level": 0
                }
              ],
              "wordCount": 45,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 149.-",
              "content": "El procedimiento deberá incluirse en los reglamentos del Área\nde Conciliación y Arbitraje, además de la Contraloría.",
              "type": "procedimiento",
              "cluster": "disciplinario",
              "tags": [
                "contraloria",
                "dialogo-arbitraje",
                "legal",
                "procedimiento"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El procedimiento deberá incluirse en los reglamentos del Área",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "de Conciliación y Arbitraje, además de la Contraloría.",
                  "level": 0
                }
              ],
              "wordCount": 17,
              "hasList": false,
              "hasConditions": false
            }
          ]
        }
      ],
      "totalArticulos": 9,
      "totalPalabras": 1148
    },
    {
      "name": "TÍTULO OCTAVO: Sobre la Presentación de Proyectos y la Modificación del Reglamento",
      "capitulos": [
        {
          "name": "Capítulo I: Sobre la modificación y vigencia del reglamento",
          "articulos": [
            {
              "number": "Artículo 150.-",
              "content": "El presente reglamento podrá ser modificado cuando alguna\npersona afiliada al Proyecto Migala presente una propuesta de modificación,\nadición o derogación al o los reglamentos.",
              "type": "estructura",
              "cluster": "normativo",
              "tags": [
                "estructura",
                "legal"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El presente reglamento podrá ser modificado cuando alguna",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "persona afiliada al Proyecto Migala presente una propuesta de modificación,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "adición o derogación al o los reglamentos.",
                  "level": 0
                }
              ],
              "wordCount": 25,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 151.-",
              "content": "Se mandará una solicitud al Área Legal y al Comité de Gestión de\nProyectos para revisar la propuesta, además de verificar que esté apegado a la\nnormativa del Proyecto Migala y no esté en contra de derecho.",
              "type": "estructura",
              "cluster": "normativo",
              "tags": [
                "estructura",
                "legal"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Se mandará una solicitud al Área Legal y al Comité de Gestión de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Proyectos para revisar la propuesta, además de verificar que esté apegado a la",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "normativa del Proyecto Migala y no esté en contra de derecho.",
                  "level": 0
                }
              ],
              "wordCount": 37,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 152.-",
              "content": "El procedimiento para modificar el reglamento estará contenido\nen el capítulo II del presente título.",
              "type": "procedimiento",
              "cluster": "normativo",
              "tags": [
                "procedimiento"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El procedimiento para modificar el reglamento estará contenido",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "en el capítulo II del presente título.",
                  "level": 0
                }
              ],
              "wordCount": 15,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 153.-",
              "content": "Las reformas y nuevas normativas que genere el Proyecto\nMigala deberán ser aprobadas por la coordinación general.",
              "type": "estructura",
              "cluster": "normativo",
              "tags": [
                "estructura",
                "proyectos"
              ],
              "keyConcepts": [
                "Coordinación general"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Las reformas y nuevas normativas que genere el Proyecto",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Migala deberán ser aprobadas por la coordinación general.",
                  "level": 0
                }
              ],
              "wordCount": 17,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 154.-",
              "content": "El presente reglamento tendrá vigencia hasta la creación de la\nasociación civil que convierta el Proyecto Migala en partido por lo cual se\nsustituirá el presente reglamento por los estatutos.",
              "type": "estructura",
              "cluster": "normativo",
              "tags": [
                "estructura"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El presente reglamento tendrá vigencia hasta la creación de la",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "asociación civil que convierta el Proyecto Migala en partido por lo cual se",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "sustituirá el presente reglamento por los estatutos.",
                  "level": 0
                }
              ],
              "wordCount": 30,
              "hasList": false,
              "hasConditions": false
            }
          ]
        },
        {
          "name": "Capítulo II: Sobre el procedimiento de modificación de reglamento",
          "articulos": [
            {
              "number": "Artículo 155.-",
              "content": "Para modificar el reglamento se tendrá que estar apegado a lo\nsiguiente:\nI. Nombre del Solicitante en el escrito de petición de modificación o\nderogación;\nII. En el escrito señalar la parte del reglamento, título, capítulo, artículo,\nfracción y/o inciso que se busca modificar o derogar; además\ntranscribiendo dicho precepto, seguido de como se pretende reformar;.\nIII. El escrito debe hacerse mediante archivo word, google docs, o algún\nmedio escrito, el cual se tiene que hacer llegar al Área Legal y al Área de\nAdministración del Proyecto Migala, en caso de sólo presentarse a uno,\nel grupo que lo haya recibido deberá derivarlo al otro;\nIV. Las Áreas señaladas en la fracción III deberán analizar la propuesta\nposteriormente a su recepción, previniendo en su caso al peticionante\npor no ser claro, falta de coherencia, afecte la integridad de los\nmiembros, no estar apegado al manifiesto, contravenir el derecho\nmexicano o tratados internacionales en el que México sea parte, busque\nperjudicar a uno o más miembros por problemas personales, y/o a\ntodas luces busque un beneficio individual.\nV. Las mismas Áreas deberán emitir un resultado donde se señale si se\naprueba, se previene o se rechaza, fundando y motivando la misma;\ndebiendo de ser público cargando el documento en el Notion del Área.\nVI. En caso de prevención o de rechazo el solicitante podrá exponer su\nafectación a la Coordinación General.\nEn caso de aprobar la modificación se deberá hacer llegar a la Coordinación\nGeneral para su debate, aprobación e incorporación; este paso deberá ser\npúblico por lo cual se deberá de transmitir en el canal oficial de YouTube.",
              "type": "procedimiento",
              "cluster": "normativo",
              "tags": [
                "administracion",
                "arte-cultura",
                "legal",
                "manifiesto",
                "procedimiento"
              ],
              "keyConcepts": [
                "Coordinación general"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Para modificar el reglamento se tendrá que estar apegado a lo",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "siguiente:",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "I. Nombre del Solicitante en el escrito de petición de modificación o",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "derogación;",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "II. En el escrito señalar la parte del reglamento, título, capítulo, artículo,",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "fracción y/o inciso que se busca modificar o derogar; además",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "transcribiendo dicho precepto, seguido de como se pretende reformar;.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "III. El escrito debe hacerse mediante archivo word, google docs, o algún",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "medio escrito, el cual se tiene que hacer llegar al Área Legal y al Área de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Administración del Proyecto Migala, en caso de sólo presentarse a uno,",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "el grupo que lo haya recibido deberá derivarlo al otro;",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "IV. Las Áreas señaladas en la fracción III deberán analizar la propuesta",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "posteriormente a su recepción, previniendo en su caso al peticionante",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "por no ser claro, falta de coherencia, afecte la integridad de los",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "miembros, no estar apegado al manifiesto, contravenir el derecho",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "mexicano o tratados internacionales en el que México sea parte, busque",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "perjudicar a uno o más miembros por problemas personales, y/o a",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "todas luces busque un beneficio individual.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "V. Las mismas Áreas deberán emitir un resultado donde se señale si se",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "aprueba, se previene o se rechaza, fundando y motivando la misma;",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "debiendo de ser público cargando el documento en el Notion del Área.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "VI. En caso de prevención o de rechazo el solicitante podrá exponer su",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "afectación a la Coordinación General.",
                  "level": 0
                },
                {
                  "type": "condition",
                  "content": "En caso de aprobar la modificación se deberá hacer llegar a la Coordinación",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "General para su debate, aprobación e incorporación; este paso deberá ser",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "público por lo cual se deberá de transmitir en el canal oficial de YouTube.",
                  "level": 0
                }
              ],
              "wordCount": 268,
              "hasList": true,
              "hasConditions": true
            },
            {
              "number": "Artículo 156.-",
              "content": "Cualquier afiliado del proyecto migala podrá presentar todas las\npropuestas de reforma que deseé, en caso de que se repitan y/o se relacionen\nse deberán de acumular en un solo procedimiento.",
              "type": "procedimiento",
              "cluster": "normativo",
              "tags": [
                "afiliado",
                "procedimiento"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Cualquier afiliado del proyecto migala podrá presentar todas las",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "propuestas de reforma que deseé, en caso de que se repitan y/o se relacionen",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "se deberán de acumular en un solo procedimiento.",
                  "level": 0
                }
              ],
              "wordCount": 31,
              "hasList": false,
              "hasConditions": false
            }
          ]
        },
        {
          "name": "Capítulo III: Sobre la Presentación de Proyectos y Propuestas",
          "articulos": [
            {
              "number": "Artículo 157.-",
              "content": "Los proyectos son el motor del proyecto migala, son el sistema\npor el cual los participantes pueden incidir principalmente.",
              "type": "estructura",
              "cluster": "normativo",
              "tags": [
                "estructura"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Los proyectos son el motor del proyecto migala, son el sistema",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "por el cual los participantes pueden incidir principalmente.",
                  "level": 0
                }
              ],
              "wordCount": 19,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 158.-",
              "content": "Las propuestas deben de ser presentadas en un documento en\nformato abierto y editable a través de un medio electrónico, con el fin de que\nqueden archivadas, además de facilitar el proceso al Comité de Gestión de\nProyectos.",
              "type": "estructura",
              "cluster": "normativo",
              "tags": [
                "estructura",
                "proyectos"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Las propuestas deben de ser presentadas en un documento en",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "formato abierto y editable a través de un medio electrónico, con el fin de que",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "queden archivadas, además de facilitar el proceso al Comité de Gestión de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Proyectos.",
                  "level": 0
                }
              ],
              "wordCount": 38,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 159.-",
              "content": "Las propuestas sirven para generar y modificar puntos en la\nruta crítica, así como planes, acuerdos, proyectos y actividades dentro del\nProyecto Migala; deberán contener mínimo lo siguiente:\n1. Nombre de la propuesta.\n2. Nombre de la persona que propone.\n3. Descripción de la propuesta\n4. ¿En qué consiste?, ¿Cuál es el fin? (justificación)\n5. ¿A quién o quiénes va dirigido?\n6. ¿Qué recursos se necesitan? (RRHH, materiales)\n7. ¿Cuál sería la afluencia estimada de personas?\n8. ¿En qué lugar se llevará a cabo?\n9. ¿Cuál será la fecha y la duración? y en caso de llevarse su elaboración\nen distintos días, agregar cronograma con las fechas.\n10. Medio para comunicarse (Correo electrónico, telegram, número de\nwhatsapp, discord)\nDentro de los Reglamentos internos de los grupos podrán considerar más\npuntos que los antes mencionados.",
              "type": "estructura",
              "cluster": "normativo",
              "tags": [
                "estructura",
                "legal",
                "ruta-critica"
              ],
              "keyConcepts": [
                "Ruta crítica"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Las propuestas sirven para generar y modificar puntos en la",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "ruta crítica, así como planes, acuerdos, proyectos y actividades dentro del",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Proyecto Migala; deberán contener mínimo lo siguiente:",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "1. Nombre de la propuesta.",
                  "level": 0,
                  "listType": "number",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "2. Nombre de la persona que propone.",
                  "level": 0,
                  "listType": "number",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "3. Descripción de la propuesta",
                  "level": 0,
                  "listType": "number",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "4. ¿En qué consiste?, ¿Cuál es el fin? (justificación)",
                  "level": 0,
                  "listType": "number",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "5. ¿A quién o quiénes va dirigido?",
                  "level": 0,
                  "listType": "number",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "6. ¿Qué recursos se necesitan? (RRHH, materiales)",
                  "level": 0,
                  "listType": "number",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "7. ¿Cuál sería la afluencia estimada de personas?",
                  "level": 0,
                  "listType": "number",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "8. ¿En qué lugar se llevará a cabo?",
                  "level": 0,
                  "listType": "number",
                  "listMarker": ""
                },
                {
                  "type": "listItem",
                  "content": "9. ¿Cuál será la fecha y la duración? y en caso de llevarse su elaboración",
                  "level": 0,
                  "listType": "number",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "en distintos días, agregar cronograma con las fechas.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "10. Medio para comunicarse (Correo electrónico, telegram, número de",
                  "level": 0,
                  "listType": "number",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "whatsapp, discord)",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Dentro de los Reglamentos internos de los grupos podrán considerar más",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "puntos que los antes mencionados.",
                  "level": 0
                }
              ],
              "wordCount": 134,
              "hasList": true,
              "hasConditions": false
            },
            {
              "number": "Artículo 160.-",
              "content": "Cualquier miembro afiliado del proyecto migala podrá presentar\ntodas las propuestas que deseé, en caso de que se repitan y/o se relacionen se\ndeberán de acumular en un solo procedimiento.",
              "type": "procedimiento",
              "cluster": "normativo",
              "tags": [
                "afiliado",
                "procedimiento"
              ],
              "keyConcepts": [],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "Cualquier miembro afiliado del proyecto migala podrá presentar",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "todas las propuestas que deseé, en caso de que se repitan y/o se relacionen se",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "deberán de acumular en un solo procedimiento.",
                  "level": 0
                }
              ],
              "wordCount": 30,
              "hasList": false,
              "hasConditions": false
            },
            {
              "number": "Artículo 161.-",
              "content": "El procedimiento para la aprobación de las propuestas será el\nsiguiente:\nI. Presentar la propuesta con todos sus requisitos a la comisión de\nGestión de Proyectos.\nII. La Comisión de Gestión de Proyectos deberá de entregar un acuse de\nrecibido al solicitante o a la persona que presenta la propuesta.\nIII. La Comisión de Gestión de Proyectos dará contestación de conformidad\na sus capacidades y reglamento interno; en esta contestación se podrá\nprevenir, rechazar o aprobar su proyecto por no ser claro, falta de\ncoherencia, afecte la integridad de los miembros, no estar apegado al\nmanifiesto, contravenir el derecho mexicano o tratados internacionales\nen el que México sea parte, busque perjudicar a uno o más miembros\npor problemas personales, y/o a todas luces busque un beneficio\nindividual.\nIV. En caso de prevención o de rechazo el peticionante podrá exponer su\nafectación a la Coordinación General.\nV. En caso de aprobar la propuesta se deberá hacer llegar a la\nCoordinación General para su diálogo, aprobación y aplicación; este\npaso deberá ser público por lo cual se deberá de transmitir en el canal\noficial de YouTube, además de emitir una resolución por escrito.",
              "type": "procedimiento",
              "cluster": "normativo",
              "tags": [
                "arte-cultura",
                "dialogo",
                "manifiesto",
                "procedimiento",
                "proyectos"
              ],
              "keyConcepts": [
                "Coordinación general"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "paragraph",
                  "content": "El procedimiento para la aprobación de las propuestas será el",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "siguiente:",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "I. Presentar la propuesta con todos sus requisitos a la comisión de",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "Gestión de Proyectos.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "II. La Comisión de Gestión de Proyectos deberá de entregar un acuse de",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "recibido al solicitante o a la persona que presenta la propuesta.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "III. La Comisión de Gestión de Proyectos dará contestación de conformidad",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "a sus capacidades y reglamento interno; en esta contestación se podrá",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "prevenir, rechazar o aprobar su proyecto por no ser claro, falta de",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "coherencia, afecte la integridad de los miembros, no estar apegado al",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "manifiesto, contravenir el derecho mexicano o tratados internacionales",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "en el que México sea parte, busque perjudicar a uno o más miembros",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "por problemas personales, y/o a todas luces busque un beneficio",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "individual.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "IV. En caso de prevención o de rechazo el peticionante podrá exponer su",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "afectación a la Coordinación General.",
                  "level": 0
                },
                {
                  "type": "listItem",
                  "content": "V. En caso de aprobar la propuesta se deberá hacer llegar a la",
                  "level": 0,
                  "listType": "roman",
                  "listMarker": ""
                },
                {
                  "type": "paragraph",
                  "content": "Coordinación General para su diálogo, aprobación y aplicación; este",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "paso deberá ser público por lo cual se deberá de transmitir en el canal",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "oficial de YouTube, además de emitir una resolución por escrito.",
                  "level": 0
                }
              ],
              "wordCount": 191,
              "hasList": true,
              "hasConditions": false
            },
            {
              "number": "Artículo 162.-",
              "content": "En caso de Proyectos y Acuerdos estatales, ellos fijarán su\nmétodo sin contravenir el Título Cuarto del presente Reglamento.\nTRANSITORIOS\nPrimero. Para la primera vez que se valide este reglamento será mediante\nCPN2.0.\nSegundo. Los Órganos Garantes de Horizontalidad, Transversales y\nEspecializados tendrán dos meses a partir de la aprobación por parte de CPN\npara concluir sus reglamentos, salvo aquellos que sean de primera creación\ntendrán dos meses a partir de su primera Sesión Ordinaria.\nTercero. El Área de Contraloría, Tesorería, Diálogo y Arbitraje, Legal, entrarán\nen funciones después de dos meses de haberse formado la Coordinación\nGeneral.\nCuarto. La Coordinación General se conformará una vez el Área Político\nElectoral acuerde lanzar la convocatoria.\nQuinto. La CNP2.0 una vez aprobado el reglamento se desmantelará y apoyará\na la consolidación del eje operativo.\nSexto. En el caso de que tras la convocatoria a conformar la Coordinación\nGeneral no se hubiese formado, la dirección del Proyecto Migala recaerá en el\nÁrea Político Electoral la cual tendrá la responsabilidad de lanzar convocatorias\nsubsecuentes hasta que se conforme la Coordinación General.",
              "type": "estructura",
              "cluster": "normativo",
              "tags": [
                "arte-cultura",
                "contraloria",
                "dialogo",
                "dialogo-arbitraje",
                "estructura",
                "horizontalidad",
                "legal",
                "politico-electoral",
                "sesiones",
                "tesoreria"
              ],
              "keyConcepts": [
                "Coordinación general",
                "Órganos garantes de horizontalidad"
              ],
              "references": [],
              "fragments": [
                {
                  "type": "condition",
                  "content": "En caso de Proyectos y Acuerdos estatales, ellos fijarán su",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "método sin contravenir el Título Cuarto del presente Reglamento.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "TRANSITORIOS",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Primero. Para la primera vez que se valide este reglamento será mediante",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "CPN2.0.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Segundo. Los Órganos Garantes de Horizontalidad, Transversales y",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Especializados tendrán dos meses a partir de la aprobación por parte de CPN",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "para concluir sus reglamentos, salvo aquellos que sean de primera creación",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "tendrán dos meses a partir de su primera Sesión Ordinaria.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Tercero. El Área de Contraloría, Tesorería, Diálogo y Arbitraje, Legal, entrarán",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "en funciones después de dos meses de haberse formado la Coordinación",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "General.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Cuarto. La Coordinación General se conformará una vez el Área Político",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Electoral acuerde lanzar la convocatoria.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Quinto. La CNP2.0 una vez aprobado el reglamento se desmantelará y apoyará",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "a la consolidación del eje operativo.",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Sexto. En el caso de que tras la convocatoria a conformar la Coordinación",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "General no se hubiese formado, la dirección del Proyecto Migala recaerá en el",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "Área Político Electoral la cual tendrá la responsabilidad de lanzar convocatorias",
                  "level": 0
                },
                {
                  "type": "paragraph",
                  "content": "subsecuentes hasta que se conforme la Coordinación General.",
                  "level": 0
                }
              ],
              "wordCount": 177,
              "hasList": false,
              "hasConditions": true
            }
          ]
        }
      ],
      "totalArticulos": 13,
      "totalPalabras": 1012
    }
  ],
  "metadata": {
    "estatus": "vigente",
    "version": "1.0.0",
    "creado": "2023-09-16",
    "ultimaActualizacion": "2023-09-16",
    "autor": "Coordinación General Proyecto Migala",
    "revisores": ["Coordinación General", "Consejo Consultivo"],
    "aprobadoPor": "Asamblea General",
    "actaOficial": "/archivo/acta-constitutiva",
    "zkId": "reglamento-nacional-1.0.0",
    "tags": ["reglamento", "nacional", "estructura", "gobernanza"],
    "conexiones": [
      "constitucion-migala",
      "codigo-etica",
      "manual-operativo"
    ]
  },
  "cobertura": {
    "tieneIndice": true,
    "tienePreambulo": false,
    "tieneArticulado": true,
    "tieneRegimenTransitorio": true,
    "tieneFirmas": false,
    "progreso": 80
  },
  "metrics": {
    "totalTitulos": 8,
    "totalCapitulos": 36,
    "totalArticulos": 162,
    "totalPalabras": 11210,
    "distribucionTipo": {
      "estructura": 105,
      "principio": 2,
      "definicion": 2,
      "derecho": 2,
      "requisito": 7,
      "obligacion": 13,
      "procedimiento": 28,
      "sancion": 3
    },
    "distribucionCluster": {
      "nacional": 10,
      "operativo": 86,
      "territorial": 11,
      "especializado": 3,
      "transversal": 3,
      "procedimental": 27,
      "disciplinario": 9,
      "normativo": 13
    },
    "averageWordsPerArticle": 69
  }
};
