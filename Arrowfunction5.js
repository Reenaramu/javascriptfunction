//e. Return all the palindromes in an array-------------->Arrow function

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