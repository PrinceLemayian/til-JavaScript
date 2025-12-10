// Using the global modifier on the regex makes the replace call replace all of the lowercase "freecodecamp" strings and the match method match both of them

/*
const regex = /freecodecamp/g;
const str = "freecodecamp is the best we love freecodecamp";
const matched = str.matchAll(regex);
const replaced = str.replaceAll(regex, "freeCodeCamp");
console.log(matched);
console.log(replaced);
*/

// when using the global modifier with match(), you lose the extra info about capture groups and string indices that would come in the match array

// like match and replace, matchAll() and replaceAll() accept a string or regular expression and replaceAll() also accepts a second argument as the string to replace with

// Unlike the previous method though, replaceAll() and matchAll() will throw an error if you give them a regular expression without the global modifier

const pattern = "freecodecamp";
const str = "freecodecamp is the best we love freecodecamp";
const matched = str.matchAll(pattern);
const replaced = str.replaceAll(pattern, "freeCodeCamp");
console.log(matched);
console.log(replaced);
console.log(matched.next());
console.log(matched.next());
