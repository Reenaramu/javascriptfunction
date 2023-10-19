//c. Sum of all numbers in an array ---->>(Anonymous function)

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

const sum = function(data = []) {
    var sum = 0;
    for(var i = 0; i < data.length; i++) {
        var number = Number(data[i]);
        sum += number;
    }
    return sum;
}

inp.on("close", function() {
    var input = userInput[0].split(" ");
    console.log(sum(input));
});
