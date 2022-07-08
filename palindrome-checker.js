/* Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

 */
function palindrome(str) {
  //console.log(str.split(''));
  let arr = str.split('');
  
  //let newStr = [];
  //first refine the string
  let len = arr.length;
  let i=0;
  while(i<len){
    if(arr[i].match(/[^a-zA-Z0-9]/)){
       arr[i] = "";
    }
    i++;
  }
  let reversedStr = arr.join('').split('').reverse().join('').toLowerCase();
  let refinedStr = arr.join('').toLowerCase();
  console.log(reversedStr);
  if(reversedStr === refinedStr){
    return true
  }
  //console.log(arr.join(''))
  return false;
}

palindrome("_eye");
palindrome("0_0 (: /-\ :) 0-0")
palindrome("My age is 0, 0 si ega ym.")