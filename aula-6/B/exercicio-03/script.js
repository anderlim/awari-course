// 3. Faça um programa que recebe um número inteiro e mostre a contagem de 1 até ele.

// Função para mostrar a contagem de 1 até o número fornecido
function mostrarContagem(numero) {
    if (isNaN(numero) || numero < 1) {
        console.log("Por favor, digite um número inteiro positivo.");
        return;
    }
    for (let i = 1; i <= numero; i++) {
        console.log(i);
    }
}

// Recebe o número do usuário
const numero = parseInt(prompt("Digite um número inteiro:"));
mostrarContagem(numero);
