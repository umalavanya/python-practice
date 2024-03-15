function calculateScore() {
    const form = document.getElementById('examForm');
    const resultDiv = document.getElementById('result');
    const scoreParagraph = document.getElementById('score');

    let score = 0;

    // Check answers for each question
    const answers = {
        q1: 'b',
        q2: 'b',
        q3: 'a',
        q4: 'a',
        q5: 'a',
        q6: 'd',
        q7: 'a',
        q8: 'b',
        q9: 'c',
        q10: 'b',

        // Add more answers as needed
    };

    for (const question in answers) {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption) {
            if (selectedOption.value === answers[question]) {
                score++;
            }
        }
    }

    // Display the result
    scoreParagraph.textContent = `${score} out of ${Object.keys(answers).length}`;
    resultDiv.classList.remove('hidden');
}
