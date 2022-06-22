// Mala practica variables literales
nombre = 'Juan';
console.log(nombre);

const apellido = 'Perez';
// No se modifican las constantes
// apellido = 'Gomez';

//Mejores practicas
// notacion camel case o bajas y altas
let nombreCompleto = 'Juan Perez';
// funcion y metodo son iguales
console.log(nombreCompleto);
//console es un objeto de javascript
//log es una funcion

let x, y;
(x = 10), (y = 20);
let z = x + y;
console.log(z);
