function execultar() {

    let baralho = []
    let opcao = ''

    do {
        opcao = prompt('Cartas do baralho ' + baralho.length +
            '\n1. Adicionar Cartas\n2. Puxar Cartas\n3. Sair'
        )

        switch (opcao) {
            case '1':
                let novaCarta = prompt('Qual é a carta adicionada?')
                baralho.push(novaCarta)
                break
            case '2':
                let cartaPuxada = baralho.pop()
                if (!cartaPuxada) {
                    alert('Não a nenhuma carta no baralho')

                } else {
                    alert('Você puxou a carta  ' + cartaPuxada)
                }
                break
            case '3':
                alert('Saindo...')
                break

            default: {
                alert('Opção Invalida')
            }
                break;
        }

    } while (opcao !== '3');
}