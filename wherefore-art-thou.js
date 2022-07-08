/* Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
 */



function whatIsInAName(collection, source) {
  const arr = [];
  let i=0;
  while(i < collection.length){
    let flag = true;
    //console.log(collection[i]);
    for(const k in source){
      if(collection[i].hasOwnProperty(k) && collection[i][k] == source[k]){
        //flag = true;
      } else{
        flag=false;
        //i++;
      }           
    }
    if(flag == true){
      arr.push(collection[i]);
    }
    i++;
} 
  // Only change code above this line
  return arr;
}

/* console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })); */
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })