/* Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
 */


function destroyer(arr) {
  let objMap = new Map();
  let newArr = [];

  for(let i=1; i<arguments.length;i++) {
      objMap.set(arguments[i], 1);
  }
  console.log(objMap);
   for(let i=0; i<arr.length;i++) {
    if(!objMap.has(arr[i])){
      newArr.push(arr[i])
    }
  }
  return newArr;
}

console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));