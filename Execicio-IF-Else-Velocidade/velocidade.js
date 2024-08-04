
function execultar() {

    const veiculo1 = prompt('Informe o nome do primeiro veiculo')
    const velocidade1 = parseFloat(prompt('Informe a velocidade do primeiro veiculo'))



    const veiculo2 = prompt('Informe o nome do segundo veiculo')
    const velocidade2 = parseFloat(prompt('Informe a velocidade do segundo veiculo'))


    if (velocidade1 > velocidade2) {
        alert(veiculo1 + ' esta mas rápido do que ' + veiculo2)
    } else if (velocidade1 < velocidade2) {
        alert(veiculo2 + ' esta mas rápido do que ' + veiculo1)
    } else {
        alert(veiculo1 + ' e ' + veiculo2 + ' ambos possuem a mesma velocidade')
    }
}
