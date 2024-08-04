function execultar() {

    let turista = prompt("Qual o seu nome?")
    let cidades = ""
    let contagem = 0

    let continuar = prompt('Você visitou alguma cidade ? (Sim/Não):')

    while (continuar === 'Sim') {
        let cidade = prompt('Qual cidade você visitou ')
        cidades += '-' + cidade + '\n'
        contagem++
        continuar = prompt('Você visitou mas alguma outra cidade? (Sim/Não)')
    }
    alert(
        "Turista: " + turista +
        '\n Quantidade de cidades visitadas foram: ' +
        contagem +
        '\nCidades visitads foram :\n' + cidades)
}


// teste de aprendizado e fixação
function maiorIdade(idade) {
    if (idade > 18) {
        return ('ele é maior de idade')
    } else {
        return ('menor de idade ')
    }
}

console.log(maiorIdade(22))
console.log(maiorIdade(34))
console.log(maiorIdade(11))

