
var recursion = function(number,open,close){
    var result = [];
    
    if (open == 0){
        result.push('[');
        return recursion(number,open+1,close)
    }
    if (open>close){
        result.push(']');
        return(number,open,close+1)
    }

    return (number,open-1,close-1);
}

console.log(recursion(5,2,2));