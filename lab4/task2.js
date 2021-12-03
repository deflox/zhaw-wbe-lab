function factorial(n) {
    let result = 1
    if (typeof n === 'bigint') result = BigInt(result)
    for (let i = 1; i <= n; i++) {
        result *= typeof n === 'bigint' ? BigInt(i) : i
    }
    return result
}

console.log('factorial(10) :', factorial(10))
console.log('factorial(50n) :', factorial(50n))