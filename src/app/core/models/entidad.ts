/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  model-001
 * title:  ENTIDAD — Modelo geopolítico: País, Estado, Municipio
 * type:   model
 * tags:   [angular, model, geography, states, municipalities, mexico]
 * author: lancast
 * created: 2026-06-10
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 *
 * Modelo de datos geopolíticos: País, Estado, Municipio
 */

/** Regiones geográficas de México */
export type Region =
  | 'noroeste'
  | 'noreste'
  | 'occidente'
  | 'centro'
  | 'sureste'
  | 'sur';

/** Metadata de un municipio */
export interface Municipio {
  /** Clave INEGI de 3 dígitos (string para preservar ceros) */
  id: string;
  /** Nombre oficial del municipio */
  nombre: string;
}

/** Metadata de una entidad federativa (estado) */
export interface Estado {
  /** Clave INEGI de 2 dígitos: '01'..'32' */
  id: string;
  /** Nombre corto para mostrar: 'Aguascalientes' */
  nombre: string;
  /** Nombre oficial completo: 'Estado Libre y Soberano de Aguascalientes' */
  nombreOficial: string;
  /** Abreviatura común: 'Ags.' */
  abreviatura: string;
  /** Nombre de la capital */
  capital: string;
  /** Región geográfica */
  region: Region;
  /** Número total de municipios */
  numMunicipios: number;
  /** Lista completa de municipios */
  municipios: Municipio[];
}

/** País */
export interface Pais {
  nombre: string;
  nombreOficial: string;
  estados: Estado[];
}
