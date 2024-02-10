let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg  = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");


const genComputerChoice = () => 
{ const options = ["rock", "paper", "scissor"];
const randIdx = Math.floor( Math.random() * 3);
return options [randIdx];
}

const drawGame = () =>
 { 
 msg.innerText = " Game was draw. Play again.";
 msg.style.backgroundColor = "yellow";}

const showWinner = (userWin, userChoice, ComputerChoice) => 
{ if (userWin ) {userScore++;
    userScorePara.innerText = userScore;
msg.innerText = ` You win Your ${userChoice} beats ${ ComputerChoice}`; 
msg.style.backgroundColor = "green";}
 else { computerScore++;
    computerScorePara.innerText = computerScore;
 msg.innerText = `Computer win. Computer ${ ComputerChoice} beats your ${userChoice}` ; 
 msg.style.backgroundColor = "red";}}



const playGame = (userChoice) => { 
   
    const ComputerChoice = genComputerChoice();
    

    if(userChoice === ComputerChoice) { drawGame ();}
    else { let userWin = true;
          if ( userChoice === "rock")
          { userWin = ComputerChoice === "paper"? false: true;}
        else if ( userChoice === "paper" )
        { userWin = ComputerChoice === "scissor" ? false : true;}
        else { userWin = ComputerChoice === "rock" ? false : true ;}
    
    showWinner (userWin, userChoice, ComputerChoice)}

};

choices.forEach((choice) => 
{
    choice.addEventListener("click", () =>
{ const userChoice= choice.getAttribute("id");
playGame (userChoice)
})
})