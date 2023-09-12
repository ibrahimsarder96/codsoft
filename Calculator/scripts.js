let display = document.getElementById('display');
let buttons = document.getElementsByClassName('button');
console.log(buttons);
let operand1 = 0;
let operand2 = null;
let operator = null;

function isOperator(value){
  return value == '+' || value == '-' || value == 'X'|| value == '/';
}


for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click",  () =>{
    let text = buttons[i].textContent;
    if(isOperator(text)){
      
    }
  })
}