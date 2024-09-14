// high - order - function COPIAR TUDO E DESCOMENTAR

// function calcular(a, b, operacao) { /* calcular neste caso é uma high-order-function */
//     let resultado = operacao(a, b) /* é como se tivesse somar passando 2 , 5  somar(3, 5 )*/
//     return resultado
// }

// function somar(x, y) {
//     return x + y
// }

// function dividir(c, d) {
//     return c / d
// }

// console.log(calcular(2, 5, somar))
// console.log(calcular(2, 5, dividir))
// // console.log(calcular(4,2,function (e,f) {  return e * f }   )) funcao anomima declarada memsa de baixo
// console.log(calcular(4, 2, (e, f,) => { /* função anonima abreviada mesma de cima*/
//     return e * f
// }))

// refazendo-------------------------------------------------------------------------

//     function calculando(a, b, operacao) {
//         let result = operacao(a, b)
//         return result
//     }

// function somando(x, y) {
//     return x + y
// }

// let subtracao = function (x, y) {
//     return x, y
// }

// console.log(calculando(9, 3, somando))
// console.log(calculando(9, 3, subtracao))



// // array.forEach(element =>---------------------------------------------------------------------------

// function exibirElemento(elemento, indice, array) {
//     console.log({
//         elemento,
//         indice,
//         array
//     })
// }

// let lista = ['Maça', 'banana', 'arroz']
// for (let i = 0; i < lista.length; i++) {
//     exibirElemento(lista[i], i, lista) /* o mesmmo de forEach chamada a baixo */
// }
// lista.forEach(exibirElemento)

// refazendo-----------------


//     function exibirElementos(nome, endereco, indice, array) {
//         console.log({
//             nome,
//             endereco,
//             indice,
//             array,

//         })
//     }
// let lista = ['maça', 'uva', 'melao']

// for (let i = 0; i < lista.length; i++) {
//     exibirElementos(lista[i], i, lista)

// }

// lista.forEach(exibirElementos)
// console.log(exibirElementos)

// refazendo-------------------------=================================================
//     lista.forEach((nome, indice, array) => {
//         console.log(
//             nome,
//             indice,
//             array)

//     })


// refazendo-------------------------=================================================
//     function exibirElemento(elemento, indice, array) {
//         console.log(
//             elemento,
//             indice,
//             array

//         )

//         // return exibirElemento
//     }

// let lista = ['maça', 'banana', 'laranja', 'melão']

// for (let i = 0; i < lista.length; i++) {
//     exibirElemento(lista[i], i, lista)

// }
// lista.push('uva', 'mamao')

// console.log(lista)
// // lista.forEach(exibirElemento)
// // console.log(exibirElemento)

// refazendo-------------------------=================================================
//     let lista = ['janela', 'maça', 'panela', 'caminhao']

// function exibirElemento(elemento, indice, array) {
//     console.log(
//         elemento,
//         indice,
//         array
//     )

//     return exibirElemento
// }
// lista.forEach(exibirElemento)


// refazendo-------------------------=================================================
//     let lista = ['banana', 'ovo', 'merda']

// function mostrarElemento(nome, indice, array) {
//     console.log(
//         nome,
//         indice,
//         array
//     )
// }
// lista.forEach(mostrarElemento)


// refazendo-------------------------=================================================
//     let lista = ['banana', 'ovo', 'merda']

// lista.forEach((nome, indice, array) => {
//     console.log(
//         nome,
//         indice,
//         array
//     )

// })






// const personagens = [
//     { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
//     { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
//     { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
//     { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
//     { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
//     { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
//     { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
// ]


// function somaNiveisPorRaca(raca) {
//     return personagens
//         .filter(personagem => personagem.raca === raca)
//         .reduce((acumulado, personagem) => acumulado + personagem.nivel, 0);
// }

// console.log("Soma dos níveis dos Orcs:", somaNiveisPorRaca("Orc"));


