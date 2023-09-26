const cardOne = document.querySelector('.card__inner__One');
const cardHeaders = ['First Index Law', 'Second Index Law', 'Third Index Law', 'Fourth Index Law', 'Fifth Index Law', 'Sixth Index Law', 'Seventh Index Law'];
const cardBodies = ['<img src="" alt="" class="ind1">', '<p>test</p>']; //todo: Fix this shit
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
    cardBodyBackHtml.innerHTML = cardBodies[cardNumber];
}

function changeCardLeft() {
    if (cardNumber >0){
        cardNumber--;
    }
    updateCard();
}
function changeCardRight() {
    if (cardNumber <8){
        cardNumber++;
    }
    updateCard();
}