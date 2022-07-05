function factorial(num){
    let numFinal = 1
    for (let i = 1; i <= num; i++) {
        numFinal*= i
    }
    return numFinal
}

module.exports = factorial