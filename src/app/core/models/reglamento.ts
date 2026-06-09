/** ───────────────────────────────────────────────
 *  Modelo de datos del Reglamento Nacional
 *  Versión enriquecida con metadatos semánticos,
 *  tipificación de artículos, fragmentación interna,
 *  referencias cruzadas y cuantificación.
 *  ─────────────────────────────────────────────── */

/** Tipos semánticos de artículo detectables por el parser */
export type ArticuloType =
  | 'principio'        // Arts. 2, 126 — rectores, ideología
  | 'definicion'       // Art. 3 — glosario, términos
  | 'requisito'        // Arts. 5, 6, 24, 107, 109, 112 — condiciones de ingreso/conformación
  | 'procedimiento'    // Arts. 115, 131, 155, 161 — pasos formales
  | 'sancion'          // Arts. 142-149 — conductas prohibidas y sanciones
  | 'estructura'       // Arts. 11-21, 22-95 — organigrama, áreas
  | 'derecho'          // Arts. 4, 129 — potestades de miembros
  | 'obligacion'       // Arts. 7, 8, 29, 103-106 — deberes
  | 'transitorio'      // Transitorios 1-6
  | 'glosario';        // Art. 3 (lista de definiciones)

/** Cluster funcional al que pertenece un articulo (para tabs) */
export type ArticuloCluster =
  | 'nacional'          // Visión general, principios, documentos básicos
  | 'operativo'         // Eje operativo: 11 áreas (Arts. 11-95)
  | 'territorial'       // Comisiones estatales (Arts. 97-107)
  | 'especializado'     // Comisiones temáticas (Arts. 108-110)
  | 'transversal'       // Grupos transversales (Arts. 111-113)
  | 'procedimental'     // Sesiones, votaciones, información (Títulos IV-VI)
  | 'disciplinario'     // Conductas y sanciones (Título VII)
  | 'normativo';        // Modificaciones y proyectos (Título VIII)

/** Fragmento interno de un artículo (párrafo, lista, condición) */
export interface Fragment {
  type: 'paragraph' | 'listItem' | 'condition' | 'exception' | 'quote';
  content: string;
  level: number;
  listType?: 'roman' | 'letter' | 'number' | 'bullet';
  listMarker?: string;
}

/** Referencia cruzada a otro artículo del reglamento */
export interface Referencia {
  articleNum: string;
  context: string;  // texto circundante
}

/** Artículo individual */
export interface Articulo {
  number: string;
  content: string;
  // --- Metadatos semánticos (enriquecidos por el parser) ---
  type: ArticuloType;
  cluster: ArticuloCluster;
  tags: string[];
  keyConcepts: string[];
  references: Referencia[];
  fragments: Fragment[];
  // --- Métricas ---
  wordCount: number;
  hasList: boolean;
  hasConditions: boolean;
}

/** Capítulo que agrupa artículos */
export interface Capitulo {
  name: string;
  articulos: Articulo[];
}

/** Título que agrupa capítulos */
export interface Titulo {
  name: string;
  capitulos: Capitulo[];
  /** Métricas agregadas del título */
  totalArticulos?: number;
  totalPalabras?: number;
}

/** Documento raíz del reglamento */
export interface Reglamento {
  title: string;
  lastModified: string;
  titulos: Titulo[];
  /** Métricas globales (calculadas) */
  metrics?: ReglamentoMetrics;
}

/** Métricas cuantitativas globales */
export interface ReglamentoMetrics {
  totalTitulos: number;
  totalCapitulos: number;
  totalArticulos: number;
  totalPalabras: number;
  distribucionTipo: Partial<Record<ArticuloType, number>>;
  distribucionCluster: Record<ArticuloCluster, number>;
  averageWordsPerArticle: number;
}
