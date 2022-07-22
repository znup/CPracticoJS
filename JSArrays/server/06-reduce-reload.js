const items = [1, 2, 3, 3, 3, 3, 1, 10];

const respo = items.reduce((acc, curr) => {
  !acc[curr] ? (acc[curr] = 1) : (acc[curr] = acc[curr] + 1);
  return acc;
}, {});

console.log(respo);

const data = [
  {
    name: 'Nicolas',
    level: 'medium',
  },
  {
    name: 'Zulema',
    level: 'low',
  },
  {
    name: 'Santiago',
    level: 'low',
  },
  {
    name: 'Valentina',
    level: 'medium',
  },
  ,
  {
    name: 'Nicol',
    level: 'high',
  },
];

const response = data
  .map((item) => item.level)
  .reduce((acc, curr) => {
    !acc[curr] ? (acc[curr] = 1) : (acc[curr] = acc[curr] + 1);
    return acc;
  }, {});

console.log(response);

const items2 = [
  1, 2, 3, 3, 3, 3, 1, 4, 5, 5, 6, 6, 6, 6, 7, 8, 8, 8, 7, 7, 7, 7, 7, 9, 9, 9,
  10, 10,
];

const groupNumbers = items2.reduce(
  (acc, curr) => {
    if (curr <= 5) {
      acc['1-5'] += 1;
    } else if (curr >= 6 && curr <= 8) {
      acc['6-8'] += 1;
    } else {
      acc['9-10'] += 1;
    }
    return acc;
  },
  {
    '1-5': 0,
    '6-8': 0,
    '9-10': 0,
  }
);

console.log(groupNumbers);
