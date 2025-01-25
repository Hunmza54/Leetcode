const polish = function (tokens) {
    let stack = [];
    let result = 0;
    for (let i = 0; i <= tokens.length - 1; i++) {
        if (tokens[i] === "+") {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(b + a);
            
        }
        else if (tokens[i] == "*") {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(b * a);
            
           
        }
        else if (tokens[i] == "-") {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(b - a);
            
        }

        else if (tokens[i] == "/") {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(Math.trunc(b/a));
           
        }
        else {
            stack.push(Number(tokens[i]));
            //console.log(stack);
        }


    }

    return stack.pop();



}

tokens=["4","13","5","/","+"]
console.log(polish(tokens));
//console.log(Math.ceil(5/3));