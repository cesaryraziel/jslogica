var lista = ['Pera', 'Uva', 'Jaca', 'Mamão', 'Melancia']
var tamanho
lista.push('Abacaxi')
tamanho = lista.length // para informar o tamanho do array
// lista.sort() // colocar os elementos em ordem alfabetica
// lista.lastIndexOf('Jaca') //informa a sua posição

lista.splice(2, 1, 'Manga') // substitui elementos no array, onde 1º Param é
// a posição o 2º qtd de elementos de remoção e 3º e novo elemento
lista.pop() // remove o ultimo elemento
lista.shift() // remove o primeiro elemento da lista
console.log(lista)


// for (let index = 0; index < lista.length; index++) {
//     console.log(`${index + 1} - ${lista[index]}`)
// }