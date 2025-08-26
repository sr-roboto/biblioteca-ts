import { IBibliotecaItem } from '../interfaces/IBibliotecaItem.interface';

export abstract class Material implements IBibliotecaItem {
  constructor(
    public id: number,
    public titulo: string,
    public autor: string,
    private _disponible: boolean
  ) {
    this._disponible = true;
  }

  abstract mostrarInfo(): string;

  get disponible(): boolean {
    return this._disponible;
  }

  set disponible(valor: boolean) {
    this._disponible = valor;
  }
}
