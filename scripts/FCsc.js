const cardOne = document.querySelector('.card__inner__One');
const cardHeaders = ['First Index Law', 'Second Index Law', 'Third Index Law', 'Fourth Index Law', 'Fifth Index Law', 'Sixth Index Law', 'Seventh Index Law', '0 Law'];
const cardBodies = ['images/1stlaw.jpg', 'images/2ndlaw.webp', 'images/3rdlaw.jpg', 'images/4thLaw.png', 'images/5thLaw.png', 'images/6thlaw.png', 'images/7thlaw.png', 'images/0law.jpg']; 
const cardHeadFrontHtml = document.getElementById('cardHeaderF');
const cardHeadBackHtml = document.getElementById('cardHeaderB');
const cardBodyBackHtml = document.getElementById('cardBody');
var cardNumber = 0 

function cardFlip__One() {
    cardOne.classList.toggle('is-flipped');
}

function updateCard(){
    cardHeadFrontHtml.innerHTML = cardHeaders[cardNumber];
    cardHeadBackHtml.innerHTML = cardHeaders[cardNumber];
    cardBodyBackHtml.src = cardBodies[cardNumber];
}

function changeCardLeft() {
    if (cardNumber >0){
        cardNumber--;
    }
    updateCard();
}
function changeCardRight() {
    if (cardNumber < 7){
        cardNumber++;
    }
    updateCard();
}