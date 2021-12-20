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

console.log('findTag("<header>Text</header") :', findTag("<header>Text</header"))
console.log('findTag("blabla <br> blabla") :', findTag("blabla <br> blabla"))
console.log('findTag("<<<<<<test>>>>") :', findTag("<<<<<<test>>>>"))