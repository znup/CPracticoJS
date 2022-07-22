const elements = ['Fire', 'Water', 'Air'];

let respFinal = '';
const separator = '--';

for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  respFinal = respFinal + element + separator;
}

const response = elements.join('--');

console.log('For', respFinal);
console.log('Join', response);

const title = 'Curso manipulacion de arrays';
const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);

console.log(title.split(' '));
