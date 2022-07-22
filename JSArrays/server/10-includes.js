const pets = ['cat', 'dog', 'bat'];

//FOR
let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if (element === 'dog') {
    includeInArray = true;
    break;
  }
}
console.log('for', includeInArray);

//INCLUDEs
const resp = pets.includes('bat');
console.log('Includes', resp);
