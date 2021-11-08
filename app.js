function computerPlay(){
    let randomSelection = Math.floor(Math.random()*3) + 1;

    if (randomSelection == 1){
        return "rock";
    }
    else if (randomSelection == 2){
        return "paper";
    }
    else if (randomSelection == 3){
        return "scissors";
    }
}

//const playerSelection = "rock";
const computerSelection = computerPlay();

let playerSelection = prompt("choose rock paper scissors");
playerSelection = playerSelection.toLowerCase();


function playRound(computerSelection, playerSelection){
    if (computerSelection == playerSelection){
        return "tie";
    }
    else if (computerSelection == "rock" && playerSelection == "scissors" || 
                computerSelection == "paper" && playerSelection == "rock" ||
                computerSelection == "scissors" && playerSelection == "paper"){
        return "computer wins"
    }
    else if (computerSelection == "scissors" && playerSelection == "rock" ||
                computerSelection == "rock" && playerSelection == "paper" ||
                computerSelection == "paper" && playerSelection == "scissors"){
        return "player wins"
    }
}

function game (){
    for (let i = 0; i <5; i++){
        playRound();
    }
}

//console.log(playRound(computerSelection, playerSelection))

let result = playRound(computerSelection, playerSelection) + " computer picked: " + computerSelection + " player picked: " + playerSelection;

document.getElementById('result').innerHTML = result;