import { CheckQuestionIsCorrect, GetNextTriviaQuestion, GetTotalCorrectQuestions, GetTotalQuestions } from "./questionService.js";

let nextButton = document.getElementById("nextQuestion");
let multipleChoiceDiv = document.getElementById("multipleChoice");
let hintButton = document.getElementById("hintButton");
let hintText = document.getElementById("hintText");
let triviaImage = document.getElementById("triviaImage");
let correctQuestionsDiv = document.getElementById("correctQuestions");
let totalQuestionsDiv = document.getElementById("totalQuestions");
let answerResultDiv = document.getElementById("answerResultDiv");

//global variables
let currentQuestionId = 0;

//event listeners
nextButton.addEventListener('click', SetUpTriviaQuestion);
hintButton.addEventListener('click', ToggleShowHint);

SetUpTriviaQuestion();

function SetUpTriviaQuestion(){
    if(HasGameEnded()){
        ShowEndingScreen();
    }
    else{
        ShowCurrentScore();
        hintText.style.display = "none";
        multipleChoiceDiv.style.display = "none";
        hintButton.enabled = true;
        nextButton.enabled = false;
    
        let question = GetNextTriviaQuestion();
    
        currentQuestionId = question.id;
    
        triviaImage.src = `./images/${question.image}`;
        hintText.innerText = question.hint;
        multipleChoiceDiv.style.display = "block";
        BuildMultipleChoice();
    }
}

function ToggleShowHint(){
    if(hintText.style.display == "block"){
        hintText.style.display = "none";
    }
    else{
        hintText.style.display = "block";
    }
}

function BuildMultipleChoice(question){
    for(let choice in question.choices){
        let choiceDiv = document.createElement('div');
        choiceDiv.classList.add('multipleChoice');
        choiceDiv.innerText = choice;
        choiceDiv.setAttribute("choiceText", choice);

        multipleChoiceDiv.appendChild(choiceDiv);
    }
}

function ShowCurrentScore(){
    totalQuestionsDiv.innerText = GetTotalQuestions();
    correctQuestionsDiv.innerText = GetTotalCorrectQuestions();
}

function HasGameEnded(){
    if(GetTotalCorrectQuestions() === GetTotalQuestions()){
        return true;
    }
    else{
        return false;
    }
}

//TODO show ending screen if they win or lose
function ShowEndingScreen(){

}