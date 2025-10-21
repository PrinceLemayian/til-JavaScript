// Example 1
/* For Loop 

for (let i = 0; i < 5; i++) {
  console.log(i);
}

*/

// For...of loop

/*
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}
*/

/* Looping over characters in a string

const str = "freeCodeCamp";

for (let char of str) {
  console.log(char);
}

*/

/*

const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Jim", age: 40 },
  { name: "Jay", age: 18 },
];

for (const person of people) {
  console.log(`${person.name} is ${person.age} years old`);
}

*/

/*

const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
  },
};

for (const prop in person) {
  console.log(person[prop]);
}

function isObject(obj) {
  return typeof obj === "object" && !Array.isArray(obj) && obj !== null;
}

for (const prop in person) {
  if (isObject(person[prop])) {
    for (const nestedProp in person[prop]) {
      console.log(person[prop][nestedProp]);
    }
  } else {
    console.log(person[prop]);
  }
}

*/

/* While loop

let userInput = prompt("Please enter a number between 1 and 10");

while (isNaN(userInput) || Number(userInput) < 1 || Number(userInput) > 10) {
  userInput = prompt("Invalid input. Please enter a number between 1 and 10.");
}

alert("You entered a valid number!");

*/

// While do

/*

do {
  userInput = prompt("Please enter a number between 1 and 10");
} while (Number(userInput) < 1 || Number(userInput) > 10);

alert("You entered a valid number!");

*/

/*

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
};

*/

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
