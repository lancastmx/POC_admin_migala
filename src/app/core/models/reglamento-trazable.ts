/** ───────────────────────────────────────────────
 *  Modelo de trazabilidad para reglamentos
 *
 *  Capa de gobernanza sobre el modelo base (reglamento.ts).
 *  Separa ciclo de vida, auditoría y relaciones de grafo
 *  del contenido semántico de los artículos.
 *  ─────────────────────────────────────────────── */

// ═══════════════════════════════════════════════
//  CICLO DE VIDA
// ═══════════════════════════════════════════════

/**
 * Estados del ciclo de vida de un reglamento.
 * Ordenados de menor a mayor madurez.
 */
export type EstatusReglamento =
  | 'inexistente'           // No existe ni ha comenzado
  | 'borrador'              // En elaboración interna
  | 'en_revision'           // Sometido a revisión/comités
  | 'pendiente_aprobacion'  // Listo pero no ratificado
  | 'vigente'               // Oficialmente aprobado y vigente
  | 'desactualizado'        // Vigente pero requiere actualización
  | 'en_reforma'            // En proceso de modificación oficial
  | 'derogado'              // Reemplazado o eliminado
  | 'archivado';            // Histórico, solo consulta

/** Metadatos de trazabilidad de un reglamento */
export interface ReglamentoMetadata {
  /** Estado actual del ciclo de vida */
  estatus: EstatusReglamento;
  /** Versión semántica: "1.0.0", "2.3.1" */
  version: string;
  /** Fechas clave en ISO 8601 */
  creado: string;
  ultimaActualizacion: string;
  fechaAprobacion?: string;
  fechaVigencia?: string;
  fechaDerogacion?: string;
  /** Persona/entidad que redactó */
  autor: string;
  /** Quiénes revisaron */
  revisores: string[];
  /** Órgano que aprobó */
  aprobadoPor: string;
  /** Referencia a documento oficial (URL o folio) */
  actaOficial?: string;
  /** ID del nodo en el grafo Zettelkasten */
  zkId: string;
  /** Etiquetas para categorización */
  tags: string[];
  /** IDs de otros nodos relacionados en el grafo */
  conexiones: string[];
}

// ═══════════════════════════════════════════════
//  RELACIONES EN EL GRAFO
// ═══════════════════════════════════════════════

/** Tipos de arista entre nodos del grafo reglamentario */
export type TipoRelacion =
  | 'deriva_de'           // Nace de otro (jerarquía)
  | 'remite_a'            // Referencia cruzada simple
  | 'modifica_a'          // Reforma otro artículo/reglamento
  | 'deroga_a'            // Sustituye o elimina
  | 'complementa_a'       // Desarrolla o detalla
  | 'contradice_a'        // Conflicto normativo (requiere revisión)
  | 'armoniza_con'        // Alineación con otro reglamento
  | 'base_legal';         // Fundamento constitucional/legal

/** Arista en el grafo: un artículo apuntando a otro */
export interface RelacionArticulo {
  /** Tipo semántico de la relación */
  tipo: TipoRelacion;
  /** UUID del artículo destino */
  destinoId: string;
  /** Fuerza de la relación 0-1 (para algoritmos de grafo) */
  peso: number;
  /** Etiqueta visible: "Véase también", "En concordancia con…" */
  etiqueta?: string;
}

// ═══════════════════════════════════════════════
//  COBERTURA Y COMPLETITUD
// ═══════════════════════════════════════════════

/** Inventario de qué partes tiene un reglamento */
export interface ReglamentoCobertura {
  tieneIndice: boolean;
  tienePreambulo: boolean;
  tieneArticulado: boolean;
  tieneRegimenTransitorio: boolean;
  tieneFirmas: boolean;
  /** Progreso estimado 0-100 */
  progreso: number;
}

// ═══════════════════════════════════════════════
//  AUDITORÍA POR ARTÍCULO
// ═══════════════════════════════════════════════

export interface AuditoriaArticulo {
  ultimaModificacion: string;
  modificadoPor: string;
  motivoCambio?: string;
}

// ═══════════════════════════════════════════════
//  ARTÍCULO CON TRAZABILIDAD (extiende concepto)
// ═══════════════════════════════════════════════

export interface ArticuloRelaciones {
  /** Relaciones de grafo hacia otros artículos */
  relaciones: RelacionArticulo[];
  /** Peso o importancia relativa (PageRank-like) */
  peso: number;
  /** Auditoría del artículo */
  auditoria: AuditoriaArticulo;
}

// ═══════════════════════════════════════════════
//  REGLAMENTO TRAZABLE COMPLETO
// ═══════════════════════════════════════════════

export interface ReglamentoTrazable {
  /** UUID único */
  id: string;
  /** Ámbito de aplicación */
  ambito: 'nacional' | 'estatal' | 'municipal';
  /** Clave INEGI '01'..'32' si es estatal */
  entidadId?: string;
  /** Nombre descriptivo */
  nombre: string;
  /** Metadatos de trazabilidad y ciclo de vida */
  metadata: ReglamentoMetadata;
  /** Inventario de completitud */
  cobertura: ReglamentoCobertura;
}

// ═══════════════════════════════════════════════
//  CATÁLOGO GLOBAL DE REGLAMENTOS
// ═══════════════════════════════════════════════

export interface CatalogoReglamentos {
  nacional: ReglamentoTrazable;
  estatales: ReglamentoTrazable[];
  /** Última actualización del catálogo */
  actualizado: string;
  /** Métricas globales del catálogo */
  metrics: CatalogoMetrics;
}

export interface CatalogoMetrics {
  totalReglamentos: number;
  porEstatus: Partial<Record<EstatusReglamento, number>>;
  progresoGeneral: number;        // 0-100
  ultimaActualizacionGeneral: string;
  coberturaGeneral: number;       // % de entidades con reglamento
}
