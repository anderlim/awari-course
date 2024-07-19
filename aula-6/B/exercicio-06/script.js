// 6. Faça um programa que recebe um número inteiro e mostre a tabuada desse número.

function mostrarTabuada(numero) {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Recebe o número do usuário
const numero = parseInt(prompt("Digite um número inteiro:"));
mostrarTabuada(numero);
