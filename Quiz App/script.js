const questions = [
    {
        question: "which is the largest animal in the world?",
        answers:[
            { Text: "shark", correct: false},
            { Text: "Blue whale", correct: true},
            { Text: "Elephant", correct: false},
            { Text: "Giraffe", correct: false},
        ]
    },
    {
        question: "which is the smallest country  in the world?",
        answers:[
            { Text: "vetican city", correct: true},
            { Text: "butan", correct: false},
            { Text: "Nepal", correct: false},
            { Text: "SriLanka", correct: false},
        ]
    },
    {
        question: "which is the largest desert  in the world?",
        answers:[
            { Text: "Kalahari", correct: false},
            { Text: "Gobi", correct: false},
            { Text: "Sahara", correct: false},
            { Text: "Antarctica", correct: true},
        ]
    },
    {
        question: "which is the smallest continent  in the world?",
        answers:[
            { Text: "Asia", correct: false},
            { Text: "Australia", correct: true},
            { Text: "Arctic", correct: false},
            { Text: "Africa", correct: false},
        ]
    },
];
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.innerText = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.Text;
        button.classList.add("btn");
        answerButtonsElement.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    clearStatusClass(document.body);
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    setStatusClass(selectedBtn, isCorrect);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === "true");
    });
    if (!isCorrect) {
        selectedBtn.disabled = true;
    }
    nextButton.style.display = "block";
}

function setStatusClass(element, isCorrect) {
    clearStatusClass(element);
    if (isCorrect) {
        element.classList.add("correct");
    } else {
        element.classList.add("incorrect");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("incorrect");
}

function showScore() {
    questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();


