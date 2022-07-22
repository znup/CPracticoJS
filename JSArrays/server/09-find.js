const numbers = [1, 30, 49, 29, 10, 13];

//FOR
let rta = 'not exist in list';

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 30) {
    rta = element;
    break;
  }
}
// const find = 2

console.log('for', rta);

//FIND
const respo = numbers.find((item) => item === 30);
console.log('Find', respo);

const products = [
  {
    name: 'Pizza',
    price: 12,
    id: '🍕',
  },
  {
    name: 'Burger',
    price: 23,
    id: '🍔',
  },
  {
    name: 'Hot dog',
    price: 34,
    id: '🌭',
  },
  {
    name: 'Hot cakes',
    price: 355,
    id: '🥞',
  },
];

const respon = products.find((item) => item.id === '🍔');
console.log('Find', respon);
const respon2 = products.findIndex((item) => item.id === '🍔');
console.log('FindIndex', respon2);
