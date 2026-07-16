// Function to check the user's quiz answer
function checkAnswer(answer) {
    // Find the paragraph element where we will display the feedback
    const feedbackElement = document.getElementById("quiz-feedback");

    // Check if the provided answer is correct
    if (answer === 'main') {
        feedbackElement.textContent = "Correct! The main() method is exactly where a Java program starts executing.";
        feedbackElement.className = "correct"; // Applies the green text CSS class
    } else {
        feedbackElement.textContent = "Incorrect. Hint: Look at the code block in the section above!";
        feedbackElement.className = "incorrect"; // Applies the red text CSS class
    }
}