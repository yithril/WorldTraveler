import { CheckQuestionIsCorrect, GetNextTriviaQuestion, GetTotalCorrectQuestions, GetTotalQuestions } from "./questionService.js";

let nextButton = document.getElementById("nextQuestion");
let form = document.getElementById("triviaForm");
let multipleChoiceDiv = document.getElementById("multipleChoice");
let hintButton = document.getElementById("hintButton");
let hintText = document.getElementById("hintText");
let triviaImage = document.getElementById("triviaImage");
let correctQuestionsDiv = document.getElementById("correctQuestions");
let totalQuestionsDiv = document.getElementById("totalQuestions");
let answerResultSection = document.getElementById("answerResultSection");

//global variables
let currentQuestionId = 0;

//event listeners
nextButton.addEventListener('click', SetUpTriviaQuestion);
hintButton.addEventListener('click', ToggleShowHint);
form.addEventListener('submit', SubmitAnswer);

SetUpTriviaQuestion();

function SetUpTriviaQuestion(){
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
    BuildMultipleChoice(question);
}

function SubmitAnswer(event){
    event.preventDefault();

    let data = new FormData(form);

    let answer = data.get('answer');

    let isCorrect = CheckQuestionIsCorrect(currentQuestionId, answer);

    //TODO change answerResultDiv based on result.
    if(isCorrect){

    }
    else{

    }

    nextButton.enabled = true;
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
    for(let i=0; i<question.choices.length; i++){

        let choiceLabel = document.createElement('label');
        let choiceInput = document.createElement('input');

        choiceInput.setAttribute("type", "radio");
        choiceLabel.htmlFor = question.choices[i];
        choiceInput.value = question.choices[i];
        choiceLabel.innerText = question.choices[i];

        choiceLabel.appendChild(choiceInput)
        multipleChoiceDiv.appendChild(choiceLabel);
    }
}

function ShowCurrentScore(){
    totalQuestionsDiv.innerText = GetTotalQuestions();
    correctQuestionsDiv.innerText = GetTotalCorrectQuestions();
}