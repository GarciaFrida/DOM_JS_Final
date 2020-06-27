const gameHolder = document.getElementById("game");
console.log(gameHolder)

let cards = [['card1',"cat", "img.jpg"],['card2',"cat", "img.jpg"],['card3',"dog", "img.jpg"],['card4','dog', "img.jpg"]].map(cardArr=>{
    return {
        id:cardArr[0],
        node:createCard(cardArr[0]),
        sideShown:'front',
        value:cardArr[1],
        faceImage:cardArr[2]
    }
})

for (var i = 0; i < [cards].length; i++) {
    cards[i].addEventListener("click", displayCard);
};

var cardsShown = function(){
    this.classlist.toggle("up");
    this.classlist.toggle("show");
    this.classlist.toggle("remove");
}

function shuffle(array) {
var (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
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

window.onload = startGame();


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


 let restartButton = document.createElement("button");
 restartButton.setAttribute("class", "button")

