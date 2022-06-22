const userBus = 60;
const userPlane = 260;

let isPlane = !false;

const ticket = {};

const users = {
  name: '',
  age: 0,
  email: '',
};
const selectTicket = (ticket) => {
  ticket.originCity = prompt('¿De dónde partes?');
  ticket.destinyCity = prompt('¿A dónde vas?');
  ticket.date = prompt('¿Cuál es la fecha de viaje?');
  ticket.hour = prompt('¿A qué hora vas?');
  return ticket;
};
const userData = (users) => {
  users.name = getName;
  users.age = prompt('¿Cuál es tu edad?');
  users.email = prompt('¿Cuál es tu email?');
  return users;
};
const counterSeats = (userBus, userPlane) => {
  if (userBus === 1) {
    let counterBus = userBus - 1;
    alert('No hay asientos disponibles en el Avión');
    return counterBus;
  }
  if (userBus === 2) {
    let counterPlane = userPlane - 1;
    alert('No hay asientos disponibles en el Bus');
    return counterPlane;
  }
};

let getName = prompt(
  'Bienvenido a la compra de boletos de avión y Autobus. ¿Cuál es tu nombre?'
);
let buymessage = parseInt(
  prompt(`${getName} ¿Qué deseas comprar? \n1 'Avión' \n2 'Autobus'`)
);

if (buymessage === 1) {
  for (let i = userPlane; i > 0; i--) {}
  if (userPlane <= 0) {
    alert('No hay asientos disponibles en el Avión \nGracias por su compra');
  } else {
    alert(
      'Haz seleccionado el avión \nAsientos disponibles: ' +
        i +
        '\nLlena los siguientes datos'
    );
    selectTicket(ticket);
    counterSeats(userPlane);
  }
} else if (buymessage === 2) {
  for (let i = userBus; i > 0; i--) {}
  alert('Haz seleccionado el Autobus \n Llena los siguientes datos');
  selectTicket(ticket);
  counterSeats(userBus);
} else {
  alert(`${buymessage}` + 'No existe esa opción \n Intenta de nuevo');
  while (userBus > 0 || userPlane > 0) {
    buymessage = parseInt(
      prompt(`${getName} ¿Qué deseas comprar? \n1 'Avión' \n2 'Autobus'`)
    );
  }
}
