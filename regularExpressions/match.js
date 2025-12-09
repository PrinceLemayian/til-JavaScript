const regex = /freeCodeCamp/;

console.log("freeCodeCamp".match(regex)); // ['freeCodeCamp', index: 0, input: 'freeCodeCamp', groups: undefined]
console.log("freeCodeCamp is great".match(regex)); // ['freeCodeCamp', index: 0, input: 'freeCodeCamp is great', groups: undefined]
console.log("I love freeCodeCamp".match(regex)); // ['freeCodeCamp', index: 7, input: 'I love freeCodeCamp', groups: undefined]
console.log("freecodecamp".match(regex)); // null
console.log("FREECODECAMP".match(regex)); // null
console.log("free".match(regex)); // null

const str = "freecodecamp is really cool";
const replaced = str.replace(regex, "freeCodeCamp");
console.log(replaced);
