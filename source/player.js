
//function that prompts user to enter rock,paper or scissors and returns whatever they entered
const playerPlay=()=>{
  //ask user to choose between rock,paper or scissor and store that value in playerChoice
  let playerChoice=prompt("Choose rock, paper or scissors");
  //change playerChoice to all lowercase so case sensitivity is not an issue;
  playerChoice=playerChoice.toLowerCase();
  //if user doesn't enter any of those 3 options, re-run this function until they enter one of the options.
  if(playerChoice!=="rock"&&playerChoice!=="paper"&&playerChoice!=="scissors"){
    playerPlay();
  //otherwise, if they do enter one of the options, return playerChoice
  }else{
    return playerChoice;
  }
}

export{playerPlay as default};
