

let score= JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses:0
};



function headsAndTails(guess){
let randomNumber=Math.random();
    let result='';
    if(randomNumber<=0.5)
  {
    result='Heads';
  }
  else{
    result='Tails';    
  }
  if(guess===result){
    console.log("You win");
    score.wins++;
  }
  else{
    console.log("You lose");
    score.losses++;
  }
  document.querySelector('.scoreOutput').innerText=
  `Wins: ${score.wins}, Losses: ${score.losses}`;
  localStorage.setItem('score', JSON.stringify(score));
  
  console.log(score);
}

