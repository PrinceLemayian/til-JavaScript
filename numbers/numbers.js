"use strict";

// Conversion
console.log(Number("33"));
console.log(+"33");

// Parsing
console.log(Number.parseInt("33px", 10));
console.log(Number.parseInt("0011px", 2));
console.log(Number.parseFloat("2.5rem"));

console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20X"));
console.log(Number.isNaN(23 / 0));

// Best way of checking if a value is a number
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(+"20X"));
console.log(Number.isFinite(23 / 0));
