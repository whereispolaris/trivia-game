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
    {
        questionText: "What is Earth's largest continent?",
        answers: [
            { answerIndex: 0, answerText: "Asia", correct: true },
            { answerIndex: 1, answerText: "Europe", correct: false },
            { answerIndex: 2, answerText: "Antartica", correct: false },
            { answerIndex: 3, answerText: "Africa", correct: false },
        ]
    },
    {
        questionText: "What razor-thin country accounts for more than half of the western coastline of South America?",
        answers: [
            { answerIndex: 0, answerText: "Bolivia", correct: false },
            { answerIndex: 1, answerText: "Ecuador", correct: false },
            { answerIndex: 2, answerText: "Peru", correct: false },
            { answerIndex: 3, answerText: "Chile", correct: true },
        ]
    },
    {
        questionText: "What is the driest place on Earth?",
        answers: [
            { answerIndex: 0, answerText: "Atacama Desert", correct: false },
            { answerIndex: 1, answerText: "Sahara Desert", correct: false },
            { answerIndex: 2, answerText: "Kufra, Libya", correct: false },
            { answerIndex: 3, answerText: "McMurdo, Antartica", correct: true },
        ]
    },
    {
        questionText: "What is the oldest city in the world?",
        answers: [
            { answerIndex: 0, answerText: "Athens", correct: false },
            { answerIndex: 1, answerText: "Jerusalem", correct: false },
            { answerIndex: 2, answerText: "Damascus", correct: true },
            { answerIndex: 3, answerText: "Jerico", correct: false },
        ]
    },
    {
        questionText: "Which U.S. state has the most active volcanoes?",
        answers: [
            { answerIndex: 0, answerText: "California", correct: false },
            { answerIndex: 1, answerText: "Alaska", correct: true },
            { answerIndex: 2, answerText: "Washington", correct: false },
            { answerIndex: 3, answerText: "Hawaii", correct: false },
        ]
    },
    {
        questionText: "What is the flattest continent?",
        answers: [
            { answerIndex: 0, answerText: "Antartica", correct: false },
            { answerIndex: 1, answerText: "Africa", correct: false },
            { answerIndex: 2, answerText: "South America", correct: false },
            { answerIndex: 3, answerText: "Australia", correct: true },
        ]
    },
    {
        questionText: "What is the tallest mountain in the world?",
        answers: [
            { answerIndex: 0, answerText: "Aconcagua", correct: false },
            { answerIndex: 1, answerText: "Mount Everest", correct: true },
            { answerIndex: 2, answerText: "Qogir", correct: false },
            { answerIndex: 3, answerText: "Kilimanjaro", correct: false },
        ]
    },
    {
        questionText: "What is the deepest point in Earth's oceans?",
        answers: [
            { answerIndex: 0, answerText: "Eurasian Basin", correct: false },
            { answerIndex: 1, answerText: "Java Trench", correct: false },
            { answerIndex: 2, answerText: "Mariana Trench", correct: true },
            { answerIndex: 3, answerText: "Tonga Trench", correct: false },
        ]
    },
    {
        questionText: "Along with Spain and France, what is the other country to have both Atlantic and Mediterranean coastlines?",
        answers: [
            { answerIndex: 0, answerText: "Lebanon", correct: false },
            { answerIndex: 1, answerText: "Morocco", correct: true },
            { answerIndex: 2, answerText: "Egypt", correct: false },
            { answerIndex: 3, answerText: "Syria", correct: false },
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
    // This starts the timer when question is generated.
    run();
    // Checks if there are still questions to ask.
    if (questionNumber === triviaQuestions.length) {
        gameEnds();
        return;
    }
    // This fuction generates the question and answer from the triviaQuestions array.
    var question = $("<h4>");
    question.addClass("question");
    question.text(triviaQuestions[questionNumber].questionText);
    // Add question to div.
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
            correctAnswers += 1;
            correctCounter();
        }
        else if (!ansArray[selectedID].correct) {
            incorrectAnswers += 1;
            incorrectCounter();
        }

        // IMPORTANT - THIS CLEARS OLD QUESTION FOR NEW ONE TO RUN
        emptyDisplays();
        // Starts new question
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
        unansweredQuestions += 1;
        timerNumber = 10;
        questionNumber += 1;
        //  ...run the stop function.
        unansweredCounter();
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

