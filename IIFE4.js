//Return all the prime numbers in an array---->>IIFE

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
  (function () {
    function isPrime(number) {
      if (number <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          return false;
        }
      }
      return true;
    }

    const output = [];
    for (let i = 0; i < input.length; i++) {
      const num = Number(input[i]);
      if (isPrime(num)) {
        output.push(num);
      }
    }
    console.log(output);
  })();

});

