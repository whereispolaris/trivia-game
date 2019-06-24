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


function questionGenerator(questionNumber) {
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
        console.log("radio button clicked");
        selectedID = $(this).attr("id");
        if (ansArray[selectedID].correct) {
            console.log("This is correct");
            correctAnswers += 1;
            // TO DO: Append count to page
            emptyDisplays();
            questionGenerator(questionNumber + 1);
        }
        else {
            console.log("This is incorrect");
            incorrectAnswers += 1;
            // TO DO: Append count to page
            emptyDisplays();
            questionGenerator(questionNumber + 1);
        }
    });


}

// === Timer Start ===
var timerNumber = 10;

var intervalId;

function run() {
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
        //  ...run the stop function.
        stop();
        //  Alert the user that time is up.
        // alert("Time Up!");
        timerNumber = 10;
        questionNumber += 1;
        // run();
    }
}

//  The stop function
function stop() {
    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
}

//  Execute the run function.
run();

// Generate question and append to display
questionGenerator(questionNumber);


// === PSEUDOCODE ===

// DOCUMENT READY
    // Show page that only has 'start game' button

// Start Game Button - ON CLICK
    // Start Timer
    // Display Questions

// TIMER ENDS
    // Count Correct Answers
    // Count Incorrect Answers
    // Count Unanswered Questions


// === TO DO ===
// Build Layout - DONE
// Create Questions array - DONE
// Build Timer - DONE - 
// Go over slideshow - DONE
// Rebuild question container


// === Question ===

/*
//var questionRowDiv = $("<div>"); 
// questionRowDiv.addClass("row"); 
 <div class="row"> 
    // var questionBox = $("<div>");
    // questionBox.addClass("card col-md-8 questionBox");
    <div class="card col-md-8 questionBox">
        // var questionDisplay = $("<div>");
        // questionDisplay.addClass("card-header");
        // questionDisplay.attr("id", "questionDisplay");
        <div class="card-header" id="questionDisplay">
            <!-- This is where the question goess -->
        </div>
        // var cardBody = $("<div>");
        // cardBody.addClass("card-body");
        <div class="card-body">
            // var answerDisplay = $("<form>");
            // answerDisplay.attr("answersDisplay");
            <form id="answersDisplay">
                <!-- This is where the answers go -->
            </form>
        </div>
    </div>
    // var counterBox = $("<div>");
    // counterBox.addClass("card col-md-3 counterBox");
    <div class="card col-md-3 counterBox">
        // var counterDisplay = $("<div>");
        // counterDisplay.addClass("card-header");
        // counterDisplay.attr("id", "counterDisplay");
        <div class="card-header" id="counterDisplay">
            <!-- This is where the timer will go -->
            <h4>Timer: <span id="show-number"></span> </h4>
        </div>
        <div class="card-body">
            <h6>Correct Answers: 3</h6>
            <h6>Incorrect Answers: 1 </h6>
            <h6>Unanswered Questions: 0</h6>
        </div>
    </div>
</div> 

*/


