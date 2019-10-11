module.exports = function multiply(firstOperand, secondOperand) {
    let firstOperandArr = firstOperand.split('').reverse();
    let secondOperandArr = secondOperand.split('').reverse();

    let stack = [];

    for (let i = 0; i < firstOperandArr.length; i++) {
        for (let j = 0; j < secondOperandArr.length; j++) {
            let m = firstOperandArr[i] * secondOperandArr[j];
            if(stack[i + j]){stack[i + j] += m}else {stack[i + j] = m}
            // stack[i + j] = (stack[i + j]) ? stack[i + j] + m : m;
        }
    }

    for (let i = 0; i < stack.length; i++) {
        let num = stack[i] % 10;
        let move = Math.floor(stack[i] / 10);
        stack[i] = num;

        if (stack[i + 1])
            stack[i + 1] += move;
        else if (move != 0)
            stack[i + 1] = move;
    }


    return stack.reverse().join('');
}