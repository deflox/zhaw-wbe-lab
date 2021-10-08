// a

function fiboa(n) {
    if (n <= 1) return n
    return fiboa(n-1) + fiboa(n-2)
}

console.log(fiboa(0)) // should be 0
console.log(fiboa(1)) // should be 1
console.log(fiboa(5)) // should be 5
console.log(fiboa(10)) // should be 55

// b

function fibob(n) {
    G = (1+Math.sqrt(5))/2
    return Math.round(G**n/Math.sqrt(5))
}

console.log(fibob(0)) // should be 0
console.log(fibob(1)) // should be 1
console.log(fibob(5)) // should be 5
console.log(fibob(10)) // should be 55

// c

n = 30

console.time("fiboa")
console.log(fiboa(n))
console.timeEnd("fiboa")

console.time("fibob")
console.log(fibob(n))
console.timeEnd("fibob")

// d

// Für extrem grosse Zahlen eignet sich die rekursive Variante schonmal sicher nicht, weil dies zu StackOverflows führt.
// Die Näherungsfunktion ebenfalls nicht, da extrem grosse Zahlen schnell zu Inifinty führen, da n im Exponent steht.
// Somit bleibt nur noch die iterative Variante unten:

function fiboIter(n) {
    let n2 = BigInt(0)
    let n1 = BigInt(1)
    let r  = BigInt(0)
    for (let i = 2; i <= n ; i++) {
        r = n1 + n2
        n2 = n1
        n1 = r
    }
    return r;
}

console.time("fiboIter")
console.log(fiboIter(n))
console.timeEnd("fiboIter")