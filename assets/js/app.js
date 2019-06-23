// Trivia Game API:  https://opentdb.com/api.php?amount=20&category=23&difficulty=easy&type=multiple
$.ajax({
    method: "GET",
    url: "https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple",
    success: function (questions) {
        console.log('Success', questions);
        // Question
        console.log('Question: ', questions.results[0].question);
        // Correct Answer
        console.log('Correct Answer: ', questions.results[0].correct_answer);
        // Incorrect Answers
        console.log('Incorrect Answers: ', questions.results[0].incorrect_answers);
    }
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
// Build Layout
// Build Timer
// Go over slideshow