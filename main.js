const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const submitButton = document.getElementById('submit');

const questions = [
  {
    question: 'Qual é o maior deserto do mundo?',
    choices: ['Caixa de Areia do seu Gato', 'Saara', 'Certão Brasileiro', 'Antártida'],
    correctAnswer: 3
  },
  {
    question: 'Quem desencadeou a primeira guerra?',
    choices: ['O motorista', 'Gravilo Princip', 'Walter', 'George Pig'],
    correctAnswer: 1
  },
  {
    question: 'Quem formulou a teoria da relatividade geral?',
    choices: ['Lula', 'Celso Portiolli', 'Albert Einsten', 'seu avô'],
    correctAnswer: 2
  },
  {
    question: 'Quantos cromossomos tem o ser humano?',
    choices: ['34', '46', '54', '93486'],
    correctAnswer: 1
  }
];

let currentQuestion = 0;

function showQuestion(question) {
  questionElement.textContent = question.question;
  choicesElement.innerHTML = '';

  question.choices.forEach((choice, index) => {
    const choiceButton = document.createElement('button');
    choiceButton.textContent = choice;
    choiceButton.addEventListener('click', () => checkAnswer(index));
    choicesElement.appendChild(choiceButton);
  });
}

function checkAnswer(selectedIndex) {
  if (selectedIndex === questions[currentQuestion].correctAnswer) {
    alert('correto');
  } else {
    alert('incorreto. Tente novamente :)');
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion(questions[currentQuestion]);
  } else {
    alert('Concluído');
    resetQuiz();
  }
}

function resetQuiz() {
  currentQuestion = 0;
  showQuestion(questions[currentQuestion]);
}

submitButton.addEventListener('click', () => {
  submitButton.style.display = 'none';
  showQuestion(questions[currentQuestion]);
});
