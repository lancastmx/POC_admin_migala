import { MenuItem } from './menu-item';

export const TOP_MENU: MenuItem[] = [
  { label: 'Inicio', route: '/', exact: true },
  { label: 'Manifiesto', route: '/manifiesto' },
  { label: 'Transparencia', route: '/transparencia' },
  { label: 'Reglamentos', route: '/reglamento' },
  { label: 'Estructura', route: '/estructura' },
  { label: 'Archivo', route: '/archivo' },
  { label: 'Propuesta', route: '/propuesta' },
  { label: 'Aviso de privacidad', route: '/privacidad', lines: ['Aviso de', 'privacidad'] },
];
