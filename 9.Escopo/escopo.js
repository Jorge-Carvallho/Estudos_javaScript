// no escopo valor atribuido fura da função é acessado detro da função ao contrario, ou seja, a variavel criada dentro da função so é acessada com declaração no retorne, veja 2 exemplos abaixo


// funciona
let pokemon = 'chamander'

function evoluir() {
    pokemon = 'charmeleon'

}
// console.log(pokemon)
// evoluir()
// console.log(pokemon)




// Não funciona
function criarAnimal() {
    let animal = 'Gato'

}
criarAnimal()
// console.log(animal)

// declaração com var a variavel é acessada no escopo interno

function avaliarNota(nota) {
    if (nota > 60) {
        var aprovado = true
        let situacao = 'aprovado'
    } else {
        var aprovado = false
        var situacao = 'reprovado'

    }
    console.log(nota)
    console.log(aprovado)
    console.log(situacao)

}
// avaliarNota(83)
// avaliarNota(50)


// var so e acessada dentro de um escopo mas interno do qual na função se nao ele nao acessa
function ola() {
    let texto = 'Olá'
}
ola()
console.log(texto)


