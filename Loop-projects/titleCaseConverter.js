function titleCase(str) {
  let sentence = str.toLowerCase();
  let words = sentence.split(" ");
  let result = [];
  for (let word of words) {
    result.push(word.charAt(0).toUpperCase() + word.slice(1));
  }
  return result.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
