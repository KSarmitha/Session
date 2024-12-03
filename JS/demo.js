const quizData = [
    { question: "What does JS stand for?", options: ["JavaScript", "Java", "JSON"], answer: "JavaScript" },
    { question: "Which company developed JavaScript?", options: ["Microsoft", "Netscape", "Sun Microsystems"], answer: "Netscape" },
    { question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.querySelector('.question');
const optionsEl = document.querySelector('.options');
const nextBtn = document.querySelector('#next-btn');
const resultEl = document.querySelector('#result');

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsEl.appendChild(button);
    });
}

function checkAnswer(selected) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selected === currentQuestion.answer) {
        score++;
    }
    nextBtn.disabled = false;
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
    nextBtn.disabled = true;
});

function showResult() {
    document.querySelector('#quiz-container').style.display = 'none';
    resultEl.style.display = 'block';
    resultEl.textContent = `Your score is ${score}/${quizData.length}`;
}

loadQuestion();
nextBtn.disabled = true;
