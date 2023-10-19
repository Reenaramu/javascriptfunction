  //Return all the palindromes in an array--->>Anonymous function

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", function(data) {
  userInput.push(data);
});

const isPalindrome = function(str) {
  var output = '';
  str = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
  for(var i = str.length-1; i >= 0; i--) {
    output += str[i]; 
  }
  if(output === str) {
    return true;
  }
  return false;
}

inp.on("close", function() {
  var input = userInput[0].split(" ");
  const palindromes = function(data = []) {
    var ans = [];
    for(var j = 0; j < data.length; j++) {
      if(isPalindrome(data[j])) {
        ans.push(data[j]);
      }
    }
    return ans;
  };

  console.log(palindromes(input));
});

