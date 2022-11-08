import { GetNextTriviaQuestion, GetTotalQuestions } from "./questionService.js";

let totalQuestions = GetTotalQuestions();

//Get the first question
let initialQuestions = GetNextTriviaQuestion();

