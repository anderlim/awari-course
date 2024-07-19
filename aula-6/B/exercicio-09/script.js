// 9. Faça um programa que receba a idade de dez pessoas e que calcule e mostre a quantidade de pessoas com idade maior ou igual a 18 anos.

function contarMaioresDeIdade(idades) {
    let contador = 0;
    for (let i = 0; i < idades.length; i++) {
        if (idades[i] >= 18) {
            contador++;
        }
    }
    return contador;
}

let idades = [];
for (let i = 1; i <= 10; i++) {
    let idade = parseInt(prompt(`Digite a idade ${i}:`));
    while (isNaN(idade) || idade <= 0) {
        idade = parseInt(prompt(`Entrada inválida. Digite uma idade válida para a idade ${i}:`));
    }
    idades.push(idade);
}

const quantidadeMaiores = contarMaioresDeIdade(idades);
console.log(`A quantidade de pessoas com idade maior ou igual a 18 anos é: ${quantidadeMaiores}`);
