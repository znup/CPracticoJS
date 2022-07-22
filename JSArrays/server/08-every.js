const numbers = [15, 267, 37, 47, 54, 64, 45, 48];

//FOR

let respuesta = true;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  // if (element <= 60) {
  //   respuesta = false
  // }

  element >= 40 ? (respuesta = false) : (respuesta = true);
}
console.log('Respuesta', respuesta);

const resp = numbers.every((item) => item <= 40);
console.log('Res Every', resp);

const team = [
  {
    name: 'Nicolas',
    age: 12,
  },
  {
    name: 'Andrea',
    age: 8,
  },
  {
    name: 'Zulema',
    age: 2,
  },
  {
    name: 'Santiago',
    age: 18,
  },
];

const edadMayor = team.every((person) => person >= 15);
mensajeResponse =
  edadMayor === true
    ? 'No es admitido el equipo'
    : 'Todos son mayores de 15 Es admitido el Team';

console.log(mensajeResponse);
