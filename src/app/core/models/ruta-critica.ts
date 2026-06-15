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
