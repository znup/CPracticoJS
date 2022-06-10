// Start Cuadrado
console.group('Cuadrado');
// const ladoCuadrado = 5;
// console.log('Los lados del cuadrado miden: ' + ladoCuadrado);

// const perimetroCuadrado = ladoCuadrado * 4;

const perimetroCuadrado = (ladoCuadrado) => {
  return ladoCuadrado * 4;
};
perimetroCuadrado(10);
console.log('el perimetro del cuadrado es: ' + perimetroCuadrado);

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
const areaCuadrado = (ladoCuadrado) => {
  return ladoCuadrado * ladoCuadrado;
};
areaCuadrado(20);
console.log('el area del cuadrado es: ' + areaCuadrado);
console.groupEnd('Cuadrado');
// End Cuadrado

// Start Triangulo
console.group('Triangulo');
const ladotriangulo1 = 6;
const ladotriangulo2 = 6;
const base = 4;
const alturaTriangulo = 5.5;
console.log(
  'Los lados del triangulo miden: ' +
    ladotriangulo1 +
    ' ' +
    ladotriangulo2 +
    ' ' +
    base +
    ' ' +
    '\nLa altura del triangulo es: ' +
    alturaTriangulo
);

// const perimetroTriangulo = ladotriangulo1 + ladotriangulo2 + base;
// console.log('el perimetro del triangulo es: ' + perimetroTriangulo);

// const areaTriangulo = (base * alturaTriangulo) / 2;
// console.log('el area del triangulo es: ' + areaTriangulo);

const perimetroTriangulo = (ladotriangulo1, ladotriangulo2, base) => {
  return ladotriangulo1 + ladotriangulo2 + base;
};

const areaTriangulo = (base, alturaTriangulo) => {
  return (base * alturaTriangulo) / 2;
};

console.groupEnd('Triangulo');
// End Triangulo

// Start Circulo
console.group('Circulo');

// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
const pi = Math.PI;
// console.log(
//   'El radio del circulo es: ' +
//     radioCirculo +
//     '\nEl diametro del circulo es: ' +
//     diametroCirculo +
//     '\nLa constante pi es: ' +
//     pi
// );
//circunferencia
// const perimetroCirculo = diametroCirculo * pi;
// console.log('El perimetro del circulo es: ' + perimetroCirculo);
// const areaCirculo = pi * (radioCirculo * radioCirculo);
// console.log('El area del circulo es: ' + areaCirculo);

const diametroCirculo = (radioCirculo) => {
  return radioCirculo * 2;
};

const perimetroCirculo = (radio) => {
  const diametro = diametroCirculo(radio);
  return diametro * pi;
};

const areaCirculo = (radio) => {
  return radio * radio * pi;
};

console.groupEnd('Circulo');
// End Circulo

//Interactuar con HTML
const calcularPerimetroCuadrado = () => {
  const input = document.getElementById('inputCuadrado');
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
};

const calcularAreaCuadrado = () => {
  const input = document.getElementById('inputCuadrado');
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
};
