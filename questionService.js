import { TriviaQuestion } from './models/triviaQuestion.js';

let triviaQuestions = [
    new TriviaQuestion(1, "Partially burned down 2019. You might see the hunchback!", "notreDame.jpg", "Paris", ["Berlin", "Munich", "Paris", "Moscow"]),
    new TriviaQuestion(2, "Shah Jahan had it built for his favorite wife.", "tajMahal.jpg", "Agra", ["Agra", "Mumbai", "Phnom Penh", "Beijing"]),
    new TriviaQuestion(3, "Headquarters of the African Union.", "addisababa.jpg", "Addis Ababa", ["Lagos", "Johanassburg", "Addis Ababa", "Lisbon"]),
    new TriviaQuestion(4, "Visit the pyramids!", "Cairo.jpg", "Cairo", ["Alexandria", "Suriname", "Dakar", "Cairo"]),
    new TriviaQuestion(5, "Built by Justinian I in 537 A.D.", "hagiasophia.jpg", "Instanbul", ["Agra", "Mumbai", "Phnom Penh", "Beijing"]),
    new TriviaQuestion(6, "Has the tallest building in West Africa.", "Lagos.jpg", "Lagos", ["Oaxaca", "Memphis", "Lagos", "Xi-An"]),
    new TriviaQuestion(7, "Destination of millions of Muslim pilgrims.", "mecca.jpg", "Mecca", ["Mecca", "Riyadh", "Tel-Aviv", "Naples"]),
    new TriviaQuestion(8, "The river of January.", "riodejaneiro.jpg", "Rio de Janeiro", ["Brasilia", "Toronto", "Rio de Janeiro", "Ottowa"]),
    new TriviaQuestion(9, "3rd biggest city in the world.", "shanghai.jpg", "Shanghai", ["Qingdao", "Jakarta", "Vladivostok", "Shanghai"]),
    new TriviaQuestion(10, "Watch your favorite throat singer live in concert.", "ulaanjbaatar.jpg", "Ulaanbaatar", ["Llanfairpwllgwyngyll", "Ulaanbaatar", "Phnom Penh", "Leipzig"])
];

const numberOfTriviaQuestions = 10;

export function GetNextTriviaQuestion(){
    let unansweredQuestions = triviaQuestions.filter((x) => x.answeredCorrectly !== true);
    
    //return one at random
    let question = unansweredQuestions[Math.floor(Math.random() * unansweredQuestions.length)];

    return question;
}

export function CheckQuestionIsCorrect(id, answer){
    preventDefault();
    let question = triviaQuestions.find((x) => x.id === id);

    //mark they've seen the question
    question.wasLoaded = true;

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
    return numberOfTriviaQuestions;
}

export function GetTotalCorrectQuestions(){
    return triviaQuestions.filter((x) => x.answeredCorrectly).length;
}
