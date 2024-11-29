
/** 
console.log(document.querySelector('button'));
*/
function headsTails(choice){

  document.querySelector('.headsAndTails').innerText =`You chose: ${choice}`;

}


function logName(){
let nameIs= document.querySelector('.nameText').value;
document.querySelector('.outputName').innerText=`Your Name is: ${nameIs}`;

}
