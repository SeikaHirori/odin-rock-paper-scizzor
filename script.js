"use strict";
const optionRock = "rock";
const optionPaper = "paper";
const optionScissor = "scissor";
const optionQuit = "quit";
class RockPaperScissor {
    constructor() {
        this.currentRound = 0;
        this.playerOneWins = 0;
        this.computerWins = 0;
        this.rpsChoices = ["rock", "paper", "scissor"];
        this.maxRounds = 5;
    }
    cliStartGame(playerSelection) {
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
    htmlPlayGame(playerSelection) {
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
        this.updateScoreboard();
        if (this.currentRound === this.maxRounds) {
            console.log("GAME SET!");
        }
        ;
    }
    getComputerChoice() {
        const randomInt = Math.floor(Math.random() * this.rpsChoices.length);
        const computerChoice = this.rpsChoices[randomInt].toLowerCase();
        console.log(`Computer chose: ${computerChoice}`);
        return computerChoice;
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
        console.log(`Round result: ${message}`);
        return message;
    }
    updateScoreboard() {
        const templatePlayer = "Player 1";
        const templateComputer = "Computer";
        const scorePlayer = document.querySelector('#score-player');
        scorePlayer.innerText = `${templatePlayer}: ${this.playerOneWins}`;
        const scoreComputer = document.querySelector('#score-computer');
        scoreComputer.innerText = `${templateComputer}: ${this.computerWins}`;
        const pageRound = document.querySelector('#current-round');
        const templateTextRound = "Round";
        pageRound.innerText = `${templateTextRound}: ${this.currentRound}`;
    }
    cliEndGameResults() {
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
    htmlEndGameResults() {
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
        const announcementText = `Final Scores: \n
        Player: ${this.playerOneWins}\n 
        Computer: ${this.computerWins}\n
        \n
        Winner: ${gameWinner}
        `;
        const announcementHeading = document.createElement('h1');
        announcementHeading.innerText = announcementText;
        const gameSet = document.querySelector('#game-set');
        gameSet.appendChild(announcementHeading);
    }
}
const currentRPS = new RockPaperScissor();
const btnRock = document.querySelector(`#selection-rock`);
btnRock === null || btnRock === void 0 ? void 0 : btnRock.addEventListener('click', () => {
    console.log("You selected rock!");
    currentRPS.htmlPlayGame(optionRock);
});
const btnPaper = document.querySelector('#selection-paper');
btnPaper === null || btnPaper === void 0 ? void 0 : btnPaper.addEventListener('click', () => {
    console.log("You selected paper!");
    currentRPS.htmlPlayGame(optionPaper);
});
const btnScissor = document.querySelector('#selection-scissor');
btnScissor === null || btnScissor === void 0 ? void 0 : btnScissor.addEventListener('click', () => {
    console.log("You selected scissor!");
    currentRPS.htmlPlayGame(optionScissor);
});
//# sourceMappingURL=script.js.map