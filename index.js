function isPalindrome(word) {
  // Write your algorithm here
  let newWord = ''
  for(let i=0 ; i<word.length ; i++){
    const neww = word.charAt(i).toLowerCase()
    newWord += neww
  }

  const reversedWord = newWord.split('').reverse().join('');
  return newWord === reversedWord;
}

console.log(isPalindrome('abba'))
/* 
  set empty string
  loop through word string
  convert to lower case
  save in new variable
  split the string
  reverse it 
  save it in new variable
  return 
*/

/*
  Add written explanation of your solution here
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
