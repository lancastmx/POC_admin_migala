export interface Comision {
  id: string;
  nombre: string;
  tipo: 'estatal' | 'tematica';
  icon: string;
}

export const COMISIONES_TEMATICAS: Comision[] = [
  { id: 'arte', nombre: 'Arte y Cultura', tipo: 'tematica', icon: 'fa-solid fa-palette' },
  { id: 'ciencia', nombre: 'Ciencia y Tecnología', tipo: 'tematica', icon: 'fa-solid fa-flask' },
  { id: 'economia', nombre: 'Estudios Económicos', tipo: 'tematica', icon: 'fa-solid fa-chart-line' },
  { id: 'geopolitica', nombre: 'Geopolítica e Historia', tipo: 'tematica', icon: 'fa-solid fa-earth-americas' },
  { id: 'sustentabilidad', nombre: 'Sustentabilidad', tipo: 'tematica', icon: 'fa-solid fa-leaf' },
  { id: 'derechos', nombre: 'Derechos Humanos', tipo: 'tematica', icon: 'fa-solid fa-hand-holding-hand' }
];

export const COMISIONES_ESTATALES: Comision[] = [
  { id: 'aguascalientes', nombre: 'Aguascalientes', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'baja-california', nombre: 'Baja California', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'baja-california-sur', nombre: 'Baja California Sur', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'campeche', nombre: 'Campeche', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'chiapas', nombre: 'Chiapas', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'chihuahua', nombre: 'Chihuahua', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'cdmx', nombre: 'Ciudad de México', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'coahuila', nombre: 'Coahuila', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'colima', nombre: 'Colima', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'durango', nombre: 'Durango', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'estado-de-mexico', nombre: 'Estado de México', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'guanajuato', nombre: 'Guanajuato', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'guerrero', nombre: 'Guerrero', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'hidalgo', nombre: 'Hidalgo', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'jalisco', nombre: 'Jalisco', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'michoacan', nombre: 'Michoacán', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'morelos', nombre: 'Morelos', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'nayarit', nombre: 'Nayarit', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'nuevo-leon', nombre: 'Nuevo León', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'oaxaca', nombre: 'Oaxaca', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'puebla', nombre: 'Puebla', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'queretaro', nombre: 'Querétaro', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'quintana-roo', nombre: 'Quintana Roo', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'san-luis-potosi', nombre: 'San Luis Potosí', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'sinaloa', nombre: 'Sinaloa', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'sonora', nombre: 'Sonora', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'tabasco', nombre: 'Tabasco', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'tamaulipas', nombre: 'Tamaulipas', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'tlaxcala', nombre: 'Tlaxcala', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'veracruz', nombre: 'Veracruz', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'yucatan', nombre: 'Yucatán', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' },
  { id: 'zacatecas', nombre: 'Zacatecas', tipo: 'estatal', icon: 'fa-solid fa-map-location-dot' }
];

export const TODAS_LAS_COMISIONES: Comision[] = [
  ...COMISIONES_TEMATICAS,
  ...COMISIONES_ESTATALES
];
