let firstName = 'Adan';
let lastName = 'Pelcastre';
let nickname = 'Sir Z';
let age = 30;
let email = 'lpelcastre@yopmail.com';
let legalAge = true;
let savedMoney = 0.0;
let debts = 0.0;
savedMoney = 100;
debts = 10;
// let completeName = firstName + ' ' + lastName;
// let realMoney = savedMoney - debts;
/* It's a comment. */
// ¿Qué es una función?
// Un bloque de código que hace una serie de procedimientos
// ¿Cuándo me sirve usar una función en mi código?
// Cuando se repite varias lineas de codigo en el proyecto
// ¿Cuál es la diferencia entre parámetros y argumentos de una función?
/* Parametro es una variable que está en la definición de una función, 
argumento son los datos que se le pasan a los parametros de una función */
// console.log(completeName);
// console.log(realMoney);

const dataFunction = (firstName, lastName, nickname) => {
  const theNickName = `Mi nombre es ${firstName} ${lastName} pero prefiero que me digan ${nickname}.`;
  return theNickName;
};

function dataFunction2(firstName, lastName, nickname) {
  // const completeName2 = `${firstName} + ${lastName}`;
  return `Mi nombre es ${firstName} ${lastName} pero prefiero que me digan ${nickname}.`;
}

console.log(dataFunction('Mengano', 'Vargas', 'el pelusa'));
console.log(dataFunction2('juan de leon', 'perez prado', 'El leon del prado'));
console.log(dataFunction2('lisa', 'soto', 'lalis'));
//---------------------------------------------------------------------------------------------------------------------
// START CONDICIONALES
// ¿Qué es una condicional?
// Es una sentencia que se ejecuta si una condición es verdadera
// ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
// if, else if, else, switch, ternary
// ¿Puedo combinar funciones y condicionales?
// Si
/*TODO: Replica el comportamiento del siguiente código que
 *       usa la sentencia switch utilizando if, else y else if:✅
 */
/*TODO: Replica el comportamiento de tu condicional anterior con if, else y else if,
 *       pero ahora solo con if (sin else ni else if).✅
 */

/*TODO: Bonus: desafío cómo replicar este comportamiento
 *       con arrays y un solo condicional. 😏 ✅
 */

// const tipoDeSuscripcion = 'Expert';

// switch (tipoDeSuscripcion) {
//   case 'Free':
//     console.log('Solo puedes tomar los cursos gratis');
//     break;
//   case 'Basic':
//     console.log('Puedes tomar casi todos los cursos de Platzi durante un mes');
//     break;
//   case 'Expert':
//     console.log('Puedes tomar casi todos los cursos de Platzi durante un año');
//     break;
//   case 'ExpertPlus':
//     console.log(
//       'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
//     );
//     break;
// }
/* if else, else if*/
// if (tipoDeSuscripcion === 'Free') {
//   console.log('Solo puedes tomar los cursos gratis');
// } else if (tipoDeSuscripcion === 'Basic') {
//   console.log('Puedes tomar casi todos los cursos de Platzi durante un mes');
// } else if (tipoDeSuscripcion === 'Expert') {
//   console.log('Puedes tomar casi todos los cursos de Platzi durante un año');
// } else if (tipoDeSuscripcion === 'ExpertPlus') {
//   console.log(
//     'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
//   );
// } else {
//   console.log('No tienes un tipo de suscripción válida');
// }

/* if return */
// const typeSuscrip = (tipoDeSuscripcion) => {
//   if (tipoDeSuscripcion === 'Free') {
//     return 'Solo puedes tomar los cursos gratis';
//   }
//   if (tipoDeSuscripcion === 'Basic') {
//     return 'Puedes tomar casi todos los cursos de Platzi durante un mes';
//   }
//   if (tipoDeSuscripcion === 'Expert') {
//     return 'Puedes tomar casi todos los cursos de Platzi durante un año';
//   }
//   if (tipoDeSuscripcion === 'ExpertPlus') {
//     return 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año';
//   }
//   return 'No tienes un tipo de suscripción válida';
// };
// console.log(typeSuscrip(tipoDeSuscripcion));

/* Array con 1 condicional*/
const tipoDeSuscripcion = 'None';
const typePlan = [
  {
    plan: 'Free',
    benefit: 'Solo puedes tomar los cursos gratis',
  },
  {
    plan: 'Basic',
    benefit: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
  },
  {
    plan: 'Expert',
    benefit: 'Puedes tomar casi todos los cursos de Platzi durante un año',
  },
  {
    plan: 'ExpertPlus',
    benefit:
      'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
  },
];
const suscription = typePlan.some((exist) => exist.plan == tipoDeSuscripcion);
const keyCard = typePlan.find((suscript) => suscript.plan == tipoDeSuscripcion);
if (suscription == true) {
  console.log(keyCard.benefit);
} else {
  console.log('No tienes un tipo de suscripción válida');
}
// console.log(typePlan[0].benefit);
// NoPlan: 'No tienes un tipo de suscripción válida',

//END CONDICIONALES
//---------------------------------------------------------------------------------------------------------------------
// START CICLOS
// ¿Qué es un ciclo?
// Es una sentencia que se ejecuta una y otra vez hasta que la condición sea falsa
// ¿Qué tipos de ciclos existen en JavaScript?
// for, while, do while
// ¿Qué es un ciclo infinito y por qué es un problema?
// Un ciclo infinito es una sentencia que se ejecuta indefinidamente
// ¿Puedo mezclar ciclos y condicionales?
// Si
// Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:✅

// for (let i = 0; i < 5; i++) {
//   console.log('El valor de i es: ' + i);
// }
// for (let i = 10; i >= 2; i--) {
//   console.log('El valor de i es: ' + i);
// }
let i = 0;
while (i < 5) {
  console.log('El valor de i es: ' + i);
  i++;
}
//---------------------------------------------------------------------------------------------------------------------
let j = 10;
while (j >= 2) {
  console.log('el valor  de j es: ' + j);
  j--;
}
/**
 * 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2.
 * Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.✅
 */

// let response = prompt('¿Cuánto es 2 + 2?');
// if (response == 4) {
//   alert('Felicidades, has respondido bien');
//   console.log('Felicidades, has respondido bien');
// } else {
//   while (response != 4) {
//     alert('Incorrecto, vuelve a intentarlo');
//     response = prompt('¿Cuánto es 2 + 2?');
//   }
// }

//---------------------------------------------------------------------------------------------------------------------
// START LISTAS

// ¿Qué es un array?
// Es una colección de datos que se pueden acceder por un índice numérico
// ¿Qué es un objeto?
// Es una colección de datos que se pueden acceder por una clave
// ¿Cuándo es mejor usar objetos o arrays?
// Cuando se necesita una colección de datos que pueden ser accedidos por una clave o un índice numérico
// ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
// Si

/* 2️⃣ Crea una función que pueda recibir cualquier array
 *     como parámetro e imprima su primer elemento.
 */
/* 3️⃣ Crea una función que pueda recibir cualquier array 
      como parámetro e imprima todos sus elementos uno por uno 
      (no se vale imprimir el array completo).
*/
/* 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro 
      e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
*/

const miFuncion = (array) => {
  console.log(array[0]);
};
miFuncion([1, 2, 3, 4, 5]);
