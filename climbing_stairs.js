function climbingStairs(n) {

    if(n <= 2) return n

    let oneStepBefore = 2
    let twoStepBefore = 1
    let always = 0
    
    for(let i = 3; i <= n; i++) {
        always = oneStepBefore + twoStepBefore
        twoStepBefore = oneStepBefore
        oneStepBefore = always
    }

    return always
}

console.log(climbingStairs(4))