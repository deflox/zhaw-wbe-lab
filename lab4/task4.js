require('./scripts.js')

function scriptOfSample(sign, SCRIPTS) {
    let codePoint = sign.codePointAt(0)
    for (let i = 0; i < SCRIPTS.length; i++) {
        let filterResult = SCRIPTS[i].ranges.filter(e => codePoint >= e[0] && codePoint < e[1])
        if (filterResult.length > 0) return SCRIPTS[i].name
    }
    return 'unknown'
}

console.log('scriptOfSample("A", SCRIPTS) :', scriptOfSample("A", SCRIPTS))
console.log('scriptOfSample("英", SCRIPTS) :', scriptOfSample("英", SCRIPTS))
console.log('scriptOfSample("я", SCRIPTS) :', scriptOfSample("я", SCRIPTS))

function scriptsInString(string, SCRIPTS) {
    let result = {}
    for (let i = 0; i < string.length; i++) {
        let system = scriptOfSample(string[i], SCRIPTS)
        if (system in result) result[system] = result[system] + 1
        else result[system] = 1
    }
    return result
}

console.log('scriptsInString(\'英国的狗说 "JavaScript", "тяв"\', SCRIPTS) :', scriptsInString('英国的狗说 "JavaScript", "тяв"', SCRIPTS))
console.log('scriptsInString(\'https://pоstfinance.ch\', SCRIPTS) :', scriptsInString('https://pоstfinance.ch', SCRIPTS))

// c
// Das sollte mich skeptisch machen, da unknown vier Mal vorkommt, die Zeichen sind jedoch ziemlich häufig.