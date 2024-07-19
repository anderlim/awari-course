// 8. Faça um programa que receba 5 idades, calcule e mostre a média das idades digitadas.

function calcularMediaIdades(idades) {
    let soma = 0;
    for (let i = 0; i < idades.length; i++) {
        soma += idades[i];
    }
    return soma / idades.length;
}

let idades = [];
for (let i = 1; i <= 5; i++) {
    let idade = parseInt(prompt(`Digite a idade ${i}:`));
    while (isNaN(idade) || idade <= 0) {
        idade = parseInt(prompt(`Entrada inválida. Digite uma idade válida para a idade ${i}:`));
    }
    idades.push(idade);
}

const media = calcularMediaIdades(idades);
console.log(`A média das idades digitadas é: ${media}`);

