const prompt = require('prompt-sync')()

var qtdLitro, valorApagar, desconto, opcao

opcao = prompt('A - Alcool | G - Gasolina: ').toUpperCase()
qtdLitro = parseFloat(prompt('Informe a quantidade de litros '))

switch (opcao) {
    case 'A':
    if (qtdLitro <= 20) {
        valorApagar = qtdLitro * 2.90
        desconto = valorApagar - (valorApagar * 0.03)
        console.log(`Seu valor com desconto de 3% é de R$ ${desconto}`)
    } else {
        valorApagar = qtdLitro * 2.90
        desconto = valorApagar - (valorApagar * 0.05)
        console.log(`Seu valor com desconto de 5% é de R$ ${desconto}`)
    }

    break;
    case 'G':
    if (qtdLitro <= 20) {
        valorApagar = qtdLitro * 3.30
        desconto = valorApagar - (valorApagar * 0.03)
        console.log(`Seu valor com desconto de 4% é de R$ ${desconto}`)
    } else {
        valorApagar = qtdLitro * 3.30
        desconto = valorApagar - (valorApagar * 0.06)
        console.log(`Seu valor com desconto de 6% é de R$ ${desconto}`)
    }
    break;
default:
    console.log('Opcao Informada é invalida, escolha entre A ou G')
    break;
}