function isPalindrome(word) {
  // Write your algorithm here

  for(let i =0; i < word.length/2; i++) {
    if(word.charAt(i) === word.charAt(word.length - 1 - i)) {
      console.log(word.charAt(i));
    }
    else {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here

  iterate to the middle of the string and compare up to from front and back up to there 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
