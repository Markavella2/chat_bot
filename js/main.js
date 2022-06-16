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

//other code


// const q1 = document.querySelector("#q1");
// const a1 = document.querySelector("#a1");
// const a2 = document.querySelector("#a2");
// const a3 = document.querySelector("#a3");

// console.log(q1, a1, a2, a3);

// function check(a) {
//   console.log(` ${a}this was clicked`);
// }

// q1.addEventListener("click", check("a"));
// a1.addEventListener("click", check("b"));
// a2.addEventListener("click", check("c"));
// a3.addEventListener("click", check("d"));



//old code below
//******************

// let ansArr = document.querySelectorAll(".answer");

// let newArr = Array.prototype.ansArr;

// console.log(newArr);

// document.querySelector("#clickMe").addEventListener("click", makeReq);

// async function makeReq() {
//   //   const userName = document.querySelector("#userName").value;
//   const res = await fetch(`/api?person=${userName}`);
//   const data = await res.json();

//   console.log(data);
//   document.querySelector("#a1").innerText = data.answer1;
//   document.querySelector("#a2").innerText = data.answer2;
//   document.querySelector("#a3").innerText = data.answer3;
//   //document.querySelector("#flipSide").textContent = data.flip;
// }

// fetch("/questions.json")
//   .then((res) => {
//     return res.json();
//   })
//   .then((loadedQuestion) => {
//     console.log(loadedQuestion);
//     question = loadedQuestion;
//     startGame();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //CONSTANTS
// const CORRECT_BONUS = 10;
// const MAX_QUESTIONS = 3;

// startGame = () => {
//   questionCounter = 0;
//   score = 0;
//   availableQuesions = [...questions];
//   getNewQuestion();
// };
// getNewQuestion();


//Updates:
document.querySelector('.reset').addEventListener('click', reset);

let currentQuestionIndex = 0;
const questionOutput = document.querySelector('.questionArea');
const buttonsOutput = document.querySelector('.answerArea');

async function renderQuestion() {
  const res = await fetch(`/api?index=${currentQuestionIndex}`);
  const question = await res.json();
  questionOutput.textContent = question.text;
  buttonsOutput.textContent = '';

  for (let i = 0; i < question.answers.length; i++) {
    const answer = question.answers[i];
    const button = document.createElement('button');
    button.textContent = answer.text;

    buttonsOutput.appendChild(button);
    button.addEventListener('click', function () {
      switch (answer.next) {
        case 'billing':
          currentQuestionIndex = 1;
          break;
        case 'transfer':
          currentQuestionIndex = 2;
          break;
        case 'info':
          currentQuestionIndex = 3;
          break;

        case 'funds':
          currentQuestionIndex = 4;
          break;
        case 'lateFee':
          currentQuestionIndex = 5;
          break;
        case 'stop':
          currentQuestionIndex = 6;
          break;

        case 'cToS':
          currentQuestionIndex = 7;
          break;
        case 'sToC':
          currentQuestionIndex = 8;
          break;
        case 'zelle':
          currentQuestionIndex = 9;
          break;

        case 'stolen':
          currentQuestionIndex = 10;
          break;
        case 'replacement':
          currentQuestionIndex = 11;
          break;
        case 'hours':
          currentQuestionIndex = 12;
          break;

        case 'transferPage':
          window.location =
            'https://minty-chat-bot.herokuapp.com/transfer';
          break;
        case 'replacementPage':
          window.location =
            'https://minty-chat-bot.herokuapp.com/replacement';
          break;
      }
      renderQuestion();
    });
  }
}

renderQuestion();

function reset() {
  location.reload();
}