/*
 * Compares two parameters in terms of content equality but only on the top level of objects and arrays
 */

function equal(a,b) {
    if (a === b) return true

    // catch case where one of the two parameters could be null or undefined while the other is not
    if ((a === null && b !== null) || (a !== null && b === null)) return false
    if ((typeof a === 'undefined' && typeof b !== 'undefined') || (typeof a !== 'undefined' && typeof b === 'undefined')) return false

    // catch case where one of the two parameters could be an array while the other is not
    if ((Array.isArray(a) && !Array.isArray(b)) || (!Array.isArray(a) && Array.isArray(b))) return false

    if (typeof a === 'object' && typeof b === 'object') {
        let aElements = Object.keys(a)
        for (i=0; i<aElements.length; i++) {
            if (!aElements[i] in b || a[aElements[i]] != b[aElements[i]]) return false
        }

        return true
    }

    return false
}

console.log('equal(16, 16) :', equal(16, 16))
console.log('equal("hi", "hi") :', equal("hi", "hi"))
console.log('equal({}, {}) :', equal({}, {})) // needs to be equal because the contents are not different but the reference is
console.log('equal({a:1, b:2}, {b:2, a:1}) :', equal({a:1, b:2}, {b:2, a:1}))
console.log('equal({a:1, b:2}, {c:3, b:2, a:1}) :', equal({a:1, b:2}, {c:3, b:2, a:1}))
console.log('equal({a:{}}, {a:{}}) :', equal({a:{}}, {a:{}}))
let emptyObj = {}
console.log('equal({a:emptyObj}, {a:emptyObj}) :', equal({a:emptyObj}, {a:emptyObj}))