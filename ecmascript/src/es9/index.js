// spread operator

const obj = {
  name: 'Adan',
  age: 28,
  country: 'Mx',
};

let { name, ...all } = obj;
console.log(name, all);

// Propagacion, unir uno o mas elementos a un nuevo objeto

const obj2 = {
  name: 'Adan',
  age: 28,
};

const obj3 = {
  ...obj2,
  country: 'Mx',
};

console.log(obj3);

//Promise finally
// const helloWorld = () => {
//   return new Promise((resolve, reject) => {
//     true ? resolve('Hello World') : reject(new Error('Test Error'));
//   });
// };

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log('Finalizo'));

// Regex
// año - mes - día
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2022-06-21');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
