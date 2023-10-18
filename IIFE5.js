//Return all the palindromes in an array--->IIFE

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});


inp.on("close", () => {
var input = userInput[0].split(" ");

  (function () {
    function isPalindrome(str) {
      var output = "";
      str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
      for (var i = str.length - 1; i >= 0; i--) {
        output += str[i];
      }
      if (output === str) {
        return true;
      }
      return false;
    }

    var ans = [];
    for (var j = 0; j < input.length; j++) {
      if (isPalindrome(input[j])) {
        ans.push(input[j]);
      }
    }
    console.log(ans);
  })();

});
