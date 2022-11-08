export class TriviaQuestion{
    constructor(id, description, image, correctAnswer, choices, answeredCorrectly){
        this.id = id;
        this.description = description;
        this.image = image;
        this.correctAnswer = correctAnswer;
        this.choices = choices;
        this.answeredCorrectly = answeredCorrectly
    }
}