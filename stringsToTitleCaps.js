//Convert all the strings to title caps in a string array ---->> Anonymous function

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});
const titleCaps = (data = []) => {
    var result = [];
    for(var i = 0; i < data.length; i++) {
        var words = data[i].toLowerCase();
        result.push(words.charAt(0).toUpperCase() + words.slice(1));
    }
    return result;
}

inp.on("close", () => {
  var input = userInput[0].split(" "); // Your input array of strings
   console.log(titleCaps(output));
  });
