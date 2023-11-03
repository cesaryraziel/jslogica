const prompt = require('prompt-sync')()

var salario, tempoTrabalho, resultado, continuar

continuar = true

while (continuar) {
    salario = parseFloat(prompt('Informe seu salário: '))
    tempoTrabalho = parseInt(prompt('Informe seu tempo de trabalho em anos: '))

    if (tempoTrabalho >= 5) {
    resultado = (salario * 0.2) + salario
    } else {
    resultado = (salario * 0.1) + salario
    }

    console.log(`Em ${tempoTrabalho} anos de trabalho, seu salário será de R$ ${resultado}`)
    continuar = prompt(`Deseja sair do sistema S - Sim | N - Não \n `)
            if (continuar.toUpperCase() === 'S') {
    continuar = false
    }
}