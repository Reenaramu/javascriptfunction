//Rotate an array by k times---->IIFE

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});


inp.on("close", () => {
(function() {
  function rotateArr(data, k) {
    const length = data.length;
    k = k % length;

    const rotatedArray = new Array(length);
    for (let i = 0; i < length; i++) {
      const newIndex = (i + k) % length;
      rotatedArray[newIndex] = data[i];
    }
    return rotatedArray;
  }

  const input = userInput[0].split(" ");
  const k = Number(userInput[1]);

  for (let i = 0; i < input.length; i++) {
    input[i] = Number(input[i]);
  }

  console.log(rotateArr(input, k));
})();

});
