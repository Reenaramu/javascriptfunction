//b. Convert all the strings to title caps in a string array ---->> Anonymous function

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

const titleCaps = function(data = []) {
    var result = [];
    for(var i = 0; i < data.length; i++) {
        var words = data[i].toLowerCase();
        result.push(words.charAt(0).toUpperCase() + words.slice(1));
    }
    return result;
}

inp.on("close", function() {
    var input = userInput[0].split(" ");
    console.log(titleCaps(input));
});
