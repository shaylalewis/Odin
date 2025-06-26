
function getCompPick() {
    const randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum === 1) {
        return "Rock"
    } else if (randomNum === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function getHumanPick() {
    let userPick = prompt("Make a decision")
    return userPick
}


function playGame() {
    let compScore = 0
    let humanScore = 0

    function playRound(humanPick, computerPick) {
        if (humanPick == computerPick) {
            console.log("It's a tie.")
        } else if (humanPick == "Rock" && computerPick == "Paper") {
            console.log("You lose :(")
            compScore++
        } else if (humanPick == "Paper" && computerPick == "Rock") {
            console.log("You win :)")
            humanScore++
        } else if (humanPick == "Rock" && computerPick == "Scissors") {
            console.log("You win :)")
            humanScore++
        } else if (humanPick == "Paper" && computerPick == "Scissors") {
            console.log("You lose :(")
            compScore++
        } else if (humanPick == "Scissors" && computerPick == "Paper") {
            console.log("You win :)")
            humanScore++
        } else if (humanPick == "Scissors" && computerPick == "Rock") {
            console.log("You lose :(")
            compScore++
        } else {
            console.log("Invalid input")
        }

        // Print scores
        console.log(`Score — You: ${humanScore} | Computer: ${compScore}`);
    }

    // Play 5 rounds
    for (let round = 1; round <= 5; round++) {
        console.log(`\n--- Round ${round} ---`);

        let computerPick = getCompPick();
        let humanPick = getHumanPick();

        console.log("Computer picked:", computerPick);
        console.log("You picked:", humanPick);

        playRound(humanPick, computerPick);
    }

    // Final result
    console.log("\n=== Final Result ===");
    if (humanScore > compScore) {
        console.log("🎉 You won the game!");
    } else if (compScore > humanScore) {
        console.log("😢 You lost the game.");
    } else {
        console.log("🤝 It's a tie!");
    }

}

playGame();
