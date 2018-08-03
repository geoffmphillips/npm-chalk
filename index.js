var chalk = require("chalk");

var message = "Hello " + chalk.bold.bgMagentaBright.green.strikethrough("World");
console.log(message);
