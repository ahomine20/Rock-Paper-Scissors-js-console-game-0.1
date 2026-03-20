let humanScore = 0;
let computerScore = 0;

// this funtion compare desitions and alert an statement
function playRound(getHumanChoice, getComputerChoice) {
   // let humanScore = 0;
    // let computerScore = 0;
    if (getHumanChoice == getComputerChoice) {
        console.log(`Score until now: You: ${humanScore} | Me: ${computerScore}`)
        return (`It's a tie! We both chose ${getHumanChoice}`);
    } else if (getHumanChoice == 'piedra' && getComputerChoice == 'tijeras') {
        ++humanScore;
        console.log(`Score until now: You: ${humanScore} | Me: ${computerScore}`)
        return (`You won! You chose ${getHumanChoice} and I ${getComputerChoice}`);
    } else if (getHumanChoice == 'piedra' && getComputerChoice == 'papel') {
        ++computerScore;
        console.log(`Score until now: You: ${humanScore} | Me: ${computerScore}`)
        return (`You lose! You chose ${getHumanChoice} and I ${getComputerChoice}`);
    } else if (getHumanChoice == 'papel' && getComputerChoice == 'piedra') {
        ++humanScore;
        console.log(`Score until now: You: ${humanScore} | Me: ${computerScore}`)
        return (`You won! You chose ${getHumanChoice} and I ${getComputerChoice}`);
    } else if (getHumanChoice == 'papel' && getComputerChoice == 'tijeras') {
        ++computerScore;
        console.log(`Score until now: You: ${humanScore} | Me: ${computerScore}`)
        return (`You lose! You chose ${getHumanChoice} and I ${getComputerChoice}`);
    } else if (getHumanChoice == 'tijeras' && getComputerChoice == 'papel') {
        ++humanScore;
        console.log(`Score until now: You: ${humanScore} | Me: ${computerScore}`)
        return (`You won! You chose ${getHumanChoice} and I ${getComputerChoice}`);
    } else {
        ++computerScore;
        console.log(`Score until now: You: ${humanScore} | Me: ${computerScore}`)
        return (`You lose! You chose ${getHumanChoice} and I ${getComputerChoice}`);
    }
}

// created a code for a radom computer number that depending on the number range will be assign to a string value
function getComputerChoice(){
    const cChoice = Math.floor(Math.random() * 100)
    if(cChoice < 33){
        return 'piedra'
    } else if (cChoice >= 33 && cChoice <= 66){
        return 'papel'
    } else {
        return 'tijeras'
    }
}
// This funtion ask for a choice, save it and apply toLowerCase atribute to avoide errors for uppercase choises
function getHumanChoice(){
    const hChoice = prompt('Elije: Piedra, Papel o Tijeras')
    const hChoiceLowerCase = hChoice.toLowerCase();
    return hChoiceLowerCase
}


function playGame(playRound){

}

// With this we print the result of the match

console.log(playRound(getHumanChoice(),getComputerChoice()))