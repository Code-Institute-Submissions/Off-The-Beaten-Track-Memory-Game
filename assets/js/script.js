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


    let gameCards = [...cardList, ...cardList],
        flipCounter = 0,
        firstClick = 0,
        matchedCards = [],
        timeRemaining,
        currentName = '',
        clickCounter = 98,
        previousImgId = 0,
        timerId;

    document.getElementById("resetBtn1").addEventListener("click", resetGame, false);
    document.getElementById("resetBtn2").addEventListener("click", resetGame, false);
    document.getElementById("resetBtn3").addEventListener("click", resetGame, false);


    //Function from Stack Overflow
    function gameTimer(duration, display) {
        let timer = duration,
            minutes, seconds;

        timerId = setInterval(function() {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            display.textContent = minutes + ':' + seconds;

            if (timer-- <= 0) {
                loseGame(timer);
                timer = duration;
                clearTimeout(timerId);
            };
            // stop timer if game is won
            if (matchedCards.length === 1) {
                clearTimeout(timerId);
            };
        }, 1000);
    }


    //start timer on first card click
    let gameBoard = document.querySelector('.board');
    gameBoard.onclick = (function() {
        firstClick++
        //remove onclick after first card is clicked
        if (parseInt(firstClick) < 2) {
            gameBoard.removeAttribute('onclick');
            timeRemaining = 60 * 2,
                display = document.querySelector('#timer');
            gameTimer(timeRemaining, display);
        };
    });


    //decrement flip counter with every card click
    function flipCount() {
        clickCounter--;
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
                //lock board when 2 cards have been flipped
                if (flipCounter < 2) {
                    flipCard(this);
                    flipCount();
                }
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
        //check if game is won , display win overlay
        if (matchedCards.length === 1 && timeRemaining > 0 && clickCounter > 0) {
            document.getElementsByClassName('win-overlay')[0].style.display = 'block';
        };
    };


    //if cards do not match, return to starting position
    function unFlip(PreviousCard, CurrentCard) {
        let previousCard = document.querySelectorAll(`[id='${PreviousCard}']`)[0];
        let currentCard = document.querySelectorAll(`[id='${CurrentCard}']`)[0];

        previousCard.classList.remove('card-back', 'card-front', 'flip');
        currentCard.classList.remove('card-back', 'card-front', 'flip');

        currentCard.setAttribute('data-name', currentCard.getAttribute('data-name'));
        currentCard.setAttribute('data-path', currentCard.src);
        currentCard.setAttribute('src', defaultImage);

        previousCard.setAttribute('data-name', previousCard.getAttribute('data-name'));
        previousCard.setAttribute('data-path', previousCard.src);
        previousCard.setAttribute('src', defaultImage);
    };

    function loseGame(timeRemaining) {
        if (matchedCards.length < gameCards.length && timeRemaining <= 0 || clickCounter === 0) {
            document.getElementsByClassName('lose-overlay')[0].style.display = 'block';
        }
    };


    function resetGame() {
        document.getElementsByClassName('win-overlay')[0].style.display = 'none';
        document.getElementsByClassName('lose-overlay')[0].style.display = 'none';

        flipCounter = 0;
        currentName = '';
        clickCounter = 98;
        previousImageId = 0;
        matchedCards = [];
        timeRemaining = 0;
        firstClick = 0;

        let node = document.getElementById('grid');
        node.innerHTML = '';

        shuffleCards(gameCards);
        createBoard(gameCards);

        let clickCount = document.querySelector('#flip-counter');
        clickCount.textContent = 98;
        let timer = document.querySelector('#timer');
        timer.textContent = '00:00';
        clearInterval(timerId);
    }
});