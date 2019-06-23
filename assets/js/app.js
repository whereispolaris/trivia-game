// Trivia Game API:  https://opentdb.com/api.php?amount=20&category=23&difficulty=easy&type=multiple

triviaQuestions = [
    {
        questionText: "What is the capital of China?",
        answers: [
            { letterChoice: "a", answerText: "Bangkok", correct: false },
            { letterChoice: "b", answerText: "Tokyo", correct: false },
            { letterChoice: "c", answerText: "Hong Kong", correct: false },
            { letterChoice: "d", answerText: "Beijing", correct: true },
        ]
    },
    {
        questionText: "What country has the most natural lakes?",
        answers: [
            { letterChoice: "a", answerText: "Canada", correct: true },
            { letterChoice: "b", answerText: "India", correct: false },
            { letterChoice: "c", answerText: "United States", correct: false },
            { letterChoice: "d", answerText: "Australia", correct: false },
        ]
    },
    {
        questionText: "In what country can you visit Machu Picchu?",
        answers: [
            { letterChoice: "a", answerText: "Colombia", correct: false },
            { letterChoice: "b", answerText: "Chile", correct: false },
            { letterChoice: "c", answerText: "Peru", correct: true },
            { letterChoice: "d", answerText: "Bolivia", correct: false },
        ]
    },

];

// ==== Global Variables ====


// This fuction generates the question and answer from the triviaQuestions array 
function questionGenerator(questionNumber) {

    var question = $("<h4>");
    // Generate question element
    question.addClass("question");
    question.text(triviaQuestions[questionNumber].questionText);
    $("#questionDisplay").append(question);

    // Array of answers 
    var ansArray = triviaQuestions[questionNumber].answers;

    // Generate Loop That Adds Answers to page
    for (var a = 0; a < ansArray.length; a++) {
        // var answerRadio = $("<h5>");
        var answerRadio = $("<input>");
        answerRadio.attr("type", "radio");
        answerRadio.attr("name", "answers")
        answerRadio.attr("id", ansArray[a].letterChoice);
        var answerLabel = $("<label>");
        answerLabel.attr("for", ansArray[a].letterChoice);
        answerLabel.text(ansArray[a].answerText);
        $("#answersDisplay").append(answerRadio, " ", answerLabel, "<br>");
    }
}

questionGenerator(0);

$("input[name='answers']").on("click", function () {
    console.log("radio button clicked");


});



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
// Create Questions array
// Build Timer
// Go over slideshow