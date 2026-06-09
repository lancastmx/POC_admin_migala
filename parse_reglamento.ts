/**
 * parse_reglamento.ts — Parser inteligente del Reglamento Nacional
 *
 * Lee el texto plano (reglamento.txt) y genera reglamento.data.ts
 * con el modelo enriquecido: tipos semánticos, fragmentos,
 * referencias cruzadas, tags, clusters y cuantificación.
 *
 * Uso: bun run parse_reglamento.ts
 */

import * as fs from 'fs';
import type {
  Reglamento, Titulo, Capitulo, Articulo,
  ArticuloType, ArticuloCluster, Fragment, Referencia
} from './src/app/core/models/reglamento';

// ─── 1. Lectura ──────────────────────────────────
const text = fs.readFileSync('src/app/pages/reglamento/reglamento.txt', 'utf8');
const lines = text.split('\n').map(l => l.trim().replace(/\r$/, ''));

// ─── 2. Clasificadores ────────────────────────────

/** Detecta el tipo semántico de un artículo */
function detectType(number: string, content: string): ArticuloType {
  const c = content.toLowerCase();
  const n = number.toLowerCase();
  if (n.includes('transitorio')) return 'transitorio';

  // Principios rectores
  if (/ser[áa]n rectores/.test(c) || /principios ser[áa]n/.test(c)) return 'principio';
  if (n === 'artículo 2.-' || n === 'artículo 126.-') return 'principio';

  // Glosario / definiciones
  if (/para los efectos/.test(c) || /se entender[áa] por/.test(c)) return 'definicion';
  if (n === 'artículo 3.-') return 'glosario';

  // Requisitos
  if (/^(son requisitos|requerimientos adicionales|requisitos para)/i.test(content.trim())) return 'requisito';
  if (/requisitos/.test(c) && /ser[áa]n los siguientes/.test(c)) return 'requisito';
  if (/para ser integrante/.test(c) || /para ser elegible/.test(c)) return 'requisito';
  if (/para conformar/.test(c)) return 'requisito';

  // Sanciones
  if (n === 'artículo 141.-' || n === 'artículo 142.-') return 'sancion';
  if (/conductas prohibidas/.test(c) || /las sanciones/.test(c)) return 'sancion';
  if (/sanción/.test(c) && /procedimiento sancionatorio/.test(c)) return 'sancion';
  if (/ser[áa]n competencia de contralor[ií]a/.test(c)) return 'sancion';
  if (/ser[áa]n competencia del [áa]rea de di[aá]logo/.test(c)) return 'sancion';

  // Estructura organizacional
  if (/se conforma/.test(c) || /se integra/.test(c) || /estará compuesto/.test(c)) return 'estructura';
  if (/se estructura/.test(c) || /ser[áa] el eje/.test(c)) return 'estructura';
  if (/ser[áa]n las siguientes/.test(c) && (c.includes('comisiones') || c.includes('órganos') || c.includes('grupos'))) return 'estructura';

  // Obligaciones
  if (/obligación/.test(c) || /tendr[áa] la obligación/.test(c) || /ser[áa] obligatorio/.test(c)) return 'obligacion';
  if (/deber[áa]n/.test(c) && /comisiones/.test(c)) return 'obligacion';

  // Derechos
  if (/podr[áa]n/.test(c) && /derecho/.test(c)) return 'derecho';
  if (/derecho a/.test(c)) return 'derecho';

  // Procedimiento
  if (/procedimiento/.test(c) || /para modificar/.test(c)) return 'procedimiento';
  if (/se deber[áa]/.test(c) && /siguientes/.test(c)) return 'procedimiento';
  if (/para llevar a cabo/.test(c)) return 'procedimiento';
  if (/las votaciones/.test(c) || /tipos de votaci[oó]n/.test(c)) return 'procedimiento';

  // Fallback por contexto
  if (c.includes('lineamientos') || c.includes('convocatoria')) return 'procedimiento';
  return 'estructura';
}

/** Detecta el cluster funcional de un artículo basado en su capítulo/título */
function detectCluster(tituloName: string, capituloName: string, artNumber: string): ArticuloCluster {
  const tn = tituloName.toLowerCase();
  const cn = capituloName.toLowerCase();

  if (tn.includes('primero') && cn.includes('objeto')) return 'nacional';
  if (tn.includes('primero') && cn.includes('principios')) return 'nacional';
  if (tn.includes('primero') && cn.includes('glosario')) return 'nacional';
  if (tn.includes('primero') && cn.includes('requisitos')) return 'nacional';
  if (tn.includes('segundo')) return 'nacional';
  if (tn.includes('cuarto')) return 'procedimental';
  if (tn.includes('quinto')) return 'procedimental';
  if (tn.includes('sexto')) return 'procedimental';
  if (tn.includes('séptimo') || tn.includes('septimo')) return 'disciplinario';
  if (tn.includes('octavo')) return 'normativo';

  // Título tercero — desglose por capítulo
  if (tn.includes('tercero')) {
    if (cn.includes('xiii') || cn.includes('comisiones estatales')) return 'territorial';
    if (cn.includes('xiv') || cn.includes('comisiones temáticas') || cn.includes('tematicas')) return 'especializado';
    if (cn.includes('xv') || cn.includes('grupos transversales')) return 'transversal';
    return 'operativo'; // Capítulos I-XII = áreas operativas
  }

  return 'nacional';
}

/** Extrae tags relevantes del contenido */
function extractTags(content: string, type: ArticuloType): string[] {
  const tags = new Set<string>();
  const c = content.toLowerCase();

  // Temas organizacionales
  if (c.includes('horizontalidad')) tags.add('horizontalidad');
  if (c.includes('paridad')) tags.add('paridad');
  if (c.includes('diálogo') || c.includes('dialogo')) tags.add('dialogo');
  if (c.includes('transparencia')) tags.add('transparencia');
  if (c.includes('contraloría') || c.includes('contraloria')) tags.add('contraloria');
  if (c.includes('formación') || c.includes('formacion') || c.includes('confu')) tags.add('formacion');
  if (c.includes('administración') || c.includes('administracion')) tags.add('administracion');
  if (c.includes('financi')) tags.add('financiero');
  if (c.includes('informática') || c.includes('informatica') || c.includes('programación') || c.includes('estrategia digital')) tags.add('informatica');
  if (c.includes('legal') || c.includes('jurídico') || c.includes('reglamentos')) tags.add('legal');
  if (c.includes('comunicación')) tags.add('comunicacion');
  if (c.includes('voceros')) tags.add('voceros');
  if (c.includes('recaudación') || c.includes('fondos')) tags.add('recaudacion');
  if (c.includes('político electoral') || c.includes('politico electoral')) tags.add('politico-electoral');
  if (c.includes('diálogo y arbitraje') || c.includes('dialogo y arbitraje') || c.includes('conciliación') || c.includes('mediación')) tags.add('dialogo-arbitraje');
  if (c.includes('tesorería') || c.includes('tesoreria')) tags.add('tesoreria');
  if (c.includes('auditoría') || c.includes('auditoria')) tags.add('auditoria');

  // Procesos
  if (c.includes('votación') || c.includes('votacion') || c.includes('voto')) tags.add('votacion');
  if (c.includes('sesión') || c.includes('sesion') || c.includes('reunión') || c.includes('conversatorio')) tags.add('sesiones');
  if (c.includes('sanción') || c.includes('sancion') || c.includes('expulsión')) tags.add('sancion');
  if (c.includes('proyecto') && !c.includes('proyecto migala')) tags.add('proyectos');
  if (c.includes('alianza')) tags.add('alianzas');

  // Miembros
  if (c.includes('simpatizante')) tags.add('simpatizante');
  if (c.includes('afiliado')) tags.add('afiliado');

  // Documentos
  if (c.includes('manifiesto')) tags.add('manifiesto');
  if (c.includes('ruta crítica') || c.includes('ruta critica')) tags.add('ruta-critica');

  // Temas transversales
  if (c.includes('mujeres')) tags.add('mujeres');
  if (c.includes('diversidad')) tags.add('diversidad');
  if (c.includes('pueblos originarios')) tags.add('pueblos-originarios');
  if (c.includes('discapacidad') || c.includes('funcionalidad diversa')) tags.add('funcionalidad-diversa');
  if (c.includes('migrantes') || c.includes('paisanos')) tags.add('migrantes');
  if (c.includes('derechos humanos')) tags.add('derechos-humanos');
  if (c.includes('sustentabilidad') || c.includes('medio ambiente')) tags.add('sustentabilidad');
  if (c.includes('arte') || c.includes('cultura')) tags.add('arte-cultura');
  if (c.includes('ciencia') || c.includes('tecnología')) tags.add('ciencia-tecnologia');
  if (c.includes('económico') || c.includes('economia')) tags.add('economia');
  if (c.includes('geopolítica') || c.includes('historia')) tags.add('geopolitica-historia');

  // Tipo como tag
  tags.add(type);

  return [...tags].sort();
}

/** Extrae conceptos clave (bigramas relevantes) */
function extractKeyConcepts(content: string): string[] {
  const concepts = new Set<string>();
  const c = content.toLowerCase();

  const patterns = [
    /principio de (la )?(horizontalidad|paridad|soberanía|certeza|publicidad|las dos vacas)/gi,
    /(espacio|espacios) amigable/gi,
    /(acción|acciones) afirmativa/gi,
    /paridad de género/gi,
    /violencia política de género/gi,
    /(comité|comités) de (conciliación|arbitraje|auditoría|investigación|sancionador|transparencia)/gi,
    /órganos garantes de horizontalidad/gi,
    /(comisión|comisiones) (estatal|temática|estatales|temáticas)/gi,
    /grupo (transversal|de mujeres|de masculinidades|de diversidad)/gi,
    /coordinación general/gi,
    /ruta crítica/gi,
    /escuela de cuadros/gi,
    /principio de las dos vacas/gi,
  ];

  for (const pattern of patterns) {
    const matches = c.match(pattern);
    if (matches) {
      matches.forEach(m => {
        // Normalizar: capitalizar primera letra
        const normalized = m.charAt(0).toUpperCase() + m.slice(1).toLowerCase();
        concepts.add(normalized);
      });
    }
  }

  return [...concepts].sort();
}

/** Extrae referencias a otros artículos */
function extractReferences(content: string): Referencia[] {
  const refs: Referencia[] = [];
  const pattern = /(?:art[ií]culo\s+\d+|Art\.\s*\d+)/gi;
  let match;
  while ((match = pattern.exec(content)) !== null) {
    const start = Math.max(0, match.index - 40);
    const end = Math.min(content.length, match.index + match[0].length + 40);
    const context = content.slice(start, end).replace(/\n/g, ' ').trim();
    refs.push({
      articleNum: match[0].trim(),
      context
    });
  }
  return refs;
}

/** Fragmenta el contenido en párrafos, listas, condiciones */
function fragmentContent(content: string): Fragment[] {
  const fragments: Fragment[] = [];
  const paragraphs = content.split('\n').filter(p => p.trim());

  for (const p of paragraphs) {
    const trimmed = p.trim();

    // Condiciones
    if (/^(en caso de|cuando|si (no |bien )?|una vez que)/i.test(trimmed)) {
      fragments.push({ type: 'condition', content: trimmed, level: 0 });
      continue;
    }

    // Excepciones
    if (/^(sin embargo|excepto|salvo|no obstante)/i.test(trimmed)) {
      fragments.push({ type: 'exception', content: trimmed, level: 0 });
      continue;
    }

    // Listas con numerales romanos (I., II., III.)
    if (/^[IVXLCDM]+\.[\s)]/.test(trimmed) || /^[IVXLCDM]+\)/.test(trimmed)) {
      fragments.push({
        type: 'listItem',
        content: trimmed,
        level: 0,
        listType: 'roman',
        listMarker: trimmed.match(/^[IVXLCDM]+[\s)]/)?.[0] || ''
      });
      continue;
    }

    // Listas con letras mayúsculas (A., B., C.)
    if (/^[A-Z]\.[\s)]/.test(trimmed) || /^[A-Z]\)/.test(trimmed)) {
      fragments.push({
        type: 'listItem',
        content: trimmed,
        level: 0,
        listType: 'letter',
        listMarker: trimmed.match(/^[A-Z][\s)]/)?.[0] || ''
      });
      continue;
    }

    // Listas con números (1., 2.)
    if (/^\d+\.[\s)]/.test(trimmed) || /^\d+\)/.test(trimmed)) {
      fragments.push({
        type: 'listItem',
        content: trimmed,
        level: 0,
        listType: 'number',
        listMarker: trimmed.match(/^\d+[\s)]/)?.[0] || ''
      });
      continue;
    }

    // bullets
    if (/^[•●\-*]\s/.test(trimmed)) {
      fragments.push({
        type: 'listItem',
        content: trimmed.replace(/^[•●\-*]\s*/, ''),
        level: 0,
        listType: 'bullet'
      });
      continue;
    }

    // Párrafo normal
    fragments.push({ type: 'paragraph', content: trimmed, level: 0 });
  }

  return fragments;
}

// ─── 3. Parseo principal ──────────────────────────

const titulos: Titulo[] = [];
let currentTitulo: Titulo | null = null;
let currentCapitulo: Capitulo | null = null;
let currentArticulo: Articulo | null = null;

// ─── Flags para ignorar el índice (TOC) al final ──
let inToc = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!line) continue;

  // Ignorar page numbers, headers y footers
  // Detectar inicio del índice (TOC) — manejar encoding problemático del Í/�
  if (/^[^a-zA-Z]*NDICE/i.test(line) && line.length < 10) {
    inToc = true;
    continue;
  }

  if (/^\d+$/.test(line) || line === 'REGLAMENTO NACIONAL' || line.includes('última modificación') || line === 'REGLAMENTO NACIONAL DEL PROYECTO MIGALA') {
    continue;
  }

  // Ignorar toda la sección del índice (TOC) que repite la estructura con guiones
  if (inToc) continue;

  // Título (case-sensitive: solo mayúscula inicial para evitar falsos positivos en contenido)
  if (/^T[IÍ]TULO\s+/i.test(line) && line[0] === line[0].toUpperCase() && line.length < 100) {
    let name = line;
    const nextLine = lines[i + 1];
    if (nextLine && !/^(Cap[ií]tulo|T[IÍ]TULO|Art[ií]culo)/i.test(nextLine) && !/^\d+$/.test(nextLine) && !nextLine.includes('REGLAMENTO NACIONAL') && !nextLine.includes('última modificación')) {
      name += ': ' + nextLine.trim();
      i++;
    }

    currentTitulo = { name, capitulos: [] };
    titulos.push(currentTitulo);
    currentCapitulo = null;
    currentArticulo = null;
    continue;
  }

  // Capítulo
  if (/^Cap[ií]tulo\s+.+/i.test(line)) {
    let name = line;
    const nextLine = lines[i + 1];
    if (nextLine && !/^(Cap[ií]tulo|T[IÍ]TULO|Art[ií]culo)/i.test(nextLine) && !/^\d+$/.test(nextLine) && !nextLine.includes('REGLAMENTO NACIONAL') && !nextLine.includes('última modificación')) {
      name += ': ' + nextLine.trim();
      i++;
    }

    currentCapitulo = { name, articulos: [] };
    if (currentTitulo) {
      currentTitulo.capitulos.push(currentCapitulo);
    }
    currentArticulo = null;
    continue;
  }

  // Artículo
  if (/^Art[ií]culo\s+\d+\.?-?/i.test(line)) {
    const match = line.match(/^(Art[ií]culo\s+\d+\.?\s*-?)\s*(.*)/i);
    if (match) {
      const artNumber = match[1].trim();
      const artFirstLine = match[2] ? match[2] + '\n' : '';
      currentArticulo = {
        number: artNumber,
        content: artFirstLine,
        type: 'estructura',         // temporal, se recalcula
        cluster: 'nacional',         // temporal, se recalcula
        tags: [],
        keyConcepts: [],
        references: [],
        fragments: [],
        wordCount: 0,
        hasList: false,
        hasConditions: false,
      };
      if (currentCapitulo) {
        currentCapitulo.articulos.push(currentArticulo);
      }
    }
    continue;
  }

  // Contenido del artículo
  if (currentArticulo) {
    currentArticulo.content += line + '\n';
  }
}

// ─── 4. Post-procesamiento ────────────────────────

for (const t of titulos) {
  for (const c of t.capitulos) {
    for (const a of c.articulos) {
      a.content = a.content.trim();

      // Clasificación
      a.type = detectType(a.number, a.content);
      a.cluster = detectCluster(t.name, c.name, a.number);

      // Tags y conceptos
      a.tags = extractTags(a.content, a.type);
      a.keyConcepts = extractKeyConcepts(a.content);

      // Referencias
      a.references = extractReferences(a.content);

      // Fragmentación
      a.fragments = fragmentContent(a.content);

      // Métricas
      a.wordCount = a.content.split(/\s+/).filter(w => w.length > 0).length;
      a.hasList = a.fragments.some(f => f.type === 'listItem');
      a.hasConditions = a.fragments.some(f => f.type === 'condition' || f.type === 'exception');
    }
    // Métricas agregadas del capítulo (opcionales pero útiles)
  }

  // Métricas agregadas del título
  const allArts = t.capitulos.flatMap(c => c.articulos);
  t.totalArticulos = allArts.length;
  t.totalPalabras = allArts.reduce((sum, a) => sum + a.wordCount, 0);
}

// ─── 5. Métricas globales ─────────────────────────

const allArticles = titulos.flatMap(t => t.capitulos.flatMap(c => c.articulos));

const distribucionTipo = {} as Record<ArticuloType, number>;
const distribucionCluster = {} as Record<ArticuloCluster, number>;

for (const a of allArticles) {
  distribucionTipo[a.type] = (distribucionTipo[a.type] || 0) + 1;
  distribucionCluster[a.cluster] = (distribucionCluster[a.cluster] || 0) + 1;
}

const data: Reglamento = {
  title: 'PROYECTO MIGALA REGLAMENTO NACIONAL',
  lastModified: '16-09-2023',
  titulos,
  metrics: {
    totalTitulos: titulos.length,
    totalCapitulos: titulos.reduce((s, t) => s + t.capitulos.length, 0),
    totalArticulos: allArticles.length,
    totalPalabras: allArticles.reduce((s, a) => s + a.wordCount, 0),
    distribucionTipo,
    distribucionCluster,
    averageWordsPerArticle: Math.round(allArticles.reduce((s, a) => s + a.wordCount, 0) / allArticles.length),
  }
};

// ─── 6. Escritura ─────────────────────────────────

const output = `import { Reglamento } from '../models/reglamento';\n\nexport const REGLAMENTO_DATA: Reglamento = ${JSON.stringify(data, null, 2)};\n`;

fs.writeFileSync('src/app/core/data/reglamento.data.ts', output);
console.log('✓ Reglamento data generado exitosamente.');
console.log(`  ${data.metrics!.totalTitulos} títulos`);
console.log(`  ${data.metrics!.totalCapitulos} capítulos`);
console.log(`  ${data.metrics!.totalArticulos} artículos`);
console.log(`  ${data.metrics!.totalPalabras} palabras`);
console.log(`  Distribución por tipo:`, distribucionTipo);
