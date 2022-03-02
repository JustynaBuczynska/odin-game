const option = ['rock', 'paper', 'scissors'];

function computerChoice() {
    let optionNumber = Math.floor(Math.random(option) * 3);
    return option[optionNumber];
}

let winComp = 0;
let winUser = 0;
function compare(choice) {
    let user = choice;
    let computer = computerChoice();
    if (computer == user) {
        return 'Computer chose ' + computer + '.  User chose ' + user + '.  DRAW! Computer = ' + winComp + ' User = ' + winUser;
    }
    else if (computer == 'rock' && user == 'scissors' || computer == 'scissors' && user == 'paper' || computer == 'paper' && user == 'rock') {
        winComp++;
        return 'Computer chose ' + computer + '.  User chose ' +
            user + '.  Computer win! Computer = ' + winComp + ' User = ' + winUser;
    }
    else {
        winUser++;
        return 'Computer chose ' + computer + '. User chose ' + user + '.  User win! Computer = ' + winComp + ' User = ' + winUser;
    }
}



const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
    playGame('rock');
 });

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    playGame('paper')
    });

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    playGame('scissors')

});

function playGame(choice) {
    let result = compare(choice);
    viewResults(result);
    endGame();
}

function viewResults(message) {
    const container = document.querySelector('#container');
    container.textContent = message;

}

function endGame() {
    if (winComp == 5) {
        alert(`END GAME. Computer WON!   Computer  `+ winComp + ` : `+ winUser +`  User`);
        winComp = 0;
        winUser = 0;
        viewResults("");
    } else if (winUser == 5) {
        alert(`END GAME. User WON!   Computer  `+ winComp + ` : `+ winUser +`  User`);
        winComp = 0;
        winUser = 0;
        viewResults("");
    }
}