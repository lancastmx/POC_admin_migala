/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  cfg-004
 * title:  ARCHIVO_CONSTANTS — Constantes de filtros, badges e íconos
 * type:   config
 * tags:   [angular, config, archive, filters, badges, icons]
 * author: lancast
 * created: 2026-06-15
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 *
 * Constantes visuales y de dominio para la página de Archivo:
 * filtros, badges de tipo de órgano, formato, nivel, y reglas de
 * personalización de texto.
 */

// ═══════════════════════════════════════════════
//  FILTROS
// ═══════════════════════════════════════════════

export interface CategoriaFiltro {
  id: string;
  label: string;
  icon: string;
}

export const CATEGORIAS: CategoriaFiltro[] = [
  { id: 'inicio', label: 'Inicio', icon: '🏠' },
  { id: 'todos', label: 'Todos los archivos', icon: '📁' },
  { id: 'redes-sociales', label: 'Redes Sociales', icon: '👥' },
  { id: 'ruta-critica', label: 'Ruta Crítica', icon: '📌' },
  { id: 'directorios', label: 'Directorios', icon: '📇' },
  { id: 'organigrama', label: 'Organigramas', icon: '🌿' },
  { id: 'sesiones', label: 'Sesiones y Minutas', icon: '📺' },
  { id: 'conversatorios', label: 'Conversatorios', icon: '💬' },
  { id: 'calendario', label: 'Calendarios', icon: '📅' },
  { id: 'patrimonio', label: 'Patrimonio', icon: '💎' },
  { id: 'ingresos-egresos', label: 'Ingresos y Egresos', icon: '🔄' },
  { id: 'tramites-formatos-manuales', label: 'Trámites y Manuales', icon: '🖨️' },
  { id: 'talleres', label: 'Talleres de Formación', icon: '💡' }
];

export const EJES_FILTRO = [
  { id: 'todos', label: 'Todos los ámbitos' },
  { id: 'nacional', label: 'Nacional' },
  { id: 'estatal', label: 'Estatal' },
  { id: 'operativo', label: 'Operativo' },
  { id: 'tematico', label: 'Temático' },
  { id: 'transversal', label: 'Transversalidad' },
  { id: 'territorial', label: 'Territorial (Circunscripciones)' }
];

export const FORMATOS_FILTRO = [
  { id: 'todos', label: 'Todos los formatos' },
  { id: 'pdf', label: 'PDF' },
  { id: 'spreadsheet', label: 'Hojas de Cálculo' },
  { id: 'doc', label: 'Documentos' },
  { id: 'drive', label: 'Google Drive / Calendario' },
  { id: 'video', label: 'Videos y Playlists' }
];

// ═══════════════════════════════════════════════
//  GRUPOS DEL ORGANIGRAMA
// ═══════════════════════════════════════════════

export const ORGANIGRAMA_GRUPOS: { ejeId: string; ejeName: string; ejeIcon: string; ejeColor: string }[] = [
  { ejeId: 'operativo',   ejeName: 'EJE OPERATIVO',         ejeIcon: '⚙️', ejeColor: 'text-cyan-500' },
  { ejeId: 'territorial', ejeName: 'EJE TERRITORIAL',       ejeIcon: '🗺️', ejeColor: 'text-green-500' },
  { ejeId: 'ideologico',  ejeName: 'EJE ESPECIALIZADO',     ejeIcon: '💡', ejeColor: 'text-amber-500' },
  { ejeId: 'transversal', ejeName: 'EJE DE TRANSVERSALIDAD', ejeIcon: '🤝', ejeColor: 'text-purple-500' }
];

// ═══════════════════════════════════════════════
//  MAPAS DE EJES: BADGES, COLORES Y ETIQUETAS
// ═══════════════════════════════════════════════

/** Clases CSS para badges de eje en tablas de portales */
export const EJE_BADGE_CLASSES: Record<string, string> = {
  operativo:   'bg-blue-500/10 text-blue-500 border-blue-500/20',
  tematico:    'bg-amber-600/10 text-amber-600 border-amber-600/20',
  transversal: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
  territorial: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
  estatal:     'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
};

/** Etiquetas para acordeones y badges de eje */
export const EJE_ACCORDION_LABELS: Record<string, { label: string; uppercase: string; badge: string }> = {
  operativo:   { label: '💻 Operativo',        uppercase: 'OPERATIVO',        badge: 'Operativo' },
  tematico:    { label: '🧬 Temático',         uppercase: 'TEMÁTICO',         badge: 'Temático' },
  transversal: { label: '💜 Transversal',      uppercase: 'TRANSVERSAL',     badge: 'Transversal' },
  territorial: { label: '🗺️ Territorial',     uppercase: 'TERRITORIAL',     badge: 'Territorial' },
  estatal:     { label: '📍 Estatal',          uppercase: 'ESTATAL (ENTIDADES FEDERATIVAS)', badge: 'Estatal' },
};

/** Punto de color para cada eje en el organigrama visual */
export const EJE_DOT_COLORS: Record<string, string> = {
  operativo:   'bg-cyan-500',
  territorial: 'bg-green-500',
  ideologico:  'bg-amber-500',
  transversal: 'bg-purple-500',
};

/** Badges de resumen en la sección de organigrama (icono + label + clase visual) */
export const ORGANIGRAMA_SUMMARY_BADGES: { ejeId: string; label: string; icon: string; badgeClass: string }[] = [
  { ejeId: 'operativo',   label: 'Operativo',       icon: '⚙️', badgeClass: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20' },
  { ejeId: 'territorial', label: 'Territorial',     icon: '🗺️', badgeClass: 'bg-green-500/10 text-green-500 border-green-500/20' },
  { ejeId: 'ideologico',  label: 'Especializado',   icon: '💡', badgeClass: 'bg-amber-500/10 text-amber-500 border-amber-500/20' },
  { ejeId: 'transversal', label: 'Transversalidad', icon: '🤝', badgeClass: 'bg-purple-500/10 text-purple-500 border-purple-500/20' },
];

// ═══════════════════════════════════════════════
//  SWITCH MAPS: TIPO DE ÓRGANO
// ═══════════════════════════════════════════════

export function getTipoOrganoLabel(tipo: string): string {
  switch (tipo) {
    case 'area': return 'Área';
    case 'coordinacion': return 'Coordinación';
    case 'comite': return 'Comité';
    case 'mesa': return 'Mesa de Trabajo';
    case 'comision_estatal': return 'Comisión Estatal';
    case 'comision_tematica': return 'Comisión Temática';
    case 'grupo_operativo': return 'Grupo Operativo';
    case 'asamblea': return 'Asamblea';
    default: return tipo;
  }
}

export function getTipoOrganoBadgeClass(tipo: string): string {
  switch (tipo) {
    case 'area':               return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
    case 'coordinacion':       return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
    case 'comite':             return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
    case 'mesa':               return 'bg-pink-500/10 text-pink-400 border-pink-500/20';
    case 'comision_estatal':   return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
    case 'comision_tematica':  return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
    case 'grupo_operativo':    return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20';
    case 'asamblea':           return 'bg-teal-500/10 text-teal-400 border-teal-500/20';
    default:                   return 'bg-neutral-500/10 text-neutral-400 border-neutral-500/20';
  }
}

export function getTipoOrganoIcon(tipo: string): string {
  switch (tipo) {
    case 'area':              return '📁';
    case 'coordinacion':      return '🧭';
    case 'comite':            return '👥';
    case 'mesa':              return '📥';
    case 'comision_estatal':  return '📍';
    case 'comision_tematica': return '🧬';
    case 'grupo_operativo':   return '💜';
    case 'asamblea':          return '🏛️';
    default:                  return '📇';
  }
}

// ═══════════════════════════════════════════════
//  MAPA: FORMATO → LABEL VISUAL
// ═══════════════════════════════════════════════

/** Etiqueta legible para mostrar en badge de formato */
export const FORMATO_BADGE_LABEL: Record<string, string> = {
  pdf: 'PDF',
  spreadsheet: 'Hoja de Cálculo',
  doc: 'Documento',
  drive: 'Google Drive',
  video: 'Video',
  link: 'Enlace',
};

/** Acción + icono para el botón CTA según el formato */
export const FORMATO_ACTION = {
  pdf:         { label: 'Consultar',  icon: '📥' },
  spreadsheet: { label: 'Consultar',  icon: '📥' },
  doc:         { label: 'Consultar',  icon: '📥' },
  drive:       { label: 'Abrir',      icon: '🔗' },
  video:       { label: 'Ver video',  icon: '▶️' },
  link:        { label: 'Visitar',    icon: '🔗' },
} as const;

// ═══════════════════════════════════════════════
//  SWITCH MAPS: FORMATO
// ═══════════════════════════════════════════════

export function getFormatIcon(formato: string): string {
  switch (formato) {
    case 'pdf':          return '📕';
    case 'spreadsheet':  return '📗';
    case 'doc':          return '📘';
    case 'drive':        return '📁';
    case 'video':        return '▶️';
    default:             return '📄';
  }
}

/** Obtiene label + icono de acción para el botón CTA */
export function getFormatAction(formato: string): { label: string; icon: string } {
  return FORMATO_ACTION[formato as keyof typeof FORMATO_ACTION] ?? FORMATO_ACTION.pdf;
}

/**
 * Detecta si una URL es un placeholder (mock) que aún no apunta a un recurso real.
 * Las URLs mock contienen "mock-" en cualquier parte (path o query string).
 */
export function isMockUrl(url: string | undefined | null): boolean {
  if (!url) return true;
  return /mock-/.test(url);
}

/** Obtiene etiqueta legible para mostrar en badge */
export function getFormatBadgeLabel(formato: string): string {
  return FORMATO_BADGE_LABEL[formato] ?? formato;
}

export function getFormatBadgeClass(formato: string): string {
  switch (formato) {
    case 'pdf':          return 'bg-red-500/10 text-red-400 border-red-500/20';
    case 'spreadsheet':  return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
    case 'doc':          return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
    case 'drive':        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
    case 'video':        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
    default:             return 'bg-neutral-500/10 text-neutral-400 border-neutral-500/20';
  }
}

// ═══════════════════════════════════════════════
//  SWITCH MAPS: NIVEL
// ═══════════════════════════════════════════════

export function getNivelBadgeClass(nivel: string): string {
  switch (nivel) {
    case 'Sin Archivo': return 'bg-rose-500/10 text-rose-500 border-rose-500/20 dark:text-rose-400 dark:border-rose-500/20';
    case 'Mínimo':      return 'bg-amber-500/10 text-amber-600 border-amber-500/20 dark:text-amber-400 dark:border-amber-500/20';
    case 'Básico':      return 'bg-purple-500/10 text-purple-600 border-purple-500/20 dark:text-purple-400 dark:border-purple-500/20';
    case 'Avanzado':    return 'bg-sky-500/10 text-sky-600 border-sky-500/20 dark:text-sky-400 dark:border-sky-500/20';
    case 'Consolidado': return 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400 dark:border-emerald-500/20';
    default:            return 'bg-neutral-500/10 text-neutral-500 border-neutral-500/20 dark:text-neutral-400 dark:border-neutral-500/20';
  }
}

// ═══════════════════════════════════════════════
//  PERSONALIZACIÓN DE TEXTO
// ═══════════════════════════════════════════════

export function personalizeText(text: string, search: string, replace: string): string {
  let res = text;
  res = res.replace(`de la ${search}`, `de la ${replace}`);
  res = res.replace(`de ${search}`, `de la ${replace}`);
  res = res.replace(`y Egresos de ${search}`, `y Egresos de la ${replace}`);
  res = res.replace(search, replace);

  res = res.replace(`de la ${search.toLowerCase()}`, `de la ${replace}`);
  res = res.replace(`de ${search.toLowerCase()}`, `de la ${replace}`);
  res = res.replace(search.toLowerCase(), replace);

  return res;
}

export function personalizeDesc(desc: string, estadoNombre: string): string {
  return desc
    .replace(/cada una de las 32 comisiones estatales/gi, `la Comisión Estatal de ${estadoNombre}`)
    .replace(/las comisiones estatales/gi, `la Comisión Estatal de ${estadoNombre}`)
    .replace(/las 32 comisiones estatales/gi, `la Comisión Estatal de ${estadoNombre}`)
    .replace(/las comisiones en los estados/gi, `la Comisión Estatal de ${estadoNombre}`)
    .replace(/las tesorerías de las comisiones estatales/gi, `la tesorería de la Comisión Estatal de ${estadoNombre}`);
}

export function personalizeDescComision(desc: string, comisionNombre: string): string {
  return desc
    .replace(/los grupos operativos/gi, `la Comisión de ${comisionNombre}`)
    .replace(/las comisiones temáticas/gi, `la Comisión de ${comisionNombre}`)
    .replace(/los grupos y comisiones/gi, `la Comisión de ${comisionNombre}`)
    .replace(/los comisiones temáticas/gi, `la Comisión de ${comisionNombre}`)
    .replace(/el Eje Operativo/gi, `la Comisión de ${comisionNombre}`)
    .replace(/el eje operativo/gi, `la Comisión de ${comisionNombre}`)
    .replace(/las coordinaciones operativas/gi, `la Comisión de ${comisionNombre}`)
    .replace(/el grupo de transversalidad/gi, `la Comisión de ${comisionNombre}`)
    .replace(/del grupo de transversalidad/gi, `de la Comisión de ${comisionNombre}`)
    .replace(/de la comisión de transversalidad/gi, `de la Comisión de ${comisionNombre}`)
    .replace(/las vocerías de circunscripción/gi, `la ${comisionNombre}`)
    .replace(/los voceros de las 5 circunscripciones/gi, `la ${comisionNombre}`)
    .replace(/las 5 circunscripciones electorales/gi, `la ${comisionNombre}`)
    .replace(/en las circunscripciones/gi, `en la ${comisionNombre}`);
}

export function getGenericPluralName(eje: string): string {
  switch (eje) {
    case 'operativo': return 'Grupos Operativos';
    case 'tematico': return 'Comisiones Temáticas';
    case 'transversal': return 'Grupo de Transversalidad';
    case 'territorial': return 'Eje Territorial';
    default: return 'Grupos';
  }
}
