var ops = ['+', '-', '*', '/'];
var question = [document.getElementById('question')];
var questionNum = [document.getElementById('questionNum')];
var answersTotal = [];
var questionAnswer = '';
var q = 0;
var totalQuestionsCorrect = 0;

function startQuiz() {
    document.getElementById('start').hidden = false;
    document.getElementById('startText').textContent = 'START';
    document.getElementById('question').textContent = '';
    document.getElementById('questionNum').textContent = '';
    document.getElementById('answerText').textContent = '';
    document.getElementById('answerTextTwo').textContent = '';
    document.getElementById('answerViewer').hidden = true;
    document.getElementById('CoA').textContent = '';
    document.getElementById('answer').textContent = '';
    document.getElementById('ChA').textContent = '';
    document.getElementById('checkAnswer').hidden = true;
    document.getElementById('NQ').textContent = '';
    document.getElementById('nextQuestion').hidden = true;
    document.getElementById('QF').textContent = '';
    document.getElementById('CAP').textContent = '';
    document.getElementById('AP').textContent = '';
    document.getElementById('reset').textContent = '';
    document.getElementById('resetButton').hidden = true;
}

function reGenerateQuestionsSurds() {
    document.getElementById('start').hidden = true;
    document.getElementById('startText').textContent = '';
    document.getElementById('answerText').textContent = 'Insert Answer Below';
    document.getElementById('answerTextTwo').textContent = '(rounded to two decimal places)';
    document.getElementById('answerViewer').hidden = false;
    document.getElementById('CoA').textContent = 'Correct Answer';
    document.getElementById('ChA').textContent = 'Check Answer';
    document.getElementById('checkAnswer').hidden = false;
    document.getElementById('NQ').textContent = 'Next Question';
    document.getElementById('nextQuestion').hidden = false;
    document.getElementById('answer').textContent = '. =';
    document.getElementById('answerViewer').disabled = false;
    q += 1;
    for (let i = 0; i < questionNum.length; i++) {
        let plusOrMinus = Math.random() < 0.5 ? -1 : 1; //Chooses if the next number is negative or positive
        let valueAb = Math.floor(Math.random() * 10+1)*plusOrMinus; //Generates a number between 1 & 100
        let valueBb = Math.floor(Math.random() * 10+1)*plusOrMinus; //Generates a number between 1 & 100
        plusOrMinus = Math.random() < 0.5 ? -1 : 1; //Chooses if the next number is negative or positive
        let valueAp = Math.floor(Math.random() * 5)*plusOrMinus; //Generates a number between 1 & 100
        plusOrMinus = Math.random() < 0.5 ? -1 : 1; //Chooses if the next number is negative or positive
        let valueBp = Math.floor(Math.random() * 5)*plusOrMinus; //Generates a number between 1 & 100
        let operation = ops[Math.floor(Math.random()*ops.length)];
        question[i].innerHTML = ('<b>Question '+(i+q)+'/20:</b>')
        questionNum[i].innerHTML = (`${valueAb}<sup>${valueAp}</sup> ${operation} (${valueBb})<sup>${valueBp}</sup>`);
        answersTotal.push(Math.round(eval(`${Math.pow(valueAb, valueAp)} ${operation} ${Math.pow(valueBb, valueBp)}`)*100)/100);
        questionAnswer = (Math.round(eval(`${Math.pow(valueAb, valueAp)} ${operation} ${Math.pow(valueBb, valueBp)}`)*100)/100);
    }
    document.querySelector('input').value = '';
    finishQuiz()
    quizFinished();
    console.log('current percentage: '+totalQuestionsCorrect+'%')
}

function getViewerAnswer() {
    const viewersAnswer = document.querySelector('input').value;
    console.log('your answer: '+viewersAnswer);
    if (viewersAnswer == questionAnswer) {
        console.log('answer correct')
        totalQuestionsCorrect += 5;
        return totalQuestionsCorrect;
    }
}

function checkAnswerSurds() {
    document.getElementById('answer').textContent = '. = '+questionAnswer;
    document.getElementById('answerViewer').disabled = true;
}

function finishQuiz() {
    if (q == 20) {
        document.getElementById('NQ').textContent = 'Finish Quiz';
    }
}

function quizFinished() {
    if (q > 20) {
        console.log('quiz finished')
        console.log('correct answer percentage: '+totalQuestionsCorrect+'%')
        document.getElementById('question').textContent = '';
        document.getElementById('questionNum').textContent = '';
        document.getElementById('answerText').textContent = '';
        document.getElementById('answerTextTwo').textContent = '';
        document.getElementById('answerViewer').hidden = true;
        document.getElementById('CoA').textContent = '';
        document.getElementById('answer').textContent = '';
        document.getElementById('ChA').textContent = '';
        document.getElementById('checkAnswer').hidden = true;
        document.getElementById('NQ').textContent = '';
        document.getElementById('nextQuestion').hidden = true;
        document.getElementById('QF').textContent = 'Quiz Finished!';
        document.getElementById('CAP').textContent = 'Correct Answer Percentage:';
        document.getElementById('AP').textContent = totalQuestionsCorrect+'%';
        document.getElementById('reset').textContent = 'Restart';
        document.getElementById('resetButton').hidden = false;
    }
}