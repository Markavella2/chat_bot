// Pseudo Code
/*
1. Create API --> Chat bot API
2. Starting point is general high level question->predetermined answers
3. Takes the user to the next branch.

Q: How can I help you today?
A1. Make a deposit.
A2. Statement balance
A3. Make a withdrawal 
*/

document.querySelector("#clickMe").addEventListener("click", makeReq);

async function makeReq() {
  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?person=${userName}`);
  const data = await res.json();

  console.log(data);
  document.querySelector("#a1").innerText = data.answer1;
  document.querySelector("#a2").innerText = data.answer2;
  document.querySelector("#a3").innerText = data.answer3;
  //document.querySelector("#flipSide").textContent = data.flip;
}

fetch("/questions.json")
  .then((res) => {
    return res.json();
  })
  .then((loadedQuestion) => {
    console.log(loadedQuestion);
    question = loadedQuestion;
    startGame();
  })
  .catch((err) => {
    console.log(err);
  });

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};