require('./scripts.js')

function oldAndLiving(SCRIPTS) {
    return SCRIPTS.filter(e => e.year < 0 && e.living).map(e => e.name)
}

console.log('oldAndLiving(SCRIPTS) :', oldAndLiving(SCRIPTS))

function numberOfCodes(entry) {
    let sum = 0
    entry.ranges.forEach(e => sum += e[1]-e[0])
    return sum
}

console.log('numberOfCodes(SCRIPTS[3]) :', numberOfCodes(SCRIPTS[3]))