import { Libro } from './models/libro.model';
import { Revista } from './models/revista.model';
import { Usuario } from './models/usuario.model';

console.log('Instaciamos dos libros y una revista');
const libro1 = new Libro(
  1,
  'Las aventuras de Alicia en el país de las maravillas',
  'Lewis Carroll',
  50,
  'Hombre'
);
const libro2 = new Libro(2, 'Noches blancas', 'Fiódor Dostoyevski', 20);
const revista1 = new Revista(1, 'National Geographic', 'Varios', 'Marzo 2024');
console.log('-------------------------------------');
console.log('Informacion del primer libro y revista creado:');
console.log(libro1.mostrarInfo());
console.log(revista1.mostrarInfo());
console.log('-------------------------------------');
const usuario1 = new Usuario(1, 'Jhon');
console.log('creacion de usuario:');
console.log(usuario1);
console.log('-------------------------------------');
usuario1.prestar(libro1);
usuario1.prestar(libro2);
usuario1.prestar(revista1);
usuario1.prestar(revista1);
console.log('-------------------------------------');
console.log('Materiales prestados por el usuario:');
console.log(usuario1.mostrarPrestados());
console.log('-------------------------------------');
console.log('Ultimo material prestado:');
console.log(usuario1.mostrarUltimaPrestacion());
