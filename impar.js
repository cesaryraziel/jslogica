const prompt = require('prompt-sync')()

var numero = parseFloat(prompt('Informe um número: '))

if (numero % 2 === 1) {
    console.log(`O número ${numero} é impar`)
} else {
    console.log(`O número ${numero} é par`)
}