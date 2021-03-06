const question = document.getElementById("question");
const timerElement = document.getElementById("timercount");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");
let currentQuestion = {};
let correctAns = false;
let score = 0;
let questionCounter = 0;
let timer;
let timerCount;
let availableQuestion = [];

let questions = [
    {

        question:"What language helps to style a webpage?",
        choice1: "HTML",
        choice2: "CSS",
        choice3: "Javascript",
        choice4: "Node.js",
        answer: 2
    },
    {

        question:"React was released in what year?",
        choice1: "2000",
        choice2: "1985",
        choice3: "2013",
        choice4: "2020",
        answer: 3
    },
    {

        question:"API stands for what?",
        choice1: "Applying Program Interface",
        choice2: "Application Programming Interface",
        choice3: "App Playing Industry",
        choice4: "Awesome Program Industry",
        answer: 2
    },
    {

        question:"What programming language supports relational databases?",
        choice1: "SQL",
        choice2: "HTML",
        choice3: "Javascript",
        choice4: "React",
        answer: 1
    },
    {

        question:"What does DRY stand for in coding?",
        choice1: "Do Relational Year",
        choice2: "Dont Reject Yams",
        choice3: "Do Rephrase Yourself",
        choice4: "Don't Repeat Yourself",
        answer: 4
    },
    {

        question:"What is JSON?",
        choice1: "A programming language",
        choice2: "A lightweight data interchange format",
        choice3: "A way to check syntax",
        choice4: "Not sure",
        answer: 2
    },
    {

        question:"To be a programmer you need to do which of the following?",
        choice1: "Be self motivated",
        choice2: "Never give up",
        choice3: "Take breaks when overwhelmed and come back with a plan",
        choice4: "All of the above",
        answer: 4
    },
]

const correctBonus = 100;
const maxQuestions = 7;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestion = [...questions];
    console.log(availableQuestion);
    getNewQuestion();
    timerCount = 50;
    startTimer();
};

getNewQuestion = () => {
    if (availableQuestion.length ===0 || questionCounter >= maxQuestions){
        localStorage.setItem("mostRecentScore", score);

        return window.location.assign("./end.html")
    }
    questionCounter++;
    questionCounterText.innerText = questionCounter + "/" + maxQuestions;

   const questionIndex = Math.floor(Math.random() * availableQuestion.length);
   currentQuestion = availableQuestion[questionIndex];
   question.innerText = currentQuestion.question;

   choices.forEach( choice => {
       const number = choice.dataset['number'];
       choice.innerText = currentQuestion['choice' + number];
   })

   availableQuestion.splice(questionIndex, 1);

   correctAns = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!correctAns)return;

        correctAns = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classApply = 
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if(classApply === "correct") {
            increaseScore(correctBonus);
        } else {
            timerCount -= 5;
        }

        selectedChoice.parentElement.classList.add(classApply);

        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classApply);
            getNewQuestion();
        }, 1000)

        

    });
});

startTimer = () => {
    timer = setInterval(function(){
        timerCount--;
        timerElement.textContent = timerCount;

        if (timerCount <= 0) {
            clearInterval(timer);
            // endGame();
        }
    }, 1000);
}

increaseScore = num => {
    score += num;
    scoreText.innerText = score;
}

startGame();