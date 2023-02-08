//How to compare two JSON have the same properties without order?

// let obj1 = {name : "Dinesh", age : 23};
// let obj1 = {age : 23, name : "Dinesh"};


//Coding :

function compareJSON(obj1, obj2) {
    let keys1 = Object.keys(obj1).sort();
    let keys2 = Object.keys(obj2).sort();
    return JSON.stringify(keys1) === JSON.stringify(keys2);
  }
  
  let obj1 = { name : "Dinesh", age : 23 };
  let obj2 = { age : 23, name : "Dinesh" };
  
  console.log(compareJSON(obj1 , obj2)); // Output: true
  
