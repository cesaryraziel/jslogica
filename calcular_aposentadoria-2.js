const prompt = require('prompt-sync')()

var nomeFunc, anoNascFunc, anoTrabFunc, idadeFunc, tempoServico, continuar, opcao

continuar = true

while (continuar) {
    nomeFunc = prompt('Nome do Funcionário: ')
    anoNascFunc = parseInt(prompt('Ano de Nascimento: '))
    anoTrabFunc = parseInt(prompt('Ano de Admissão: '))

    idadeFunc = 2023 - anoNascFunc
    tempoServico = 2023 - anoTrabFunc

    if (idadeFunc >= 60 && tempoServico >= 25) {
        console.log(`Sr(a) ${nomeFunc} tem ${idadeFunc} anos de idade e tem ${tempoServico} anos de serviços trabalhados - Requer Aposentadoria`)
    } else if (idadeFunc >= 65) {
        console.log(`Sr(a) ${nomeFunc} tem ${idadeFunc} anos de idade e tem ${tempoServico} anos de serviços trabalhados - Requer Aposentadoria`)   
    } else if (tempoServico >= 30) {
        console.log(`Sr(a) ${nomeFunc} tem ${idadeFunc} anos de idade a tem ${tempoServico} anos de serviços trabalhados - Requer Aposentadoria`)
    } else {
        console.log(`Sr(a) ${nomeFunc} tem ${idadeFunc} anos de idade e tem ${tempoServico} anos de serviços trabalhados - Não Requer Aposentadoria`)    
    }

    opcao = prompt('Deseja continuar? [S/N] Sim | Não \n')
    if (opcao.toUpperCase() === 'N') {
        continuar = false
    }
}