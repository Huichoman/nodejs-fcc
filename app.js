const { greeting, greetingHelloWorld } = require("./greeting.js");

const { Saludar, Despedir } = require("./saludo.js");

console.log(greeting("Memo"));
console.log(greetingHelloWorld());

console.log(Saludar("Aimi"));
console.log(Despedir("Aimi"));
