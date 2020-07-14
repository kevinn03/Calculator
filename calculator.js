let expression = "";
window.onload = function(){
    populate();
}


function add(...num){
    
    let total = num[0] * 1;
    for (let index = 1; index < num.length; index++) {
        total += num[index];
        
    }
return total;
}

function subtract(...num){
    let total = num[0];
    for (let index = 1; index < num.length; index++) {
        total -= num[index];
        
    }
return total;
}

function multiply(...num){
    let total = num[0];
    for (let index = 1; index < num.length; index++) {
        total *= num[index];
        
    }
return total;
}


function divide(...num){
    let total = num[0];
    for (let index = 1; index < num.length; index++) {
        if (num[index] === 0){return alert("not allowed!")}
        total /= num[index];
        
    }
return total;
}

function operator(){
    let op = expression;

    if(op.includes("*")){
        let temp = op.split("*");
        solution(multiply(Number(temp[0]), Number(temp[1])));
    }
    else if(op.includes("+")){
        let temp = op.split("+");
        solution(add(Number(temp[0]), Number(temp[1])));
    }

    else if(op.includes("/")){
        let temp = op.split("/");
        solution(divide(temp[0], temp[1]));
    }
   
    
    else{
        let temp = op.split("--");
        solution(subtract(temp[0], temp[1]));
    }
}


function solution(result){
    let solu = result;
    let screen = document.querySelector(".display");
    screen.textContent = solu;
    expression = solu;
    
    



}
function display(){
    expression += this.textContent;
    console.log(expression);
    let screen = document.querySelector(".display");
    screen.textContent += this.textContent;
}

function populate(){
    let buttons = document.querySelectorAll(".bot");
    buttons.forEach(function(ele){
        ele.addEventListener("click", display);
    })
    let equal = document.querySelector(".equal");
    equal.addEventListener("click", operator);

}