const regex = /freecodecamp/g;
const str = "freecodecamp is the best we love freecodecamp";
const matched = str.matchAll(regex);
console.log(Array.from(matched));
