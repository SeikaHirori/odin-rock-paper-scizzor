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
    htmlNewStartGame() {
        console.log('New game!');
        this.addButtonsChoicesRPS();
        this.addGameScore();
        const gameSetDivExists = document.querySelector('.game-set');
        if (gameSetDivExists !== null) {
            gameSetDivExists.remove();
        }
        const newGameButtonExists = document.querySelector('#btn-new-game');
        if (newGameButtonExists !== null) {
            newGameButtonExists.remove();
        }
        if (this.currentRound >= 5 || this.currentRound < 0) {
            this.currentRound = 0;
            this.playerOneWins = 0;
            this.computerWins = 0;
        }
    }
    htmlPlayGame(playerSelection) {
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
        console.log(results);
        this.currentRound += 1;
        this.updateScoreboard();
        if (this.currentRound === this.maxRounds) {
            console.log("GAME SET!");
            this.htmlEndGameResults();
        }
        ;
    }
    getComputerChoice() {
        const randomInt = Math.floor(Math.random() * this.rpsChoices.length);
        const computerChoice = this.rpsChoices[randomInt].toLowerCase();
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
                        this.computerWins += 1;
                        break;
                    case "paper":
                        message = "Player wins!";
                        this.playerOneWins += 1;
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
    updateScoreboard() {
        const templatePlayer = "Player 1";
        const templateComputer = "Computer";
        const scorePlayer = document.querySelector('#score-player');
        scorePlayer.innerText = `${templatePlayer}: ${this.playerOneWins}`;
        const scoreComputer = document.querySelector('#score-computer');
        scoreComputer.innerText = `${templateComputer}: ${this.computerWins}`;
        const pageRound = document.querySelector('#current-round');
        const templateTextRound = "Round";
        pageRound.innerText = `${templateTextRound}: ${this.currentRound + 1}`;
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
        var _a;
        console.log('now running htmlEndGameResults()');
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
        const gameSet = document.createElement('div');
        gameSet.setAttribute('class', 'game-set');
        gameSet.appendChild(announcementHeading);
        (_a = document.querySelector('#game-score')) === null || _a === void 0 ? void 0 : _a.remove();
        document.querySelector('.game-stats').appendChild(gameSet);
        this.switchToEndScreen();
    }
    switchToEndScreen() {
        console.log('calling function "switchToEndscreen()"');
        document.querySelector('.rps-choices').remove();
        this.addButtonNewGame();
    }
    addButtonNewGame() {
        const btnNewGame = document.createElement('button');
        btnNewGame.setAttribute('id', 'btn-new-game');
        btnNewGame.textContent = 'New Set!';
        btnNewGame.addEventListener('click', () => {
            console.log("this was pressed :3");
            this.htmlNewStartGame();
        });
        document.querySelector('.player-selection').appendChild(btnNewGame);
    }
    addGameScore() {
        const gameStats = document.querySelector('.game-stats');
        const gameScore = document.createElement('div');
        gameScore.setAttribute('id', 'game-score');
        const currentRound = document.createElement('h2');
        currentRound.setAttribute('id', 'current-round');
        currentRound.innerText = `Round: ${this.currentRound + 1}`;
        gameScore.appendChild(currentRound);
        const scoreHeading2 = document.createElement('h2');
        scoreHeading2.innerText = 'Score';
        gameScore.appendChild(scoreHeading2);
        const scorePlayer = document.createElement('h3');
        scorePlayer.setAttribute('id', 'score-player');
        scorePlayer.innerText = 'Player 1: 0';
        gameScore.appendChild(scorePlayer);
        const scoreComputer = document.createElement('h3');
        scoreComputer.setAttribute('id', 'score-computer');
        scoreComputer.innerText = 'Computer: 0';
        gameScore.appendChild(scoreComputer);
        gameStats.appendChild(gameScore);
    }
    addButtonsChoicesRPS() {
        const playerSelection = document.querySelector('.player-selection');
        const rpsChoices = document.createElement('div');
        rpsChoices.setAttribute('class', 'rps-choices');
        const btnRock = document.createElement('button');
        btnRock.setAttribute('id', 'selection-rock');
        btnRock.innerText = 'Rock';
        btnRock.addEventListener('click', () => {
            this.htmlPlayGame(optionRock);
        });
        rpsChoices.appendChild(btnRock);
        const btnPaper = document.createElement('button');
        btnPaper.setAttribute('id', 'selection-paper');
        btnPaper.innerText = 'Paper';
        btnPaper.addEventListener('click', () => {
            this.htmlPlayGame(optionPaper);
        });
        rpsChoices.appendChild(btnPaper);
        const btnScissor = document.createElement('button');
        btnScissor.setAttribute('id', 'selection-scissor');
        btnScissor.innerText = 'Scissor';
        btnScissor.addEventListener('click', () => {
            this.htmlPlayGame(optionScissor);
        });
        rpsChoices.appendChild(btnScissor);
        playerSelection.appendChild(rpsChoices);
    }
}
const currentRPS = new RockPaperScissor();
currentRPS.htmlNewStartGame();
//# sourceMappingURL=script.js.map