const result = document.querySelector('#result');
const numbers = document.querySelectorAll('.num-button');
const operands = document.querySelectorAll('.operand');
const equalSign = document.querySelector('#equal-sign');
const zero = document.querySelector('#zero');
const ac = document.querySelector('#reset');
const plusMinus = document.querySelector('#plus-minus');
const period = document.querySelector('#period');

let firstNumOfOperation;
let secondNumOfOperation;
let useOperand = false;
let operandInUse;
let negative = false;

Array.from(numbers).map((x) => {x.addEventListener('click', ()=>{
    if(useOperand)result.textContent = '';
    result.textContent += x.textContent;
    SetFirstAndSecondOperationNumbers()})});
Array.from(operands).map((x) => {x.addEventListener('click', ()=>{operandInUse = x.textContent; result.textContent = firstNumOfOperation; useOperand = true})});

period.addEventListener('click', ()=>{result.textContent = result.textContent + '.'; SetFirstAndSecondOperationNumbers()})
plusMinus.addEventListener('click', ()=>{
    if(negative == false){
        result.textContent = result.textContent.padStart(2,'-');
         SetFirstAndSecondOperationNumbers();
         negative = true;
        }else{
        result.textContent = result.textContent.replace('-','');
         SetFirstAndSecondOperationNumbers();
        }
    })
zero.addEventListener('click', ()=>{result.textContent += 0; SetFirstAndSecondOperationNumbers()});
ac.addEventListener('click', ()=>{result.textContent = ''; useOperand=false; firstNumOfOperation=0;secondNumOfOperation=0; })
equalSign.addEventListener('click', ()=>{
    result.textContent = firstNumOfOperation;
    firstNumOfOperation = 0;
    operandInUse='';
});

function SetFirstAndSecondOperationNumbers(){
    if(useOperand){
        secondNumOfOperation = Number(result.textContent);
        SetOperand();
    }else{firstNumOfOperation = Number(result.textContent)}
}
function SetOperand(){
    switch (operandInUse) {
        case '+':
                firstNumOfOperation += secondNumOfOperation;
            break;
        case '-':
                firstNumOfOperation -= secondNumOfOperation;
                break;
        case '/':
                firstNumOfOperation /= secondNumOfOperation;
                break;
        case '*':
                firstNumOfOperation *= secondNumOfOperation;
                break;
    }
}

