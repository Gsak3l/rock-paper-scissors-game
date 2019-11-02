//variables - caching the dom
//storing something for future use
const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
//document.querySelector('') can help you get the class instead of the div
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const choices = ['rock', 'paper', 'scissors'];

//main function
function main() {
    //event listeners for our buttons
    rock_div.addEventListener('click', function () {
        game(rock_div.id);
    });
    paper_div.addEventListener('click', function () {
        game(paper_div.id);
    });
    scissors_div.addEventListener('click', function () {
        game(scissors_div.id);
    });
}

//game function
function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log(userChoice, computerChoice);
}

//computer choice function
function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

main();