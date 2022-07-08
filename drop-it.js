/* Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
 */
function dropElements(arr, func) {
//put length in separate variable so that when length changes inside the loop, then we can still iterate
  let len = arr.length;
  for(let i=0;i<len;i++){
    //here we will only check 0 position because we are removing every first element
    if(func(arr[0])){
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
