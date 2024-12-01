function checkAnswers() {
    const answers = [
        { id: 'q1', answer: 'House' },
        { id: 'q2', answer: 'Tomorrow' },
        { id: 'q3', answer: 'Book' },
        { id: 'q4', answer: 'Chocolate' },
        { id: 'q5', answer: 'Bee' },
        { id: 'q6', answer: 'Banana' },
        { id: 'q7', answer: 'Athlete' },
    ];

    let score = 0;

    answers.forEach((question) => {
        const userAnswer = document.getElementById(question.id).value.trim();
        if (userAnswer.toLowerCase() === question.answer.toLowerCase()) {
            score++;
            document.getElementById(question.id).style.borderColor = '#4caf50';  // Green for correct
        } else {
            document.getElementById(question.id).style.borderColor = '#f44336';  // Red for incorrect
        }
    });

    document.getElementById('result').textContent = `You got ${score} out of ${answers.length} correct!`;
}
