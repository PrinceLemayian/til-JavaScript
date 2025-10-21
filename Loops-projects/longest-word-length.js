const findLongestWordLength = (sentence) => {
  const words = sentence.trim().split(/\s+/);
  let lengths = [];
  for (let prop in words) {
    let wordLengths = words[prop].length;
    lengths.push(wordLengths);
  }

  return Math.max(...lengths);
};

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
