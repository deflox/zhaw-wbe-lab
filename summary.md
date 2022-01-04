# Links
* https://bartaz.github.io/ieee754-visualization
* https://standardjs.com
* https://bartaz.github.io/ieee754-visualization
* https://eloquentjavascript.net
* https://devdocs.io
* http://latentflip.com/loupe
* https://insomnia.rest
* https://gburkert.github.io/selectors
* https://babeljs.io

# NodeJS
* NodeJS ist eine ereignisbasierte JavaScript-Laufzeitumgebung
* REPL (Read Eval Print Loop) kann mit ```node``` gestartet werden oder ein JavaScript File kann ausgeführt werden

## REPL
* ```_``` liefert Resultat der letzten Operation
* ```.help``` gibt Hilfe zu Kommandos aus
* ```.load hello-world.js``` ladet ein File in der REPL und führt es aus

# JavaScript

## Ausgabe auf der Konsole
```js
console.clear()     // Konsole leeren
console.trace()     // Stacktrace ausgeben
console.time()      // Zeitmessung starten
console.timeEnd()   // gibt vergangene Zeit aus, sofern Zeitmessung gestartet wurde
console.error()     // gibt Ausgabe auf stderr aus
```

## Werte und Typen

### Zahlenwerte
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

### Strings
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
```

### ```null``` und ```undefined```
* Sind eigentlich austauschbar
* Null wird eher verwendet, wenn keine Objectreferenz vorhanden ist oder eine Variable explizit keine Objektreferenz zuzuweisen
* undefined wird verwendet, wenn einer Variable noch keinen Wert zugewiesen worden ist

### typeof
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

## Operatoren
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

### ```==``` oder ```===```
* ```==``` führt automatische Typen Konvertierung durch
* ```===``` macht keine automatische Typen Konvertierung
* Gleiche Werte können im Normalfall mit ```==``` verglichen Werten (z.B. Strings)
```js
null == undefined // true (weil null und undefined praktisch austauschbar sind)
'5' == 5          // true, da einer der beiden zum jeweils anderen Typen konvertiert wird
'5' === 5         // false, es findet keine Konvertierung statt
```

## Verzeigungen und Wiederholungen
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

## Funktionen
* Funktionen sind Objekte
* Können als Parameter übergeben werden oder als Rückgabewerte von Funktionen selbst
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
let f4 = function() { console.log(arguments[0], arguments[1], arguments[2]) }
f4(1,2,3) // 1 2 3
f4(1,2)   // 1 2 undefined
f4(1)     // 1 undefined undefined
```

## Objekte
* Objekte sind Sammlungen von Attribute und Werte
* Attributname und Werte durch Doppelpunkt getrennt
* Attribut-Werte-Paare werden durch Kommas getrennt
```js
let person {
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

// TODO: this
// this bezieht sich normalerweise auf das Objekt

// Objekte zusammenführen (zweites Argument wird in das Objekt des ersten Arguments eingefügt)
let o1 = {a: 1, b: 2}
let o2 = {c: 3, d: 4}
let o3 = Object.assign(o1,o2) // { a: 1, b: 2, c: 3, d: 4 }
let o4 = Object.assign({},...o1)
o1 == o4                // false, da ein komplett neues Objekt erstellt wurde beim ersten Argument im letzten Object.assign()

// keys und values
let o5 = {a: 1, b: 2}
Object.keys(o5)         // [ 'a', 'b' ]
Object.values(o5)       // [ 1, 2 ]
```

## Arrays
```js
// Zugriff auf Arrays
let a1 = [1,2,3]
a1[0]           // 1
a1[100]         // undefined
let [a,b] = a1  // a = 1 , b = 2

// Arrays erweitern
let a2 = [1,2,3]
a2.push(4) // [1,2,3,4]
a2.pop()   // [1,2,3]
a2[6] = 99 // [1,2,3,undefined,undefined,undefined,99]
a2.length  // 7

// Arrays können verschiedene Typen haben
let a3 = ['1',2,{a: 1, b: 2}]

// Arrays sind spezielle Objekte, prüfen ob Array mit Arrays.isArray()
typeof a3           // 'object'
Arrays.isArray(a3)  // true

// TODO: Es gibt auch Objekte die als "Arrays" fungieren
```

---------------------------------------------------------------------------------------------------


## Discovered Methods:
* String.substring()
* Object.keys()
* Array.isArray()
* array.reduce()
* array.forEach()
* array.filter()
* array.map()
* Object.getOwnPropertyNames
* Object.getPrototypeOf(obj)
* Object.create()

## Todo:
* codePointAt vs. charPointAt
* difference between falsey and false

* wenn setTimeout mit 0 aufgerufen wird, kommt erst trotzdme erst danach, weil es wird ine ine Timeout liste gelegt und dann wird erst das ganze Script abgearbeitet bevor das setTimeout callback ausgeführt wird
* globale funktionen sind wie setTimeout sind an global angehängt
```js
var promise = new Promise((resolve, reject) => { 
  throw Error('fail') // fehler wird zuerst geworfen
  resolve()
})
 
promise
  .then (() => console.log('step1'))
  .then (() => { throw Error('fail') })
  .then (() => console.log('step2'))
  .catch(() => console.log('catch1')) // läuft erst hier rein
  .then (() => console.log('step3')) // dann hier weil auf das neue promise nix passiert
  .catch(() => console.log('catch2')) // dann hier
  .then (() => console.log('step4'))


console.clear() // -> um konsole zu clearen
```
* Es gibt ein Objekt "globalThis" welches immer auf das globale Objekt zeigt
* undefined -> variable wurde noch nicht initalisiert (z.B. let a)
* Undefined vs Null : https://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript


## JavaScript

* ECMA Script ist Organisation, die JavaScript standardisiert
* ES3, ES4, ES5, ES6, ES7 (2016), ES2017, ES2018...
* Babel erlaubt neues JavaScript in altes zu verwandeln

## this
* "use sctrict " kann auch in Funktionen verwendet werden anstatt global
```js
// prottypen können verändert werden
Object.prototype.attr = 42

// nun hat jedes Objekt dieses attr da alle den Objekt Prototypen besitzen
{}.attr
[].attr 

```

```js


console.log(square(10))

// kann auch vorher aufgerufen werden
function square (x) {
    return x*x
}

const prefix = (pre) => (text) => pre + text
const prefix = function(pre) {
  return function(text) {
    pre + text;
  }
}
```


### Strings

* Zeichen Codierung sind 16-Bit Unicode Zeichen

```js
'4' + 2 // gibt 42 weil + auch gleichzeitig string zusammensetzung macht
'4' - 2 // gibt 2 weil - nur arithmetische operationen durchführt und javascript 
        // dann automatisch die 4 in eine zahl umwandelt
3 * ''  // gibt 0, aus dem leeren String wird 0 gemacht
3 * 'a' // gibt aber NaN weil JavaScript aus a keine Zahl machen kann
NaN == NaN // gibt false weil zwei Not a Numbers unterschiedlich sein könnten

[!0,!'',!false,!undefined,!null]
// gibt [true,true,true,true,true]
// da die anderen als 'falsy' gelten auch auch false ergeben

typeof undefined // undefined
typeof null // object

typeof 2 // 'number'
typeof 2n // 'bigint'
typeof '' // string

// javascript has short-circuing heisst es werden nicht alle expressions evaluiert
let value = a || 'user' // wenn a etwas enthält dann wird a abgefüllt ansonsten 'user'
                        // da '' als false interpretiert wird muss er den rechten teil evaluieren

if (!'') console.log(true) // gibt true aus, weil '' als false interpretiert wird

```

### Objekte, Arrays und Wertetypen

* In JavaScript gibt es Objekte, Arrays und Wertetypen
* Arrays sind auch Objekte
* Objekte und Arrays können verändert werden
* Wertetypen können nicht verändert werden

Objekte:
```js
// objekt anlegen:
let obj = {
    name: 'Leo',
    age: 24,
    'exam results': [5.5,5.0,4.0],
    'f' => function() { return 'Hello' + this.name }
}

obj.name // Leo
obj['name'] // Leo
obj.birthday // gibt undefinied
obj.birthday.year  // gibt TypeError da auf undefined zugegriffen wird
obj.birthday && obj.birthday.year // um TypeError zu verhindern
obj.birthday?.year // neue ES2020 Sytax um TypeError zu verhindern

obj.surname = 'Rudin'
delete obj.name
'surname' in obj // true

student4 = {age: 25, age: 26} // ergibt {age: 26}, falls Element doppelt vorkommt, dann wird einfach das letzte Element genommen
```

Arrays:
```js
// array ähnliche objekte
let istArray = [1,2,3]
let wieArray = {0:1,1:2,2:3, length:3} // wieArray ist ein Array-Ähnliches Objekt

Array.from(wieArray) // liefert echtes Array von wieArray

```

Wertetypen:

```js
let obj = { } // objekt
typeof(obj) // object
obj.course = 'WBE'

let arr = [ ] // array
typeof(arr) // object
Array.isArray(arr) // um arrays
arr[0] = 3.5
arr[10] = 2

```