function getCompPick() {
    const randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum === 1) {
        return "Rock";
    } else if (randomNum === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

let compScore = 0;
let humanScore = 0;

function playGame(humanPick) {
    const computerPick = getCompPick();

    // Call playRound and get a message back
    const roundMessage = playRound(humanPick, computerPick);

    // Update result area
    document.getElementById("result").textContent =
        `You picked ${humanPick}, Computer picked ${computerPick}. ${roundMessage}`;

    // Update score area
    document.getElementById("score").textContent =
        `You: ${humanScore} | Computer: ${compScore}`;
}

function playRound(humanPick, computerPick) {
    if (humanPick == computerPick) {
        return "It's a tie.";
    } else if (humanPick == "Rock" && computerPick == "Paper") {
        compScore++;
        return "You lose :( Paper beats Rock.";
    } else if (humanPick == "Paper" && computerPick == "Rock") {
        humanScore++;
        return "You win :) Paper beats Rock.";
    } else if (humanPick == "Rock" && computerPick == "Scissors") {
        humanScore++;
        return "You win :) Rock beats Scissors.";
    } else if (humanPick == "Paper" && computerPick == "Scissors") {
        compScore++;
        return "You lose :( Scissors beats Paper.";
    } else if (humanPick == "Scissors" && computerPick == "Paper") {
        humanScore++;
        return "You win :) Scissors beats Paper.";
    } else if (humanPick == "Scissors" && computerPick == "Rock") {
        compScore++;
        return "You lose :( Rock beats Scissors.";
    } else {
        return "Invalid input.";
    }
}
