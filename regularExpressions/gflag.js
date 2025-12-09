const regex = /freeCodeCamp/gi;

// The first freeCodeCamp string is matched starting at index 0
console.log(regex.test("freeCodeCamp")); // true
// The matching no longer starts at 0 since the regex already found a match at index 0 (matching resumes at index 12)
// Since "is great" does not match "freeCodeCamp" it returns false
console.log(regex.test("freeCodeCamp is great")); // false
// Since the regex failed to find a match, it loses it's state and starts the following match back at 0
console.log(regex.test("I love freeCodeCamp")); // true
console.log(regex.test("freecodecamp")); // false
console.log(regex.test("FREECODECAMP")); // true
console.log(regex.test("free")); // false
console.log(regex.test("code")); // false
console.log(regex.test("camp")); // false
console.log(regex.test("dO yOu LoVe fReECoDeCaMp?")); // true

// when a regex is global, it gets a new property called lastIndex

console.log(regex.lastIndex); // 0
console.log(regex.test("freeCodeCamp")); // true
console.log(regex.lastIndex); // 12
console.log(regex.test("freeCodeCamp is great")); // false
// last index goes back to 0 since state is reset
console.log(regex.lastIndex); // 0
console.log(regex.test("I love freeCodeCamp")); // true
console.log(regex.lastIndex); // 19
console.log(regex.test("freecodecamp")); // false
// last index goes back to 0 since state is reset
console.log(regex.lastIndex); // 0
console.log(regex.test("FREECODECAMP")); // true
console.log(regex.lastIndex); // 12
console.log(regex.test("free")); // false
console.log(regex.lastIndex); // 0
console.log(regex.test("code")); // false
console.log(regex.lastIndex); // 0
console.log(regex.test("camp")); // false
