// 4. Faça um programa que mostre todos os números primos de 0 a 100.
// Um número primo é aquele que é dividido apenas por um e por ele mesmo. Entre 0 e 100 existem apenas 25 números primos.
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    
    return true;
}

function showPrimes(upTo) {
    for (let i = 0; i <= upTo; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

// Mostrar todos os números primos de 0 a 100
showPrimes(100);
