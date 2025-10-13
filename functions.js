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
