let startButton = document.getElementById("start_btn")
let questionContainerElement = document.getElementById("question-container")
let questionElement = Document.getElementById("question")
let answerButtonsElement = document.getElementById("answer_btns")

let shuffledQuestions, currentQuestion

startButton.addEventListener("click", startGame)

function startGame() {
   startButton.classList.add("hide")
   shuffledQuestions = questions.sort(() => Math.random() - .5)
 questionContainerElement.classList.remove("hide")
 setnextQuestion()
}

function nextQuestion() {
  showQuestion(shuffledQuestions[currentQuestion])
}

function showQuestion(question)

function selectAnswer() {

}

const questions = [
    {
        question: "which is these is not JS related?",
        answers: [
            {text: "command", correct: true},
            {text: "var",correct:false},
            {text: "let", correct:false},
            {text: "var", correct:false};
        ]
    }
]