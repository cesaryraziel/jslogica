var totalEleitores, totalVotoBranco, totalVotoNulo, totalVotovalidos

totalEleitores = 1000
totalVotoBranco = 60
totalVotoNulo = 100
totalVotovalidos = totalEleitores - totalVotoBranco - totalVotoNulo

console.log(`Total de Votos Branco ${totalVotoBranco * 100 / 1000}%`)
console.log(`Total de Votos Nulos ${totalVotoNulo * 100 / 1000}%`)
console.log(`Total de Votos Validos ${totalVotoBranco * 100 / 1000}%`)