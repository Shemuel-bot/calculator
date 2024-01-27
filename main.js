const result = document.querySelector('#result');
const numbers = document.querySelectorAll('.num-button');
const operands = document.querySelectorAll('.operand');
const equalSign = document.querySelector('#equal-sign');
const zero = document.querySelector('#zero');
const ac = document.querySelector('#reset');
const plusMinus = document.querySelector('#plus-minus');
const period = document.querySelector('#period');

let alreadyTyped = false;
let firstNumOfOperation;
let secondNumOfOperation;
let useOperand = false;
let operandInUse;
let negative = false;
let pressedEqual=false;

Array.from(numbers).map((x) => {x.addEventListener('click', ()=>{
    if(useOperand && !alreadyTyped){result.textContent = ''; alreadyTyped = true;}
    result.textContent += x.textContent;
    })});
Array.from(operands).map((x) => {x.addEventListener('click', ()=>{operandInUse = x.textContent; 
    if(pressedEqual==false){SetFirstAndSecondOperationNumbers();}
    pressedEqual=false;
    result.textContent = firstNumOfOperation.toFixed(2);
    useOperand = true;
    alreadyTyped = false; 
    negative = false;
    console.log(firstNumOfOperation)})});

//period.addEventListener('click', ()=>{result.textContent = result.textContent.padEnd(result.textContent.length+1, '.'); })
plusMinus.addEventListener('click', ()=>{
    if(negative == false){
         result.textContent *= -1;
         negative = true;
        }else{
         result.textContent *= -1;
         negative = false;
        }
    })
zero.addEventListener('click', ()=>{result.textContent += 0; SetFirstAndSecondOperationNumbers()});
ac.addEventListener('click', ()=>{result.textContent = ''; useOperand=false; firstNumOfOperation=0;secondNumOfOperation=0; })
equalSign.addEventListener('click', ()=>{
    SetFirstAndSecondOperationNumbers();
    result.textContent = firstNumOfOperation.toFixed(2);
    secondNumOfOperation = 0;
    negative = false;
    pressedEqual=true;
    //firstNumOfOperation = 0;
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

