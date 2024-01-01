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

    htmlPlayGame(playerSelection: string): void {
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

        const computerSelection: string = this.getComputerChoice();

        const results: string = this.playRound(playerSelection, computerSelection);

        this.currentRound += 1;

        this.updateScoreboard();

        if (this.currentRound === this.maxRounds) {
            console.log("GAME SET!");
        };

    }

    getComputerChoice(): string {

        const randomInt: number = Math.floor(Math.random() * this.rpsChoices.length);

        const computerChoice: string = this.rpsChoices[randomInt].toLowerCase()

        console.log(`Computer chose: ${computerChoice}`);

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
                        message = "Computer wins!"
                        break;
                    case "paper":
                        message = "Player wins!"
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

        console.log(`Round result: ${message}`)

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
        pageRound.innerText = `${templateTextRound}: ${this.currentRound}`;

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

        const gameSet: HTMLDivElement = document.querySelector<HTMLDivElement>('#game-set')!;

        // this is not showing up
        gameSet.appendChild(announcementHeading);
    }
}

// Store Game stats
const currentRPS: RockPaperScissor = new RockPaperScissor();

// Check game score



// BUTTONS for users to select
const btnRock: HTMLButtonElement | null = document.querySelector(`#selection-rock`);
btnRock?.addEventListener('click', () => {
    console.log("You selected rock!");
    currentRPS.htmlPlayGame(optionRock);
});

const btnPaper: HTMLButtonElement | null = document.querySelector('#selection-paper');
btnPaper?.addEventListener('click', () => {
    console.log("You selected paper!");
    currentRPS.htmlPlayGame(optionPaper);
});

const btnScissor: HTMLButtonElement | null = document.querySelector('#selection-scissor');
btnScissor?.addEventListener('click', () => {
    console.log("You selected scissor!");
    currentRPS.htmlPlayGame(optionScissor);
});


