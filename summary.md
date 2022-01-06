# Links
* https://standardjs.com
* https://bartaz.github.io/ieee754-visualization
* https://eloquentjavascript.net
* https://devdocs.io
* http://latentflip.com/loupe
* https://insomnia.rest
* https://gburkert.github.io/selectors
* https://babeljs.io

# MLDM Links
* String Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
* Number Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
* Array Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
* Math Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
* Date Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

# NodeJS
* NodeJS ist eine ereignisbasierte JavaScript-Laufzeitumgebung
* REPL (Read Eval Print Loop) kann mit ```node``` gestartet werden oder ein JavaScript File kann ausgeführt werden

## REPL
* ```_``` liefert Resultat der letzten Operation
* ```.help``` gibt Hilfe zu Kommandos aus
* ```.load hello-world.js``` ladet ein File in der REPL und führt es aus
* Kommandozeilenargumente: ```process.argv``` (erstes Argument immer Location von node.exe, zweites immer Location vom Script)

# Konsole
```js
console.clear()   // Konsole leeren
console.trace()   // Stacktrace ausgeben
console.time()    // Zeitmessung starten
console.timeEnd() // gibt vergangene Zeit aus, sofern Zeitmessung gestartet wurde
console.error()   // gibt Ausgabe auf stderr aus
```

# Werte
* Wertetypen sind nicht veränderbar (Strings, Zahlen...)
* Zuweisung kann wie Kopieren behandelt werden
```js
// sind nicht veränderbar
let v1 = "Test"
let v2 = v1
v1 += "Test"
console.log(v1) // Test
console.log(v2) // TestTest

// haben ebenfalls Attribute und Methoden haben (wie bei Objekten)
"Zeichenkette".length    // 12
"Zeichenkette"["lenght"] // 12
let name = "Leo"
name.test = "Test"
console.log(name.test)   // undefined (Attribute können auf Wertetypen nicht angepasst werden)
```

## Zahlenwerte
* Zahlentyp: ```Number```
* 64 Bit Floating Point entsprechend IEEE 754
```js
let v1 = 17           // Ganzzahlliteral
let v2 = 3.14         // Dezimalzahlliteral
let v3 = 2.998e8      // Dezimalpunktverschiebung 2.998 * 10^8

let v4 = Infinity     // unendlich z.B. 1/0 = Infinity
let v5 = -Infinity    // minus unendlich z.B. -1/0 = -Infinity
let v6 = NaN          // Not a Number z.B. 0/0

let v7 = 2n           // BigInt Datentyp für grosse Zahlen
let v8 = n7 + 3n
let v9 = BigInt(1)    // 1n
let v10 = Number(1n)  // 1
let v11 = Number('1') // 1
let v12 = Number('a') // NaN
```

## Strings
* Strings sind 16-Bit-Unicode Zeichen
* '' und "" bewirken das gleiche
* Sind Werte
```js
let v1 = 'string1'
let v2 = "string2"
let v3 = v1 + v2

// template strings
let v4 = 15
let v5 = `There are ${v4} people.`
let v6 = `There are ${14/2} people.`

// aus irgendwelchen dämlichen Gründen gibt es zustätzlich auch ein String-Objekt
let v7 = new String('test') // nun eine Referenz; mittels valueOf kann Werte-String herausgeholt werden
```

# ```null``` und ```undefined```
* Sind eigentlich austauschbar
* Null wird eher verwendet, wenn keine Objektreferenz vorhanden ist oder eine Variable explizit keine Objektreferenz zuzuweisen
* undefined wird verwendet, wenn einer Variable noch keinen Wert zugewiesen worden ist
```js
// auf undefined prüfen
let a
if (a === undefined) console.log("undefined #1")
if (typeof a === 'undefined') console.log('undefined #2')
```

# typeof
* Mittels ```typeof``` Operator wird der string des Typs der Variable zurückgegeben
```js
typeof 12        // 'number'
typeof(12)       // 'number'
typeof 2n        // 'bigint'
typeof Infinity  // 'number'
typeof NaN       // 'number'
typeof null      // 'object'
typeof 'number'  // 'number'
typeof undefined // 'undefined'
typeof true      // 'boolean'

typeof 12 === 'number' // true
```

# Operatoren
* Typen werden bei Bedarf vor einer Operation konvertiert
* Insbesondere problematisch ist +, da dieser sowohl zur String konkanitation verwendet wird, als auch zum rechnen
```js
8 * null // führt zu 0, weil null zu 0 konvertiert wird
"5" - 1  // ergibt 4, weil "5" zu 5 konvertiert wird
"5" + 5  // ergibt "55", weil 5 zu "5" konvertiert wird
         // konkatination wird bevorzugt

// werte, die ebenfalls als "false" interpretiert werden können:
[!0, !"", !false, !undefined, !null] // [true,true,true,true,true]

// || und %% operator
undefined || "test" // "test";    liefert den ersten Operanden der als true interpretiert werden kann
undefined && "test" // undefined; liefert den ersten Operanden der als false interpertiert werden kann
```

## ```==``` oder ```===```
* ```==``` führt automatische Typenkonvertierung durch
* ```===``` macht keine automatische Typenkonvertierung
* Gleiche Werte können im Normalfall mit ```==``` verglichen Werten (z.B. Strings)
* Falls Objekte verglichen werden wird mit ```==``` die Referenz verglichen
```js
null == undefined // true (weil null und undefined praktisch austauschbar sind)
'5' == 5          // true, da einer der beiden zum jeweils anderen Typen konvertiert wird
'5' === 5         // false, es findet keine Konvertierung statt

// hier werden Objektreferenzen verglichen
[ []==[], {}=={}, (()=>{})==(()=>{}) ]
[ false, false, false ]
```

# Verzeigungen und Wiederholungen
```js
if (1 > 5) {  // Ausdruck muss nicht unbedingt logischer Natur sein
  // ...      // kann auch von JavaScript zu false konvertiert werden
} else if (5 < 2) {
  // ...
} else { 
  // ...
}

switch (5) { 
  case 1: 
    // ...
    break 
  case 2: 
    // ...
    break 
  default: 
    // ...
    break 
}

for (let i=1; i<50; i*=2) { 
  console.log(i)
}

let v = 5 > 1 ? 1 : 2
```

# ```var```, ```let```, ```const```
```js
// var ist function scope
function varDemo() {
  let x = 10
  if (true) {
    var z = 30
  }
  console.log(x+z) // wird zu 40, da z in der ganzen Funktion vorhanden ist
}

// let ist block scope (wie normalerweise erwartet)

// bei const darf die Referenz oder der Wert nicht geändert werden (ebenfalls block scope)
const v1 = {}
v1 = {} // error
const v2 = "test"
v2 = "testtest" // error

// kann auch komplett weggelassen werden, aber dann ist die Variable Global (sehr sehr sehr hässlich!!)
const add = function(a,b) {
  result = a+b
  return result
}
add(a+b)
console.log(result) // global hier
```

# Funktionen
* Funktionen sind Objekte
* Können als Parameter übergeben werden oder als Rückgabewerte von Funktionen selbst
* Pure Funktionen: Haben keine Seiteneffekte, z.B. mathematische Funktion
```js
let sqr = n => n * n
let sqr = n => {return n*n}
let sqr = (n) => {return n*n}
let sqr = () => n * n
let sqr = function (n) {return n*n}

// Funktionen, die keinen Return Wert haben liefern 'undefined', falls eine Zuweisung stattfindet
let f1 = function () { console.log('test') }
let v1 = f1() // undefined

// Funktionen, die an keine Variable zugewiesen werden, werden vor dem normalen Anweisungsfluss ausgeführt
function f2() {
  console.log('test')
}
f2() // 'test'

// Parameter müssen nicht zwingen übergeben werden
let f3 = function(a,b,c) { console.log(a,b,c) }
f3(1,2,3) // 1 2 3
f3(1,2)   // 1 2 undefined
f3(1)     // 1 undefined undefined

// Es ist ebenfalls möglich, auf eine 'arguments' Variable zuzugreifen, die alle Parameter beinhaltet
// ist kein richtiges Array sondern nur "array-ähnlich"
let f4 = function() { console.log(arguments[0], arguments[1], arguments[2]) }
f4(1,2,3) // 1 2 3
f4(1,2)   // 1 2 undefined
f4(1)     // 1 undefined undefined

// Funktionen können theoretisch auch mit Attributen erweitert werden
let f5 = x => x*x
f5.test = "Hello"
console.log(f5.test) // Hello

// innere Funktionen haben Zugriff auf Variablen in äusserer Funktion
const f6 = function(a,b) {
  const f = function() {
    return a*b
  }
  console.log(f())
}
f6(5,5) // 25

// bei den Parametern können auch default Werte definiert werden
const f7 = function(a,b,c) { console.log(a,b,c=5) }
f7(1,2)   // 1 2 5

// mittels REST Parameter werden n Parameter zum Array umgewandelt
const f8 = function(...params) { for (let param of params) { console.log(param) } }
f8("a","b","c") // printed nacheinander a,b,c

// Closures : Funktionen die in den Gültigkeitsbereich einer Funktion eingeschlossen sind
const f9 = function() {
  let local = n
  let f = () => local
  return f
}
let wrap1 = f9(1)
console.log(wrap1()) // wird 1 ausgeben
```

# Objekte
* Variablen die Objekte beinhalten, haben Referenzen auf dieses Objekt, welche jedes Mal unterschiedlich sind
```js
[ []==[], {}=={}, (()=>{})==(()=>{}) ]
[ false, false, false ]
> [ 3.5==3.5, "abc"=="abc", false==false ]
[ true, true, true ]
```
* Objekte sind Sammlungen von Attribute und Werte
* Attributname und Werte durch Doppelpunkt getrennt
* Attribut-Werte-Paare werden durch Kommas getrennt
```js
let person = {
  name: 'John Baker',
  age: 23,
  'exam results': [6,5,6,6,5]
}

// Zugriff auf Objekte
person.name             // John Baker
person['age']           // 23
person['exam results']  // [6,5,6,6,5]
person.birthday         // undefined
person.birthday.year    // TypeError (da birthday undefined ist)
person.birthday && person.birthday.year // bessere Variante
person.birthday?.year   // neu eingeführt seit ES2020
let o1 = {a: 1, b: 2}
let {a,b} = o1          // a = 1 , b = 2

// Objekte erweitern, Attribute löschen, Existenz prüfen
person['birthday'] = '11-04-1997'
person.height = 193
delete person.name
'name' in person        // false
'age' in person         // true

// Methoden (Funktionen innerhalb von Objekten)
let cat = { name: 'James', meow: function() { console.log('Meow from ' + this.name) } }
cat.meow()              // Meow from James

// Objekte zusammenführen (zweites Argument wird in das Objekt des ersten Arguments eingefügt)
let o1 = {a: 1, b: 2}
let o2 = {c: 3, d: 4}
let o3 = Object.assign(o1,o2) // { a: 1, b: 2, c: 3, d: 4 }
let o4 = Object.assign({},...o1)
o1 == o4 // false, da ein komplett neues Objekt erstellt wurde beim ersten Argument im letzten Object.assign()

// keys und values
let o5 = {a: 1, b: 2}
Object.keys(o5)         // [ 'a', 'b' ]
Object.values(o5)       // [ 1, 2 ]

// Objekte können auch bei Funktionsparametern destrukturiert werden
let o5 = {a:1,b:2,c:3}
let f1 = ({a,b}) => a*b
f1(o5) // 2 (wegen 1*2)

// TODO: this
// this bezieht sich normalerweise auf das Objekt

```

## Arrays
* Arrays sind ebenfalls spezielle Objekte
* Es gibt häufig auch "Array ähnliche" Objekte, die zwar wie ein Array funktionieren, aber kein richtiges Array sind (überprüfung auf Echtheit mit ```Arrays.isArray()```)
```js
// Zugriff auf Arrays
let a1 = [1,2,3]
a1[0]           // 1
a1[100]         // undefined
let [a,b] = a1  // a = 1 , b = 2 (Destrukturierung)

// Arrays erweitern
let a2 = [1,2,3]
a2[6] = 99 // [1,2,3,<empty>,<empty>,<empty>,99]
a2.length  // 7

// Array Funktionen
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
let a3 = [1,2,3]
a3.push(4)        // [1,2,3,4]
a3.pop()          // [1,2,3]
a3.unshift(0)     // [0,1,2,3]
a3.shift()        // [1,2,3]
a3.indexOf(2)     // 1
a3.lastIndexOf(2) // 1
a3.slice(0,2)     // [1,2]
a3.concat([4,5])  // [1,2,3,4,5]

// Arrays können verschiedene Typen haben
let a4 = ['1',2,{a: 1, b: 2}]

// Arrays sind spezielle Objekte, prüfen ob Array mit Arrays.isArray()
typeof a4           // 'object'
Arrays.isArray(a4)  // true

// Loop over Arrays
for (let i = 0; i < myArray.length; i++) {
  // ...
}
for (let entry of myArray) {
  // ...
}

// Destrukturierung funktioniert auch bei Parametern
let a5 = [1,2,3]
let f1 = ([a,b]) => a*b
console.log(f1(a5)) // 2 (wegen 1*2)

// Sofern Zugriff nicht über Index erfolgt, wird wie bei einem Objekt ein neues Attribut angelegt
let a6 = [1,2,3]
a6['test'] = 'hello'
a6 // [1,2,3,test:hello]

// Array Funktionen
let a7 = [1,2,3,4,5]
a7.forEach(e => console.log(e)) // printed alle Elemente, lässt Leere aus
a7.filter(e => e > 3) // gibt neues Array zurück, mit angewanten Filter
a7.map(e => e * e) // gibt neues Array zurück mit applizierter map Funktion auf jedes Element
a7.reduce((curr,next) => curr + "" + next) // curr ist immer aktueller Stand, next das nächste Element, gibt 12345 aus
```

## JSON
* JSON ist ein String-Format, dass im Prinzip nichts anderes als JavaScript Objekte darstellt
* Einige Ausnahmen: z.B. Methoden können natürlich nicht serialisiert werden
```js
// JavaScript Objekt -> JSON
let object = {a:1,b:2,c:3}
let json = JSON.stringify(object)

// JSON -> JavaScript Objekt
object = JSON.parse(json)
```

# Modulsystem
* Es gibt zwei Modulsysteme: CommonJS und ES6

## CommonJS
* Ein Export:
```js
// car-lib.js
const car = { brand:'Ford', model:'Fiesta' }

module.exports = car

// other file
const car = require('./car-lib')
```
* Mehrere Exports:
```js
// car-lib.js
const car = { brand:'Ford', model:'Fiesta' }
const truck = { brand:'Man', model:'Big' }

exports.car = car
exports.truck = truck

// other file
const car = require('./car-lib').car
const truck = require('./car-lib').truck
```
* Falls kein absoluter oder relativer Pfad => Annahme: build-in Module oder node_module
```js
// falls kein relativer oder absoluter Pfad -> build-in Modul oder node_modules Modul
const readline = require('readline')
```

## ES6
```js
/* square.js */
const name = 'square'
function draw (ctx, length, x, y, color) { ... }
export { name, draw }

/* other js file */
import { name, draw } from './modules/square.js'
```