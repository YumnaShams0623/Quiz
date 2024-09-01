const questions = [
    {
        question: "Which keyboard shortcut is used to copy text on a Windows computer?",
        choices: ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
        correctAnswer: "Ctrl + C"
    },
    {
        question: "What is the shortcut to undo the last action in most Windows applications?",
        choices: ["Ctrl + Y", "Ctrl + S", "Ctrl + Z", "Ctrl + A"],
        correctAnswer: "Ctrl + Z"
    },
    {
        question: "Which shortcut is used to paste copied text in Windows?",
        choices: ["Ctrl + P", "Ctrl + V", "Ctrl + A", "Ctrl + F"],
        correctAnswer: "Ctrl + V"
    },
    {
        question: "What is the keyboard shortcut to select all text in a document?",
        choices: ["Ctrl + A", "Ctrl + S", "Ctrl + E", "Ctrl + Q"],
        correctAnswer: "Ctrl + A"
    },
    {
        question: "Which shortcut minimizes all open windows in Windows?",
        choices: ["Windows + D", "Alt + Tab", "Windows + M", "Ctrl + Shift + Esc"],
        correctAnswer: "Windows + D"
    }
];


// Function to load a question
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('questions').textContent = currentQuestion.question;
    for (let i = 0; i < 4; i++) {
        document.getElementById('btn' + (i + 1)).textContent = currentQuestion.choices[i];
    }
}


// Function to check the answer
function checkAnswer(choice) {
    const correctChoice = questions[currentQuestionIndex].correctAnswer;
    if (choice === correctChoice) {
        document.getElementById('result').textContent = "Correct!";
        score++;
    } else {
        document.getElementById('result').textContent = "Wrong! Try Again.";
    }
}

// / Event listeners for answer buttons
document.getElementById('btn1').addEventListener('click', function() {
    checkAnswer(0);
});
document.getElementById('btn2').addEventListener('click', function() {
    checkAnswer(1);
});
document.getElementById('btn3').addEventListener('click', function() {
    checkAnswer(2);
});
document.getElementById('btn4').addEventListener('click', function() {
    checkAnswer(3);
});

// Event listener for the Next Question button
document.getElementById('next-btn').addEventListener('click', function() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById('result').textContent = "";
    } else {
        document.getElementById('result').textContent = `Quiz Over! Your score is ${score}.`;
    }
});

// Load the first question when the page loads
loadQuestion();