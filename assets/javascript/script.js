// getters
const question = document.getElementById("question");
const answer1 = document.getElementById("answerOne");
const answer2 = document.getElementById("answerTwo");
const answer3 = document.getElementById("answerThree");
const answer4 = document.getElementById("answerFour");
const answer5 = document.getElementById("answerFive");
const score = document.getElementById("scoreNumber");
const again = document.getElementById("play-Again");
const heroText = document.getElementById("hero-text");
const startquiz = document.getElementById("startQuizBtn");
// Get the modal, button, and span elements
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

let qNumber = 0;
let scoreNumber = 0;

const christmasQuestions = [
    {
        "question" : "What day is Christmas day?",
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
            "Saint Kringle and rant single","Santa baby and claus kringle","Kris Kringle and Saint Nick","Saint George and nicholas klaus","Kris Klaus and santa claus"
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
// variable to store the number of questions
const qlength = christmasQuestions.length;



span.onclick = function () {
    modal.style.display = "none";
};
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
/**
 * shows the modal
 */
function showModel() {
    modal.style.display = "visible";
}
/**
 * closes the modal
 */
function closeModal() {
    modal.style.display = "none";
}
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
 * checks what the user clicked is the correct answer
 */
function check(ansnum) {
    // check if the answer is correct
    let correct = christmasQuestions[qNumber].correct;
    if (ansnum === correct) {
        // increment score
        scoreNumber++;
        score.innerHTML = scoreNumber;
    }
    // increment the question number
    qNumber++;
    if (qNumber === qlength) {
        // makes visible the play again button
        endGameFunc();
    } else {
        loadGameQuestion(qNumber);
        loadGameAnswer(qNumber);
    }
}
/**
 * makes the play again section visible
 */
function endGameFunc() {
    heroText.innerHTML = `
    <h1>Would you like to play again?</h1>
    <button onclick="endOption(0)">Yes</button>
    <button onclick="endOption(1)">No</button>`
}
/**
 * function to end the game
 */
function endOption(chosenOpt) {
    if (chosenOpt === 0) {
        window.location.reload();
    } else {
      heroText.innerHTML = `
      <h1>Thanks for playing</h1>`
    }
}
/**
 * function to start the game
 */
document.getElementById("startQuizBtn").addEventListener("click", startchristmasQuiz);
function startchristmasQuiz() {
    // hides start quiz button
    document.getElementById("startQuizBtn").style.display = "none";
    // hides the play again button
    again.style.visibility = "hidden";
    // Initialize the game
    qNumber = 0;
    scoreNumber = 0;
    // loads game questions and answers
    loadGameQuestion(qNumber);
    loadGameAnswer(qNumber);
    showModal();
}
/**
 * Function to show the modal and start the quiz
 */
function showModal() {
    modal.style.display = "block";
    document.getElementById("heroText").style.display = "visible"; // Show the hero-text
}
// starts the script
startchristmasQuiz();