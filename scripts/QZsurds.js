var ops = ['+', '-', '*', '/'];
var questions = [
    document.getElementById('question')
];
var answer = [];
var q = 0;

function reGenerateQuestionsSurds() {
    q += 1;
    for (let i = 0; i < questions.length; i++) {
        let plusOrMinus = Math.random() < 0.5 ? -1 : 1; //Chooses if the next number is negative or positive
        let valueAb = Math.floor(Math.random() * 10+1)*plusOrMinus; //Generates a number between 1 & 100
        let valueBb = Math.floor(Math.random() * 10+1)*plusOrMinus; //Generates a number between 1 & 100
        plusOrMinus = Math.random() < 0.5 ? -1 : 1; //Chooses if the next number is negative or positive
        let valueAp = Math.floor(Math.random() * 5)*plusOrMinus; //Generates a number between 1 & 100
        plusOrMinus = Math.random() < 0.5 ? -1 : 1; //Chooses if the next number is negative or positive
        let valueBp = Math.floor(Math.random() * 5)*plusOrMinus; //Generates a number between 1 & 100
        let operation = ops[Math.floor(Math.random()*ops.length)];
        questions[i].innerHTML = ('<b>Question '+(i+q)+': </b>'+`${valueAb}<sup>${valueAp}</sup> ${operation} (${valueBb}<sup>${valueBp}</sup>)`);
        answer.push(Math.round(eval(`${Math.pow(valueAb, valueAp)} ${operation} ${Math.pow(valueBb, valueBp)}`)*100)/100);
    }
}

function viewAnswers(){
    let answerhtml = ''; //Place holder for the html that the loop will append to. This is because using innerHTML in the loop will not work properly for making a list.
    // re-write from here onwards -------------------------
    for (let i = 0; i < answer.length; i++) {
        answerhtml += `<p>${answer[i]}</p>`;
    }
    document.getElementById('answer').innerHTML = '<h2>Answers:</h2><ol>'+answershtml+'</ol>';
}

const answerInput = document.getElementById('answerViewer');
    answerInput.addEventListener('keydown', (event) => {
        if (event.key == 'Enter') {
            viewAnswers()
            console.log('Enter key pressed!');
            //if answerInput.value == answer () {

            //}
            //if answerInput.value != answer () {

            //}
        }
    });