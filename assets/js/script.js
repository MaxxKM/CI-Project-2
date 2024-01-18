// Event listener to wait for the DOM content to fully load before executing
// learned from Code Institutes "love maths" project
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
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"],
};

function playGame(playerChoice) {
    // Generates random computer choice with Math functions and "options" array length
    let computerChoice = options[Math.floor(Math.random() * options.length)];

    // Assign Font Awesome icons to choices
    // Learned from the Font Awesome website
    let playerIcon = document.createElement('i');
    playerIcon.className = 'fa-solid fa-hand-' + playerChoice + ' fa-4x';
    console.log(`Player icon class: ${playerIcon.className}`);
    document.getElementById('players-choice').innerHTML = '';
    document.getElementById('players-choice').appendChild(playerIcon);

    let computerIcon = document.createElement('i');
    computerIcon.className = 'fa-solid fa-hand-' + computerChoice + ' fa-4x';
    console.log(`Computer icon class: ${computerIcon.className}`);
    document.getElementById('computers-choice').innerHTML = '';
    document.getElementById('computers-choice').appendChild(computerIcon);

    let outcome = determineOutcome(playerChoice, computerChoice);

    switch (outcome) {
        case "win":
            incrementWinScore();
            break;
        case "draw":
            incrementDraw();
            break;
        case "lose":
            incrementLostScore();
            break;
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
}

function incrementWinScore() {
    let won = document.getElementById("won");
    let currentScore = Number(won.textContent) || 0;
    won.textContent = currentScore + 1;
}

function incrementDraw() {
    let draw = document.getElementById("draw");
    let currentScore = Number(draw.textContent) || 0;
    draw.textContent = currentScore + 1;
}

function incrementLostScore() {
    let lost = document.getElementById("lost");
    let currentScore = Number(lost.textContent) || 0;
    lost.textContent = currentScore + 1;
}
