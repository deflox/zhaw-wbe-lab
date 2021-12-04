# Summary

Links:
* https://standardjs.com
* https://bartaz.github.io/ieee754-visualization
* https://eloquentjavascript.net
* https://devdocs.io
* http://latentflip.com/loupe
* https://insomnia.rest
* https://gburkert.github.io/selectors
* https://babeljs.io

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

## Node

### REPL

* _ liefert Resultat der letzten Operation
* .help gibt Hilfe zu weiteren Kommandos aus
* .load lädt ein File und führt es aus

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

## Funktionen

* JavaScript ist nicht sehr strikt mit den Anzahl Argumenten
* Funktion die keinen Return hat, liefert undefined
* Es gibt Unterschiede zwischen normalen Funktionen und Lambda Funktionen (Pfeilsytax)
* Pure Funktionen: Mathematische Definition von Funktion

```js
let sqr = n => n * n // muss nicht geklammert werden da nur ein argument
                     // return kann weggelassen werden da nur ein statement
let sqr = n => {return n*n}
let sqr = (n) => {return n*n}
let sqr = () => {}
let sqr = function () {}
let sqr = function (n) {
    return n*n
}

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

## Typen

## Zahlen

* JavaScript gibt es nur einen Datentyp "Number"
* 64 Bit Floating Point IEEE 754 => Enthält alle 32 Bit Ganzzahlen
* https://bartaz.github.io/ieee754-visualization/
* Spezielle Zahlen: Infinity, -Infinity, NaN
* BigInt für Grosse Zahlen: 1n + 2n oder 2n ** 128n

```js
typeof(x) // ermittle typ von Zahl
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

### Verzweigungen

```js
if (<ausdruck>) { // ausdruck muss nicht unbedingt logischer ausdruck sein
  ...             // kann auch von javascript zu false konvertiert werden
} else { 
  ... 
}

switch (<ausdruck>) { 
  case <wert1>: 
    ... 
    break 
  case <wert2>: 
    ... 
    break 
  default: 
    ... 
    break 
}

for (let i=1; i<50; i*=2) { 
  console.log(i) 
}
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