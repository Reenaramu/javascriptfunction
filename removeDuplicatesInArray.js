//Remove duplicates from an array===>> Anonoymous function

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});
const removeDuplicates = (data = []) => {
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
}

inp.on("close", () => {
const input = userInput[0].split(" ");
  const output = [];
  for (let i = 0; i < input.length; i++) {
    output.push(Number(input[i]));
  }

  console.log(removeDuplicates(output));
});
