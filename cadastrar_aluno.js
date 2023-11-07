const prompt = require('prompt-sync')()

var nome, continuar, confirmarSaida
var nomeAlunos = [] //Arrays

continuar = true

while (continuar) {
    nome = prompt('Informe o nome do aluno: ')
    nomeAlunos.push(nome) //inserir elementos no array

    confirmarSaida = prompt('Desejar continuar? S - Sim | N - Não \n ')
    if (confirmarSaida.toUpperCase() === 'N') {
        continuar = false
    }
    
}

for (let index = 0; index < nomeAlunos.length; index++) {
    console.log(nomeAlunos[index])
}