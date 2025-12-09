const start = /^freeCodeCamp/im;
const end = /freeCodeCamp$/im;
const string = "I really love freecodecamp it's my favorite";
// freecodecamp should be on its own line
console.log(start.test(string)); //true
console.log(end.test(string)); // true
