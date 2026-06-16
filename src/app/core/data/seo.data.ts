/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  data-014
 * title:  SEO.DATA — Metadatos SEO centralizados por ruta
 * type:   data
 * tags:   [angular, data, seo, metadata, routing]
 * author: lancast
 * created: 2026-06-15
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 *
 * Metadatos SEO centralizados para todas las páginas del proyecto.
 * Cada ruta expone title, description y url para ser consumidos
 * por SeoService.generateTags().
 */

export interface SeoMetadata {
  title: string;
  description: string;
  url: string;
}

export const SEO_DATA: Record<string, SeoMetadata> = {
  home: {
    title: 'Inicio - Transparencia Proyecto Migala',
    description: 'Plataforma oficial del Proyecto Migala para la administración descentralizada de la transparencia, reglamentos y organización interna.',
    url: 'https://poc-admin-migala.web.app/'
  },
  archivo: {
    title: 'Archivo de Documentos - Proyecto Migala',
    description: 'Biblioteca y archivo digital del Proyecto Migala. Descarga reglamentos, rutas críticas, minutas de sesiones, patrimonios y formatos oficiales.',
    url: 'https://poc-admin-migala.web.app/archivo'
  },
  manifiesto: {
    title: 'Manifiesto del Proyecto Migala - Versión Alfa',
    description: 'Consulta los principios rectores, estatutos ideológicos y la visión de cambio social del Proyecto Migala a nivel nacional.',
    url: 'https://poc-admin-migala.web.app/manifiesto'
  },
  propuesta: {
    title: 'Propuesta de Plantilla de Transparencia y Auto-Administración - Proyecto Migala',
    description: 'Propuesta formal de una plantilla base (boilerplate) de transparencia y auto-administración para comisiones y órganos de Proyecto Migala.',
    url: 'https://poc-admin-migala.web.app/propuesta'
  },
  transparencia: {
    title: 'Transparencia - Proyecto Migala',
    description: 'Acceso abierto y público a reglamentos, actas de sesiones, conversatorios, finanzas y patrimonio del Proyecto Migala de forma voluntaria y honesta.',
    url: 'https://poc-admin-migala.web.app/transparencia'
  },
  reglamento: {
    title: 'Reglamento Nacional - Proyecto Migala',
    description: 'Reglamento Nacional del Proyecto Migala. Consulta artículos, libros, títulos y la trazabilidad completa del marco normativo.',
    url: 'https://poc-admin-migala.web.app/reglamento'
  },
  estructura: {
    title: 'Estructura Organizacional - Proyecto Migala',
    description: 'Explora la estructura organizacional del Proyecto Migala: organigrama interactivo, ejes, comisiones y procedimientos.',
    url: 'https://poc-admin-migala.web.app/estructura'
  }
};
