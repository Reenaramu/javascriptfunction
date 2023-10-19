//d. Return all the prime numbers in an array----->Arrow function

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

inp.on("close", () => {
  
    const input = userInput[0].split(" ");
     const primeNumbers = (data = []) => {
     const output = [];
     for (let i = 0; i < data.length; i++) {
      const num = Number(data[i]);
      if (isPrime(num)) {
        output.push(num);
      }
    }
    return output;
  };

  console.log(primeNumbers(input));
 
});
