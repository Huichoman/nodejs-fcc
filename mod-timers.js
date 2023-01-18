// const timers = require("timers");

//console.log(timers);

function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}

function mostrarMensaje(message) {
  console.log(message);
}

setTimeout(mostrarTema, 3000, "NodeJS");
setImmediate(mostrarMensaje, "Saludos");
console.log("Hola, Soy José");

setInterval(mostrarMensaje, 1000, "Aimi");
