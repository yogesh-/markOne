var readlineSync = require("readline-sync");
const chalk = require('chalk');


var userName = readlineSync.question(chalk.magenta("What is your Name ? "));

console.log(chalk.magenta("Hello ", userName, "!!!", "Lets see how well do you know Yogesh? "));

var TotalScore = 0;
function play(question, answer) {
  var userAns = readlineSync.question(question)
  if (userAns === answer) {
    console.log(chalk.green("You are correct"));
    TotalScore++;
  } else {
    console.log(chalk.red("Your are wrong!!! The correct answer is "+ answer));
  }
  console.log("Your total score is", TotalScore);
  console.log("-----------------");
}

  var questions =[
  {question:"Favourite hindi web series ",answer:"scam 1992"},
  {question:"Favourite english web series ",answer:"money heist"},{question:"Favourite movie ",answer:"the dark knight"},{question:"Favourite book ",answer:"atomic habits"},{question:"Favourite food ", answer:"burger"}
  ];


for (i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log(chalk.yellow("Thanks for playing. Your total score is "+ TotalScore));
