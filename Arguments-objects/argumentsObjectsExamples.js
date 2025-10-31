function logArgs() {
  for (const arg of arguments) {
    console.log(arg);
  }
}

logArgs(1, 2, 3);

// The piece of code above returns:
// 1
// 2
// 3

function getArg() {
  return arguments[1];
}

console.log(getArg(2, 4, 6));

// Returns 4
// This is because the arguments object is array-like

function getArgs() {
  return arguments.length;
}

console.log(getArgs("Example")); // Returns 1
console.log(getArgs("Another", "Example")); // Returns 2

/*

DISCLAIMER: Thought the arguments object appears to act like a real array, it does not have built-in array methods like includes or push
To have access to those methods, you would need to first convert the arguments object to a real array using something like slice, Array.from(), or the spread operator.

*/

function hasCat() {
  return [...arguments].includes("cat");
}

console.log(hasCat("dog", "chicken", "cat")); // true
console.log(hasCat("dog", "chicken", "horse")); // false
