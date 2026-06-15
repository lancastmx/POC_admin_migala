/** ───────────────────────────────────────────────
 *  Modelo de datos para Archivos y Documentos
 *  Define la estructura de los documentos en el archivo de transparencia.
 *  ─────────────────────────────────────────────── */

export type AmbitoDocumento =
  | 'nacional'
  | 'estatal'
  | 'operativo'
  | 'tematico'
  | 'transversal'
  | 'territorial';

export type FormatoDocumento =
  | 'pdf'
  | 'doc'
  | 'spreadsheet'
  | 'drive'
  | 'video'
  | 'link';

export interface ArchivoDocumento {
  /** Identificador único del documento */
  id: string;
  /** Nombre o título del documento */
  nombre: string;
  /** Breve descripción o propósito del documento */
  descripcion: string;
  /** Categoría correspondiente al ID de sección en Transparencia */
  categoria: string;
  /** Ámbito o eje estructural del documento */
  eje: AmbitoDocumento;
  /** Fecha de publicación o última actualización (YYYY-MM-DD) */
  fecha: string;
  /** URL de descarga o visualización */
  fileUrl: string;
  /** Formato físico o digital del archivo */
  formato: FormatoDocumento;
  /** Peso aproximado del archivo (ej: "1.2 MB", "Google Drive", "Video") */
  peso?: string;
  /** Estado de procedencia si aplica (ej: "MX-DIF" o "MX-JAL") */
  estadoId?: string;
}
