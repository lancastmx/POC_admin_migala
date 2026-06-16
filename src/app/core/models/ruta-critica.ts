/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  model-006
 * title:  RUTA_CRITICA — Plan Nacional de Trabajo y objetivos estratégicos
 * type:   model
 * tags:   [angular, model, planning, objectives, critical-path]
 * author: lancast
 * created: 2026-06-10
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 */
export interface RutaCriticaObjetivoDetalle {
  id: string;
  nombre: string;
  detalle: string;
}

export interface RutaCriticaObjetivo {
  tipo: 'principal' | 'secundario';
  titulo: string;
  detalles: RutaCriticaObjetivoDetalle[];
}

export interface RutaCritica {
  titulo: string;
  periodo: string;
  sobreNosotros: string;
  resumen2025: string;
  objetivos: RutaCriticaObjetivo[];
  finalidad: {
    titulo: string;
    subtitulo: string;
    descripcion: string;
  };
}
