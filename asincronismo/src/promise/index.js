const promise = new Promise((resolve, reject) => {
  resolve('Todo fine');
});

const cows = 10;

const countCows = new Promise((resolve, reject) => {
  cows > 10
    ? resolve(`we have ${cows} cows on the farm`)
    : reject('There is no cows on the farm');
});

countCows
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log('Finally'));
