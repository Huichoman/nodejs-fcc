function greeting(name, value) {
  return `Hi ${name}!`;
}

function greetingHelloWorld() {
  return "Hello world!";
}

// module.exports.saludar = greeting;
// module.exports.helloWolrd = greetingHelloWorld;

module.exports = {
  greeting: greeting,
  greetingHelloWorld: greetingHelloWorld,
};
