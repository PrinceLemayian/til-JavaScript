// The pattern only matches the string with exactly four digits

/*
const regex = /^\d{4}$/;
console.log(regex.test("123")); // false
console.log(regex.test("1234")); // true
console.log(regex.test("12345")); // false
console.log(regex.test("123456")); // false
console.log(regex.test("1234567")); // false
*/

// setting a minimum number of digits
// Allowing the pattern to match four or more digits

/*
const regex = /^\d{4,}$/;
console.log(regex.test("123")); // false
console.log(regex.test("1234")); // true
console.log(regex.test("12345")); // true
console.log(regex.test("123456")); // true
console.log(regex.test("1234567")); // true
*/

// Setting a letter to start optionally

/*
const regex = /^[a-zA-Z]?\d{4,6}$/;
console.log(regex.test("123")); // false
console.log(regex.test("a1234")); // true
console.log(regex.test("12345")); // true
console.log(regex.test("az12345")); // false
console.log(regex.test("X123456")); // true
console.log(regex.test("1234567")); // false
*/

// Setting it such that it can allow for any numbers of letters before the numbers

/*
const regex = /^[a-zA-Z]*\d{4,6}$/;
console.log(regex.test("123")); // false
console.log(regex.test("a1234")); // true
console.log(regex.test("12345")); // true
console.log(regex.test("az12345")); // true
console.log(regex.test("X123456")); // true
console.log(regex.test("1234567")); // false
*/

// Setting it such that the the identifier must start with at least one letter
const regex = /^[a-zA-Z]+\d{4,6}$/;
console.log(regex.test("123")); // false
console.log(regex.test("a1234")); // true
console.log(regex.test("12345")); // false
console.log(regex.test("az12345")); // true
console.log(regex.test("X123456")); // true
console.log(regex.test("1234567")); // false
