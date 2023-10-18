//Print odd numbers in an array--->>IIFE function<<<<<<-----------------------------

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
(function(data = []) {
  var output = [];
  for (var i = 0; i < data.length; i++) {                                //1
    var numbers = data[i].split(" ");                       
    for (var j = 0; j < numbers.length; j++) {
      var num = Number(numbers[j]);
      if (num % 2 !== 0) {
        output.push(num);
      }
    }
  }
  console.log(output);
})(userInput);

});
