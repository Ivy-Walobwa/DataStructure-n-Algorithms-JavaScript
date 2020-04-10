const Stack = require('./arrayStack')

function postFixCalc(expression) {
    //create new stack
    let stack = new Stack();

    //loop through each character in provided expression
    for (let idx = 0; idx < expression.length; idx++) {
        //store each character
        let token = expression[idx];

        //if it's a number, push to stack
        //else pop right side and left side, perform operation and push to stack
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            let rhs = stack.pop();
            let lhs = stack.pop();
            //if right or left side is not available
            if (rhs === "UnderFlow" || lhs === "UnderFlow" ) {
                return "Can't perform postfix calculation";
            }
            switch (token) {
                case '+':
                    stack.push(lhs + rhs);
                    break;
                case '-':
                    stack.push(lhs - rhs);
                    break;
                case '*':
                    stack.push(lhs * rhs);
                    break;
                case '/':
                    stack.push(lhs / rhs);
                    break;
                case '%':
                    stack.push(lhs % rhs);
                    break;
            }
        }
        
    };

    return stack.pop();
}

console.log(postFixCalc('567*+1-'))

           