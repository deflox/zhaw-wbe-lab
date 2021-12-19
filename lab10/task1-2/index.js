var express = require('express')
var app = express()

function error(status, msg) {
  var err = new Error(msg)
  err.status = status
  return err
}

// API-Key überprüfen
app.use('/api', function(req, res, next){
  var key = req.query['api-key']
  
  // Key fehlt
  if (!key) { 
    return next(error(400, 'api key required'))
  }
  // Key falsch
  if (!~apiKeys.indexOf(key)) {
    return next(error(401, 'invalid api key'))
  }
  // korrekter Key
  req.key = key
  next()
})

// Statische Dateien im Verzeichnis public
app.use(express.static('public'))

// JSON-Daten akzeptieren
app.use(express.json())

// gültige API-Keys
var apiKeys = ['wbeweb', 'c4game']

// unsere tolle in-memory Datenbank :)
var data = {
  board: [
    [ '', '', '', '', '', '', '' ],
    [ '', '', '', '', '', '', '' ],
    [ '', '', '', '', '', '', '' ],
    [ '', '', '', '', '', '', '' ],
    [ '', '', '', '', '', '', '' ],
    [ '', '', '', '', '', '', '' ],
  ]
}

// GET-Request : get data for id
app.get('/api/data/:id', function(req, res, next){
  var id = req.params.id
  var result = data[id]

  if (result) res.send(result)
  else next()
})

// PUT-Request bearbeiten
app.put('/api/data/:id', function(req, res, next) {
  let id = req.params.id
  if (!(id in data)) {
    res.status(404); return
  }
  data[id] = req.body
  res.status(200).send()
})

// Middleware mit vier Argumenten wird zur Fehlerbehandlung verwendet
app.use(function(err, req, res, next){
  res.status(err.status || 500)
  res.send({ error: err.message })
})

// Catch-all: wenn keine vorangehende Middleware geantwortet hat, wird hier ein 404 (not found) erzeugt
app.use(function(req, res){
  res.status(404)
  res.send({ error: "not found" })
})

app.listen(3000)
console.log('Express started on port 3000')

/*
GET: http://localhost:3000/api/data/1234567890?api-key=wbeweb
POST: http://localhost:3000/api/data?api-key=wbeweb {name:'Eva'}

GET http://localhost:3000/api/data/5555555555?api-key=wbeweb
PUT: http://localhost:3000/api/data/5555555555?api-key=wbeweb {name:'Eva'}
GET http://localhost:3000/api/data/5555555555?api-key=wbeweb

DELETE: http://localhost:3000/api/data/5555555555?api-key=wbeweb
GET http://localhost:3000/api/data/5555555555?api-key=wbeweb
 */