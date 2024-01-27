const result = document.querySelector('#result');
const numbers = document.querySelectorAll('.num-button');
const operands = document.querySelectorAll('.operand');
const equalSign = document.querySelector('#equal-sign');
const zero = document.querySelector('#zero');
const ac = document.querySelector('#reset');
const plusMinus = document.querySelector('#plus-minus');
const period = document.querySelector('#period');
const percent = document.querySelector('#percent');

let alreadyTyped = false;
let firstNumOfOperation;
let secondNumOfOperation;
let useOperand = false;
let operandInUse;
let negative = false;
let pressedEqual=false;
let usingPercent=false;

Array.from(numbers).map((x) => {x.addEventListener('click', ()=>{
    if(useOperand && !alreadyTyped){result.textContent = ''; alreadyTyped = true;}
    result.textContent += x.textContent;
    })});
Array.from(operands).map((x) => {x.addEventListener('click', ()=>{
    operandInUse = x.textContent;
    if(pressedEqual==false){SetFirstAndSecondOperationNumbers();}
    useOperand = true;
    result.textContent = firstNumOfOperation.toFixed(2);
    pressedEqual=false;
    
    alreadyTyped = false; 
    negative = false;})});
percent.addEventListener('click',()=> {result.textContent /= 100;})
period.addEventListener('click', ()=>{if(!result.textContent.includes('.'))result.textContent = result.textContent.padEnd(result.textContent.length+1, '.'); })
plusMinus.addEventListener('click', ()=>{
    if(negative == false){
         result.textContent *= -1;
         if(pressedEqual)firstNumOfOperation=Number(result.textContent);
         negative = true;
        }else{
         result.textContent *= -1;
         negative = false;
        }
    })
ac.addEventListener('click', ()=>{result.textContent = ''; useOperand=false; firstNumOfOperation=0;secondNumOfOperation=0; pressedEqual=false;})
equalSign.addEventListener('click', ()=>{
    SetFirstAndSecondOperationNumbers();
    result.textContent = firstNumOfOperation.toFixed(2);
    secondNumOfOperation = 0;
    negative = false;
    pressedEqual=true;
    usingPercent=false;
    operandInUse='';
});
function SetFirstAndSecondOperationNumbers(){
    if(useOperand){
        secondNumOfOperation = Number(result.textContent);
        SetOperand();
    }else{
        firstNumOfOperation = Number(result.textContent)}
}
function SetOperand(){
    switch (operandInUse) {
        case '+':           
                firstNumOfOperation += secondNumOfOperation;
                console.log(firstNumOfOperation)
            break;
        case '-':
                firstNumOfOperation -= secondNumOfOperation;
                console.log(firstNumOfOperation)
                break;
        case '/':
                firstNumOfOperation /= secondNumOfOperation;
                console.log(firstNumOfOperation)
                break;
        case '*':
                firstNumOfOperation *= secondNumOfOperation;
                console.log(firstNumOfOperation)
                break;
    }
}

