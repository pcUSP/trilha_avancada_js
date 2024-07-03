const quizData = [
  {
      question: 'Qual é a capital do Brasil?',
      options: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador'],
      answer: 'Brasília'
  },
  {
      question: 'Quem pintou a Mona Lisa?',
      options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Claude Monet'],
      answer: 'Leonardo da Vinci'
  },
  {
      question: 'Quem escreveu "Dom Quixote"?',
      options: ['Miguel de Cervantes', 'William Shakespeare', 'Jorge Luis Borges', 'Gabriel García Márquez'],
      answer: 'Miguel de Cervantes'
  }
];

let currentQuestionIndex = 0;
const quizContainer = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const nextButton = document.getElementById('nextButton');

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  optionsElement.innerHTML = '';
  currentQuestion.options.forEach(option => {
      const optionButton = document.createElement('button');
      optionButton.textContent = option;
      optionButton.classList.add('option');
      optionButton.onclick = () => checkAnswer(option);
      optionsElement.appendChild(optionButton);
  });

  nextButton.style.display = 'none';
  resultElement.style.display = 'none';
}

function checkAnswer(selectedOption) {
  const currentQuestion = quizData[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
      resultElement.textContent = 'Resposta correta!';
  } else {
      resultElement.textContent = 'Resposta incorreta. A resposta correta é: ' + currentQuestion.answer;
  }

  nextButton.style.display = 'block';
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
      loadQuestion();
  } else {
      quizContainer.style.display = 'none';
      resultElement.style.display = 'block';
      resultElement.textContent = 'Você completou o quiz!';
  }
}

loadQuestion();
