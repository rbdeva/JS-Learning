let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
  }; 
  
  updateScoreElement();
  /* truthy falsy */
  
  /* Boolean lesson
  if(!score){
  score = {
  wins: 0,
  losses: 0,
  ties: 0
  };
  }
  
  */
  /* PREVIOUS 
    const score = {
      wins: 0,
      losses: 0,
      ties: 0
    };
  
    console.log(JSON.parse(localStorage.getItem('score')));
  
    */

    let isAutoPlaying = false;
    let intervalid;

    function autoPlay(){
      if(!isAutoPlaying){
       intervalId = setInterval(function(){
          const playerMove= pickComputerMove();
          playGame(playerMove);
        }, 1000 );
        isAutoPlaying = true;
      }
      else{
        clearInterval(intervalId); //
        isAutoPlaying = false;
      }
      
    }


    document.querySelector('.js-rock-button').addEventListener('click', () =>{
      playGame('rock');
    });

    /* Here we actuall give a function to addEventListeneer but we cant use playGame('rock'), becauseit just call playGame() and give us a return value, it will be ndefined
    For example: document.querySelector('.js-rock-button').addEventListener('click', rockPlay('rock'));  */

    document.querySelector('.js-paper-button').addEventListener('click', () =>{
      playGame('paper');
    });

    document.querySelector('.js-scissors-button').addEventListener('click', () => {
      playGame('scissors');
    });

    /* We are going to add eventlistener to the body so when we typpe r then it will select rock etc., */
      
    /* The below code tells what key we typed and print it.
      
    document.body.addEventListener('keydown', (event) => {

      console.log(event.key);
  
    });

    */
   document.body.addEventListener('keydown', (event) => {
    if(event.key === 'r' || event.key === 'R'){
      playGame('rock');
    }
    else if(event.key === 'p' || event.key === 'P'){
      playGame('paper');
    }
    else if(event.key === 's' || event.key ==='S'){
      playGame('scissors');
    }
   })




    function playGame(playerMove){
      const computerMove = pickComputerMove();   //Trick //Scope
      let result='';
  
      if(playerMove=='scissors'){
  
    if(computerMove === 'rock'){
      result='You lose.';
    }
    else if(computerMove==='paper')
    {
      result='You win.';
  
    }
    else if(computerMove === 'scissors')
    {
      result='Tie.';
    }
  }
  else if(playerMove === 'paper')
  {
    
    if(computerMove === 'rock'){
      result='You win.';
    }
    else if(computerMove==='paper')
    {
      result='Tie.';
  
    }
    else if(computerMove === 'scissors')
    {
      result='You lose.';
    }
      
  }
  
  else if(playerMove === 'rock')
  {
    if(computerMove === 'rock'){
        result='Tie.';
      }
      else if(computerMove==='paper')
      {
        result='You lose.';
  
      }
      else if(computerMove === 'scissors')
      {
        result='You win.';
      }
  }
  if(result === 'You win.'){
    score.wins += 1;
  }
  else if(result === 'You lose.')
  {
    score.losses += 1;
  }
  else if(result ==='Tie.'){
    score.ties += 1;
  }
  
  
  
  localStorage.setItem('score', JSON.stringify(score));
  
  updateScoreElement();
  
  document.querySelector('.js-result').innerHTML = result;
  
  document.querySelector('.js-moves').innerHTML = 
  ` You <img src="Images/${playerMove}-emoji.png" class="move-icon">
        <img src="Images/${computerMove}-emoji.png" class="move-icon"> Computer`;
  
  
    
    }
  
    function updateScoreElement(){
      document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }
    
  
    function pickComputerMove() {
      const randomNumber = Math.random();
      if(randomNumber >= 0 && randomNumber < 1/3)
      {
      computerMove='rock';    
    }
      else if(randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove='paper';    
    }
  
      else if(randomNumber >= 2/3 && randomNumber < 1) {
        computerMove='scissors';    
    }
    return computerMove;
  
          }
  