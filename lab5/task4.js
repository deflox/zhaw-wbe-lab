if (typeof Object.beget !== 'function') {
    Object.beget = function (o) {
        var F = function () {}; // create empty placeholder function
        F.prototype = o;        // set the prototype of this function to the passed prototype
        return new F();         // return the function as new object reference
    }
}

let obj = Object.beget({a:1,b:2})

console.log(Object.getOwnPropertyNames(obj)) // object itself does not contain any property names
console.log(Object.getPrototypeOf(obj))      // but the prototype of obj is {a:1,b:2} so it behaves the same as Object.create()