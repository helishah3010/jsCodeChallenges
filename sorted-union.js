/* Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
Here, no of arguments are not fixed so we will use arguments keyword of js
 */


function uniteUnique(arr) {
  let map = {};
  let newArr = [];
  for(let i=0;i<arguments.length;i++){
    for(let j=0;j<arguments[i].length;j++){  
      if(map[arguments[i][j]]){

      }else {
        map[arguments[i][j]] = 1;
        newArr.push(arguments[i][j]);
      }
    }
  }
  console.log(newArr);
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);