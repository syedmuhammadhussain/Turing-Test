function baseBall(input) {
    let stack = []

    for(let val of input) {
        if(val === '+') {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2])
        } else if(val === 'C') {
            stack.pop(stack[stack.length - 1])
        } else if(val === 'D') {
            stack.push((stack[stack.length - 1]) * 2)
        } else {
            stack.push(Number(val))
        }
    }
    return stack.reduce((acc, curr) => acc + curr, 0)
}

let input = ['5', '2', 'C', 'D', '+']

console.log(baseBall(input))