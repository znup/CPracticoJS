/**
 * Ejemplos tipos de datos en javascript
 */

// Tipo de dato String

let nombre = 'Juan';
console.log(nombre);

// Tipo de dato Number
let number = '12';
console.log(number);
console.log(typeof number);

// Tipo de dato object
let objeto = {
  nombre: 'Juan',
  edad: '12',
};
console.log(objeto);

// Tipo de dato boolean (true o false)

let flag = true;
console.log(flag);
console.log(typeof flag);

// Tipo de dato function
function miFuncion() {}
console.log(miFuncion);
console.log(typeof miFuncion);

// Tipo de dato Symbol

let simbolo = Symbol('mi simbolo');
console.log(simbolo);
console.log(typeof simbolo);

// Tipo clase es una funcion

class persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}
console.log(persona);

// Tipo de dato undefined

let variable;
console.log(variable);

// Tipo de dato null = ausencia de valor

let y = null;
console.log(y);
console.log(typeof y);

// Arreglos
let autos = ['Ford', 'Chevrolet', 'Fiat'];
console.log(autos);
console.log(typeof autos);
