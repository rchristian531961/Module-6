
function sum(a,b){
    return a+b
}

function divide(a,b){
    return a/b
}

function multiply(a,b){
    return a * b
}

function subtract(a,b){
    return a-b;
}

function Calculate(a,b,operation){
    var num1=parseFloat(a);
    var num2=parseFloat(b);

    var solution=(op)=>{
        switch (op){
            case "-":return subtract(num1,num2);
            case "*":return multiply(num1,num2);
            case "/":return divide(num1,num2);
            default: return sum(num1,num2);
        }
    }
    return solution(operation);
}

export default Calculate;