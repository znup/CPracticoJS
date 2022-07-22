const matriz = [
  [1, 2, 3],
  [4, 5, 6, [1, 2, [1, 2]]],
  [7, 8, 9],
];

//FOR
const newArray = [];

for (let i = 0; i < matriz.length; i++) {
  const array1 = matriz[i];
  for (let j = 0; j < array1.length; j++) {
    const element = matriz[i][j];
    // const element = array1[j];
    newArray.push(element);
  }
}

const respo = matriz.flat(3);

// const flatten = (arr) => arr.reduce((acc, el) => acc.concat(el), []);

// console.log(flatten(matriz));
console.log('For', newArray);
console.log('Flat', respo);
