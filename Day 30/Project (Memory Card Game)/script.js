const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let flipCount = 0;
let timer = 30;
let timerInterval;
let gameOver = false;

function flipCard() {
    if (lockBoard || gameOver) return;
    if (this === firstCard) return;

    this.classList.add('flipped');
    flipCount++;
    document.getElementById('flips').textContent = `Flips: ${flipCount}`;

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.card === secondCard.dataset.card;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');

        resetBoard();
    }, 1000);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function startTimer() {
    timerInterval = setInterval(() => {
        timer--;
        document.getElementById('timer').textContent = `Time: ${timer}s`;

        if (timer === 0) {
            clearInterval(timerInterval);
            gameOver = true;
            lockBoard = true;
            alert(`Time's up! You made ${flipCount} flips.`);
            restartGame();
        }
    }, 1000);
}

function restartGame() {
    clearInterval(timerInterval);
    gameOver = false;
    lockBoard = false;
    flipCount = 0;
    timer = 30;

    document.getElementById('flips').textContent = `Flips: 0`;
    document.getElementById('timer').textContent = `Time: 30s`;

    cards.forEach(card => {
        card.classList.remove('flipped');
        card.addEventListener('click', flipCard);
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });

    startTimer();
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

startTimer();
