function execultar() {

    let medida = prompt('Ensira uma medida em metros:')

    let unidade = prompt('Para qual unidade de medida deseja converter?' +
        '\n1. Milímetro (mm)' +
        '\n2. Centímetro (cm)' +
        '\n3. Decímetro (dm)' +
        '\n4. Decâmetro (dam)' +
        '\n5. Hectômetro (hm)' +
        '\n6. Quilômetro (km)'
    )

    switch (unidade) {
        case '1':
            alert(`Resultado ${medida} metros = ${medida * 1000} mm`)
            break
        case '2':
            alert(`Resultado de ${medida} metros = ${medida * 100} cm`)
            break
        case '3':
            alert(`Resultado de ${medida} metros = ${medida * 10} dm`)
            break
        case '4':
            alert(`Resultado de ${medida} metros = ${medida / 10} dam`)
            break
        case '5':
            alert(`Resultado de ${medida} metros = ${medida / 100} hm`)
            break
        case '6':
            alert(`Resultado de ${medida} metros = ${medida / 1000} km`)
            break
        default:
            alert('Valor de enterada invalido')
    }
}