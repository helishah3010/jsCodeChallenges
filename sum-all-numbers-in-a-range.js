
/* Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10
 */

function sumAll(arr) {
  let newArray = [];
  let sum = 0;
  if(arr[0] > arr[1]){
    newArray = [arr[1], arr[0]];
  } else if(arr[0] == arr[1]) {
    sum = arr[0] + arr[1];
  } else {
    newArray = arr;
  }
  for(let i=newArray[0];i<=newArray[1];i++){
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);