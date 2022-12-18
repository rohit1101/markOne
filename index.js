const readlineSync = require("readline-sync");

let score = 0;

let questions = [
  {
    question: "Guess my age ? (type a number; example: 99) ",
    answer: "23",
  },
  {
    question: "Where do I live ? (Type answer in caps)",
    answer: "CHENNAI",
  },
  {
    question: "When do I wake up in the morning ? (type a number; example: 9) ",
    answer: "5",
  },
  {
    question:
      "My favorite superhero (hint: He/she is from MCU) ? (Type answer in caps) ",
    answer: "THOR",
  },
  {
    question: "My favorite food ? (Type answer in caps) ",
    answer: "BIRIYANI",
  },
];

const welcome = () => {
  const userName = readlineSync.question("What's your name ? ");
  console.log(`Welcome ${userName} to Do You Know Rohit ?`);
};

const letsPlay = () => {
  for (let i = 0; i < questions.length; i++) {
    const currentQuestion = questions[i];
    const ans = readlineSync.question(currentQuestion.question);
    console.log(ans, "ANSWER");
    if (ans.toString() === currentQuestion.answer) {
      console.log("correct !");
      score += 1;
    } else {
      console.log("wrong!");
    }

    console.log(`current Score: ${score}`);
    console.log("---------------------------");
  }
};

const displayScores = () => {
  console.log(`Yay, you scored: ${score}`);
};

welcome();
letsPlay();
displayScores();
