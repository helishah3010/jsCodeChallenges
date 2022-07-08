/* Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
 */

function fearNotLetter(str) {
  let first= str[0];
  let count = first.charCodeAt();
  //console.log(first.charCodeAt());
  let arr = str.split('');
  let i=0;
  while(i<arr.length){
    if(arr[i].charCodeAt() !== count){
      return String.fromCharCode(count);
    }
    count++;
    i++;
  }
}

console.log(fearNotLetter("abce"));