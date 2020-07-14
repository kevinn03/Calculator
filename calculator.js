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