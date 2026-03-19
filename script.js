const humanScore = 0;
const computerScore = 0;

// this funtion compare desitions and alert an statement
function payRound(humanScore, computerScore) {
    if (humanScore == computerScore) {
        return `It's a tie! We both chose ${humanScore}`;
    } else if (humanScore == 'piedra' && computerScore == 'tijeras') {
        return `You won! You chose ${humanScore} and I ${computerScore}`;
    } else if (humanScore == 'piedra' && computerScore == 'papel') {
        return `You lose! You chose ${humanScore} and I ${computerScore}`;
    } else if (humanScore == 'papel' && computerScore == 'piedra') {
        return `You won! You chose ${humanScore} and I ${computerScore}`;
    } else if (humanScore == 'papel' && computerScore == 'tijeras') {
        return `You lose! You chose ${humanScore} and I ${computerScore}`;
    } else if (humanScore == 'tijeras' && computerScore == 'papel') {
        return `You won! You chose ${humanScore} and I ${computerScore}`;
    } else {
        return `You lose! You chose ${humanScore} and I ${computerScore}`;
    }
}
console.log(alert(payRound('piedra','papel')))

// created a code for a radom computer number that depending on the number range will be assign to a string value
function getComputerChoice(){
    const cChoice = Math.floor(Math.random() * 100)
    if(cChoice < 33){
        const cChoice = 'piedra'
        return cChoice
    } else if (cChoice >= 33 && cChoice <= 66){
        const cChoice = 'papel'
        return cChoice
    } else {
        const cChoice = 'tijeras'
        return cChoice
    }
}
// This funtion ask for a choice, save it and apply toLowerCase atribute to avoide errors for uppercase choises
function getHumanChoice(){
    const hChoice = prompt('Elije: Piedra, Papel o Tijeras')
    const hChoiceLowerCase = hChoice.toLowerCase();
    return hChoiceLowerCase
}

// console.log(getHumanChoice())

