function setInList(lst, idx, val) {
    let lstCopy = [...lst]
    lstCopy[idx] = val
    return lstCopy
}

function setInObj(obj, attr, val) {
    let objCopy = {...obj}
    objCopy[attr] = val
    return objCopy
}

export { setInList, setInObj }

/*
let lista = [0, 1, [2, 3], 4, {a: 1}]
let listb = setInList(lista, 3, 99)

console.log(lista)
console.log(listb)
console.log(lista[2])
console.log(lista[2] === listb[2])
console.log(lista[4] === listb[4])


let obja = { a: {a:1}, b: 5, c: [1,2,3] }
let objb = setInObj(obja, "b", 99)
console.log(obja)
console.log(objb)
console.log(obja.a === objb.a)
console.log(obja.c === objb.c)
*/