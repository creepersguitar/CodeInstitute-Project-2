// getters
const question = document.getElementById("question");
const answer1 = document.getElementById("Answer1");
const answer2 = document.getElementById("Answer2");
const answer3 = document.getElementById("Answer3");
const answer4 = document.getElementById("Answer4");
const answer5 = document.getElementById("Answer5");
const score = document.getElementById("score");
const again = document.getElementById("play-Again");

let qNumber = 0;
let scoreNumber = 0;

const christmasQuestions = [
    {
        "question" : "What day is christmas day?",
        "answers" : [
            "December 1st", "December 25th", "January 26th", "December 29th", "May 5th"
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
];
/**
 * variable to store the number of questions
 */
const qlength = christmasQuestions.length;
/**
 * function to load the question to the page
 */
function loadGameQuestion(qNumber) {
    question.innerText = christmasQuestions[qNumber].question;
}

/**
 * function to load the answer to the question
 */
function loadGameAnswer(qNumber) {
    answer1.innerText = christmasQuestions[qNumber].answers[0];
    answer2.innerText = christmasQuestions[qNumber].answers[1];
    answer3.innerText = christmasQuestions[qNumber].answers[2];
    answer4.innerText = christmasQuestions[qNumber].answers[3];
    answer5.innerText = christmasQuestions[qNumber].answers[4];
}
/**
 * 
 * checks what the user clicked is the correct answer
 */
function check(ansnum) {
    // check if the answer is correct
    let correct = christmasQuestions[qNumber].correct;
    if (ansnum === correct) {
        // increment score - changed from += 1; to ++
        scoreNumber ++;
        score.innerHTML = scoreNumber;
    }
    // increment the question number
    // changed from += 1; to ++
    qNumber++;
    if (qNumber === qlength) {
        // makes visible the play again button
        endGameFunc();
        // added else and calling functions to fix bug
    } else {
        loadGameQuestion(qNumber);
        loadGameAnswer(qNumber);
    }
}

/**
 * makes the play again section visible
 */
function endGameFunc() {
    again.style.visibility = "visible";
}
/**
 * function to end the game
 */
function endOption(chosenOpt) {
    if (chosenOpt === 0) {
        window.location.reload();
    } else {
        window.location.href="https://www.google.com";
    }
}
/**
 * function to start the game
 */
function startchristmasQuiz() {
    // hides the play again button
    again.style.visibility="hidden";
    // loads game questions and answers
    loadGameQuestion(qNumber);
    loadGameAnswer(qNumber);
}
// starts the script
startchristmasQuiz();