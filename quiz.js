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
    let userAnswers = new Array(questions.length).fill(null);

    const quizContainer = document.getElementById("quiz-container");
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextButton = document.getElementById("next-btn");
    const prevButton = document.getElementById("prev-btn");

    function displayQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
        optionsElement.innerHTML = "";

        currentQuestion.options.forEach((option) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.classList.add("option-btn");

           
            if (userAnswers[currentQuestionIndex] === option) {
                button.classList.add("selected");
            }

            button.addEventListener("click", () => selectAnswer(option));
            optionsElement.appendChild(button);
        });

       
        prevButton.style.display = currentQuestionIndex > 0 ? "block" : "none";
        nextButton.textContent = currentQuestionIndex === questions.length - 1 ? "Submit" : "Next";
        nextButton.style.display = userAnswers[currentQuestionIndex] ? "block" : "none";
    }

    function selectAnswer(selectedOption) {
        userAnswers[currentQuestionIndex] = selectedOption;

        
        document.querySelectorAll(".option-btn").forEach((btn) => {
            btn.classList.remove("selected");
            if (btn.textContent === selectedOption) {
                btn.classList.add("selected");
            }
        });

        nextButton.style.display = "block"; // Show "Next" button when an option is selected
    }

    nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
        } else {
            displayResults();
        }
    });

    prevButton.addEventListener("click", () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion();
        }
    });

    function displayResults() {
        let score = 0;
        quizContainer.innerHTML = `<h2>Quiz Completed!</h2>`;

        questions.forEach((q, index) => {
            const userAnswer = userAnswers[index];
            const correctAnswer = q.correct;
            const isCorrect = userAnswer === correctAnswer;
            if (isCorrect) score++;

            let resultItem = document.createElement("div");
            resultItem.classList.add("result-item");
            resultItem.innerHTML = `
                <p>${index + 1}. ${q.question}</p>
                <p>Your answer: <span class="${isCorrect ? "correct" : "incorrect"}">${userAnswer || "No answer"}</span></p>
                ${!isCorrect ? `<p>Correct answer: <span class="correct">${correctAnswer}</span></p>` : ""}
            `;
            quizContainer.appendChild(resultItem);
        });

        let finalScore = document.createElement("p");
        finalScore.innerHTML = `<strong>Your score: ${score} out of ${questions.length}</strong>`;
        quizContainer.appendChild(finalScore);
    }

    displayQuestion();
});
