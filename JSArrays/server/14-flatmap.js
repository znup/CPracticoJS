const users = [
  { userId: 1, username: 'Tom', attributes: ['Nice', 'Cute'] },
  { userId: 2, username: 'Mike', attributes: ['Lovely'] },
  { userId: 3, username: 'Nico', attributes: ['Nice', 'Cool'] },
];

const respAtr = users.map((user) => user.attributes).flat();

console.log('Map mas flat', respAtr);

const resp2 = users.flatMap((user) => user.attributes);
console.log('FlatMap', resp2);

const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: 'Cita 1',
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: 'Cita 2',
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: 'Cita 2',
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: 'Cita 4',
    },
  ],
};

// const calendarMapFlat = Object.keys(calendars);
// const calendarMapFlat = Object.values(calendars).flat();
const calendarMapFlat = Object.values(calendars).flatMap((item) => {
  return item.map((date) => date.startDate);
});

console.log('Reto', calendarMapFlat);
