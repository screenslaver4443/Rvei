var ops = ['+', '-', '*', '/'];
var questions = [
    document.getElementById('Q1'),
    document.getElementById('Q2'),
    document.getElementById('Q3'), 
    document.getElementById('Q4'), 
    document.getElementById('Q5'), 
];
function generateQuestions(){
    console.log('Function Run')
    for (let i = 0; i < questions.length; i++) {
        let valueA = Math.floor(Math.random() * 100); //Generates a number between 1 & 100
        let valueB = Math.floor(Math.random() * 100); //Generates a number between 1 & 100
        let operation = ops[Math.floor(Math.random()*ops.length)]
        questions[i].textContent = ('Question '+(i+1)+': '+valueA+operation+valueB+'=')
    }
}

