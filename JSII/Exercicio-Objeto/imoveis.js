function execultar() {

    let imoveis = []
    let opcao = ''

    do {
        opcao = prompt('Bem vindo ao cadastro  de imóveis\n' +
            'Total de imóveis ' + imoveis.length +
            '\n\nEscolha uma Opção:\n1. Novo imóvel\n2. Lista imóveis\n3. Sair'

        )

        switch (opcao) {
            case '1':
                const imovel = {}

                imovel.proprietario = prompt('Qual o nome do proprietario?')
                imovel.quartos = prompt('Qual a quantidades de quartos do imóvel?')
                imovel.banheiro = prompt('Informa a quantidade de banheiros')
                imovel.garagem = prompt('O imóvel possui garagem? (Sim/Não)')

                const confirmacao = confirm(
                    'Salvar este imóvel\n' +
                    '\nProprietários ' + imovel.proprietario +
                    '\nQuartos ' + imovel.quartos +
                    '\nbanheiros ' + imovel.banheiro +
                    '\nPossui Garagem ' + imovel.garagem

                )
                if (confirmacao) {
                    imoveis.push(imovel)
                    alert('Imóvel salvo com sucesso')
                    break
                } else {
                    alert('Voltando ao menu')
                }
                break




            case '2':
                for (let i = 0; i < imoveis.length; i++) {
                    alert('Imovel ' + (i + 1) +
                        '\nProprietários ' + imoveis[i].proprietario +
                        '\nQuartos ' + imoveis[i].quartos +
                        '\nbanheiros ' + imoveis[i].banheiro +
                        '\nPossui Garagem ' + imoveis[i].garagem
                    )
                }

                break
            case '3':
                alert('Saindo...')
                break;

            default:
                alert('opção Invalida')
                break;
        }

    } while (opcao !== '3')
}