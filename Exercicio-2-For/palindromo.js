function execultar() {

    const palavra = prompt('Informe uma palavra ')

    let palavraInvertida = ''

    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida += palavra[i]

    }
    if (palavra === palavraInvertida) {
        alert(
            palavra + ' È uma palavra palindromo \n\n' +
            palavra + ' e a palavra ' + palavraInvertida + ' são palavras iguais')

    } else {
        alert(palavra + ' Não é uma palavra palindromo \n\n' +
            'A palavra ' + palavra + ' é diferente da palavra ' + palavraInvertida)

    }
}