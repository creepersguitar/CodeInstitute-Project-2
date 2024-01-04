// getters
const question = document.getElementById("Question");
const answer1 = document.getElementById("Answer1");
const answer2 = document.getElementById("Answer2");
const answer3 = document.getElementById("Answer3");
const answer4 = document.getElementById("Answer4");
const answer5 = document.getElementById("Answer5");
const score = document.getElementById("score");
const again = document.getElementById("play-Again");

let QNumber = 0;
let scoreNumber = 0

const christmasQuestions = [
    {
        "question" : "What day is christmas day?",
        "answers" : [
            "December 25th", "December 1st", "January 26th", "December 29th", "May 5th"
        ],
        "correct" : 1
    }
]


function endOption(chosenOpt) {

}