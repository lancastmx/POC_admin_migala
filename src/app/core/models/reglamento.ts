export interface Reglamento {
  title: string;
  lastModified: string;
  titulos: Titulo[];
}

export interface Titulo {
  name: string;
  capitulos: Capitulo[];
}

export interface Capitulo {
  name: string;
  articulos: Articulo[];
}

export interface Articulo {
  number: string;
  content: string;
}
