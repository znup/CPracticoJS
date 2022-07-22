const words = ['spray', 'limit', 'elite', 'exuberant'];
//con For

const newArray = [];
for (let index = 0; index < words.length; index++) {
  const item = words[index];
  item.length >= 6 && newArray.push(item);
}

console.log('New Array', newArray);
console.log('original', words);

//Filter

const respuesta = words.filter((item) => item.length >= 6);
console.log('Respuesta', respuesta);
console.log('original', words);

const orders = [
  {
    customerName: 'Nicolas',
    total: 60,
    delivered: 'true',
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: 'false',
  },
  {
    customerName: 'Santiago',
    total: 180,
    delivered: 'true',
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: 'true',
  },
  ,
  {
    customerName: 'Nicol',
    total: 2240,
    delivered: 'false',
  },
];

const resp = orders.filter((item) => item.delivered && item.total >= 100);
console.log('resp', resp);

const search = (query) => {
  return orders.filter((item) => {
    return item.customerName.includes(query);
  });
};
console.log(search('Nico'));
