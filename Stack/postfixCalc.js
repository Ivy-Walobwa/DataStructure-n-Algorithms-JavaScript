const Stack = require('./arrayStack')

function postFixCalc(expression) {

    let stack = new Stack();

    for (let idx = 0; idx < expression.length; idx++) {
        let token = expression[idx];

        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            let rhs = stack.pop();
            let lhs = stack.pop();
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