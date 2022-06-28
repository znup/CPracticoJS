const sum = (num1, num2) => num1 + num2;

const calc = (num1, num2, callback) => {
  return callback(num1, num2);
};
console.log(calc(2, 3, sum));

const gretting = (name) => {
  console.log(`hola ${name}`);
};

setTimeout(gretting, 2500, 'Adan');
