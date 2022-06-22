const { response } = require('express');

function newFunction(name, age, country) {
  var name = name || 'Adan';
  var age = age || 18;
  var country = country || 'Mx';
  console.log(name, age, country);
}

//ES6
function newFunction2(name = 'Adan', age = 18, country = 'Mx') {
  console.log(name, age, country);
}

newFunction2();
newFunction2('Adal', '20', 'CA');

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \n' +
  'tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud \n';
let lorem2 = `Ahora es una frase epica
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

// Desestructuracion
let person = {
  name: 'Adan',
  age: 22,
  country: 'Mx',
};

let { name, age, country } = person;

console.log(name, age, country);

let team1 = ['Adan', 'Leo', 'Zyru'];
let team2 = ['Vale', 'Jess', 'Cami'];

let superTeam = ['David', ...team1, ...team2];
console.log(superTeam);

//Scope Variables
{
  var globalVar = 'Global Var';
}

{
  let globalLet = 'Global Let';
  console.log(globalLet);
}

console.log(globalVar);

//Objetos
let name = 'Adan';
let age = 32;
//ES5
obj = { name: name, age: age };
//ES6
obj2 = { name, age };
console.log(obj2);

//Arrows Functions
//Formas
const names = [
  { name: 'Adan', age: 24 },
  { name: 'Yoss', age: 23 },
];

let listOfNames = names.map(function (item) {
  console.log(item.name);
});

let listOfNames2 = names.map((item) => console.log(item.age));

const listOfNames3 = (name, age, country) => {
  let code;
};
const listOfNames4 = (name) => {
  let code;
};

const square = (num) => num * num;

//Promesas
const helloPromise = () => {
  // normalmente 2 elementos necesita, res, rej
  // la promesa va a resolver o va a rechazar
  // establece una validacion
  // espera de una logica que nosotros resolveremos
  return new Promise((resolve, reject) => {
    if (!false) {
      resolve('Hey! Todo fine!');
    } else {
      reject('ups 400');
    }
  });
};
// Obtenemos Then para una respuesta
helloPromise()
  .then((response) => console.log(response))
  .then(() => console.log('Saludando'))
  .catch((error) => console.log(error));
//Clases
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    this.valueAB = this.valueA + this.valueB;
    return this.valueAB;
  }
}
const calc = new calculator();
console.log(calc.sum(3, 2));

//Modulo
import { hello } from './module';
hello();

function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  }
  if (true) {
    yield 'World';
  }
}

const generetorHello = helloWorld();
console.log(generetorHello.next().value);
console.log(generetorHello.next().value);
console.log(generetorHello.next().value);
