document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        {
            question: "What is the main cause of climate change?",
            options: ["Deforestation", "Greenhouse gas emissions", "Volcanic eruptions", "Solar flares"],
            correct: "Greenhouse gas emissions"
        },
        {
            question: "Which gas is most responsible for global warming?",
            options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
            correct: "Carbon dioxide"
        },
        {
            question: "What is one effect of climate change?",
            options: ["More stable weather patterns", "Decreased sea levels", "More extreme weather events", "Increased biodiversity"],
            correct: "More extreme weather events"
        },
        {
            question: "What is the best way to reduce your carbon footprint?",
            options: ["Use more plastic products", "Drive more often", "Use renewable energy and reduce waste", "Leave lights on when not in use"],
            correct: "Use renewable energy and reduce waste"
        },
        {
            question: "Which energy source is the most sustainable?",
            options: ["Coal", "Oil", "Solar", "Natural gas"],
            correct: "Solar"
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const quizContainer = document.getElementById("quiz-container");
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextButton = document.getElementById("next-btn");
    const resultElement = document.getElementById("result");

    function displayQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
        optionsElement.innerHTML = "";

        currentQuestion.options.forEach((option) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.classList.add("option-btn");
            button.addEventListener("click", () => checkAnswer(option));
            optionsElement.appendChild(button);
        });
    }

    function checkAnswer(selectedOption) {
        const correctAnswer = questions[currentQuestionIndex].correct;

        switch (selectedOption) {
            case correctAnswer:
                score++;
                resultElement.textContent = "Correct!";
                resultElement.style.color = "green";
                break;
            default:
                resultElement.textContent = `Wrong! The correct answer is: ${correctAnswer}`;
                resultElement.style.color = "red";
                break;
        }

        nextButton.style.display = "block";
    }

    nextButton.addEventListener("click", () => {
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            resultElement.textContent = "";
            nextButton.style.display = "none";
            displayQuestion();
        } else {
            quizContainer.innerHTML = `<h2>Quiz Completed!</h2>
                                       <p>You scored ${score} out of ${questions.length}.</p>`;
        }
    });

    displayQuestion();
});