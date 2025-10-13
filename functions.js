// Example 1

function greet(name) {
  // name serves as the parameter
  console.log("Hello, " + name + "!");
}

greet("Lemayian"); // Lemayian serves as the argument

// Example 2

function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(3, 4)); // 7

// Example of anonymous functions

const sum = function (num1, num2) {
  return num1 + num2;
};

console.log(sum(3, 4)); // 7

// Example of a function using default parameters

function greetings(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greetings(); // Hello, Guest!
greetings("Anna"); // Hello, Anna!

// Arrow Functions

const greeting = (name) => {
  console.log("Hello, " + name + "!");
};

greeting("Lemayian");

// When the parameter list has only one parameter

const greetingz = (name) => {
  console.log("Hello, " + name + "!");
};

greetingz("Prince");

// When the arrow function has no parameters you must use parentheses as so

const salamu = () => {
  console.log("Hello!");
};

salamu();

// If the function has only a single line of code

const salimu = (name) => console.log("Hello, " + name + "!");

salimu("Lemayian");

// Example
/*

const calculateArea = (width, height) => {
  const area = width * height;
  return area;
  
};
*/

// console.log(calculateArea(5, 3));

// Cleaning up our code a little bit

/*
const calculateArea = (width, height) => {
  return width * height;
};

console.log(calculateArea(2, 5));
*/

const calculateArea = (width, height) => width * height;

console.log(calculateArea(3, 5));
