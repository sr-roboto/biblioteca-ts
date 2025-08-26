import { Material } from './material.model';

export class Libro extends Material {
  constructor(
    id: number,
    titulo: string,
    autor: string,
    private paginas: number,
    private genero?: string
  ) {
    super(id, titulo, autor, true);
    this.paginas = paginas;
    this.genero = genero;
  }

  mostrarInfo(): string {
    return `ID: ${this.id}, Título: ${this.titulo}, Autor: ${this.autor}, Páginas: ${this.paginas}, Disponible: ${this.disponible}`;
  }

  get numPaginas(): number {
    return this.paginas;
  }

  set numPaginas(valor: number) {
    this.paginas = valor;
  }
}
