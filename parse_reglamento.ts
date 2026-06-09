import * as fs from 'fs';

const text = fs.readFileSync('src/app/pages/reglamento/reglamento.txt', 'utf8');

const lines = text.split('\n').map(l => l.trim().replace(/\r$/, ''));

const titulos = [];
let currentTitulo = null;
let currentCapitulo = null;
let currentArticulo = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!line) continue;
  if (line === 'REGLAMENTO NACIONAL' || line.includes('última modificación') || /^\d+$/.test(line) || line === 'REGLAMENTO NACIONAL DEL PROYECTO MIGALA') {
    continue;
  }

  // Título
  if (/^T[IÍ]TULO\s+.+/i.test(line)) {
    let name = line;
    let nextLine = lines[i+1];
    if (nextLine && !/^Cap[ií]tulo/i.test(nextLine) && !/^T[IÍ]TULO/i.test(nextLine) && !/^Art[ií]culo/i.test(nextLine) && !/^\d+$/.test(nextLine) && !nextLine.includes('REGLAMENTO NACIONAL') && !nextLine.includes('última modificación')) {
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
    let nextLine = lines[i+1];
    if (nextLine && !/^Cap[ií]tulo/i.test(nextLine) && !/^T[IÍ]TULO/i.test(nextLine) && !/^Art[ií]culo/i.test(nextLine) && !/^\d+$/.test(nextLine) && !nextLine.includes('REGLAMENTO NACIONAL') && !nextLine.includes('última modificación')) {
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
  if (/^Art[ií]culo\s+\d+\.-/i.test(line) || /^Art[ií]culo\s+\d+.-/i.test(line)) {
    const match = line.match(/^(Art[ií]culo\s+\d+\.?\s*-)\s*(.*)/i);
    if (match) {
        currentArticulo = { number: match[1].trim(), content: match[2] ? match[2] + '\n' : '' };
        if (currentCapitulo) {
            currentCapitulo.articulos.push(currentArticulo);
        }
    }
    continue;
  }

  // Content for Articulo
  if (currentArticulo) {
    currentArticulo.content += line + '\n';
  } else if (currentCapitulo && currentCapitulo.articulos.length === 0) {
    // Maybe some introduction to the capitulo, we can add a fake articulo or append to capitulo name?
    // Usually shouldn't happen or we just ignore.
  }
}

for (const t of titulos) {
    for (const c of t.capitulos) {
        for (const a of c.articulos) {
            a.content = a.content.trim();
        }
    }
}

const data = {
    title: 'PROYECTO MIGALA REGLAMENTO NACIONAL',
    lastModified: '16-09-2023',
    titulos
};

const output = `import { Reglamento } from '../models/reglamento';\n\nexport const REGLAMENTO_DATA: Reglamento = ` + JSON.stringify(data, null, 2) + ';\n';

fs.writeFileSync('src/app/core/data/reglamento.data.ts', output);
console.log('Successfully written data');
