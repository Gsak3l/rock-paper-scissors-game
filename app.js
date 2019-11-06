//variables - caching the dom
//storing something for future use
var userScore = 0;
var computerScore = 0;
var totalUserScore = 0; 
var totalComputerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
//document.querySelector('') can help you get the class instead of the div
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const game_over_div = document.querySelector(".game-over p")
const choices = ['rock', 'paper', 'scissors'];
const images = ['./img/icons8-hand-rock-96.png', './img/icons8-hand-96.png', './img/icons8-hand-scissors-96.png'];

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
    if (computerScore === 3 || userScore === 3) {
        userScore = 0;
        computerScore = 0;
    }
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice);
            break;
    }
    if (computerScore > 2) {
        totalComputerScore++; 
        endThis("You lost this round😢<br>" + totalUserScore + "-" + totalComputerScore);
    } else if (userScore > 2) {
        totalUserScore++;
        endThis("You won this round!👌" + totalUserScore + "-" + totalComputerScore);
    } 
}

function endThis(text) {
    game_over_div.innerHTML = text;
    removeCurrentGlow();
    userScore_span.innerText = userScore;
    computerScore_span.innerText = computerScore;
}

//functions for any possible outcome
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerText = userScore;
    computerScore_span.innerText = computerScore;
    result_div.innerText = userChoice + "(user) beats " + computerChoice + "(computer). You win!🎉";
    removeCurrentGlow();
    document.getElementById(userChoice).classList.add('green-glow'); //classList is a method that gives you an array of all the classes on that specific element.
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerText = computerScore;
    userScore_span.innerText = userScore;
    result_div.innerText = computerChoice + "(computer) beats " + userChoice + "(user). You lose😢";
    removeCurrentGlow();
    document.getElementById(userChoice).classList.add('red-glow'); //classList is a method that gives you an array of all the classes on that specific element.
}

function draw(userChoice) {
    result_div.innerText = "Tie! " + userChoice + " is equal to " + userChoice;
    removeCurrentGlow();
    document.getElementById(userChoice).classList.add('gray-glow'); //classList is a method that gives you an array of all the classes on that specific element.
}

function removeCurrentGlow() {
    document.getElementById("rock").classList.remove('green-glow');
    document.getElementById("paper").classList.remove('green-glow');
    document.getElementById("scissors").classList.remove('green-glow');
    document.getElementById("rock").classList.remove('red-glow');
    document.getElementById("paper").classList.remove('red-glow');
    document.getElementById("scissors").classList.remove('red-glow');
    document.getElementById("rock").classList.remove('gray-glow');
    document.getElementById("paper").classList.remove('gray-glow');
    document.getElementById("scissors").classList.remove('gray-glow');
}

//computer choice function
function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

main();