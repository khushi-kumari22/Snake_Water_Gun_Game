/*        Snake Water Gun Game       */  

console.log("      Welcome to Snake Water Gun Game       ")
console.log("    ----------------------------------      ")
console.log("'S' for Snake")
console.log("'W' for Water")
console.log("'G' for Gun")

let repeat;
do {

let user = prompt("Enter S, W or G")
let computer = Math.floor(Math.random() * 3)
computer = ["S", "W", "G"][computer]

const match = (computer, user) => {
  if(computer === user){
      return "Match is tied"
  }
  else if(computer == "S" && user == "W"){
    return "You Loose"
  }
  else if(computer == "S" && user == "G"){
    return "Congrats, You Won"
  }
  else if(computer == "G" && user == "W"){
    return "Congrats, You Won"
  }
  else if(computer == "G" && user == "S"){
    return "You Loose"
  }
  else if(computer == "W" && user == "S"){
    return "Congrats, You Won"
  }
  else if(computer == "W" && user == "G"){
    return "You Loose"
  }
  else{
    return "Enter Valid Input"
  }
}


  let result = match(computer, user)

  console.log(`Computer: ${computer} User: ${user} ${result.toUpperCase()}`)
  alert("Thanks for playing the game! Have a great day!");

  match();
  repeat = confirm("Do you want to play again?");
} while (repeat); 
