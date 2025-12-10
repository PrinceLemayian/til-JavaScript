// Positive Lookahead assertion

/* const regex = /free(?=code)/i;
console.log(regex.test("freeCodeCamp")); // true
console.log(regex.test("free code camp")); // false
console.log(regex.test("I need someone for free to write code for me")); // false
 */

// Negative lookahead

/*
const regex = /free(?!code)/i;
console.log(regex.test("freeCodeCamp")); // false
console.log(regex.test("free code camp")); // true
console.log(regex.test("I need someone for free to write code for me")); // true
*/

// Positive Lookbehind

const regex = /(?<=free)code/i;
console.log(regex.test("freeCodeCamp")); // true
console.log(regex.test("free code camp")); // false
console.log(regex.test("I need someone for free to write code for me")); // false

// Negative Lookbehind with match

/*

const regex = /(?<!free)code/i;
console.log("freeCodeCamp".match(regex)); // null
console.log("free code camp".match(regex)); // ['code', index: 5, input: 'free code camp', groups: undefined]
console.log(
  "I need someone for free to write code for me".match(regex)
); // ['code', index: 33, input: 'I need someone for free to write code for me', groups: undefined]

*/
