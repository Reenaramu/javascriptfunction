//Sum of all numbers in an array---->>IIFE

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});


inp.on("close", () => {
const input = userInput[0].split(" ");
    console.log((function (data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      let number = Number(data[i]);
      sum += number;
    }
    return sum;
  })(input));

});
