let expression = "";
const screen = document.querySelector(".display");

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

function helpSpread(arr){
    let res = [];
        for (let index = 0; index < arr.length; index++) {
            res.push(Number(arr[index]));
            
        }
    return res;
}

function operator(){
    let op = expression;
    
    if(op.includes(" * ")){
        let temp = op.split("*");
        let res = helpSpread(temp);
        solution(multiply(...res));
    }
    

    else if(op.includes(" / ")){
        let temp = op.split("/");
        let res = helpSpread(temp);
        solution(divide(...res));
    }
    
    else if(op.includes(" + ")){
        let temp = op.split("+");
        let res = helpSpread(temp);
        solution(add(...res));
    }
    
    else if(op.includes(" - ")){
        let temp = op.split(" - ");
        let res = helpSpread(temp);
        solution(subtract(...res));
    }
    else {

    }
}


function solution(result){
    let solu = result;
    
    screen.classList.add("active");
    screen.textContent = solu;
    expression = solu;
    
    



}

function refresh(){
    expression = "";
    screen.textContent = expression;
    screen.classList.remove("active");
}


function display(){
    
    expression += this.textContent;
    console.log(expression);
    
    screen.textContent += this.textContent;
    screen.classList.remove("active");
}

function populate(){
    let buttons = document.querySelectorAll(".bot");
    buttons.forEach(function(ele){
        ele.addEventListener("click", display);
    })

   
    let equal = document.querySelector(".equal");
    equal.addEventListener("click", operator);

    let clear = document.querySelector(".clear");
    clear.addEventListener("click", refresh);

}

