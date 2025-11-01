/*
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(numbers);
console.log(doubled);
*/

// The callback function takes three arguments

const numbers = [3, 4, 5, 6, 7].map((element, index, array) => {
  console.log("Element:", element); // Argument 1: The current element being processed
  console.log("Index:", index); // Argument 2: The index of the element being processed
  console.log("Array:", array); // Argument 3: The array where map is being called on
  return element * 2;
});
