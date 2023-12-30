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

    htmlPlayGame(playerSelection: string): any {
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

        return message;
    }

    endGameResults():void {
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
}

const currentRPS: RockPaperScissor = new RockPaperScissor();


// BUTTONS for users to select
const btnRock: HTMLButtonElement | null = document.querySelector(`#selection-rock`);
btnRock?.addEventListener('click', () => {
    console.log("You selected rock!");
    currentRPS.htmlPlayGame(optionPaper);
});

const btnPaper: HTMLButtonElement | null = document.querySelector('#selection-paper');
btnPaper?.addEventListener('click', () => {
    console.log("You selected paper!");
});

const btnScissor: HTMLButtonElement | null = document.querySelector('#selection-scissor');
btnScissor?.addEventListener('click', () => {
    console.log("You selected scissor!");
});

// currentRPS.startGame()

