// My code
const getVowelCount = (sentence) => {
  let senArray = sentence.split("");
  let vowels = [];

  for (let prop of senArray) {
    if ("aeiou".includes(prop.toLowerCase())) {
      vowels.push(prop);
    }
  }
  return vowels.length;
};

console.log(getVowelCount("My name is Lemayian"));

// Shorter Code

function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// Getting Consonants
// My code
const getConsonantCount = (sentence) => {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (char >= "a" && char <= "z") {
      if (!vowels.includes(char)) {
        count++;
      }
    }
  }
  return count;
};

console.log(getConsonantCount("Hello World!"));

// Shorter version
function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
}

// Getting punctuation marks only
function getPunctuationCount(sentence) {
  const punctuations = ".,!?;:-()[]{}\"'–";
  let count = 0;

  for (const char of sentence) {
    if (punctuations.includes(char)) {
      count++;
    }
  }
  return count;
}

// Getting the number of words only
// my code
const getWordCount = (sentence) => {
  const words = sentence.trim().split(/\s+/);

  if (sentence.trim() === "") {
    return 0;
  }

  return words.length;
};

// Shorter version
function getWordCount(sentence) {
  if (sentence.trim() === "") {
    return 0;
  }

  const words = sentence.trim().split(/\s+/);
  return words.length;
}
