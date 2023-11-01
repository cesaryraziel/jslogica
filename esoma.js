const input = require('prompt-sync')()

var num1, num2, soma

num1 = parseInt(input('Digite um Número '))
num2 = parseInt(input('Digite mais um Número '))

soma = num1 + num2
console.log(`A soma é ${soma}`)