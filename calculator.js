let text =""
window.onload = function(){
    populate();
}


function add(...num){
    let total = num[0];
    for (let index = 1; index < num.length; index++) {
        total += num[index] ;
        
    }
return total;
}

function subtract(...num){
    let total = num[0];
    for (let index = 1; index < num.length; index++) {
        total -= num[index] ;
        
    }
return total;
}

function multiply(...num){
    let total = num[0];
    for (let index = 1; index < num.length; index++) {
        total *= num[index] ;
        
    }
return total;
}


function divide(...num){
    let total = num[0];
    for (let index = 1; index < num.length; index++) {
        if (num[index] === 0){return alert("not allowed!")}
        total /= num[index] ;
        
    }
return total;
}

function operator(...op){
    if(op[0] === "+"){
        add(op[1], op[2]);}
    else if(op[0] === "-"){
        subtract(op[1], op[2]);}
    else if(op[0] === "*"){
        multiply(op[1], op[2]);}
    else{
        divide(op[1], op[2]);}
}
function display(){
    
    let screen = document.querySelector(".display");
    screen.textContent += this.textContent;
}

function populate(){
    let buttons = document.querySelectorAll(".bot");
    buttons.forEach(function(ele){
        ele.addEventListener("click", display);
    })

}