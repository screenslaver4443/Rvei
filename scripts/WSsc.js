var ops = ['+', '-', '*', '/'];
var Question1 = document.getElementById('Q1')

function generateQuestions(){
    // Question 1 Generation
    let Q1ValueA = Math.floor(Math.random() * 100); //Generates a number between 1 & 100
    let Q1ValueB = Math.floor(Math.random() * 100);
    let Q1Op = ops[Math.floor(Math.random()*ops.length)];
    console.log(Q1ValueA)
    console.log(Q1Op)
    console.log(Q1ValueB)
    Question1.textContent = ('Question 1: '+Q1ValueA+Q1Op+Q1ValueB+'=');
    console.log(Question1);
}