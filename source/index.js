import {playOneGame,playerPoints,computerPoints,totalGames,computerSelection} from "./play-functions.js";

//create a pEl that holds the results of who won and lost
const pEl=document.querySelector("#game");
//select the paragraph with id playerScore and store it in playerScorePara;
const playerScorePara=document.querySelector("#player_score");
//select the paragraph with id computer_score and store it in computerScorePara;
const computerScorePara=document.querySelector("#computer_score");

//select all the buttons in our document and store it in buttons
const buttons=document.querySelectorAll("button");

//for each button, add an event listenr when the user click the button
buttons.forEach((button)=>{
  button.addEventListener("click",(e)=>{
    //if total games is 5, just don't end up playing the game.
    if(totalGames===5){

    }else{
      //set playerChoice equal to whatever button the clicked
      const playerChoice=e.target.innerText;
      //play one game and set the return value equal to the variable value
      const value=playOneGame(playerChoice);
      //if total games is equal to 5
      if(totalGames===5){
        //if computer scored more points,make the text content of the pEl that message
        if(computerPoints>playerPoints){
          pEl.textContent= `Computer chose ${computerSelection}. Sorry, the computer won.
          Computer: ${computerPoints}, You: ${playerPoints}. `
        //if player scored more points,make the text content of the pEl that message
        }else if(computerPoints<playerPoints){
          pEl.textContent= `Computer chose ${computerSelection}. Yay, you won! Computer: ${computerPoints}, You: ${playerPoints}.`
        }
        //make sure to also update the text content of the playerScore paragraph element
        playerScorePara.textContent=`Your score: ${playerPoints}.`
        //make sure to also update the text content of the computerScore paragraph element.
        computerScorePara.textContent=`Computer score: ${computerPoints}.`
      //however, if total games is not yet equal to 5
      }else{
        //make the p element text content just the return value of the playOneGame function
        pEl.textContent=`${value}`
        //still update the text content of playerScore element with the number of points player has
        playerScorePara.textContent=`Your score: ${playerPoints}`
        //still update the text content of computer Score element with the number of points computer has
        computerScorePara.textContent=`Computer score: ${computerPoints}`
      }
    }
  });
});
