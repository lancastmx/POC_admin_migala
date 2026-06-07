import { MenuItem } from './menu-item';

export const TOP_MENU: MenuItem[] = [
  { label: 'Inicio', route: '/', exact: true },
  { label: 'Manifiesto', route: '/manifiesto' },
  { label: 'Transparencia', route: '/transparencia' },
  { label: 'Archivo', route: '/archivo' },
  { label: 'Aviso de privacidad', route: '/privacidad', lines: ['Aviso de', 'privacidad'] },
];
