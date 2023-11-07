const prompt = require('prompt-sync')()

var nota1, nota2, nota3, mediadeExercicios, mediadeAproveitamento

nota1 = parseFloat(prompt('Informe a primeira nota: '))
nota2 = parseFloat(prompt('Informe a segunda  nota: '))
nota3 = parseFloat(prompt('Informe a terceira nota: '))
mediadeExercicios = parseFloat(prompt('Informe a Media de exercicios: '))

mediadeAproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + mediadeExercicios) / 7

if (mediadeAproveitamento >= 9.0) {
    console.log(`Aluno com media de aproveitamento ${mediadeAproveitamento.toFixed(2)} tem conceito "A"`)

} else if (mediadeAproveitamento >= 7.5 && mediadeAproveitamento < 9.0 ) {
    console.log(`Aluno com media de aproveitamento ${mediadeAproveitamento.toFixed(2)} tem conceito "B"`)
} else if (mediadeAproveitamento >= 6.0 && mediadeAproveitamento < 7.5 ) {
    console.log(`Aluno com media de aproveitamento ${mediadeAproveitamento.toFixed(2)} tem conceito "C"`)
} else {
    console.log(`Aluno com media de aproveitamento ${mediadeAproveitamento.toFixed(2)} tem conceito "D"`)
}