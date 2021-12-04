function findTag(input) {
    if (typeof input !== 'string') return undefined;

    let start = -1
    let end = -1
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '<') start = i
        if (input[i] === '>') {
            end = i
            break
        }
    }

    if (start != -1 && end != -1) {
        return input.substring(start+1,end)
    }
}

let fibonacci = (n) => { 
    if (n < 2) return n 
    else return fibonacci(n-1) + fibonacci(n-2) 
}

function equal(a,b) {
    if (a === b) return true

    // catch case where one of the two parameters could be null or undefined while the other is not
    if ((a === null && b !== null) || (a !== null && b === null)) return false
    if ((typeof a === 'undefined' && typeof b !== 'undefined') || (typeof a !== 'undefined' && typeof b === 'undefined')) return false

    // catch case where one of the two parameters could be an array while the other is not
    if ((Array.isArray(a) && !Array.isArray(b)) || (!Array.isArray(a) && Array.isArray(b))) return false

    if (typeof a === 'object' && typeof b === 'object') {
        let matches = 0
        let aKeys = Object.keys(a)
        for (i=0; i<aKeys.length; i++) {
            if (!aKeys[i] in b || a[aKeys[i]] != b[aKeys[i]]) return false
            matches++
        }

        if (matches === Object.keys(b).length) return true
    }

    return false
}

module.exports = {findTag,fibonacci,equal}