"use strict";
const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";
const QUIT = "quit";
class RockPaperScissor {
    constructor() {
        this.currentRound = 0;
        this.playerOneWins = 0;
        this.computerWins = 0;
        this.rpsChoices = ["rock", "paper", "scissor", "quit"];
        this.maxRounds = 5;
    }
    startGame(playerSelection) {
        console.log(`Round ${this.currentRound + 1}`);
        if (playerSelection === null) {
            console.log(`User quit the game`);
            return;
        }
        if (playerSelection.trim() === "") {
            console.log("Input was empty.");
            return;
        }
        if (this.rpsChoices.includes(playerSelection.toLowerCase())) {
            playerSelection = playerSelection.toLowerCase();
        }
        else {
            console.log(`Invalid input.`);
            return;
        }
        const computerSelection = this.getComputerChoice();
        const results = this.playRound(playerSelection, computerSelection);
        this.currentRound += 1;
    }
    getComputerChoice() {
        const randomChoice = Math.floor(Math.random() * this.rpsChoices.length);
        return this.rpsChoices[randomChoice].toLowerCase();
    }
    playRound(playerSelection, computerSelection) {
        let message = `Something went wrong :3`;
        switch (playerSelection.toLowerCase()) {
            case "rock":
                switch (computerSelection.toLowerCase()) {
                    case "rock":
                        message = "Tie!";
                        break;
                    case "paper":
                        message = "Computer wins!";
                        this.computerWins += 1;
                        break;
                    case "scissor":
                        message = "Player wins!";
                        this.playerOneWins += 1;
                        break;
                    default:
                        console.log(`Something went wrong.1`);
                }
                ;
                break;
            case "paper":
                switch (computerSelection.toLowerCase()) {
                    case "rock":
                        message = "Player wins!";
                        this.playerOneWins += 1;
                        break;
                    case "paper":
                        message = "Tie!";
                        break;
                    case "scissor":
                        message = "Computer wins!";
                        this.computerWins += 1;
                        break;
                    default:
                        console.log(`Something went wrong.2`);
                }
                ;
                break;
            case "scissor":
                switch (computerSelection.toLowerCase()) {
                    case "rock":
                        message = "Computer wins!";
                        break;
                    case "paper":
                        message = "Player wins!";
                        break;
                    case "scissor":
                        message = "Tie!";
                        break;
                    default:
                        console.log(`Something went wrong.3`);
                }
                ;
                break;
            default:
                console.log(`Something went wrong.`);
                break;
        }
        return message;
    }
    endGameResults() {
        let gameWinner;
        if (this.playerOneWins > this.computerWins) {
            gameWinner = "Player";
        }
        else if (this.playerOneWins < this.computerWins) {
            gameWinner = "Computer";
        }
        else {
            gameWinner = "No victor";
        }
        console.log(`Final Scores: \n
        Player: ${this.playerOneWins} 
        Computer: ${this.computerWins}

        Winner: ${gameWinner}
        `);
    }
}
const currentRPS = new RockPaperScissor();
const btnRock = document.querySelector(`#selection-rock`);
btnRock === null || btnRock === void 0 ? void 0 : btnRock.addEventListener('click', () => {
    console.log("You selected rock!");
});
const btnPaper = document.querySelector('#selection-paper');
btnPaper === null || btnPaper === void 0 ? void 0 : btnPaper.addEventListener('click', () => {
    console.log("You selected paper!");
});
const btnScissor = document.querySelector('#selection-scissor');
btnScissor === null || btnScissor === void 0 ? void 0 : btnScissor.addEventListener('click', () => {
    console.log("You selected scissor!");
});
//# sourceMappingURL=script.js.map