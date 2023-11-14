function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        return 'rock';
    } else if (randomNumber < 2 / 3) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound() {
    const playerSelection = prompt('Choose rock, paper, or scissors').toLowerCase();
    const computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        return 'You tied.';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return 'You Win!';
    } else {
        return 'You Lose!';
    }
}

function game() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        const result = playRound();
        console.log(result);
        if (result === 'You Win!') {
            score++;
        }
    }
    if (score >= 3) {
        console.log('You are the final winner');
    } else {
        console.log('You lost the game');
    }
}

game();


