//d. Return all the prime numbers in an array----->Arrow function

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});


inp.on("close", () => {


});