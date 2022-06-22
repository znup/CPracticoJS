const { response } = require("express");

// Replace - ReplaceAll
const str =
  'JavaScript es maravilloso, con JavaScript pueo crear el futuro de la web';
const replacedStr = str.replace('JavaScript', 'Python');
console.log(replacedStr);

const replacedStr2 = str.replaceAll('JavaScript', 'Python');
console.log(replacedStr2);

// Características privadas en objetos
class Message {
  // show(val) {
  //   console.log(val);
  // }
  // Se agrega almohadilla para hacerla priveda
  #show(val) {
    console.log(val);
  }
  // se agregan los get y set
  get #add(val) {
    console.log(val);
  }
}
const message = new Message();
message.show('Palabras...');

// Promise any
const promise1 = new Promise((resolve, reject) => reject('1'));
const promise2 = new Promise((resolve, reject) => resolve('2'));
const promise3 = new Promise((resolve, reject) => resolve('3'));

Promise.any([promise1, promise2, promise3])
  .then(response => console.log(response));

// WeakRef

class anyClass {
  constructor(element) {
    this.ref = new WeakRef(element)
  }
  // seguir con la lógica
  {...}
}

let isTrue = true;
let isFalse = false;

console.log(isTrue &&= isFalse);
console.log(isTrue ||= isFalse);
isTrue = undefined;
console.log(isTrue ??= isFalse);
