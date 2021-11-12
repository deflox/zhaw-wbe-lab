# Summary

Links:
* https://standardjs.com
* https://bartaz.github.io/ieee754-visualization
* https://eloquentjavascript.net
* https://devdocs.io

## Node

### REPL

* _ liefert Resultat der letzten Operation
* .help gibt Hilfe zu weiteren Kommandos aus
* .load lädt ein File und führt es aus

## JavaScript

* ECMA Script ist Organisation, die JavaScript standardisiert
* ES3, ES4, ES5, ES6, ES7 (2016), ES2017, ES2018...
* Babel erlaubt neues JavaScript in altes zu verwandeln

## Funktionen

* JavaScript ist nicht sehr strikt mit den Anzahl Argumenten
* Funktion die keinen Return hat, liefert undefined
* Es gibt Unterschiede zwischen normalen Funktionen und Lambda Funktionen (Pfeilsytax)

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

// javascript has short-circuing heisst es werden nicht alle expressions evaluiert
let value = a || 'user' // wenn a etwas enthält dann wird a abgefüllt ansonsten 'user'
                        // da '' als false interpretiert wird muss er den rechten teil evaluieren

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

```

Arrays:

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