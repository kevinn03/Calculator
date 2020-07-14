let show = "";
let expression = "";
let answer = [];
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
        if (num[index] === 0){
            
            alert("Not allowed to dive by zero!")
            
        }
        
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

function logop(){
    if(expression !== ""){
    answer.push(Number(expression));}
   
    
        
    if(answer.length === 3){
        let result = operator(answer[0], answer[1], answer[2]);
        result = Number(result);
        if(Number.isInteger(result)){

        }
        else{
            result = result.toFixed(2);
        }
        answer = [];

        answer.push(result, this.textContent);
        show = result;
        screen.textContent = show;
        toggleOff();
        
    }else{
   
    answer.push(this.textContent);
    
    
    }
    console.log(expression);
    show = "";
    expression = "";
}

function operator(first, sign, second){
   if(answer.length < 3){answer.push(Number(expression));}
    
            first = answer[0];
        sign = answer[1];
        second = answer[2]
        let resy;
        
            if(sign === (" * ")){
                resy = multiply(first, second);
                resy = Number(resy);
                if(Number.isInteger(resy)){

                }
                else{
                    resy = resy.toFixed(2);
                }
                answer = [];
                answer.push(resy);
                show = resy;
                screen.textContent = show;
                toggleOn();
                expression = "";
                return resy;
            }
            

            else if(sign === (" / ")){
                
                 resy = divide(first, second);
                 resy = Number(resy);
                 if(Number.isInteger(resy)){

                 }
                 else{
                     resy = resy.toFixed(2);
                 }
                 answer = [];
                 answer.push(resy);
                 show = resy;
                 screen.textContent = show;
                 toggleOn();
                 expression = "";
                 return resy;    
                
                }

            else if(sign === (" + ")){
                
                 resy = add(first, second);
                 resy = Number(resy);
                 if(Number.isInteger(resy)){

                 }
                 else{
                     resy = resy.toFixed(2);
                 }
                 answer = [];
                 answer.push(resy);
                 show = resy;
                 screen.textContent = show;
                 toggleOn();
                 expression = "";
                 return resy;
            
                } 

            
            else if(sign === (" - ")){
                
                 resy = subtract(first, second);
                 resy = Number(resy);
                 if(Number.isInteger(resy)){

                 }
                 else{
                     resy = resy.toFixed(2);
                 }
                 answer = [];
                 answer.push(resy);
                 show = resy;
                 screen.textContent = show;
                 toggleOn();
                 expression = "";
                 return resy;
            } 

            else {

            }
    
}



function toggleOn(){
    screen.classList.add("active");
}

function toggleOff(){
    screen.classList.remove("active");
}

function refresh(){
    answer = [];
    expression = "";
    show = "";
    screen.textContent = show;
    toggleOff();
}


function display(){
    console.log(expression);
    
    show += this.textContent;
    expression += this.textContent;
    
    console.log(show);
    console.log(answer);
    
    
    screen.textContent = show;
    toggleOff();
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

    let oper = document.querySelectorAll(".op");
    oper.forEach(function(ele){
        ele.addEventListener("click", logop);
    })

}

