// Object entries
// transforma un objeto a una matriz de arreglos
const data = {
  frontend: 'Adan',
  backend: 'Jol',
  design: 'Lua',
};

const entriesObj = Object.entries(data);
console.log(entriesObj);
console.log(entriesObj.length);

// Object Values
// transforma el objeto a un arreglo de strgs ignorando las asignaciones
const valuesObj = Object.values(data);
console.log(valuesObj);
console.log(valuesObj.length);

//String padStart
const stringValue = 'A Txt';
console.log(stringValue.padStart(11, 'textos'));

console.log(stringValue.padEnd(12, '______'));
console.log('Comida'.padEnd(12, '______'));

// Async Await

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    !true
      ? setTimeout(() => resolve('Hello world'), 3000)
      : reject(new Error('Test Error'));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log('Aqui hay un error ' + error);
  }
};

anotherFunction();
