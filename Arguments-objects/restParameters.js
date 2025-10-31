function logArgs(...args) {
  // Each function should have only one rest parameter
  for (const arg of args) {
    console.log(arg);
  }
}

logArgs(1, 2, 3);

// Returns:
// 1
// 2
// 3

// It's important to note that a rest parameters is an array instance hence you can use valid built in array methods without needing to convert it into a real array first

function hasCat(...args) {
  return args.includes("cat");
}
console.log(hasCat("dog", "chicken", "cat")); // true
console.log(hasCat("dog", "chicken", "horse")); // false
