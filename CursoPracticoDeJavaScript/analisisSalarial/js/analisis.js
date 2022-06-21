// Helpers - utils
// Funciones que no son parte de la logica del negocio
// pero se ocupan para los calculos
// ================================================================
const isPar = (num) => {
  return num % 2 === 0;
};

const calculateMedianAritmetica = (lista) => {
  const sumaList = lista.reduce((prev = 0, curr) => prev + curr, 0);
  const promedioList = sumaList / lista.length;
  return promedioList;
};

// End helpers

// Calculo de la mediana

const medianaSalario = (lista) => {
  const mitad = parseInt(lista.length / 2);
  if (isPar(lista.length)) {
    const personaMitad1 = lista[mitad - 1];
    const personaMitad2 = lista[mitad];

    const mediana = calculateMedianAritmetica([personaMitad1, personaMitad2]);
    return mediana;
  }
  const personaMitad = lista[mitad];
  return personaMitad;
};

// End calculo de la mediana

// Mediana General
const salariosParaguay = paraguay.map((persona) => persona.salary);

const salariosParaguaySorted = salariosParaguay.sort(
  (prev, curr) => prev - curr
);
const medianaGeneral = medianaSalario(salariosParaguaySorted);
// End Mediana General

// Mediana Top Ten

const spliceStart = (salariosParaguaySorted.length * 90) / 100;
const spliceEnd = salariosParaguaySorted.length - spliceStart;
const salariosTopTen = salariosParaguaySorted.splice(spliceStart, spliceEnd);

const medianaTop10Percentage = medianaSalario(salariosTopTen);
// End Mediana Top Ten

console.log({
  medianaGeneral,
  medianaTop10Percentage,
});
