document.addEventListener('DOMContentLoaded', () => {

    const defaultImage = 'assets/images/ireland.jpg',
        maxFlip = 2,
        cardList = [{
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
                name: 'mountains',
                img: 'assets/images/mountains.jpg'
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
                name: 'forty',
                img: 'assets/images/forty_foot.jpg'
            },
            {
                name: 'breeches',
                img: 'assets/images/the_breeches.jpg'
            },
            {
                name: 'bective',
                img: 'assets/images/bective.jpg'
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
    // gameWin = document.querySelector('win-overlay'),
    //  gameOver = document.querySelector('lose-overlay');



    let gameCards = [...cardList, ...cardList],
        flipCounter = 0,
        matchedCards = [],
        timeRemaining,
        currentName = '',
        clickCounter = 0,
        previousImageId = 0;


    //bug back in game timer!!
    //Function from Stack Overflow
    function gameTimer(duration, display) {
        let start = Date.now(),
            diff,
            minutes,
            seconds;

        function timer() {
            diff = duration - (((Date.now() - start) / 1000) | 0);
            minutes = (diff / 60) | 0;
            seconds = (diff % 60) | 0;

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (diff <= 0) {
                start = Date.now() + 1000;
            }
        };
        setInterval(timer, 1000);
        timer();
    };


    //start timer on first card click
    let gameBoard = document.querySelector('.board');
    gameBoard.onclick = (function() {
        if (parseInt(flipCounter) < 2) {
            gameBoard.removeAttribute('onclick');
            let timeRemaining = 60 / 4,
                display = document.querySelector('#timer');
            gameTimer(timeRemaining, display);
        };
    });


    //increment flip counter with every card click
    function flipCount() {
        clickCounter++;
        let clickCount = document.querySelector('#flip-counter');
        clickCount.textContent = clickCounter;
    };


    //randomize cards
    function shuffleCards(array) {
        let arr_len = array.length - 1,
            temp, index;

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


    //populate game board
    function createBoard(gameCards) {
        const grid = document.getElementById('grid');

        let id = 1;
        gameCards.forEach(element => {
            let card = document.createElement('img');
            card.setAttribute('id', id);
            card.setAttribute('src', defaultImage);
            card.setAttribute('data-name', element.name);
            card.setAttribute('data-path', element.img);
            card.classList.add('card');
            card.onclick = function() {
                flipCard(this);
                flipCount();
            };
            grid.appendChild(card);
            id++;
        });

    }
    shuffleCards(gameCards);
    createBoard(gameCards);


    function flipCard(card) {
        //Flip card
        card.classList.add('flip', 'card-front', 'card-back');
        card.src = card.getAttribute('data-path');
        setTimeout(checkForMatch(card), 1000);
    };

    //check if cards match
    function checkForMatch(card) {
        card.src = card.getAttribute('data-path');
        let cardName = card.getAttribute('data-name');

        let currentImgId = card.getAttribute('id');
        flipCounter++;
        if (parseInt(flipCounter) === 1) {
            currentName = cardName;
            previousImgId = card.getAttribute('id');
            return;
        } else if (cardName === currentName) {
            flipCounter = 0;
            currentName = '';
            matchedCards.push(card);
            //check if cards do not match
            //reset flip-counter and currentName
        } else if (flipCounter === maxFlip && cardName !== currentName) {
            timeoutID = window.setTimeout(function() {
                unFlip(previousImgId, currentImgId);
                flipCounter = 0;
                currentName = '';
            }, 2000)
        };
    };

    // 3d flip needs to be fixed
    function unFlip(PreviousCard, CurrentCard) {
        let previousCard = document.querySelectorAll(`[id="${PreviousCard}"]`)[0];
        let currentCard = document.querySelectorAll(`[id="${CurrentCard}"]`)[0];

        previousCard.classList.add('card-back', 'card-front', 'flip');
        currentCard.classList.add('card-back', 'card-front', 'flip');

        currentCard.setAttribute('data-name', CurrentCard);
        currentCard.setAttribute('data-path', currentCard.src);
        currentCard.setAttribute('src', defaultImage);

        previousCard.setAttribute('data-name', PreviousCard);
        previousCard.setAttribute('data-path', previousCard.src);
        previousCard.setAttribute('src', defaultImage);
    };

    (function loseGame() {
        if (matchedCards.length < gameCards.length && timeRemaining === 0 || flipCounter === 98) {
            //   gameOver;
            document.getElementsByClassName('win-overlay').style.display = 'none';
            document.getElementsByClassName('lose-overlay').style.display = 'block';
        }
        resetGame()
    })();

    (function winGame() {
        if (matchedCards.length === gameCards.length && timeRemaining > 0 && flipCounter < 98) {
            // gameWin;
            document.getElementsByClassName('win-overlay').style.display = 'block';
            document.getElementsByClassName('lose-overlay').style.display = 'none';
        }
        resetGame();
    })();

    function resetGame() {
        flipCounter = 0;
        currentName = '';
        clickCounter = 0;
        previousImageId = 0;
        matchedCards = [];
        shuffleCards(gameCards);
        // createBoard(gameCards);
    }
});