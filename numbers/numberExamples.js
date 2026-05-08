"use strict ";

console.log("parseFloat('45.99') =", parseFloat("45.99"));

const num = 500;
console.log("Number to String:", String(num));

console.log("\n=== MATH OPERATIONS ===");

const a = 10;
const b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus (remainder):", a % b);
console.log("Exponent:", a ** b);

console.log("\n=== ROUNDING ===");

const decimal = 7.89;

console.log("Original:", decimal);
console.log("Math.round:", Math.round(decimal));
console.log("Math.floor:", Math.floor(decimal));
console.log("Math.ceil:", Math.ceil(decimal));

console.log("\n=== RANDOM NUMBERS ===");

const randomNumber = Math.random();
console.log("Random number:", randomNumber);

// Random number between 1 and 10
const random1to10 = Math.floor(Math.random() * 10) + 1;
console.log("Random 1-10:", random1to10);

console.log("\n=== CHECKING NUMBERS ===");

console.log("Is 100 an integer?", Number.isInteger(100));
console.log("Is 10.5 an integer?", Number.isInteger(10.5));
console.log("Is 'hello' NaN?", isNaN("hello"));
console.log("Is 123 NaN?", isNaN(123));

console.log("\n=== DECIMALS ===");

const pi = 3.1415926535;

console.log("Original PI:", pi);
console.log("2 decimal places:", pi.toFixed(2));
console.log("4 decimal places:", pi.toFixed(4));

console.log("\n=== MINI CONVERTER ===");

const celsius = 30;

// Celsius to Fahrenheit
const fahrenheit = (celsius * 9) / 5 + 32;

console.log(celsius + "°C =", fahrenheit + "°F");

console.log("\n=== SIMPLE CALCULATOR ===");

const num1 = 20;
const num2 = 5;

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);
