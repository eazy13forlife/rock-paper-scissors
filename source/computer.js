//function that makes computer randomly selects rock,paper or scissors and then returns that value
const computerPlay=()=>{
  const gameArray=["rock","paper","scissors"];
  return gameArray[Math.ceil(Math.random()*gameArray.length-1)]
}
export{computerPlay as default}
