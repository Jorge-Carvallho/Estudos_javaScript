function execultar() {

    let saldo = parseFloat(prompt('Informe a quantidade de dinheiro inicial:'))
    let opcao = ''

    do {
        opcao = prompt('Saldo disponivel: R$ ' + saldo +
            '\n1 - Adicionar Dinheiro: ' +
            '\n2 - Remover dinheiro: ' +
            '\n3 - Sair '
        )

        switch (opcao) {
            case '1':
                saldo += parseFloat(prompt('Informe o valor a ser adicionado:'))
                break
            case '2':
                let valorRemover = parseFloat(prompt('informe o valor a ser removido do saldo:'))
                if (valorRemover > saldo) {
                    alert('Saldo insufucuente')
                }
                else {
                    saldo -= valorRemover
                }
                break
            case '3':
                alert('Saindo')
                break
            default: alert('Opção invalida...')
        }

    } while (opcao !== '3')
}