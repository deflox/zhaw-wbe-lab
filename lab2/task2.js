function isPrime(n) {
    let m = Math.sqrt(n);
    for (let i = 2; i <= m; i++)
        if (n % i == 0) return false;
    return true;
}

console.log('isPrime(15):', isPrime(15))
console.log('isPrime(17):', isPrime(17))

function isPrime_CStyle(n) {
    let m = Math.sqrt(n);
    for (let i = 2; i <= m; i++)
        if (n % i == 0) return 0;
    return 1;
}

console.log('isPrime_CStyle(15):', isPrime_CStyle(15) == true)
console.log('isPrime_CStyle(17):', isPrime_CStyle(17) == true)

// Ja es spielt eine Rolle, ob anstatt "true" und "false" "1" und "0" zurückgegeben werden. 
// Im zweiten Fall wird tatsächlich 1 ausgegeben. Es kann aber mit dem == Operator verglichen werden
// und dies liefert im Endeffekt das gleiche Resultat. Jedoch würde dies mit === nicht gehen.