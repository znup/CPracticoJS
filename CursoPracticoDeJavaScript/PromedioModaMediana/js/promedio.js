const list = [100, 200, 300, 500];

// let sumaList1 = 0;

// for (let i = 0; i < list.length; i++) {
//   sumaList1 += list[i];
// }

const calculateMedianAritmetica = (lista) => {
  // const sumaList = list.reduce((prev, curr) => prev + curr, 0);
  const sumaList = lista.reduce((prev = o, curr) => prev + curr, 0);
  const promedioList = sumaList / lista.length;
  return promedioList;
};
