// const lista = [100, 200, 500, 400000000];

const calculateMedianAritmetica = (lista) => {
  const sumaList = lista.reduce((prev = o, curr) => prev + curr, 0);
  const promedioList = sumaList / lista.length;
  return promedioList;
};

// const mitadLista = parseInt(lista.length / 2);

const isPar = (numPar) => {
  if (numPar % 2 === 0) {
    return true;
  }
  return false;
};

// let mediana;

// if (isPar(lista.length)) {
//   const element1 = lista[mitadLista - 1];
//   const element2 = lista[mitadLista];

//   const promedioElementos = calculateMedianAritmetica([element1, element2]);
//   mediana = promedioElementos;
// } else {
//   mediana = lista[mitadLista];
// }

const calculateMedian = (lista) => {
  const sortList = lista.sort((prev, curr) => prev - curr);
  const esPar = isPar(sortList.length);
  const mitadLista = parseInt(sortList.length / 2);
  let median = 0;
  if (esPar) {
    const element1 = sortList[mitadLista - 1];
    const element2 = sortList[mitadLista];
    const promedioElementos = calculateMedianAritmetica([element1, element2]);
    median = promedioElementos;
  } else {
    median = sortList[mitadLista];
  }

  return median;
};

// function calcularMediana() {
//   // Se captura los datos del html y se guardan los valores dentro de una variable
//   const entradaMediana = document.getElementById('inputMediana');
//   const medianaValue = entradaMediana.value;
//   // Al ser un String los valores capturados, se procede a convertir el formato a Number
//   let arrayMediana = Array.from(medianaValue.split(','), Number);
//   //   Ordenamos los valores de la lista desordenada mediante el metodo sort() de menor a mayor
//   const listaOrdenada = arrayMediana.sort(
//     (numMenor, numMayor) => numMenor - numMayor
//   );
//   //   console.log(listaOrdenada);
//   // Hallamos la mitad de la cantidad de elemento de mi lista obtenida del HTML y lo redondeamos en caso sea decimal con la funcion parseInt()
//   const mitadLista = parseInt(listaOrdenada.length / 2);
//   //   console.log(mitadLista);

//   // Creamos la funcion esPar para verificar si la lista es par o impar
//   function esPar(numerito) {
//     if (numerito % 2 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   let mediana;
//   // Si la lista es par procedemos hallar la mediana mediante esta forma de lo contrario seguiriamos con el else
//   if (esPar(listaOrdenada.length)) {
//     const elemento1 = listaOrdenada[mitadLista - 1];
//     const elemento2 = listaOrdenada[mitadLista];
//     // Llamamos a la funcion calcularMediaAritmetica() con los elementos1 y elementos2 como parametros y lo guardamos como la variable mediana
//     const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
//     mediana = promedioElemento1y2;
//   } else {
//     mediana = listaOrdenada[mitadLista];
//   }
//   //   Enviamos los resultados obtenidos a la pagina html para su visualizacion
//   const mostrarResultado = document.getElementById('resultadoMediana');
//   mostrarResultado.innerText = 'La mediana es de: ' + mediana;
// }
