"use strict";

let arr = ["a", "b", "c", "d", "e"];
let arr1 = ["f", "g", "h", "i", "j"];

const letters = arr.concat(arr1);
console.log(letters);

// Using spread operator does not mutate the original arrays
console.log([...arr, ...arr1]);
