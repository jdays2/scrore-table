const homeScore = document.querySelector('.score-table__score--home');
const guestScore = document.querySelector('.score-table__score--guest');

function winner() {
    if (homeScore.innerHTML > guestScore.innerHTML) {
        homeScore.classList.add('score-table__score--winner'),
        guestScore.classList.remove('score-table__score--winner');
    }
    else {
        guestScore.classList.add('score-table__score--winner'),
        homeScore.classList.remove('score-table__score--winner');
    }
    if (homeScore.innerHTML == guestScore.innerHTML) {
        homeScore.classList.remove('score-table__score--winner'),
        guestScore.classList.remove('score-table__score--winner');
    }
}

let isNewGame = false;
const buttons = document.querySelectorAll(".score-table__buttons-wrapper");

buttons.forEach(function (element) {
    let counter = 0;
    element.addEventListener("click", function (event) {
        if (event.target.tagName !== "BUTTON") {
            return;
        }

        if (isNewGame) {
            counter = 0;
            isNewGame = false;
        }

        const table = element
            .closest(".score-table__box")
            .querySelector(".score-table__score");
        const value = +event.target.innerHTML.trim();
        counter = counter + value;
        table.innerHTML = counter;
        winner()
    });
});

const newGame = document.querySelector(".score-table__button--reset");
let score = document.querySelectorAll(".score-table__score");

newGame.addEventListener("click", function () {
    score.forEach(function (element) {
        element.innerHTML = 0;
        isNewGame = true;
    });
});

