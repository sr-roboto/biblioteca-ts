import { Material } from './material.model';
import { IUsuario } from '../interfaces/IUsuario.interface';
export class Usuario implements IUsuario {
  private ultimaPrestacion!: Material;

  constructor(
    public id: number,
    public nombre: string,
    private inventario: Material[] = []
  ) {
    this.id = id;
    this.nombre = nombre;
    this.inventario = inventario;
  }

  mostrarPrestados() {
    return this.inventario.map((material) => material.mostrarInfo()).join('\n');
  }

  mostrarUltimaPrestacion() {
    const ultimoMaterial = this.inventario[this.inventario.length - 1];
    return ultimoMaterial
      ? ultimoMaterial.mostrarInfo()
      : 'No hay materiales prestados.';
  }

  prestar(material: Material): void {
    if (material.disponible) {
      material.disponible = false;
      this.inventario.push(material);
      this.ultimaPrestacion = material;
      console.log(`${this.nombre} ha prestado el material: ${material.titulo}`);
    } else {
      console.log(`El material: ${material.titulo} no está disponible.`);
    }
  }
}
