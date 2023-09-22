"use strict";
class RockPaperScissor {
    constructor() {
        this.currentRound = 0;
        this.playerOneWins = 0;
        this.computerWins = 0;
        this.rpsChoices = ["rock", "paper", "scissor"];
    }
    startGame() {
        while (this.currentRound < 5) {
            const playerSelection = prompt(`What choice will you pick?`);
            const computerSelection = this.getComputerChoice();
            const results = this.playRound(playerSelection, computerSelection);
            this.currentRound += 1;
        }
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
}
;
const playerSelection = "rock";
const currentRPS = new RockPaperScissor();
console.log(currentRPS.playRound(playerSelection, currentRPS.getComputerChoice()));
//# sourceMappingURL=script.js.map