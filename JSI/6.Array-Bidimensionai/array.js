const matriz = [
    ['l1, c1', 'l1,c2', 'l1,c3'],
    ['l2,c1', 'l2,c2', 'l2,c3'],
    ['l3,c1', 'l3,c2', 'l3,c3'],
]

// matriz[2].push(['l1', 'c4'])
// console.table(matriz)
// console.log(matriz)
// console.log(matriz[2][2])
// console.info(matriz)


for (let i = 0; i < matriz.length; i++) {

    for (let j = 0; j < matriz[i].length; j++) {
        const element = matriz[i][j];
        console.table('posicao (' + i + ',' + j + ') valor de ' + element)
    }



}