/* 
    7. Escreva um programa que recebe um número inteiro e mostre os números pares e ímpares (separados), de 1 até esse inteiro.
    Para saber se um dado numero é par ou ímpar a melhor maneira é usando o operador modulus/resto, % . Que retorna o resto da divisão de dois numeros.
    Se n % 2 der resto zero, o numero é par, e impar caso contrário.
*/

function mostrarParesEImpares(numero) {
    let pares = [];
    let impares = [];
    
    for (let i = 1; i <= numero; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        } else {
            impares.push(i);
        }
    }
    
    console.log(`Números pares de 1 até ${numero}: ${pares.join(', ')}`);
    console.log(`Números ímpares de 1 até ${numero}: ${impares.join(', ')}`);
}

// Recebe o número do usuário
const numero = parseInt(prompt("Digite um número inteiro:"));
if (!isNaN(numero) && numero > 0) {
    mostrarParesEImpares(numero);
} else {
    console.log("Por favor, digite um número inteiro positivo.");
}
