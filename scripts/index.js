const tag = ['plus-one', 'one'];
const tag2 = ['plus-two', 'two',];
const tag3 = ['plus-tree', 'tree'];
const tag4 = ['home', 'guest'];

for (i = 0; i <= 1; i++) {
    const buttonPlusOne = document.querySelector(`.score-table__button--${tag[i]}`);
    const buttonPlusTwo = document.querySelector(`.score-table__button--${tag2[i]}`);
    const buttonPlusTree = document.querySelector(`.score-table__button--${tag3[i]}`);
    const tableScore = document.querySelector(`.score-table__score--${tag4[i]}`);
    const table = document.querySelector('.score-table__button--reset');

    let count = 0;

    buttonPlusOne.addEventListener('click', function () {
        count += 1;
        if (count > 99)
            count = 0;
            winner()
        tableScore.innerHTML = + count
    })

    buttonPlusTwo.addEventListener('click', function () {
        count += 2;
        if (count > 99)
            count = 0;
            winner()
        tableScore.innerHTML = + count
    })

    buttonPlusTree.addEventListener('click', function () {
        count += 3;
        winner()
        if (count > 99)
            count = 0;
        tableScore.innerHTML = + count;
    })

    table.addEventListener('click', function () {
        count = 0;
        tableScore.innerHTML =  0;
        winner()
    })
};

const homeScore = document.querySelector('.score-table__score--home');
const guestScore = document.querySelector('.score-table__score--guest');

function winner(){
    if(+homeScore.innerHTML > +guestScore.innerHTML)
    homeScore.classList.add('score-table__score--winner')
    else 
    homeScore.classList.remove('score-table__score--winner')
    if(+guestScore.innerHTML > +homeScore.innerHTML)
    guestScore.classList.add('score-table__score--winner')
    else 
    guestScore.classList.remove('score-table__score--winner')
}





