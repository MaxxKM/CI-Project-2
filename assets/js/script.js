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

    let outcome = determineOutcome(playerChoice, computerChoice);

    // calls on increment functions depending on outcome
    switch (outcome) {
        case "win":
            incrementWinScore();
            break;
        case "draw":
            incrementDraw();
            break
        case "lose":
            incrementLostScore();
            break;    
    }
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
    let won = document.getElementById("won");
    let currentScore = Number(won.textContent) || 0;
    won.textContent = currentScore + 1;
}

function incrementDraw() {

}

function incrementLostScore() {

}