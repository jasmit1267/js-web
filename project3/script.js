const randomnumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessfield');
const guessSlot = document.querySelector('.guesses');
const lowOrhi = document.querySelector('.lowOehi');
const startOver = document.querySelector('.resultparas');
const remaining = document.querySelector('.lastreslt'); 


const p = document.createElement('p')

let preGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess= parseInt(userInput.vlaue);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number ')
    }else if(guess<1){
        alert('please enter more than 1')
    }else if(guess>100){
        alert('please enter lee than 100')
    }else{
        preGuess.push(guess)
        if(numGuess==11){
            displayguess(guess)
            displayMessage(`game over. random number was ${randomNumber}`)
            endgame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`you guessed right number `)
        endGame()
    }else if(guess<randomNumber){
        displayMessage(`number is too low`)
    }else if ( )
}