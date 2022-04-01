/*Acceptance Criteria
- Presented with a Start button that renders a question when clicked
- Timer is triggered by Start button
- Rendered question has incorrect options and one correct option
- If you click the correct option, then points are added and the next question is rendered. The timer continues moving
- If you click an incorrect option, then the timer decreases by a certain amount as a penalty and no points are added.
- When you run out of questions, or when you run out of time, the game ends and a game over screen renders.
- On the game over screen, you can save your intials and score

HTML

1. Start screen with title, rules, start button, timer
2. Question screen container with question text, buttons, timer, feedback based on answer selected
3. End of game container with final score, form to enter initials, and a submit button
4. High score page 


JS

1. Declare variables to reference DOM elements in your HTML document

    - StartQuizBtn, StartScreenEl, timerEl, highScoreEl
    - QuestionEl, questionTitleEl, answerChoicesEl*/

var StartQuizBtn = document.querySelector("#StartQuizBtn");
var StartScreenEl=document.querySelector("header");
var timerEl = document.querySelector("#Timer");
var highScoreEl;
var QuestionEl = document.querySelector("#question-screen-container");
var questionTitleEl = document.querySelector("#question-title");
var answerChoicesEl = document.querySelector("#answers");


//2. Create an array of objects that hold all question -- can store this in a separate JS file
 //   - Answer choices
 //   - Question text
//    - Correct answer

3. Create a startQuiz() function trigerred by the StartQuizBtn
    -Hide start screen
    -Unhide questions screen
    -Starts timer
    -Grab first question in the array

4. Create a function to getQuestion()
    - Renders title, choices and buttons

5. Create a function to check if an answer is correctly
    -If the answer is correct, then move on to the next question
    -If answer is wrong, decrement timer and move on to next question
    -Keep track of score/points
    -Increment index in array of questions to move on

6. Create a function to end the quiz
    -Hide this QuestionEl
    -Unhide the End of quiz element
    -Unhide your final score element, form, submit btn

7. Create functionality to save high scores to localStorage */



var test = function (answerChoices, questionText, correctAnswer){

}



//question-screen-container.style.display = "none"
//question-screen-container.style.display = "visible"


var questionIndex = 0;

function showQuestion(index) {
    questionIndex.textContent = ""
    userChoice.textContent = ""
    for (var i = 0; i < questions.length; i++) {
        var Q= (questions[index].answers)
        questionIndex.textContent = Q
    }

    answerList.forEach(function(ans) {
        var answerButton= document.createElement("button");
        answerButton.style.position = "inline";
        answerButton.style.alignContent = "center";
        answerButton.style.padding = "15px";

        answerButton.classList.add(answerButton)
        answerButton.addEventListener('click', function () {
            ansCheck(answerButton.textContent)
        })
    }


}

var answerCheck = document.createElement("h3")
function answerCheck(answer) {
    if (answer === questions [questionIndex].correctAnswer){
        console.log ("Correct!")
        answerCheck.textContent = "CORRECT!"

    }
    else {
        console.log("incorrect")
        answerCheck.textContent = "Too Bad"
    }
}

// code to set to local storage:
    /*localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    renderLastRegistered();*/




var startQuizBtn = document.querySelector("#StartQuizBtn");

var testQuestions = document.getElementById("Questions");

var timerSec = 75;


//start quiz at start button click:
startQuizBtn.addEventListener("click", function () {
    startQuizBtn.getElementsByClassName//visibility="hidden";
    
    var quizTimer = setInterval(function () {
        timerSec--;
        if (timerSec > 0) {
            var pTag = document.createElement("p");
            pTag.textContent = "Time left: " + timerSec;

            var = document.createElement("div");
            testQuestions.textContent = questionArr[0];

            var nextBtn = document.createElement("button");
            nextBtn.textContent = "Next";
            nextBtn.setAttribute("id", "nextBtn");

            Questions.innerHTML = "";
            testQuestions.appendChild(pTag);
            testQuestions.appendChild(nextBtn);
            Questions.appendChild();
        } else {
            clearInterval(quizTimer);
            alert("Time is up!");
            displayScore();
        }
    }, 1000);

})












