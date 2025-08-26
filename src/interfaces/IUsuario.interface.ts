import { Material } from '../models/material.model';

export interface IUsuario {
  readonly id: number;
  nombre: string;
  prestar(material: Material): void;
}
