
const computerPlay=()=>{
  const gameArray=["rock","paper","scissors"];
  console.log(gameArray[Math.ceil(Math.random()*gameArray.length-1)])
}


const playOneGame=(playerSelection,computerSelection)=>{
  if(computerSelection===playerSelection){
    return `You both tie`
  }else if (computerSelection==="rock"&&playerSelection==="paper".toLowerCase()){
    return `You win! Paper beats rock!`
  }else if(computerSelection==="rock"&&playerSelection==="scissors".toLowerCase()){
    return  `You lose! Rock beats paper!`
  }else if(computerSelection==="paper"&&playerSelection==="scissors".toLowerCase()){
    return  `You win! Scissor beats paper!`
  }else if(computerSelection==="scissors"&&playerSelection==="rock".toLowerCase()){
    return `You win! Rock beats scissors!`
  }else if(computerSelection==="paper"&&playerSelection==="rock".toLowerCase()){
    return `You lose! Paper beats rock!`
  }else if (computerSelection==="scissors"&&playerSelection==="paper".toLowerCase()){
    return  `You lose! Scissors beats paper!`
  }
}

const playFullGame=()=>{

}
