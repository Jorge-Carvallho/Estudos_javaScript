// função*************************************************************************************

function ola() {
    console.log('Ola mundo')

}
// ola()
// ola()

// Parâmetros de uma function********************************************************************


function dobro(x) {
    alert('O dobro de ' + x + ' é ' + (x * 2))

}
// let resultado = prompt('informe um numero')

// dobro(resultado)

function dizerOla(nome = 'Mundo') {
    alert('Ola ' + nome)

}
// dizerOla('Jorge')
// dizerOla()

function soma(a, b) {
    alert('O resultado da soma é ' + (a + b))

}
//    

function criarUsuario(nome, email, senha, tipo = 'admin') {
    let usuario = {
        nome,
        email,
        senha,
        tipo
    }
    console.log(usuario)

}
// criarUsuario('jorge', 'jorge da hormail', '1234')




// objeto na funcao**********************************************************************************




function objetosComoParametros(user) {
    console.log(user.nome)
    console.log(user.email)
    console.log(user.telefone)
    console.log(user.senha)

}

let dadosDoUsuario = {
    nome: 'elemento',
    email: 'hotmail',
    telefone: '12345',
    senha: '321'
}

// objetosComoParametros(dadosDoUsuario)





// retorno de uma função ***************************************************************************



function calcularMedia(a, b) {
    let media = (a + b) / 2
    return media

}
let resultado = calcularMedia(8, 8)
// console.log(resultado)




function criarProduto(nome, preco) {
    let produto = {
        nome,
        preco,
        estoque: 1
    }
    return produto
}

// let = nootbook = criarProduto('dell', 2500)

// console.log(nootbook)

//  ou

// console.log(criarProduto('intel', 1000))


function muitosParametros(homen) {
    console.log(homen.nome)
    console.log(homen.endereco)
    console.log(homen.numero)

}

let dados = {
    nome: 'elemento',
    endereco: 'rua',
    numero: '321'
}
// muitosParametros(dados)
// console.log(muitosParametros)
// console.log(dados)


function areaRetangulo(base, altura) {
    return base * altura
}

function areaQuadrada(lado) {
    return areaRetangulo(lado, lado)
}
console.log(areaRetangulo(3, 5))
console.log(areaQuadrada(9))