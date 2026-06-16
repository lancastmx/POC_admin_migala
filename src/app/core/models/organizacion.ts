/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  model-003
 * title:  ORGANIZACION — Órganos de trabajo y estructura organizacional
 * type:   model
 * tags:   [angular, model, organization, organigrama, governance]
 * author: lancast
 * created: 2026-06-10
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 *
 * Modelo de datos para Organizaciones / Órganos de Trabajo.
 * Permite definir el organigrama y relaciones de gobernanza de Migala.
 *
 * Las redes sociales por comisión/órgano se definen en
 * `core/data/redes.data.ts` y se obtienen mediante `getRedesComision(orgId)`.
 */

import type { RedComision } from './social-network';

export type TipoOrgano =
  | 'area'               // Área (estructura más amplia, ej: Área Operativa)
  | 'coordinacion'       // Coordinación interna
  | 'comite'             // Comité de tareas
  | 'mesa'               // Mesa técnica (voceros, enlaces)
  | 'comision_estatal'   // Comisión Estatal territorial
  | 'comision_tematica'  // Comisión Temática ideológica
  | 'grupo_operativo'    // Grupo de soporte
  | 'asamblea';          // Asamblea de toma de decisiones

export type EjeEstructural =
  | 'operativo'          // Eje Operativo (CONFU, Enlace, Finanzas)
  | 'territorial'        // Eje Territorial (Estatales)
  | 'ideologico'         // Eje Especializado (Temáticas)
  | 'transversal';       // Eje de Transversalidad

export interface RelacionOrgano {
  /** Tipo de interacción operativa */
  tipo: 'colabora_con' | 'supervisa_a' | 'rinde_cuentas_a' | 'asesora_a';
  /** ID del órgano destino */
  destinoId: string;
}

export interface Organizacion {
  /** Identificador único (ej: "org-confu", "org-estatal-09") */
  id: string;
  /** Nombre completo */
  nombre: string;
  /** Siglas o nombre corto (ej: "CONFU") */
  siglas?: string;
  /** Tipo de estructura de acuerdo al Artículo 3 */
  tipo: TipoOrgano;
  /** Eje estructural al que pertenece en el organigrama */
  eje: EjeEstructural;
  /** Descripción del órgano (puede incluir XML semántico) */
  descripcion: string;
  
  // Jerarquía (Árbol)
  /** ID del órgano superior del que depende */
  parentId?: string;
  /** IDs de los subgrupos o mesas que dependen de él */
  subgruposIds: string[];
  
  // Grafo de Relaciones Horizontales
  /** Relaciones operativas con otras áreas */
  relaciones: RelacionOrgano[];
  
  // Fundamentos Legales
  /** Artículos del reglamento nacional que facultan a este órgano */
  articulosReferencia: string[];

  // Comunicación
  /** Enlace oficial al canal o grupo de Telegram de este órgano */
  telegramUrl?: string;

  /**
   * Redes sociales y canales de contacto de este órgano.
   * Los datos se definen en `core/data/redes.data.ts`.
   */
  redes?: RedComision[];
}
