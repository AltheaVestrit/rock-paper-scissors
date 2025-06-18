function getComputerChoice() {
    const num = Math.floor(Math.random() * 3) + 1;
    if (num == 1) {
        return "rock";
    } else if (num == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Enter rock, paper or scissors as your choice: ");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice;
        if (humanChoice === computerChoice) {
            console.log("It's a draw! You both chose " + humanChoice + ".");
        } else if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "rock")) {
            computerScore++;
            console.log("You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + ".");
        } else {
            humanScore++;
            console.log("You win! " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + ".");
        }
    }

    for (let i = 1; i < 6; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Current scores: Computer - " + computerScore + "; Human - " + humanScore);
    }

    console.log("Final scores: Computer - " + computerScore + "; Human - " + humanScore);
}

playGame();
