import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1) ;
console.log(randomNumber);


const answer = await inquirer.prompt([{
    name : "userGuessedNumber",
    type : "number ",
    message : "please guess number between 1-10"
}])

if(answer.userGuessedNumber === randomNumber){
    console.log('you guessed right number. ')
}else{
    console.log('you guessed wrong number. ')
}
