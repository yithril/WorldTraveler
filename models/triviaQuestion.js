export class TriviaQuestion{
    constructor(id, hint, image, correctAnswer, choices, answeredCorrectly=false, wasLoaded=false){
        this.id = id;
        this.hint = hint;
        this.image = image;
        this.correctAnswer = correctAnswer;
        this.choices = choices;
        this.answeredCorrectly = answeredCorrectly;
        this.wasLoaded = wasLoaded;
    }
}