import { response } from 'express';

// Dynamic import
const button = document.getElementById('btn');
button.addEventListener('click', async () => {
  const module = await import('./file.js');
  module.saludo('Especifico');
});

// Big Int
const aBigNumber = 9007199254740991n;

const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

//Promise All Settled

const promise1 = new Promise((resolve, reject) => reject('rechazado'));
const promise2 = new Promise((resolve, reject) => resolve('resolve'));
const promise3 = new Promise((resolve, reject) => resolve('resolve 1'));

Promise.allSettled([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);
console.log(window);
console.log(globalThis);

// Operador lógico: null operator
const fooo = null ?? 'default txt';
console.log(fooo);

const foooo = 'No Es Null' ?? 'default txt';
console.log(foooo);

// ⛓ Optional chaining
const user = {};
console.log(user?.profile?.email);

if (user?.profile?.email) {
  console.log('email');
} else {
  console.log('Fail');
}
