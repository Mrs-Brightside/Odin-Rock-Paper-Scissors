//function will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.
function getComputerChoice () {
    const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >=1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}

function playRound (playerSelection) {
    
    const computerMove = getComputerChoice();
    
    let result = '';
    
    if (playerSelection === 'rock' ) {
        if (computerMove === 'rock') {
            result = 'You tied.';
        } else if (computerMove === 'paper') {
            result = 'You Lose! Paper beats rock.'; 
        } else if (computerMove === 'scissors') {
            result = "You Win! Rock beats scissors.";
        }

    } else if  (playerSelection === 'paper' ) {
        if (computerMove === 'rock') {
            result = 'You Win! Paper beats rock.';
        } else if (computerMove === 'paper') {
            result = 'You Tied.'; 
        } else if (computerMove === 'scissors') {
            result = "You Lose! Scissors beats paper.";
        }

    } else if (playerSelection === 'scissors' ) {
        if (computerMove === 'rock') {
            result = 'You Lose! Rock beats scissors.';
        } else if (computerMove === 'paper') {
            result = 'You win! Scissors beats paper.'; 
        } else if (computerMove === 'scissors') {
            result = "You Tied.";
        }
    };

    return result;
};

console.log(playRound('scissors'));