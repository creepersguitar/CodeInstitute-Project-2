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
    },
    {
        "question" : "Which popular Christmas beverage is also called 'milk punch?'",
        "answers" : [
            "eggnog", "Juice", "rum", "Milkshake", "Milk"
        ],
        "correct" : 0
    },
    {
        "question" : "What did the other reindeer not let Rudolph do because of his shiny red nose?",
        "answers" : [
            "eat with them","sleep with them","drive the sleigh","have fun with them","Join in any reindeer games"
        ],
        "correct" : 4
    },
    {
        "question" : "What are the two other most popular names for Santa Claus?",
        "answers" : [
            "Saint Kringle","Santa baby","Kris Kringle and Saint Nick","Saint George","Kris Klaus"
        ],
        "correct" : 2
    },
    {
        "question" : "Which Hollywood actor played six different roles in The Polar Express?",
        "answers" : [
            "Eddie Deezen","Peter Scolari","michael jeter","Tom Hanks","Will smith"
        ],
        "correct" : 3
    },
    {
        "question" : "What is the name of the snowman in Frozen?",
        "answers" : [
            "olaf","olan","kyle","Peter","Will"
        ],
        "correct" : 0
    },
    {
        "question" : "How many reindeer drive Santa's sleigh (including Rudolph)?",
        "answers" : [
            "1","6","8","9","10"
        ],
        "correct" : 3
    },
    {
        "question" : "How many Home Alone films are there?",
        "answers" : [
            "9","1","3","45","6"
        ],
        "correct" : 4
    },
    {
        "question" : "In which year was the first Christmas card sent?",
        "answers" : [
            "1843", "1900", "1438", "1239", "1066"
        ],
        "correct" : 1
    },
    {
        "question" : "Which celebrity won the first ever Strictly Come Dancing in December 2004?",
        "answers" : [
            "Jamie borthwick and Nancy Xu","Debbie Mcgee and kevin clifton","Natasha Kaplinsky with Brendan Cole","Katie Durham and brendan Cole","Anne Marie and Graziano"
        ],
        "correct" : 2
    },
    {
        "question" : "The Snowman was shown on TV for the first time on Boxing Day of which year?",
        "answers" : [
            "1289","1982","1298","1928","1829"
        ],
        "correct" : 1
    },
    {
        "question" : "Which British monarch delivered the first ever Christmas message?",
        "answers" : [
            "King George IV","Queen Elizabeth I","King Charles","Queen Victoria","King George V"
        ],
        "correct" : 4
    },
]
/**
 * variable to store the number of questions
 */
const Qlength = christmasQuestions.length;
/**
 * function to load the question to the page
 */
function loadGameQuestion(questionNumber) {
    question.innerHTML = christmasQuestions[questionNumber].question;
}

/**
 * function to load the answer to the question
 */
function loadGameAnswer(answerNumber) {
    answer1.innerHTML = christmasQuestions[QNumber].answers[answerNumber];
    answer2.innerHTML = christmasQuestions[QNumber].answers[answerNumber + 1];
    answer3.innerHTML = christmasQuestions[QNumber].answers[answerNumber + 2];
    answer4.innerHTML = christmasQuestions[QNumber].answers[answerNumber + 3];
    answer5.innerHTML = christmasQuestions[QNumber].answers[answerNumber + 4];
}
/**
 * 
 * checks what answer is clicked to see if it is correct
 * and if its the end of the quiz
 */
function check(ansnum) {
    // tells user what button is clicked
    console.log("Button clicked is: ", ansnum);
    // check if the answer is correct
    let correct = christmasQuestions[QNumber].correct;
    if (ansnum === correct) {
        scoreNumber += 1;
        score.innerHTML = scoreNumber;
        console.log("correct Well Done!");
    }
    // increment the question number
        questionNumber += 1;
        if (questionNumber === Qlength) {
            // tells user that the game is over and makes visible the play again button
            console.log("Game Over!");
            endGameFunc();
        }
}
/**
 * makes the play again section visible
 */
function endGameFunc() {
    again.style.visibility = "visible";
}

function endOption(chosenOpt) {

}