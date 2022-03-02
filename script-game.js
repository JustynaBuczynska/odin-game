const option = ['rock', 'paper', 'scissors'];

function computerChoice() {
    let optionNumber = Math.floor(Math.random(option) * 3);
    return option[optionNumber];
}

let winComp=0;
let winUser=0;
function compare(choice) {
    let user = choice;
    let computer = computerChoice();
    if (computer == user) { 
        return 'Computer chose ' + computer + '.  User chose ' + user + '.  DRAW!' }
    else if (computer == 'rock' && user == 'scissors' || computer == 'scissors' && user == 'paper' || computer == 'paper' && user == 'rock') {
        winComp++;
        return 'Computer chose ' + computer + '.  User chose ' +
         user + '.  Computer win! Computer = ' + winComp + ' User = ' + winUser;
    }
    else { 
        winUser++;
        return 'Computer chose ' + computer + '. User chose ' + user + '.  User win! Computer = ' + winComp + ' User = ' + winUser; }
}



const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
    let result = compare('rock');
    viewResults(result);
});

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {

    let result = compare('paper');
    viewResults(result);
});

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {

    let result = compare('scissors');
    viewResults(result);

});

function viewResults(message) {
    const container = document.querySelector('#container');
    const results = document.createElement('div');
    results.classList.add('results');
    results.textContent = message;
    container.appendChild(results);
}