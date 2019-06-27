// Demo Video https://www.youtube.com/watch?v=xhmmiRmxQ8Q&feature=youtu.be
// Trivia Questions https://usefultrivia.com/geography_trivia/

// ==== Global Variables ====
var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;
var questionCount = 0;
var questionNumber = 0;

// === Questions Array ===
triviaQuestions = [
    {
        questionText: "What is the capital of China?",
        answers: [
            { answerIndex: 0, answerText: "Bangkok", correct: false },
            { answerIndex: 1, answerText: "Tokyo", correct: false },
            { answerIndex: 2, answerText: "Hong Kong", correct: false },
            { answerIndex: 3, answerText: "Beijing", correct: true },
        ]
    },
    {
        questionText: "What country has the most natural lakes?",
        answers: [
            { answerIndex: 0, answerText: "Canada", correct: true },
            { answerIndex: 1, answerText: "India", correct: false },
            { answerIndex: 2, answerText: "United States", correct: false },
            { answerIndex: 3, answerText: "Australia", correct: false },
        ]
    },
    {
        questionText: "In what country can you visit Machu Picchu?",
        answers: [
            { answerIndex: 0, answerText: "Colombia", correct: false },
            { answerIndex: 1, answerText: "Chile", correct: false },
            { answerIndex: 2, answerText: "Peru", correct: true },
            { answerIndex: 3, answerText: "Bolivia", correct: false },
        ]
    },

];

// === Functions ===
function emptyDisplays() {
    $("#questionDisplay").empty();
    $("#answersDisplay").empty();
}

function correctCounter() {
    $("#correct").text("Correct Answers: " + correctAnswers);
}

function incorrectCounter() {
    $("#incorrect").text("Incorrect Answers: " + incorrectAnswers);
}

function unansweredCounter() {
    // unansweredQuestions += 1;
    $("#unanswered").text("Unanswered Questions: " + unansweredQuestions);
}


function questionGenerator() {
    // IMPORTANT FUNCTION - This starts the timer when question is generated.
    run();
    if (questionNumber === triviaQuestions.length) {
        console.log(questionNumber);
        gameEnds();
        return;
    }
    // This fuction generates the question and answer from the triviaQuestions array
    var question = $("<h4>");
    // Generate question element
    question.addClass("question");
    question.text(triviaQuestions[questionNumber].questionText);
    $("#questionDisplay").append(question);

    // Array of  possible answers 
    var ansArray = triviaQuestions[questionNumber].answers;

    // Generate Loop That Adds Answers to page
    for (var a = 0; a < ansArray.length; a++) {
        // var answerRadio = $("<h5>");
        var answerRadio = $("<input>");
        answerRadio.attr("type", "radio");
        answerRadio.attr("name", "answers")
        answerRadio.attr("id", ansArray[a].answerIndex);
        var answerLabel = $("<label>");
        answerLabel.attr("for", ansArray[a].answerIndex);
        answerLabel.text(ansArray[a].answerText);
        $("#answersDisplay").append(answerRadio, " ", answerLabel, "<br>");
    }

    // Radio Button Event Handler
    $("input[name='answers']").on("click", function () {
        selectedID = $(this).attr("id");
        questionNumber += 1;
        if (ansArray[selectedID].correct) {
            console.log("This is correct");
            correctAnswers += 1;
            correctCounter();
        }
        else if (!ansArray[selectedID].correct) {
            console.log("This is incorrect");
            incorrectAnswers += 1;
            incorrectCounter();
        }

        // IMPORTANT - THIS CLEARS OLD QUESTION FOR NEW ONE TO RUN
        emptyDisplays();
        questionGenerator();

    });

}

// === Timer Start ===
var timerNumber = 10;
var intervalId;

function run() {
    timerNumber = 10;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {
    //  Decrease number by one.
    timerNumber--;
    //  Show the number in the #show-number tag.
    $("#show-number").html("<h2>" + timerNumber + "</h2>");
    //  Once number hits zero...
    if (timerNumber === 0) {
        timerNumber = 10;
        questionNumber += 1;
        //  ...run the stop function.
        stop();
        emptyDisplays();
        questionGenerator();

    }
}

//  The stop function
function stop() {
    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
}

// Generate question and append to display
function start() {
    var startButton = $("<h2>");
    startButton.attr("id", "startBtnDisplay");
    startButton.html("<button id='startButton'>Start Game</button>");

    $("#questionDisplay").append(startButton);

    // $(".card-body").html("<h1>PRESS BUTTON<h1>");
    $("#startButton").on("click", function () {
        emptyDisplays();
        $("#startBtnDisplay").empty();
        questionGenerator();
        correctCounter();
        incorrectCounter();
        unansweredCounter();
        run();
    });
}

function gameEnds() {
    var gameEndsTag = $("<h2>");
    gameEndsTag.attr("id", "gameEndDisplay");
    gameEndsTag.text("Trivia Is Over");
    emptyDisplays();
    $("#questionDisplay").append(gameEndsTag);
    stop();

}

// Excecute the start function
start();

