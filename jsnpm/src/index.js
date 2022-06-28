const messages = ['Anna', 'Jose', 'Ainz', 'Oal', 'Alma', 'Roseri'];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };
