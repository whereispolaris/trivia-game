// Trivia Game API:  https://opentdb.com/api.php?amount=20&category=23&difficulty=easy&type=multiple
$.ajax({
    method: "GET",
    url: "https://opentdb.com/api.php?amount=20&category=23&difficulty=easy&type=multiple",
    success: function (data) {
        console.log('Success', data);
        // Question
        console.log('Question: ', data.results[0].question);
        // Correct Answer
        console.log('Correct Answer: ', data.results[0].correct_answer);
        // Incorrect Answers
        console.log('Incorrect Answers: ', data.results[0].incorrect_answers);
    }
});

// === PSEUDOCODE ===