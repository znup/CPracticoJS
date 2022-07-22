const totals = [1, 2, 3, 4];

//Con for
let sum = 0;
for (let index = 0; index < totals.length; index++) {
  const element = totals[index];
  sum = sum + element;
}
console.log(sum);

//Con Reduce

const respuesta = totals.reduce((acc, current) => acc + current, 0);
console.log('Reduce', respuesta);
