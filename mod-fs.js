const fs = require("fs");

// fs.readFile("index.html", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// fs.rename("main.html", "index.html", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Nombre cambiado exitosamente!");
// });

// fs.appendFile("data.txt", "Aimi", () => {});

fs.writeFile("data.txt", "Memo", () => {});
