//Convert all the strings to title caps in a string array----->>IIFE

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
const input = userInput[0] + ' ';
  const output = [];
  let temp = '';

  (function () {
    for (let i = 0; i < input.length; i++) {
      if (input[i] !== ' ') {
        temp += input[i];
      } else {
        if (temp !== '') {
          output.push(temp);
          temp = '';
        }
      }
    }
  })();

  console.log((function (data) {
    const result = [];
    for (let i = 0; i < data.length; i++) {
      const words = data[i].toLowerCase();
      result.push(words.charAt(0).toUpperCase() + words.slice(1));
    }
    return result;
  })(output));





});
