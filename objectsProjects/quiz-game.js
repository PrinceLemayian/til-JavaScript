let questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter"],
    answer: "Mars",
  },
  {
    category: "Geography",
    question: "Which is the largest ocean on Earth?",
    choices: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean",
  },
  {
    category: "Technology",
    question: "Who founded Microsoft?",
    choices: ["Elon Musk", "Steve Jobs", "Bill Gates"],
    answer: "Bill Gates",
  },
  {
    category: "History",
    question: "In which year did World War II end?",
    choices: ["1945", "1939", "1950"],
    answer: "1945",
  },
  {
    category: "Sports",
    question: "Which country won the FIFA World Cup in 2022?",
    choices: ["Brazil", "Argentina", "France"],
    answer: "Argentina",
  },
  {
    category: "Art & Literature",
    question: "Who wrote the play 'Romeo and Juliet'?",
    choices: ["William Shakespeare", "Charles Dickens", "Jane Austen"],
    answer: "William Shakespeare",
  },
];

function getRandomQuestion(questions) {
  return questions[Math.floor(Math.random() * questions.length)];
}

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
let randomQuestion = getRandomQuestion(questions);
let computerChoice = getRandomComputerChoice(questions[0].choices);

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}
