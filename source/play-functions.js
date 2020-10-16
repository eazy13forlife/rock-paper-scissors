import computerPlay from "./computer.js";
import playerPlay from "./player.js";

//set the points the computer has and the points the player has to 0.  We will increment later based on who wins
let computerPoints=0;
let playerPoints=0;

let totalGames=0
let computerSelection;


//function for playing one game. It takes in the value the player selected and the value the computer selected and increments according to who won along with returning a message.
const playOneGame=(playerSelection)=>{
  //run computerPlay and set computer's selection equal to computerSelection;
  computerSelection=computerPlay();
  //run playerPlay and set player's selection equal to playerSelection;
  playerSelection=playerSelection.toLowerCase();
  //if the computers selection equals the player's selection, Print to screen, "Tie.try again and then run this function again,till we return something"
  if(computerSelection===playerSelection){
    return`Tie. Try again`;
  //otherwise,depending on who won, we will increment their score by one and print a message to the screen
  }else{
    if (computerSelection==="rock"&&playerSelection==="paper"){
      totalGames++
      playerPoints++
      return `You win this round! Computer chose rock!`
    }else if(computerSelection==="rock"&&playerSelection==="scissors"){
      computerPoints++
      totalGames++
      return  `You lost this round! Computer chose rock!`
    }else if(computerSelection==="paper"&&playerSelection==="scissors"){
      playerPoints++
      totalGames++
      return  `You win this round! Computer chose paper!`
    }else if(computerSelection==="scissors"&&playerSelection==="rock"){
      playerPoints++
      totalGames++
      return `You win this round! Computer chose scissors!`
    }else if(computerSelection==="paper"&&playerSelection==="rock"){
      computerPoints++
      totalGames++
      return `You lost this round! Computer chose paper!`
    }else if (computerSelection==="scissors"&&playerSelection==="paper"){
      computerPoints++
      totalGames++
      return  `You lost this round! Computer chose scissors!`
    }
  }
}


//function that plays 5 full rounds of games and returns with a final messasge of who won the entire round.
const playFullGame=()=>{
  //use for loop to run 5 total games
  for(let game=1;game<=1;game++){
    //runPlayOneGame
    playOneGame();
  }
  //Depending on how many total points computerPoints and playerPoints have after 5 rounds, display the appropriate message.
  if(computerPoints>playerPoints){
    return `Computer: ${computerPoints}, You: ${playerPoints}. Sorry, the computer won!`
  }else if(computerPoints<playerPoints){
    return `Computer: ${computerPoints}, You: ${playerPoints}. Yay, you won !`
  }
}



export{playOneGame,playerPoints,computerPoints,totalGames,computerSelection}
