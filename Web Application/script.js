// script.js
function displayGreeting() {
    const userInput = document.getElementById('userInput').value;
    const resultSection = document.getElementById('result');
    
    if (userInput) {
        resultSection.textContent = `Hello, ${userInput}! Welcome to BrightPath Education.`;
    } else {
        resultSection.textContent = 'Please enter your name.';
    }
}

function cancelFeedback() {
    document.getElementById('feedbackForm').reset();
}
