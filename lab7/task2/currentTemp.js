if (process.argv.length !== 3) {
    console.log('\nInvalid usage! Example: \n\n$ node currentTemp.js Winterthur')
    process.exit(1)
}

const {request} = require("https")

let req = request({
    method: "GET",
    hostname: "wttr.in", 
    path: `/${process.argv[2]}?format=j1`,
    headers: {Accept: "text/json"},
}, response => {
    if (response.statusCode !== 200) console.log('Error fetching API results!')

    let body = ''
    response.on('data', chunk => body += chunk)
    response.on('end', () => console.log(JSON.parse(body).current_condition[0].temp_C + '°'))
})

req.end()