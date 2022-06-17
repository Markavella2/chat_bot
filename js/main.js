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

        case 'print':
          currentQuestionIndex = 13;
          break;
        case 'batch':
          currentQuestionIndex = 14;
          break;
        case 'cliPay':
          currentQuestionIndex = 15;
          break;

        case 'codesPage':
          window.location =
            'https://minty-chat-bot.herokuapp.com/codes';
          break;
        case 'payPage':
          window.location =
            'https://minty-chat-bot.herokuapp.com/pay';
          break;
        case 'supportPage':
           window.location =
             'https://minty-chat-bot.herokuapp.com/support';
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

