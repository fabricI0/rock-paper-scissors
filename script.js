// Global variables
let playerWins = 0;
let computerWins = 0;
let array = ["rock", "paper", "scissors"];
let validInput = 0;
let newRound = "";

// This function generates a computer selection
const computerPlay = () => {
    return array[Math.floor(Math.random() * array.length)];
}

// This function stores player selection
const playerSelection = (selection) => {
    selection = prompt("Enter: 'Rock', 'Paper' or 'Scissors'").toLowerCase();
    validInput = array.indexOf(selection);
    console.log(validInput);

    // This loop will validate user input is correct
    while (validInput === -1) {
        alert("Invalid input, try again");
        selection = prompt("Enter 'Rock', 'Paper' or 'Scissors'").toLowerCase();
        validInput = array.indexOf(selection);
    }
    return selection;
}

// This function plays a single round of Rock-Paper-Scissors
const playRound = (playerSelection, computerPlay) => {

    // If both players select the same item
    if (playerSelection === computerPlay) {
        return alert("It's a tie!");
    }

    // If player selects "Rock"
    if (playerSelection === "rock") {
        if (computerPlay === "scissors") {
            playerWins += 1;
            return alert("Rock crushes scissors: YOU WIN!!!");
        } else {
            computerWins += 1;
            return alert("Paper covers rock: YOU LOOSE!!!");
        }
    }

    // If player selects "Paper"
    if (playerSelection === "paper") {
        if (computerPlay === "rock") {
            playerWins += 1;
            return alert("Paper covers rock: YOU WIN!!!");
        } else {
            computerWins += 1;
            return alert("Scissors cuts paper: YOU LOOSE!!!");
        }
    }

    // If player selects "Scissors"
    if (playerSelection === "scissors") {
        if (computerPlay === "rock") {
            computerWins += 1;
            return alert("Rock crushes scissors: YOU LOOSE!!!");
        } else {
            playerWins += 1;
            return alert("Scissors cuts paper: YOU WIN!!!");
        }
    }
}

// This function keeps score and reports a winner or loser at the end
const trackWins = (pw, cw) => {
    alert("COMPUTER WINS: " + cw + "\nPLAYER WINS: " + pw)
    if (pw > cw) {
        alert("YOU WIN THIS ROUND, CONGRAX!!!")
    } else if (cw > pw) {
        alert("YOU LOOSE THIS ROUND, SO BEST LUCK FOR THE NEXT TIME :_(")
    } else {
        alert("IT'S A TIE")
    }
}

// This function creates a 5 round game
const game = () => {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection(), computerPlay());
    }
    trackWins(playerWins, computerWins);
}

do {
    game();
    newRound = prompt("Do yo want to play another round? Type 'y' to continue or any other key to exit").toLowerCase();
    playerWins = 0;
    computerWins = 0;
} while (newRound === "y");
alert("It was a good game, bye for now!")