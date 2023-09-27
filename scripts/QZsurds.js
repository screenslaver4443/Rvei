var ops = ['+', '-', '*', '/'];
var question = [document.getElementById('question')];
var questionNum = [document.getElementById('questionNum')];
var answersTotal = [];
var questionAnswer = '';
var q = 0;
var totalQuestionsCorrect = 0;

function reGenerateQuestionsSurds() {
    document.getElementById('answer').textContent = '. =';
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
}

function getViewerAnswer() {
    const viewersAnswer = document.querySelector('input').value;
    console.log(viewersAnswer);
    if (viewersAnswer == questionAnswer) {
        console.log('true')
        totalQuestionsCorrect + 1;
    }
}

function checkAnswerSurds() {
    document.getElementById('answer').textContent = '. = '+questionAnswer;
}

if (q >= 20) {
    //jjj
}