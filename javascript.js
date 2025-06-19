const buttons = document.querySelectorAll("button");
const computerScoreSpan = document.querySelector("#computer_score");
const humanScoreSpan = document.querySelector("#human_score");
const updates = document.querySelector("#updates");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    });
});

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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        updates.textContent = "It's a draw! You both chose " + humanChoice + ".";
    } else if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "rock")) {
        computerScore++;
        computerScoreSpan.textContent = computerScore;
        updates.textContent = "You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + ".";
    } else {
        humanScore++;
        humanScoreSpan.textContent = humanScore;
        updates.textContent = "You win! " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + ".";
    }

    if (computerScore == 5 || humanScore == 5) {
        updates.textContent += " GAME COMPLETE. Final score: computer - " + computerScore + "; you - " + humanScore + ".";
        humanScore = 0;
        computerScore = 0;
        computerScoreSpan.textContent = computerScore;
        humanScoreSpan.textContent = humanScore;
    }
}