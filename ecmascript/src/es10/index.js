// method flat
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(3));

// method flatMap
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array2.flatMap((value) => [value, value * 2]));

//Trim Start / Trim End / Trim
let stringHi = '              hello World  ';
console.log(stringHi);
console.log(stringHi.trimStart());
console.log(stringHi.trimEnd());
console.log(stringHi.trim());

try {
} catch {
  error;
}

// From entries
let strEntries = [
  ['name', 'Adan'],
  ['Age', 32],
];
console.log(Object.fromEntries(strEntries));

// Symbol
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);
