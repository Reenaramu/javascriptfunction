//Remove duplicates from an array--->>IIFE

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
  const data = userInput[0].split(" ");
  const input = [];
  for (let i = 0; i < data.length; i++) {
    input.push(Number(data[i]));
  }

  const removeDuplicates = function(data) {
    const newArr = [];
    for (let i = 0; i < data.length; i++) {
      let isDuplicate = false;
      for (let j = 0; j < newArr.length; j++) {
        if (data[i] === newArr[j]) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        newArr.push(data[i]);
      }
    }
    return newArr;
  };

  console.log(removeDuplicates(input));
})();

});
