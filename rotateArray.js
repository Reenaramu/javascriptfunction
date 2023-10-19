//Rotate an array by k times--->>Anonymous function

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", function(data) {
  userInput.push(data);
});

const rotateArr = function(data, k) {
    const length = data.length;
    k = k % length;
    
    const rotatedArray = new Array(length);
    for(let i = 0; i < length; i++) {
        const newIndex = (i + k) % length;
        rotatedArray[newIndex] = data[i];
    }
    return rotatedArray;
}

inp.on("close", function() {
var input = userInput[0].split(" ");
    var k = Number(userInput[1]);
    
    for(let i = 0; i < input.length; i++) {
        input[i] = Number(input[i]);
    }
    console.log(rotateArr(input, k));

});

