document.getElementById('quizForm1').addEventListener('change', function(event) {
    const result1 = document.getElementById('result1');
    if (event.target.name === 'question1') {
        if (event.target.value === 'Restaurant') {
            result1.textContent = 'Correct!';
            result1.className = 'correct';
        } else {
            result1.textContent = 'Wrong!';
            result1.className = 'wrong';
        }
    }
});

document.getElementById('quizForm2').addEventListener('change', function(event) {
    const result2 = document.getElementById('result2');
    if (event.target.name === 'question2') {
        if (event.target.value === 'Spring') {
            result2.textContent = 'Correct!';
            result2.className = 'correct';
        } else {
            result2.textContent = 'Wrong!';
            result2.className = 'wrong';
        }
    }
});
document.getElementById('quizForm3').addEventListener('change', function(event) {
    const result3 = document.getElementById('result3');
    if (event.target.name === 'question3') {
        if (event.target.value === 'Swimming Pool') {
            result3.textContent = 'Correct!';
            result3.className = 'correct';
        } else {
            result3.textContent = 'Wrong!';
            result3.className = 'wrong';
        }
    }
});

document.getElementById('quizForm4').addEventListener('change', function(event) {
    const result4 = document.getElementById('result4');
    if (event.target.name === 'question4') {
        if (event.target.value === 'Driver') {
            result4.textContent = 'Correct!';
            result4.className = 'correct';
        } else {
            result4.textContent = 'Wrong!';
            result4.className = 'wrong';
        }
    }
});

document.getElementById('quizForm5').addEventListener('change', function(event) {
    const result5 = document.getElementById('result5');
    if (event.target.name === 'question5') {
        if (event.target.value === 'Lemon') {
            result5.textContent = 'Correct!';
            result5.className = 'correct';
        } else {
            result5.textContent = 'Wrong!';
            result5.className = 'wrong';
        }
    }
});

document.getElementById('quizForm6').addEventListener('change', function(event) {
    const result6 = document.getElementById('result6');
    if (event.target.name === 'question6') {
        if (event.target.value === 'Spoon') {
            result6.textContent = 'Correct!';
            result6.className = 'correct';
        } else {
            result6.textContent = 'Wrong!';
            result6.className = 'wrong';
        }
    }
});

document.getElementById('quizForm7').addEventListener('change', function(event) {
    const result7 = document.getElementById('result7');
    if (event.target.name === 'question7') {
        if (event.target.value === 'Airplane') {
            result7.textContent = 'Correct!';
            result7.className = 'correct';
        } else {
            result7.textContent = 'Wrong!';
            result7.className = 'wrong';
        }
    }
});





