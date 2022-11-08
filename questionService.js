import { TriviaQuestion } from './models/triviaQuestion.js';

let triviaQuestions = [
    new TriviaQuestion(1, "Partially burned down 2019. You might see the hunchback!", "notreDame.jpg", "Paris", ["Berlin", "Munich", "Paris", "Moscow"], false),
    new TriviaQuestion(2, "Shah Jahan had it built for his favorite wife.", "tajMahal.jpg", "Agra", ["Agra", "Mumbai", "Phnom Penh", "Beijing"], false),
];

export function GetNextTriviaQuestion(){
    let unansweredQuestions = triviaQuestions.filter((x) => x.answeredCorrectly !== true);
    
    //return one at random
    let question = unansweredQuestions[Math.floor(Math.random() * unansweredQuestions.length)];

    return question;
}

export function CheckQuestionIsCorrect(id, answer){
    let question = triviaQuestions.find((x) => x.id === id);

    let isCorrect = question.correctAnswer.ToLowerCase() === answer.ToLowerCase();

    if(isCorrect){
        question.answeredCorrectly = true;
        return true;
    }
    else{
        return false;
    }
}

export function GetTotalQuestions(){
    return triviaQuestions.length;
}

export function GetTotalCorrectQuestions(){
    return triviaQuestions.filter((x) => x.answeredCorrectly).length;
}