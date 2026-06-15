// ─── Organigrama Nacional ───────────────────────────────────────────
// Fuente: Estructura oficial de Proyecto Migala A.C.
// Los Telegram URLs se resuelven desde TELEGRAM_LINKS (única fuente de verdad).
// Si un enlace cambia, solo se edita en telegram-links.ts.
// ─────────────────────────────────────────────────────────────────────

import { TELEGRAM_LINKS } from './telegram-links';

export interface OrganigramaEntry {
  /** ID único que coincide con el usado en organizaciones.data.ts */
  id: string;
  /** Nombre visible del órgano, comisión o grupo */
  nombre: string;
  /** Enlace oficial de Telegram (opcional) — se resuelve desde TELEGRAM_LINKS */
  telegramUrl?: string;
  /** Sub-órganos jerárquicos */
  hijos?: OrganigramaEntry[];
}

// ─── Estructura base SIN telegramUrl hardcodeados ───────────────────
const ORGANIGRAMA_RAW: OrganigramaEntry = {
  id: 'organigrama-nacional',
  nombre: 'I.- Organigrama Nacional',
  hijos: [
    // ═════════════════════════════════════════════════════════════════
    // 1. EJE OPERATIVO
    // ═════════════════════════════════════════════════════════════════
    {
      id: 'eje-operativo',
      nombre: '1. Eje Operativo',
      hijos: [
        // ── Área de Dirección ──
        {
          id: 'area-direccion',
          nombre: 'Área de Dirección',
          hijos: [
            { id: 'org-coordinacion-nacional', nombre: 'Coordinación General' },
            { id: 'dir-mesa-voceros', nombre: 'Mesa de Voceros' },
            { id: 'dir-mesa-recaudacion', nombre: 'Mesa de Recaudación de Fondos' }
          ]
        },
        // ── Área de Formación ──
        {
          id: 'area-formacion',
          nombre: 'Área de Formación',
          hijos: [
            { id: 'form-estudios-politicos', nombre: 'Comité de Estudios Políticos y Sociales' },
            { id: 'form-manifiesto', nombre: 'Comité de Manifiesto' },
            { id: 'form-talleres-escuela', nombre: 'Comité de Talleres Formativos y Escuela de Cuadros' },
            { id: 'org-confu', nombre: 'Comité Nacional de Formación y Utopía' }
          ]
        },
        // ── Área Administrativa ──
        {
          id: 'area-administrativa',
          nombre: 'Área Administrativa',
          hijos: [
            { id: 'adm-coordinacion-seguimiento', nombre: 'Comisión de Coordinación y Seguimiento' },
            { id: 'adm-coordinacion-administracion', nombre: 'Coordinación de Administración' },
            { id: 'adm-orientacion-bienvenida', nombre: 'Comité de Orientación y Bienvenida' },
            { id: 'adm-gestion-proyectos', nombre: 'Comité de Gestión de Proyectos' },
            { id: 'adm-comunicacion-interna', nombre: 'Comité de Comunicación Interna' }
          ]
        },
        // ── Área de Transparencia ──
        {
          id: 'area-transparencia',
          nombre: 'Área de Transparencia',
          hijos: [
            { id: 'trans-comite', nombre: 'Comité de Transparencia' },
            { id: 'trans-lupa-ciudadana', nombre: 'Grupo de Lupa Ciudadana' }
          ]
        },
        // ── Área de Contraloría ──
        {
          id: 'area-contraloria',
          nombre: 'Área de Contraloría',
          hijos: [
            { id: 'cont-comite-sancionador', nombre: 'Comité Sancionador' },
            { id: 'cont-auditoria', nombre: 'Comité de Auditoría' },
            { id: 'cont-investigacion', nombre: 'Comité de Investigación Contralora' }
          ]
        },
        // ── Área de Comunicación y Propaganda ──
        {
          id: 'area-comunicacion',
          nombre: 'Área de Comunicación y Propaganda',
          hijos: [
            { id: 'com-coordinacion-propaganda', nombre: 'Coordinación General de Propaganda e Imagen' },
            { id: 'com-diseno-multimedia', nombre: 'Mesa de Diseño Multimedia' },
            { id: 'com-redaccion', nombre: 'Mesa de Redacción' },
            { id: 'com-noticiero', nombre: 'Mesa de Noticiero' }
          ]
        },
        // ── Área de Informática ──
        {
          id: 'area-informatica',
          nombre: 'Área de Informática',
          hijos: [
            {
              id: 'inf-estrategia-digital',
              nombre: 'Coordinación de Estrategia Digital',
              hijos: [
                { id: 'inf-mesa-administradores', nombre: 'Mesa de Administradores' },
                { id: 'inf-padron-patrocinadores', nombre: 'Padrón de Patrocinadores' }
              ]
            },
            {
              id: 'inf-programadores',
              nombre: 'Coordinación de Programadores',
              hijos: [
                { id: 'inf-mesa-recepcion', nombre: 'Mesa de Recepción de Administración de Proyectos' },
                { id: 'inf-mesa-ejecucion', nombre: 'Mesa de Ejecución de Proyectos' },
                { id: 'inf-mesa-tecnica', nombre: 'Mesa Técnica y Asesoría' },
                { id: 'inf-mesa-aprendizaje', nombre: 'Mesa de Aprendizaje' }
              ]
            }
          ]
        },
        // ── Área Financiera ──
        {
          id: 'area-financiera',
          nombre: 'Área Financiera',
          hijos: [
            { id: 'fin-tesoreria', nombre: 'Coordinación de Tesorería' },
            { id: 'fin-proveeduria', nombre: 'Comité de Proveeduría' },
            { id: 'fin-egresos', nombre: 'Comité de Egresos' },
            { id: 'fin-glosa', nombre: 'Comité de Glosa' },
            { id: 'fin-contabilidad', nombre: 'Comité de Contabilidad' },
            { id: 'fin-ingresos', nombre: 'Comité de Ingresos' }
          ]
        },
        // ── Área Legal ──
        {
          id: 'area-legal',
          nombre: 'Área Legal',
          hijos: [
            { id: 'leg-comite-juridico', nombre: 'Comité Jurídico' },
            { id: 'leg-comite-sociedades', nombre: 'Comité de Sociedades, Cooperativas y Sindicatos' },
            { id: 'leg-grupo-estatutos', nombre: 'Grupo de Estatutos y Reglamentos' }
          ]
        },
        // ── Área de Diálogo y Arbitraje ──
        {
          id: 'area-dialogo',
          nombre: 'Área de Diálogo y Arbitraje',
          hijos: [
            { id: 'dial-conciliacion-mediacion', nombre: 'Comité de Conciliación y Mediación' },
            { id: 'dial-grupo-investigacion', nombre: 'Grupo de Investigación' },
            { id: 'dial-arbitraje-sanciones', nombre: 'Comité de Arbitraje y Sanciones' }
          ]
        }
      ]
    },
    // ═════════════════════════════════════════════════════════════════
    // 2. EJE TERRITORIAL
    // ═════════════════════════════════════════════════════════════════
    {
      id: 'eje-territorial',
      nombre: '2. Eje Territorial',
      hijos: [
        // ── Primera Circunscripción ──
        {
          id: 'circunscripcion-1',
          nombre: 'Primera Circunscripción',
          hijos: [
            { id: 'est-baja-california', nombre: 'Baja California' },
            { id: 'est-baja-california-sur', nombre: 'Baja California Sur' },
            { id: 'est-sonora', nombre: 'Sonora' },
            { id: 'est-chihuahua', nombre: 'Chihuahua' },
            { id: 'est-sinaloa', nombre: 'Sinaloa' },
            { id: 'est-durango', nombre: 'Durango' },
            { id: 'est-jalisco', nombre: 'Jalisco' },
            { id: 'est-nayarit', nombre: 'Nayarit' }
          ]
        },
        // ── Segunda Circunscripción ──
        {
          id: 'circunscripcion-2',
          nombre: 'Segunda Circunscripción',
          hijos: [
            { id: 'est-aguascalientes', nombre: 'Aguascalientes' },
            { id: 'est-coahuila', nombre: 'Coahuila' },
            { id: 'est-guanajuato', nombre: 'Guanajuato' },
            { id: 'est-nuevo-leon', nombre: 'Nuevo León' },
            { id: 'est-san-luis-potosi', nombre: 'San Luis Potosí' },
            { id: 'est-tamaulipas', nombre: 'Tamaulipas' },
            { id: 'est-zacatecas', nombre: 'Zacatecas' }
          ]
        },
        // ── Tercera Circunscripción ──
        {
          id: 'circunscripcion-3',
          nombre: 'Tercera Circunscripción',
          hijos: [
            { id: 'est-campeche', nombre: 'Campeche' },
            { id: 'est-chiapas', nombre: 'Chiapas' },
            { id: 'est-oaxaca', nombre: 'Oaxaca' },
            { id: 'est-quintana-roo', nombre: 'Quintana Roo' },
            { id: 'est-tabasco', nombre: 'Tabasco' },
            { id: 'est-veracruz', nombre: 'Veracruz' },
            { id: 'est-yucatan', nombre: 'Yucatán' }
          ]
        },
        // ── Cuarta Circunscripción ──
        {
          id: 'circunscripcion-4',
          nombre: 'Cuarta Circunscripción',
          hijos: [
            { id: 'est-hidalgo', nombre: 'Hidalgo' },
            { id: 'est-puebla', nombre: 'Puebla' },
            { id: 'est-cdmx', nombre: 'Ciudad de México' },
            { id: 'est-tlaxcala', nombre: 'Tlaxcala' },
            { id: 'est-morelos', nombre: 'Morelos' },
            { id: 'est-guerrero', nombre: 'Guerrero' }
          ]
        },
        // ── Quinta Circunscripción ──
        {
          id: 'circunscripcion-5',
          nombre: 'Quinta Circunscripción',
          hijos: [
            { id: 'est-colima', nombre: 'Colima' },
            { id: 'est-queretaro', nombre: 'Querétaro' },
            { id: 'est-edomex', nombre: 'Estado de México' },
            { id: 'est-michoacan', nombre: 'Michoacán' }
          ]
        }
      ]
    },
    // ═════════════════════════════════════════════════════════════════
    // 3. EJE ESPECIALIZADO
    // ═════════════════════════════════════════════════════════════════
    {
      id: 'eje-especializado',
      nombre: '3. Eje Especializado',
      hijos: [
        { id: 'esp-derechos-humanos', nombre: 'Derechos Humanos' },
        { id: 'esp-arte-cultura', nombre: 'Arte y Cultura' },
        { id: 'esp-estudios-economicos', nombre: 'Estudios Económicos' },
        { id: 'esp-geopolitica-historia', nombre: 'Geopolítica e Historia' },
        { id: 'esp-ciencia-tecnologia', nombre: 'Ciencia y Tecnología' },
        { id: 'esp-sustentabilidad', nombre: 'Sustentabilidad' }
      ]
    },
    // ═════════════════════════════════════════════════════════════════
    // 4. EJE DE TRANSVERSALIDAD
    // ═════════════════════════════════════════════════════════════════
    {
      id: 'eje-transversalidad',
      nombre: '4. Eje de Transversalidad',
      hijos: [
        { id: 'tran-diversidad', nombre: 'Grupo de Diversidad' },
        { id: 'tran-mujeres', nombre: 'Grupo de Mujeres' },
        { id: 'tran-funcionalidad-diversa', nombre: 'Grupo de Personas de Funcionalidad Diversa' },
        { id: 'tran-paisanos', nombre: 'Grupo de Paisanos' },
        { id: 'tran-masculinidades', nombre: 'Grupo de Masculinidades' },
        { id: 'tran-pueblos-originarios', nombre: 'Grupo de Pueblos Originarios' }
      ]
    }
  ]
};

// ─── Resolver Telegram URLs desde TELEGRAM_LINKS ────────────────────
function resolveTelegramUrls(entry: OrganigramaEntry): OrganigramaEntry {
  return {
    ...entry,
    telegramUrl: TELEGRAM_LINKS[entry.id] || undefined,
    hijos: entry.hijos?.map(resolveTelegramUrls)
  };
}

export const ORGANIGRAMA_NACIONAL: OrganigramaEntry = resolveTelegramUrls(ORGANIGRAMA_RAW);
