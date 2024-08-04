function execultar() {

    let atacante = prompt('Qual o nome do personagem atacane?:')
    let poderDeAtaque = parseFloat(prompt('Qual o poder de ataque?:'))

    let defensor = prompt('Qual o nome do personagem defensor?:')
    let pontosDeVida = parseFloat(prompt('Quantos pontos de vida ele possui?:'))
    let poderDeDefesa = parseFloat(prompt('Qual o seu poder de defesa'))
    let possuiEscudo = prompt('Ele possui escudo? (Sim/Não)')

    let danoCausado = 0


    if (poderDeAtaque > poderDeDefesa && possuiEscudo === 'Não') {
        danoCausado = poderDeAtaque - poderDeDefesa
    } else if (poderDeAtaque > poderDeDefesa && possuiEscudo === 'Sim') {
        danoCausado = (poderDeAtaque - poderDeDefesa) / 2
    }

    pontosDeVida -= danoCausado

    alert(`${atacante} causou ${danoCausado} pontos de danos em ${defensor}`)
    alert(`${atacante} \nPoder de ataque : ${poderDeDefesa} \n\n ${defensor}
        \nPontos de vida : ${pontosDeVida} \nPoder de defesa ${poderDeDefesa} \nPossui escudo: ${possuiEscudo}`)
}