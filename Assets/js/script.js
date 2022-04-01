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
var highScoreEl; //will be assigned later on
var QuestionEl = document.querySelector("#question-screen-container");
var questionTitleEl = document.querySelector("#question-title");
var answerChoicesEl = document.querySelector("#answers");


//2. Create an array of objects that hold all question -- can store this in a separate JS file
 //   - Answer choices
 //   - Question text
//    - Correct answer

//array is in assets./quizquestions.js

//3. Create a startQuiz() function trigerred by the StartQuizBtn:

function startQuiz ()
startQuizBtn.addEventListener("click", function () {

    //Hide start screen:

    var StartScreenEl

    //Unhide questions screen:

    var QuestionEl

    //Starts timer:

   var timerEl

    //Grab first question in the array:

    //grab [0] from quizuestions.js

/*4. Create a function to getQuestion()
    - Renders title, choices and buttons*/

     //display var questionTitleEl and var answerChoicesEl 
     //create element buttons for the answers?

//5. Create a function to check if an answer is correct

    function correctAswer () {

    }

//If the answer is correct, then move on to the next question

    if ( chosenAnswer = true) {
    //LOOP through to the next question

    }    

//-If answer is wrong, decrement timer and move on to next question

    else ( chosenAnswer ! = true) {
    //decrease timer 10 seconds
    //loop to the next question
    }
    
//Keep track of score/points

    function keepScore () {
    if (chosen answer = true) {
        increment score 1++
    }   
    else (chosen answer ! = true) {
        //return? do not add to score
    }
    }

//Increment index in array of questions to move on*/:

    //not sure what this means?? - ask Omar

//6. Create a function to end the quiz

    function endQuiz ()

//Hide this QuestionEl

    var QuestionEl 
    style = hidden //?

//Unhide the End of quiz element

    var finishQuizEl = document.querySelector(#"End of Game Container");

    -Unhide your final score element, form, submit btn

7. Create functionality to save high scores to localStorage */



// code to set to local storage:
    /*localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    renderLastRegistered();*/




var startQuizBtn = document.querySelector("#StartQuizBtn");

var testQuestions = document.getElementById("Questions");

var timerSec = 75;


//start quiz at start button click:

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












