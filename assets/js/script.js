document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.querySelectorAll('.rpsbutton');
    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            playGame(event.currentTarget.dataset.type);
        });
    });
});

