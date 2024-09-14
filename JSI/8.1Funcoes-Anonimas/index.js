// funções anônimas exemplos


function somar(a, b) {
    return a + b
}

let operacao = somar

// console.log(operacao(4, 5))

// ou

const subtrair = function (a, b) {
    return a - b
}
// console.log(subtrair(10, 5))

// ou

function somando(a, b) {
    return a + b
}

let operacoes = somando

// console.log(operacoes(8, 5))

operacoes = function (a, b) {
    return a - b
}

// console.log(operacoes(8, 5))

// funcoes nomeadas podem ser chamadas antes da criação ex

olaMundo()
// oiMundo()

function olaMundo() {
    console.log('ola mundo')
}
let oiMundo = function () {
    console.log('Oi Mundo')
}

oiMundo()


