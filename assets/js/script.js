document.addEventListener('DOMContentLoaded', () => {

const defaultImage = 'assets/images/ireland.jpg',
      maxFlip = 2,
      cardList = [
        {
            name: 'boat',
            img: 'assets/images/bunnagee.jpg'
        },
        {
            name: 'waterfall',
            img: 'assets/images/waterfall.jpg'
        },
        {
            name: 'beach',
            img: 'assets/images/donegal_beach.jpg'
        },
        {
            name: 'island',
            img: 'assets/images/skellig_michael.jpg'
        },
        {
            name: 'lighthouse',
            img: 'assets/images/lighthouse.jpg'
        },
        {
            name: 'mountains',
            img: 'assets/images/mountains.jpg'
        },
        {
            name: 'arranmore',
            img: 'assets/images/arranmore.jpg'
        },
        {
            name: 'national park',
            img: 'assets/images/national_park.jpg'
        },
        {
            name: 'portnoo',
            img: 'assets/images/portnoo.jpg'
        },
        {
            name: 'dolmen',
            img: 'assets/images/dolmen.jpg'
        },
        {
            name: 'tay',
            img: 'assets/images/lough_tay.jpg'
        },
        {
            name: 'forty',
            img: 'assets/images/forty_foot.jpg'
        },
        {
            name: 'breeches',
            img: 'assets/images/the_breeches.jpg'
        },
        {
            name: 'gougane',
            img: 'assets/images/gougane_barra.jpg'
        },
        {
            name: 'bective',
            img: 'assets/images/bective.jpg'
        },
        {
            name: 'kerry',
            img: 'assets/images/kerry.jpg'
        },
        {
            name: 'letterfrack',
            img: 'assets/images/cliff.jpg'
        },
        {
            name: 'lake',
            img: 'assets/images/lake.jpg'
        }
    ];

let gameCards = [...cardList, ...cardList],
lockBoard = false,
clickedCards = [],
flipCounter = 0,
matchedCards = [];


function shuffleCards(array) {
    let arr_len = array.length - 1, temp, index;

    while (arr_len > 0) {
        // Set random index
        index = Math.floor(Math.random() * arr_len);
        // decrease the array_length by 1
        arr_len--;

        // Perform swap
        temp = array[arr_len];
        array[arr_len] = array[index];
        array[index] = temp;
    }
};

function unFlip(PreviousCard, CurrentCard) {
        let previousCard = document.querySelectorAll(`[data-name="${PreviousCard}"]`)[0];
        let currentCard = document.querySelectorAll(`[data-name="${CurrentCard}"]`)[0];

        currentCard.setAttribute('data-name', CurrentCard);
        currentCard.setAttribute('data-path', currentCard.src);
        currentCard.setAttribute('src', defaultImage);

        previousCard.setAttribute('data-name', PreviousCard);
        previousCard.setAttribute('data-path', previousCard.src);
        previousCard.setAttribute('src', defaultImage);
}

function createBoard(gameCards) {
    const grid = document.getElementById('grid');
    gameCards.forEach(element => {
        let card = document.createElement('img');
        card.setAttribute('src', defaultImage);
        card.setAttribute('data-name', element.name);
        card.setAttribute('data-path', element.img);
        card.classList.add('card');
        card.onclick = function () {
            flipCard(this);
        };
        grid.appendChild(card);
        });   
          
}
shuffleCards(gameCards); 
createBoard(gameCards);



 
function flipCard(card) {
    //Flip card
    card.classList.add('flip', 'card-front', 'card-back');
 //  if (flipCounter < 3); {
  //     flipCounter++;
 // }
    card.src = card.getAttribute('data-path');
 //  let cardName = card.getAttribute('data-name');
  if(flipCounter === maxFlip){
      setTimeout(checkForMatch, 500);
  }
};

function checkForMatch(card) {
    card.src = card.getAttribute('data-path');
    let cardName = card.getAttribute('data-name');
     if(parseInt(flipCounter) === 1) {
        currentName = cardName;
       return; 

     } else if (parseInt(flipCounter) === parseInt(maxFlip)) {
        flipCounter = 0;
      ///check if cards match and push matched cards to array
     } else if (cardName === currentName) {
         flipCounter = 0;
         currentName = '';
         matchedCards.push(card);
         console.log(matchedCards);
         //check if cards do not match
         //reset flipcounter and currentName
     } else if (flipCounter === maxFlip && cardName !== currentName) {
          timeoutID = window.setTimeout(function (){
          let images = document.querySelectorAll(`[data-name*="${currentName}"]`);
          images.forEach(img => {
          img.src = defaultImage;
          });
          flipCounter = 0;
          currentName = '';
          card.src = defaultImage;
          clearTimeout(timeoutID);
          }, 1500) 
     };
      unFlip();
    }
});
