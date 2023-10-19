//Return median of two sorted arrays of the same size--->>Anonymous function

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", function(data) {
  userInput.push(data);
});

const findMedian = function(data1 = [], data2 = []) {
  const length = data1.length + data2.length;
  const middle = Math.floor(length / 2);
  let i = 0, j = 0;
  let previous, current;
  
  while (i + j <= middle) {
    previous = current;
    if (i === data1.length || (j < data2.length && Number(data2[j]) < Number(data1[i]))) {
      current = Number(data2[j]);
      j++;
    } else {
      current = Number(data1[i]);
      i++;
    }
  }

  if (length % 2 === 0) {
    return (previous + current) / 2;
  } else {
    return current;
  }
}

inp.on("close", function() {
  const input1 = userInput[0].split(" ");
  const input2 = userInput[1].split(" ");
    
  console.log(findMedian(input1, input2));
});

