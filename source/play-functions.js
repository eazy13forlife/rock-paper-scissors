import computerPlay from "./computer.js";
import playerPlay from "./player.js";

//set the points the computer has and the points the player has to 0.  We will increment later based on who wins
let computerPoints=0;
let playerPoints=0;


//function for playing one game. It takes in the value the player selected and the value the computer selected and increments according to who won along with returning a message.
const playOneGame=()=>{
  //run computerPlay and set computer's selection equal to computerSelection;
  const computerSelection=computerPlay();
  //run playerPlay and set player's selection equal to playerSelection;
  const playerSelection=playerPlay();
  //if the computers selection equals the player's selection, Print to screen, "Tie.try again and then run this function again,till we return something"
  if(computerSelection===playerSelection){
    console.log(`Tie. Try again`);
    playOneGame();
  //otherwise,depending on who won, we will increment their score by one and print a message to the screen
  }else{
    if (computerSelection==="rock"&&playerSelection==="paper".toLowerCase()){
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
}


//function that plays 5 full rounds of games and returns with a final messasge of who won the entire round.
const playFullGame=()=>{
  //use for loop to run 5 total games
  for(let game=1;game<=5;game++){
    //runPlayOneGame
    playOneGame();
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


export{playFullGame}
