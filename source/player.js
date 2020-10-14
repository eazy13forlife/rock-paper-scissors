
//function that prompts user to enter rock,paper or scissors and returns whatever they entered
const playerPlay=()=>{
  //ask user to choose between rock,paper or scissor and store that value in playerChoice
  const playerChoice=prompt("Choose rock, paper or scissors");
  //if user doesn't enter any of those 3 options, re-run this function until they enter one of the options.
  if(playerChoice!=="rock"&&playerChoice!=="paper"&&playerChoice!=="scissors"){
    playerPlay();
  //otherwise, if they do enter one of the options, return playerChoice
  }else{
    return playerChoice;
  }
}

export{playerPlay as default};
