/** ───────────────────────────────────────────────
 *  Modelo de datos para Procedimientos / Trámites Administrativos
 *  Permite estructurar flujos de trabajo paso a paso basados en el reglamento.
 *  ─────────────────────────────────────────────── */

export interface PasoProcedimiento {
  /** Orden correlativo del paso: 1, 2, 3... */
  orden: number;
  /** Título corto de la acción (ej: "Reunir firmas") */
  accion: string;
  /** Detalle explícito de qué hacer */
  descripcion: string;
  /** Rol responsable de ejecutar este paso */
  ejecutor: string;
  /** Artículo que estipula o regula esta acción (ej: "Artículo 108") */
  articuloReferencia: string;
}

export interface RequisitoProcedimiento {
  /** Nombre del requisito (ej: "Mínimo de afiliados") */
  nombre: string;
  /** Descripción o cantidad (ej: "5 afiliados con derechos vigentes") */
  detalle: string;
  /** Indica si es opcional o mandatorio */
  opcional: boolean;
  /** Fundamento legal del requisito */
  articuloReferencia: string;
}

export interface Procedimiento {
  /** Identificador único (ej: "proc-crear-comision-tematica") */
  id: string;
  /** Nombre común del trámite */
  nombre: string;
  /** Resumen ejecutivo / respuesta directa de 1-2 párrafos (TL;DR) */
  tldr: string;
  /** Categoria general del trámite */
  categoria: 'afiliacion' | 'organizacion' | 'finanzas' | 'disciplina' | 'reforma';
  
  // Actores
  /** Quién tiene derecho a iniciar el trámite (ej: "Cualquier afiliado") */
  iniciadoPor: string;
  /** Órgano que ratifica o valida el trámite final (ej: "Coordinación Nacional") */
  aprobadoPor: string;

  // Requisitos y Flujo
  /** Lista de prerrequisitos obligatorios o sugeridos */
  requisitos: RequisitoProcedimiento[];
  /** Flujo de trabajo ordenado de pasos */
  pasos: PasoProcedimiento[];
  
  // Enlaces de Grafo
  /** IDs de los artículos del reglamento involucrados en todo el flujo */
  articulosRelacionadosIds: string[];
}
