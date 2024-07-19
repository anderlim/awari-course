// 10. Escreva um programa que lê o tamanho do lado de um quadrado e imprime um quadrado daquele tamanho com asteriscos.

function imprimirQuadrado(tamanho) {
    let linha = '';
    for (let i = 0; i < tamanho; i++) {
        linha += '*';
    }
    
    for (let j = 0; j < tamanho; j++) {
        console.log(linha);
    }
}

// Recebe o tamanho do lado do quadrado do usuário
const tamanho = parseInt(prompt("Digite o tamanho do lado do quadrado:"));
if (!isNaN(tamanho) && tamanho > 0) {
    imprimirQuadrado(tamanho);
} else {
    console.log("Por favor, digite um número inteiro positivo.");
}
