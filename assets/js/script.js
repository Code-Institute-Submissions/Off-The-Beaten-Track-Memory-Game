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
//let clickedCards = [];
//let clickedCardsId = [];
lockBoard = false,
firstCard,
secondCard,
flipCounter = 0;


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

function flipCard(card) {
    //Flip card
    if(lockBoard)
    return;
    card.classList.add('flip');
    card.classList.add('card-front');
    flipCounter += 1;
    card.src = card.getAttribute('data-path');
    let cardName = card.getAttribute('data-name');

    if(parseInt(flipCounter === 1)) {
        currentName = cardName;
        return;
};
}

createBoard(gameCards);

});
