import { Material } from './material.model';

export class Revista extends Material {
  constructor(
    id: number,
    titulo: string,
    autor: string,
    private edicion: string
  ) {
    super(id, titulo, autor, true);
    this.edicion = edicion;
  }

  mostrarInfo(): string {
    return `ID: ${this.id}, Título: ${this.titulo}, Autor: ${this.autor}, Edicion: ${this.edicion}, Disponible: ${this.disponible}`;
  }

  get edicionRevista(): string {
    return this.edicion;
  }

  set edicionRevista(valor: string) {
    this.edicion = valor;
  }
}
