function calculateScore() {
    const form = document.getElementById('examForm');
    const resultDiv = document.getElementById('result');
    const scoreParagraph = document.getElementById('score');

    let score = 0;

    // Check answers for each question
    const answers = {
        q1: 'a',
        q2: 'b',
        q3: 'd',
        q4: 'b',
        q5: 'c',
        q6: 'a',
        q7: 'b',
        q8: 'c',
        q9: 'b',
        q10: 'a'

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
