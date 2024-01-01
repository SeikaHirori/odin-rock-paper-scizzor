const optionRock: string = "rock";
const optionPaper: string = "paper";
const optionScissor: string = "scissor";
const optionQuit: string = "quit";


class RockPaperScissor {
    currentRound: number;
    playerOneWins: number;
    computerWins: number;
    rpsChoices: Array<string>;

    maxRounds: number;

    constructor() {
        this.currentRound = 0;
        this.playerOneWins = 0;
        this.computerWins = 0;
        // this.rpsChoices = ["rock", "paper", "scissor", "quit"]; // OLD: when playing from CLI
        this.rpsChoices = ["rock", "paper", "scissor"];


        this.maxRounds = 5; // FIXME: Temp value; Change this later as this should be changable by the player.


    }

    cliStartGame(playerSelection: string): any {
        console.log(`Round ${this.currentRound + 1}`);

        // let playerSelection: string | null = prompt(`What choice will you pick?`, "");
        // Listen to the button picked for RPS on index.html

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
        } else {
            console.log(`Invalid input.`)
            return;
        }

        const computerSelection: string = this.getComputerChoice()

        const results: string = this.playRound(playerSelection, computerSelection);

        this.currentRound += 1;
        

    }

    htmlNewStartGame(): void {
        console.log('New game!');
        this.addButtonsChoicesRPS();
        this.addGameScore();

        const gameSetDivExists: HTMLDivElement | null = document.querySelector('.game-set');
        if (gameSetDivExists !== null)
        {
            gameSetDivExists.remove()
        }

        const newGameButtonExists: HTMLButtonElement | null = document.querySelector('#btn-new-game');
        if (newGameButtonExists !== null) {
            newGameButtonExists.remove();
        }

        if (this.currentRound >= 5 || this.currentRound < 0) {
            this.currentRound = 0;
            this.playerOneWins = 0;
            this.computerWins = 0;
        }
    }

    htmlPlayGame(playerSelection: string): void {
        // console.log(`Round ${this.currentRound + 1}`);

        // let playerSelection: string | null = prompt(`What choice will you pick?`, "");
        // Listen to the button picked for RPS on index.html

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
        } else {
            console.log(`Invalid input.`)
            return;
        }

        const computerSelection: string = this.getComputerChoice();

        const results: string = this.playRound(playerSelection, computerSelection);
        console.log(results);

        this.currentRound += 1;

        this.updateScoreboard();

        if (this.currentRound === this.maxRounds) {
            console.log("GAME SET!");
            this.htmlEndGameResults();
        };

    }

    getComputerChoice(): string {

        const randomInt: number = Math.floor(Math.random() * this.rpsChoices.length);

        const computerChoice: string = this.rpsChoices[randomInt].toLowerCase()

        // console.log(`Computer chose: ${computerChoice}`);

        return computerChoice;
    }

    playRound(playerSelection: string, computerSelection: string): string {
        let message: string = `Something went wrong :3`;

        
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
                        this.playerOneWins +=1;
                        break;
                    default:
                        console.log(`Something went wrong.1`);
                    };
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
                        message = "Computer wins!"
                        this.computerWins += 1;
                        break;
                    default:
                        console.log(`Something went wrong.2`);
                    };
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
                    };
                break;
            default:
                console.log(`Something went wrong.`);
                break;
        }

        // console.log(`Round result: ${message}`)

        return message;
    }

    updateScoreboard(): void {
        const templatePlayer: string = "Player 1";
        const templateComputer: string = "Computer"

        // DOM: Update Player's score // RFER #1
        const scorePlayer: HTMLHeadingElement = document.querySelector<HTMLHeadingElement>('#score-player')!;
        scorePlayer.innerText = `${templatePlayer}: ${this.playerOneWins}`;

        // DOM: Update Computer's score
        const scoreComputer: HTMLHeadingElement = document.querySelector<HTMLHeadingElement>('#score-computer')!;
        scoreComputer.innerText = `${templateComputer}: ${this.computerWins}`;
        
        // DOM: Update current round
        const pageRound: HTMLHeadingElement = document.querySelector<HTMLHeadingElement>('#current-round')!;

        const templateTextRound: string = "Round"
        pageRound.innerText = `${templateTextRound}: ${this.currentRound + 1}`;

    }

    cliEndGameResults(): void {
        let gameWinner: string;
        if (this.playerOneWins > this.computerWins) {
            gameWinner = "Player";
        } else if (this.playerOneWins < this.computerWins) {
            gameWinner = "Computer";
        } else {
            gameWinner = "No victor";
        }

        console.log(`Final Scores: \n
        Player: ${this.playerOneWins} 
        Computer: ${this.computerWins}

        Winner: ${gameWinner}
        `);
    }

    htmlEndGameResults(): void {
        console.log('now running htmlEndGameResults()');

        let gameWinner: string;
        if (this.playerOneWins > this.computerWins) {
            gameWinner = "Player";
        } else if (this.playerOneWins < this.computerWins) {
            gameWinner = "Computer";
        } else {
            gameWinner = "No victor";
        }

        const announcementText: string = `Final Scores: \n
        Player: ${this.playerOneWins}\n 
        Computer: ${this.computerWins}\n
        \n
        Winner: ${gameWinner}
        `;

        const announcementHeading: HTMLHeadingElement = document.createElement('h1');
        announcementHeading.innerText = announcementText;

        // const gameSet: HTMLDivElement = document.querySelector<HTMLDivElement>('.game-set')!;
        const gameSet: HTMLDivElement = document.createElement('div');
        gameSet.setAttribute('class', 'game-set');

        // this is not showing up
        gameSet.appendChild(announcementHeading);

        document.querySelector('#game-score')?.remove();

        document.querySelector('.game-stats')!.appendChild(gameSet);

        this.switchToEndScreen();
    }

    switchToEndScreen(): void {
        console.log('calling function "switchToEndscreen()"');

        document.querySelector('.rps-choices')!.remove();
        this.addButtonNewGame();

    }

    addButtonNewGame(): void {
        // const btnNewGame: HTMLButtonElement = document.querySelector('#btn-new-game');
        const btnNewGame: HTMLButtonElement = document.createElement('button');
        btnNewGame.setAttribute('id', 'btn-new-game');

        btnNewGame.textContent = 'New Set!';

        btnNewGame.addEventListener('click', () => {
            console.log("this was pressed :3")
            this.htmlNewStartGame()
        }); 

        document.querySelector('.player-selection')!.appendChild(btnNewGame);
    }

    addGameScore(): void {
        const gameStats: HTMLDivElement | null = document.querySelector('.game-stats');

        const gameScore: HTMLDivElement = document.createElement('div');
        gameScore.setAttribute('id', 'game-score');

        // Current Round
        const currentRound: HTMLHeadingElement = document.createElement('h2');
        currentRound.setAttribute('id', 'current-round');
        currentRound.innerText = `Round: ${this.currentRound + 1}`;
        gameScore.appendChild(currentRound);

        // <h2> Score
        const scoreHeading2: HTMLHeadingElement = document.createElement('h2');
        scoreHeading2.innerText = 'Score';
        gameScore.appendChild(scoreHeading2);

        // Player scores
        const scorePlayer: HTMLHeadingElement = document.createElement('h3');
        scorePlayer.setAttribute('id', 'score-player');
        scorePlayer.innerText = 'Player 1: 0';
        gameScore.appendChild(scorePlayer);

        const scoreComputer: HTMLHeadingElement = document.createElement('h3');
        scoreComputer.setAttribute('id', 'score-computer');
        scoreComputer.innerText = 'Computer: 0';
        gameScore.appendChild(scoreComputer);


        gameStats!.appendChild(gameScore);
    }

    addButtonsChoicesRPS(): void {
        // BUTTONS for users to select
        const playerSelection: HTMLDivElement = document.querySelector<HTMLDivElement>('.player-selection')!;

        const rpsChoices: HTMLDivElement = document.createElement('div');
        rpsChoices.setAttribute('class', 'rps-choices');

        // const btnRock: HTMLButtonElement | null = document.querySelector(`#selection-rock`);
        const btnRock: HTMLButtonElement = document.createElement('button');
        btnRock.setAttribute('id','selection-rock');
        btnRock.innerText = 'Rock';
        btnRock.addEventListener('click', () => {
            // console.log("You selected rock!");
            this.htmlPlayGame(optionRock);
        });
        rpsChoices.appendChild(btnRock);

        // const btnPaper: HTMLButtonElement | null = document.querySelector('#selection-paper');
        const btnPaper: HTMLButtonElement = document.createElement('button');
        btnPaper.setAttribute('id', 'selection-paper');
        btnPaper.innerText = 'Paper';
        btnPaper.addEventListener('click', () => {
            // console.log("You selected paper!");
            this.htmlPlayGame(optionPaper);
        });
        rpsChoices.appendChild(btnPaper);

        // const btnScissor: HTMLButtonElement | null = document.querySelector('#selection-scissor');
        const btnScissor: HTMLButtonElement = document.createElement('button');
        btnScissor.setAttribute('id', 'selection-scissor');
        btnScissor.innerText = 'Scissor';
        btnScissor.addEventListener('click', () => {
            // console.log("You selected scissor!");
            this.htmlPlayGame(optionScissor);
        });
        rpsChoices.appendChild(btnScissor);


        // Add the div rpsChoices
        playerSelection.appendChild(rpsChoices);
    }
}

// Start Game
const currentRPS: RockPaperScissor = new RockPaperScissor();
currentRPS.htmlNewStartGame();




