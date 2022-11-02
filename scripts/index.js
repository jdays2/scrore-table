const homeScore = document.querySelector('.score-table__score--home');
const guestScore = document.querySelector('.score-table__score--guest');

function winner() {
    if (Number(homeScore.innerHTML) > Number(guestScore.innerHTML)) {
        guestScore.classList.remove('score-table__score--winner');
        homeScore.classList.add('score-table__score--winner')
    }
    else {
        homeScore.classList.remove('score-table__score--winner');
        guestScore.classList.add('score-table__score--winner')
        
    }};

const buttons = document.querySelectorAll(".score-table__buttons-wrapper");

buttons.forEach(function (element) {
    let counter = 0;
    element.addEventListener("click", function (event) {
        if (event.target.tagName !== "BUTTON") {
            return;
        }
    const table = element
            .closest(".score-table__box")
            .querySelector(".score-table__score");
        const value = +event.target.innerHTML.trim();
        table.innerHTML = Number(table.innerHTML) + value;
        winner()
    });
});

const newGame = document.querySelector(".score-table__button--reset");
let score = document.querySelectorAll(".score-table__score");

newGame.addEventListener("click", function () {
    score.forEach(function (element) {
        element.innerHTML = 0;
        homeScore.classList.remove('score-table__score--winner'),
        guestScore.classList.remove('score-table__score--winner');
    });
});