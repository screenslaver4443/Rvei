var ops = ['+', '-', '*', '/'];
var questions = [
    document.getElementById('Q1'),
    document.getElementById('Q2'),
    document.getElementById('Q3'), 
    document.getElementById('Q4'), 
    document.getElementById('Q5'), 
];
var answers = []; //array answers
function generateQuestionsArithmatic(){

    for (let i = 0; i < questions.length; i++) {
        let valueA = Math.floor(Math.random() * 100); //Generates a number between 1 & 100
        let valueB = Math.floor(Math.random() * 100); //Generates a number between 1 & 100
        let operation = ops[Math.floor(Math.random()*ops.length)];
        questions[i].innerHTML = ('<b>Question '+(i+1)+': </b>'+valueA+operation+valueB+'=');
    }
}
function generateQuestionsSurds(){
    for (let i = 0; i < questions.length; i++) {
        let plusOrMinus = Math.random() < 0.5 ? -1 : 1; //Chooses if the next number is negative or positive
        let valueAb = Math.floor(Math.random() * 25+1)*plusOrMinus; //Generates a number between 1 & 100
        //let valueBb = Math.floor(Math.random() * 25); //Generates a number between 1 & 100
        plusOrMinus = Math.random() < 0.5 ? -1 : 1; //Chooses if the next number is negative or positive
        let valueAp = Math.floor(Math.random() * 5)*plusOrMinus; //Generates a number between 1 & 100
        plusOrMinus = Math.random() < 0.5 ? -1 : 1; //Chooses if the next number is negative or positive
        let valueBp = Math.floor(Math.random() * 5)*plusOrMinus; //Generates a number between 1 & 100
        let operation = ops[Math.floor(Math.random()*ops.length)];
        questions[i].innerHTML = ('<b>Question '+(i+1)+': </b>'+`${valueAb}<sup>${valueAp}</sup>${operation}${valueAb}<sup>${valueBp}</sup>=`);
        answers.push(Math.round(eval(`${Math.pow(valueAb, valueAp)} ${operation} ${Math.pow(valueAb, valueBp)}`)*100)/100);
    }
}
function viewAnswers(){
                  
}