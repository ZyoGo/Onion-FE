import questions from './questions.js';

const containerQuiz = document.querySelector('#container-quiz');
const containerQuestion = document.querySelector('#question');
const containerAnswer = document.querySelector('#answer-choise');
const checkAnswer = document.querySelector('#answer');
const buttonAnswer = document.querySelectorAll('#option-check');
const buttonStart = document.querySelector('#button-start');
const buttonNext = document.querySelector('#button-next');
const buttonSumbitQuiz = document.querySelector('#button-submit-quiz');
const wrapperButtonNavigation = document.querySelector('#button-startNext');
const h3Quiz = document.querySelector('#quiz-h3');

export let shuffledQuestions, currentQuestionIndex;
shuffledQuestions = questions.sort(() => Math.random() - 0.5);
currentQuestionIndex = 0;

buttonNext.addEventListener('click', function () {
  currentQuestionIndex++;
  // resetState();
  setNextQuestion();
});

buttonStart.addEventListener('click', function (e) {
  setNextQuestion();
  wrapperButtonNavigation.classList.remove('mx-auto');
  wrapperButtonNavigation.classList.add('ml-auto');
  h3Quiz.classList.remove('mx-auto', 'text-4xl');
  h3Quiz.classList.add('text-xl');
});

export function resetState() {
  while (containerAnswer.firstChild) {
    containerAnswer.removeChild(containerAnswer.firstChild);
  }
}

export function hiddenButtonNavigation() {
  buttonNext.classList.add('hidden');
  buttonSumbitQuiz.classList.add('hidden');
}

export function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    buttonNext.classList.remove('hidden');
    buttonStart.classList.add('hidden');
    buttonSumbitQuiz.classList.add('hidden');
  } else {
    buttonSumbitQuiz.classList.remove('hidden');
    buttonStart.classList.add('hidden');
    buttonNext.classList.add('hidden');
  }
}

export function showQuestion(question) {
  const questionElement = document.getElementById('question');
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const optionCheck = document.createElement('div');
    optionCheck.classList.add('answer-button', 'hover:bg-gray-300');
    optionCheck.id = 'option-check';

    const inputRadio = document.createElement('input');
    inputRadio.setAttribute('type', 'radio');
    inputRadio.setAttribute('name', 'answer');
    inputRadio.id = 'answer';
    inputRadio.classList.add('checked:bg-blue-600', 'checked:border-transparent', 'answer');

    const label = document.createElement('label');
    label.innerText = answer.text;
    label.classList.add('ml-3');

    optionCheck.appendChild(inputRadio);
    optionCheck.appendChild(label);
    containerAnswer.appendChild(optionCheck);
  });
}

// create eventListener for buttonAnswer
buttonAnswer.forEach(function (ele) {
  ele.addEventListener('click', function (e) {
    for (let i = 0; i < ele.children.length; i++) {
      if (ele.children[i].checked != true) {
        ele.children[i].checked = true;
      } else {
        ele.children[i].checked = false;
      }
    }
  });
});
