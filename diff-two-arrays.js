/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
//Here i have used map bcoz obj stores keys as strings so it retured ['4'] instead of [4]
 */

function diffArray(arr1, arr2) {
  const newArr = [];
  let objMap = new Map();
  arr1.forEach(e => {
    if(objMap.has(e)){
      objMap.set(e, objMap.get(e)+1);
      //objMap[e] +=1;
    } else {
      objMap.set(e,1);
      //objMap[e] = 1;
    }
  });
//console.log(objMap);
arr2.forEach(e => {
  if(objMap.has(e)){
      objMap.set(e, objMap.get(e)+1);
      //objMap[e] +=1;
    } else {
      objMap.set(e,1);
      //objMap[e] = 1;
    }
});
console.log(objMap);
objMap.forEach((v,k) => {
if(v == 1){
    newArr.push(k);
  }
})
  

  return newArr;
}


console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));