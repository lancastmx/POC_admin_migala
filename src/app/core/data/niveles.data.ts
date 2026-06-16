/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  data-015
 * title:  NIVELES.DATA — Niveles de clasificación de archivo
 * type:   data
 * tags:   [angular, data, archive, niveles, classification]
 * author: lancast
 * created: 2026-06-15
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 *
 * Define los 5 niveles de clasificación del fondo documental de
 * Proyecto Migala: Sin Archivo, Mínimo, Básico, Avanzado y Consolidado.
 * Cada nivel tiene nombre, descripción, ícono y clase de color.
 */

export interface NivelArchivo {
  id: string;
  nombre: string;
  icon: string;
  bgClass: string;
  borderColor: string;
  descripcion: string;
}

export const NIVELES_ARCHIVO: NivelArchivo[] = [
  {
    id: 'sin-archivo',
    nombre: 'Sin Archivo',
    icon: '⚪',
    bgClass: 'bg-neutral-500/5',
    borderColor: 'hover:border-neutral-500/20',
    descripcion: `La <strong>serie del fondo documental</strong> no cuenta con un sistema de archivo o repositorio visible de información de interés público. Los documentos no están organizados ni son fácilmente accesibles para los integrantes del proyecto ni público en general.`
  },
  {
    id: 'minimo',
    nombre: 'Mínimo',
    icon: '🔴',
    bgClass: 'bg-rose-500/5',
    borderColor: 'hover:border-rose-500/20',
    descripcion: `La <strong>serie del fondo documental</strong> cuenta con información de interés público disponible de manera muy limitada o dispersa. Los documentos pueden estar publicados sin ningún sistema de organización formal, haciendo extremadamente difícil su localización. No existe un repositorio centralizado ni herramientas básicas de navegación.`
  },
  {
    id: 'basico',
    nombre: 'Básico',
    icon: '🟡',
    bgClass: 'bg-amber-500/5',
    borderColor: 'hover:border-amber-500/20',
    descripcion: `Existe un archivo o repositorio elemental con información mínima. Los documentos están disponibles pero con una organización limitada, dificultando la búsqueda y consulta de información específica.`
  },
  {
    id: 'avanzado',
    nombre: 'Avanzado',
    icon: '🔵',
    bgClass: 'bg-sky-500/5',
    borderColor: 'hover:border-sky-500/20',
    descripcion: `El portal cuenta con un sistema de archivo bien estructurado que incluye categorización de documentos, funciones de búsqueda y navegación intuitiva. La información está organizada de manera que facilita el acceso al usuario.`
  },
  {
    id: 'consolidado',
    nombre: 'Consolidado',
    icon: '🟢',
    bgClass: 'bg-emerald-500/5',
    borderColor: 'hover:border-emerald-500/20',
    descripcion: `Nivel óptimo de organización y accesibilidad. El portal presenta un sistema de archivo robusto con herramientas avanzadas de búsqueda, filtros múltiples, formatos accesibles, actualización constante y documentación completa. Representa las mejores prácticas en transparencia y acceso a la información pública.`
  }
];
