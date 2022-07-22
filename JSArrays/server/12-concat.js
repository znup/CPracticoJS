const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

const newArray = [...array1];

for (let index = 0; index < array2.length; index++) {
  const element = array2[index];
  newArray.push(element);
}
console.log('For', newArray);

const elementsConcat = array1.concat(array2);

console.log('Concat', elementsConcat);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
