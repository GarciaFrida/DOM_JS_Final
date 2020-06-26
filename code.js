const gameHolder = document.getElementById("game");
console.log(gameHolder)



//create a card function

let cards = [...card];

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", displayCard);
};

let cardsShown = ()=>{
    this.classlist.toggle("up");
    this.classlist.toggle("show");
    this.classlist.toggle("remove");
}

function shuffle(array) {
for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
} 

const deck = document.querySelector(".deck");
function startGame(){
    let shuffleCards = shuffle(cards);
    for (var i = 0; i < shuffleCards.length; i++){
        [].forEach.call(shuffleCards, function(item){
            deck.appendChild(item);
        });
    }
}

window.onload = startGame();


function cardUp() {
    openedCards.push(this);
    let len = openedCards.length;
    if(len ===2){
        moveCounter();
        if(openedCards[0].type === openedCards[1].type){
            match();
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

function enable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.remove('disabled');
        for(let i = 0; i < matchedCard.length; i++){
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
