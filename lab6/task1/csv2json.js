if (process.argv.length !== 4 || process.argv[2].slice(-4) !== '.csv' || process.argv[3].slice(-5) !== '.json')
    console.log('Invalid usage. Example: node csv2json.js data.csv data.json')

function parseCsvLine(keys, line) {
    let elements = line.split(',')
    let jsonObj = {}
    for (let i = 0; i <= elements.length; i++) {
        jsonObj[keys[i]] = elements[i]
    }
    return jsonObj
}

let csvInputFileName = process.argv[2]
let jsonOutputFileName = process.argv[3]

const fs = require('fs')
let csvData = fs.readFileSync(csvInputFileName, 'utf8')

let csvLines = csvData.split('\n')
let keys = csvLines[0].split(',')
let jsonOuput = []
for (let i = 1; i < csvLines.length; i++) {
    jsonOuput[i-1] = parseCsvLine(keys, csvLines[i])
}

fs.writeFile(jsonOutputFileName, JSON.stringify(jsonOuput), 'utf8', function(err) {
    if (err) console.log('Error writing file.')
})