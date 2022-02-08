const option = ['rock', 'paper', 'scissors'];

function computerChoice() {
    let optionNumber = Math.floor(Math.random(option) * 3);
    return option[optionNumber];
}

function myChoice(message='Rock, paper or scissors? Choose one!') {
    let userChoice = prompt(message).toLowerCase();

    if (option.includes(userChoice)) {
        return userChoice;
    } else {
        alert('Wrong input!');
        return myChoice('WRONG! Try again! Rock, paper or scissors? Choose one!');
    }
}

function compare(){
   let user=myChoice();
   let computer=computerChoice();
if(computer == user)
{return 'Computer chose '+computer+'.  User chose ' +user+ '.  DRAW!'}
else if (computer=='rock' && user=='scissors' || computer=='scissors' && user=='paper' || computer=='paper' && user=='rock' ){
    return 'Computer chose '+computer+'.  User chose ' +user+ '.  Computer win!'}
else { return 'Computer chose '+computer+'. User chose ' +user+ '.  User win!'}
}
