const products = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log('products', products);
console.log('myProducts', myProducts);
console.log('-'.repeat(10));

// const product = products.find((item) => item.id === '🍔');
// if (product) {
//   myProducts.push(product);
// }

const productIndex = products.findIndex((item) => item.id === '🍔');
if (productIndex !== -1) {
  myProducts.push(products[productIndex]);
  products.splice(productIndex, 1);
}

console.log('products', products);
console.log('myProducts', myProducts);
console.log('-'.repeat(10));
// console.log('Product on car', product);
console.log('Product on car', productIndex);

//UPDATE

const products2 = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
  id: '🥞',
  changes: {
    price: 200,
    description: 'lorem ipsum',
  },
};

const productIndex2 = products2.findIndex((item) => item.id === update.id);
productIndex2[products2] = {
  ...products2[productIndex2],
  ...update.changes,
};
console.log(productIndex2);
