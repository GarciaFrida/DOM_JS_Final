
console.log(Math.random)


let card = document.getElementsByClassName("card");

let cards = [...card];
const deck = document.getElementById("card-deck");
let matchedCard = document.getElementsByClassName("match");

let newCards = [];


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

// for (var i = 0; i < [cards].length; i++) {
//     cards[i].addEventListener("click", displayCard);
// };

var cardsShown = function(){
    this.classlist.toggle("up");
    this.classlist.toggle("show");
    this.classlist.toggle("remove");
}

// document.body.onload = startGame();

// function startGame(){
 

//     newCards = [];


//     cards = shuffle(cards);

//     for (var i = 0; i < cards.length; i++){
//         deck.innerHTML = "";
//         [].forEach.call(cards, function(item) {
//             deck.appendChild(item);
//         });
//         cards[i].classList.remove("show", "open", "match", "disabled");
//     }
// }

// const deck = document.querySelector(".deck");
// function startGame(){
//     var shuffleCards = shuffle(cards);
//     for (var i = 0; i < shuffleCards.length; i++){
//         [].forEach.call(shuffleCards, function(item){
//             deck.appendChild(item);
//         });
//     }
// }



function cardOpen() {
    newCards.push(this);
    var len = newCards.length;
    if(len ===2){
        moveCounter();
        if(newCards[0].type === newCards[1].type){
            matched();
        } else {
            unmatched();
        }
    }
};

function matched(){
    newCards[0].classList.add("match");
    newCards[1].classList.add('match');
    newCards[0].classList.remove("show", "up");
    newCards[0].classList.remove("show", "up");
    newCards = [];

}

function unmatched(){
    newCards[0].classList.add("unmatched");
    newCards[1].classList.add("unmatched");
    disable();
    setTimeout(function(){
        newCards[0].classList.remove("show", "up", "unmatched");
        newCards[1].classList.remove("show", "up", "unmatched");
        enable();
        newCards = [];

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

document.body.onload = startGame()

    function startGame(){
 

        newCards = [];


        cards = shuffle(cards);

        for (var i = 0; i < cards.length; i++){
            deck.innerHTML = "";
            [].forEach.call(cards, function(item) {
            deck.appendChild(item);
            });
            cards[i].classList.remove("show", "open", "match", "disabled");
        }
    }

function moveCounter(){
    moves++;
    moveCounter.innerHTML = moves;
}

function restartGame(){
 modal.classList.remove("show");
 startGame();
};