// Get elements by their IDs
const question = document.getElementById("question");
const answer1 = document.getElementById("answerOne");
const answer2 = document.getElementById("answerTwo");
const answer3 = document.getElementById("answerThree");
const answer4 = document.getElementById("answerFour");
const answer5 = document.getElementById("answerFive");
const score = document.getElementById("scoreNumber");
const heroText = document.getElementById("hero-text");
const startquiz = document.getElementById("startQuizBtn");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

// Initialize variables
let qNumber = 0;
let scoreNumber = 0;

// List of questions
const christmasQuestions = [
    {
        "question": "What day is Christmas day?",
        "answers": ["December 1st", "December 25th", "January 26th", "December 29th", "May 5th"],
        "correct": 1
    },
    {
        "question": "Which popular Christmas beverage is also called 'milk punch?'",
        "answers": ["eggnog", "Juice", "rum", "Milkshake", "Milk"],
        "correct": 0
    },
    {
        "question": "What did the other reindeer not let Rudolph do because of his shiny red nose?",
        "answers": ["eat with them", "sleep with them", "drive the sleigh", "have fun with them", "Join in any reindeer games"],
        "correct": 4
    },
    {
        "question": "What are the two other most popular names for Santa Claus?",
        "answers": ["Saint Kringle and rant single", "Santa baby and claus kringle", "Kris Kringle and Saint Nick", "Saint George and nicholas klaus", "Kris Klaus and santa claus"],
        "correct": 2
    },
    {
        "question": "Which Hollywood actor played six different roles in The Polar Express?",
        "answers": ["Eddie Deezen", "Peter Scolari", "michael jeter", "Tom Hanks", "Will smith"],
        "correct": 3
    },
    {
        "question": "What is the name of the snowman in Frozen?",
        "answers": ["olaf", "olan", "kyle", "Peter", "Will"],
        "correct": 0
    },
    {
        "question": "How many reindeer drive Santa's sleigh (including Rudolph)?",
        "answers": ["1", "6", "8", "9", "10"],
        "correct": 3
    },
    {
        "question": "How many Home Alone films are there?",
        "answers": ["9", "1", "3", "45", "6"],
        "correct": 4
    },
    {
        "question": "In which year was the first Christmas card sent?",
        "answers": ["1843", "1900", "1438", "1239", "1066"],
        "correct": 0
    },
    {
        "question": "Which celebrity won the first ever Strictly Come Dancing in December 2004?",
        "answers": ["Jamie borthwick and Nancy Xu", "Debbie Mcgee and kevin clifton", "Natasha Kaplinsky with Brendan Cole", "Katie Durham and brendan Cole", "Anne Marie and Graziano"],
        "correct": 2
    },
    {
        "question": "The Snowman was shown on TV for the first time on Boxing Day of which year?",
        "answers": ["1289", "1982", "1298", "1928", "1829"],
        "correct": 1
    },
    {
        "question": "Which British monarch delivered the first ever Christmas message?",
        "answers": ["King George IV", "Queen Elizabeth I", "King Charles", "Queen Victoria", "King George V"],
        "correct": 4
    },
];

// Variable to store the number of questions
const qlength = christmasQuestions.length;

// Close modal when the span (x) is clicked
span.onclick = function () {
    modal.style.display = "none";
};

// Close modal when clicking outside of the modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

/**
 * Function to load the question to the page
 */
function loadGameQuestion(qNumber) {
    if (question) {
        question.innerText = `Question ${qNumber + 1} of ${qlength}: ${christmasQuestions[qNumber].question}`;
    }
    // Ensure buttons are enabled
    enableAnswerButtons();
}


/**
 * Function to load the answers to the question
 */
function loadGameAnswer(qNumber) {
    if (answer1) answer1.innerText = christmasQuestions[qNumber].answers[0];
    if (answer2) answer2.innerText = christmasQuestions[qNumber].answers[1];
    if (answer3) answer3.innerText = christmasQuestions[qNumber].answers[2];
    if (answer4) answer4.innerText = christmasQuestions[qNumber].answers[3];
    if (answer5) answer5.innerText = christmasQuestions[qNumber].answers[4];
}

/**
 * Checks if the user's answer is correct
 */
function check(ansnum) {
    // Disable buttons to prevent multiple answers
    disableAnswerButtons();
    
    let correct = christmasQuestions[qNumber].correct;
    if (ansnum === correct) {
        scoreNumber++;
        if (score) score.innerHTML = scoreNumber;
        showFeedback(true);
    } else {
        showFeedback(false);
    }

    qNumber++;
    if (qNumber < christmasQuestions.length) {
        setTimeout(() => {
            loadGameQuestion(qNumber);
            loadGameAnswer(qNumber);
            enableAnswerButtons();
        }, 1000); // Wait 1 second before loading next question
    } else {
        setTimeout(endGameFunc, 1000);
    }
}

function disableAnswerButtons() {
    answer1.setAttribute('disabled', 'true');
    answer2.setAttribute('disabled', 'true');
    answer3.setAttribute('disabled', 'true');
    answer4.setAttribute('disabled', 'true');
    answer5.setAttribute('disabled', 'true');
}

function enableAnswerButtons() {
    answer1.removeAttribute('disabled');
    answer2.removeAttribute('disabled');
    answer3.removeAttribute('disabled');
    answer4.removeAttribute('disabled');
    answer5.removeAttribute('disabled');
}

function showFeedback(isCorrect) {
    const feedback = document.createElement('div');
    feedback.className = 'feedback';
    feedback.innerText = isCorrect ? 'Correct!' : 'Wrong!';
    heroText.appendChild(feedback);
    setTimeout(() => {
        feedback.remove();
    }, 1000);
}


/**
 * Makes the play again section visible
 */
function endGameFunc() {
    console.log("Inside endGameFunc."); // Debug log

    // Clear the question text
    if (question) question.innerText = '';

    // Hide the answers
    if (answer1) answer1.style.display = 'none';
    if (answer2) answer2.style.display = 'none';
    if (answer3) answer3.style.display = 'none';
    if (answer4) answer4.style.display = 'none';
    if (answer5) answer5.style.display = 'none';

    // Update heroText with play-again options
    if (heroText) {
        console.log("Updating heroText with play-again options."); // Debug log
        heroText.innerHTML = "Would you like to play again?";

        // Create Yes button
        let yesButton = document.createElement("button");
        yesButton.innerText = "Yes";
        yesButton.onclick = function() { endOption(0); };
        heroText.appendChild(yesButton);

        // Create No button
        let noButton = document.createElement("button");
        noButton.innerText = "No";
        noButton.onclick = function() { endOption(1); };
        heroText.appendChild(noButton);
    } else {
        console.error("heroText element not found."); // Debug log
    }
}

/**
 * Function to end the game
 */
function endOption(chosenOpt) {
    if (chosenOpt === 0) {
        window.location.reload();
    } else {
        if (heroText) heroText.innerText = "Thanks for playing";
    }
}

/**
 * Function to start the game
 */
document.getElementById("startQuizBtn").addEventListener("click", startchristmasQuiz);
function startchristmasQuiz() {
    // Hide start quiz button
    if (startquiz) startquiz.style.display = "none";

    // Show the answer buttons
    if (answer1) answer1.style.display = 'inline-block';
    if (answer2) answer2.style.display = 'inline-block';
    if (answer3) answer3.style.display = 'inline-block';
    if (answer4) answer4.style.display = 'inline-block';
    if (answer5) answer5.style.display = 'inline-block';

    // Initialize the game
    qNumber = 0;
    scoreNumber = 0;

    // Load game questions and answers
    loadGameQuestion(qNumber);
    loadGameAnswer(qNumber);

    // Show the modal
    showModal();
}

/**
 * Function to show the modal and start the quiz
 */
function showModal() {
    if (modal) modal.style.display = "block";
    if (heroText) heroText.style.display = "block"; // Show the hero-text
}

// Add debug logs to trace function execution
console.log("Script loaded and ready.");
