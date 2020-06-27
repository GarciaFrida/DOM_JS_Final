const gameHolder = document.getElementById("game");
console.log(gameHolder)
console.log(Math.random)

const createCard = (id) =>{
    let newCard = document.createElement("div");
    newCard.setAttribute("id", id);
    newCard.className = 'card';
    newCard.addEventListener("click", cardClicked)
    return newCard
}
//YOU NEED TO RANDOMIZE YOUR CARDS
//YOU NEED TO CHANGE THIS
const cardClicked = (evt)=>{
    let cardNode = evt.target
    let card = cards.find(card=>card.id == cardNode.id)
    turnFaceUp(card)
    if(!selected){
        selected = card;
    } else if(selected.value == card.value){
        console.log('match')
        window.setTimeout(()=>{
            card.node.parentNode.removeChild(card.node)
            selected.node.parentNode.removeChild(selected.node)
            reset()
        }, 3000)
    } else {
        console.log('No Match')
        window.setTimeout(reset, 3000)
    }
}


let cards = [['card1',"cat", "img.jpg"],['card2',"cat", "img.jpg"],['card3',"dog", "img.jpg"],['card4','dog', "img.jpg"]].map(cardArr=>{
    return {
        id:cardArr[0],
        node:createCard(cardArr[0]),
        sideShown:'front',
        value:cardArr[1],
        faceImage:cardArr[2]
    }
})

// for (var i = 0; i < [cards].length; i++) {
//     cards[i].addEventListener("click", displayCard);
// };

var cardsShown = function(){
    this.classlist.toggle("up");
    this.classlist.toggle("show");
    this.classlist.toggle("remove");
}

function shuffle(cards) {
for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = cards[i]
    cards[i] = cards[j]
    cards[j] = temp
  }
  return cards
} 

const deck = document.querySelector(".deck");
function startGame(){
    var shuffleCards = shuffle(cards);
    for (var i = 0; i < shuffleCards.length; i++){
        [].forEach.call(shuffleCards, function(item){
            deck.appendChild(item);
        });
    }
}

document.body.onload = startGame();


function cardOpen() {
    openedCards.push(this);
    var len = openedCards.length;
    if(len ===2){
        moveCounter();
        if(openedCards[0].type === openedCards[1].type){
            matched();
        } else {
            unmatched();
        }
    }
};

function matched(){
    openedCards[0].classList.add("match");
    openedCards[1].classList.add('match');
    openedCards[0].classList.remove("show", "up");
    openedCards[0].classList.remove("show", "up");
    openedCards = [];

}

function unmatched(){
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function(){
        openedCards[0].classList.remove("show", "up", "unmatched");
        openedCards[1].classList.remove("show", "up", "unmatched");
        enable();
        openedCards = [];

    },1100);
}

function disable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.add("disabled");
    });
}

function enable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.remove('disabled');
        for(var i = 0; i < matchedCard.length; i++){
            matchedCard[i].classList.add("disabled");
        }

    });
}

function moveCounter(){
    moves++;
    moveCounter.innerHTML = moves;
}

function restartGame(){
 modal.classList.remove("show");
 startGame();
}

