document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.querySelectorAll('.rpsbutton');
    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            playGame(event.currentTarget.dataset.type);
        });
    });
});

let options = ["rock", "paper", "scissors", "lizard", "spock"];
let rules = {
    fist: ["scissors", "lizard"],
    paper: ["fist", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "fist"],
};

function playGame() {
    // Generates random computer choice with Math functions and "options" array length
    let computerChoice = options[Math.floor(Math.random() * options.length)];

    
}

function determineOutcome(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "draw";
    }
    if (rules[computerChoice].includes(playerChoice)) {
        return "lose";
    }
    return "win";
}

function incrementWinScore() {

}

function incrementDraw() {

}

function incrementLostScore() {

}