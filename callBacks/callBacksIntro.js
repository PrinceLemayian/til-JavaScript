// Example 1
let numbers1 = [1, 2, 3, 4, 5];

numbers1.forEach(function (number) {
  console.log(number * 2);
});

// Example 2 (with an arrow function)
let numbers2 = [1, 2, 3, 4, 5];

numbers2.forEach((number) => console.log(number * 2));

// Example 3
let numbers3 = [1, 2, 3, 4, 5];
numbers1.forEach((number, index, array) => {
  console.log(`Element ${number} is at index ${index} in array ${array}`);
});
