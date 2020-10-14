let computerPoints=0;
let playerPoints=0;


//function that makes computer randomly selects rock,paper or scissors and then returns that value
const computerPlay=()=>{
  const gameArray=["rock","paper","scissors"];
  return gameArray[Math.ceil(Math.random()*gameArray.length-1)]
}

//function for playing one game. It takes in the value the player selected and the value the computer selected.
const playOneGame=(playerSelection,computerSelection)=>{
  //if they both selected same thing, increase each of their points by 1 and return the string, "you both tie"
  if(computerSelection===playerSelection){
    playerPoints++;
    computerPoints++;
    return `You both tie`
  }else if (computerSelection==="rock"&&playerSelection==="paper".toLowerCase()){
    playerPoints++
    return `You win! Paper beats rock!`
  }else if(computerSelection==="rock"&&playerSelection==="scissors".toLowerCase()){
    computerPoints++
    return  `You lose! Rock beats paper!`
  }else if(computerSelection==="paper"&&playerSelection==="scissors".toLowerCase()){
    playerPoints++
    return  `You win! Scissor beats paper!`
  }else if(computerSelection==="scissors"&&playerSelection==="rock".toLowerCase()){
    playerPoints++
    return `You win! Rock beats scissors!`
  }else if(computerSelection==="paper"&&playerSelection==="rock".toLowerCase()){
    computerPoints++
    return `You lose! Paper beats rock!`
  }else if (computerSelection==="scissors"&&playerSelection==="paper".toLowerCase()){
    computerPoints++
    return  `You lose! Scissors beats paper!`
  }
}

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

//function that plays 5 full rounds of games.
const playFullGame=()=>{
  //use for loop to run 5 total games
  for(let game=1;game<=5;game++){
    //run computerPlay and set computer's selection equal to computerChoice;
    const computerChoice=computerPlay();
    //run playerPlay and set player's selection equal to playerChoice;
    const playerChoice=playerPlay();
    //runPlayOneGame with the arguments playerChoice and computerChoice
    playOneGame(playerChoice,computerChoice)
  }
  //Depending on how many total points computerPoints and playerPoints have after 5 rounds, display the appropriate message.
  if(computerPoints>playerPoints){
    return `Computer: ${computerPoints}, You: ${playerPoints}. Sorry, the computer won!`
  }else if(computerPoints<playerPoints){
    return `Computer: ${computerPoints}, You: ${playerPoints}. Yay, you won !`
  }else if(computerPoints===playerPoints){
    return  `You both tied!`
  }
}

console.log(playFullGame())
