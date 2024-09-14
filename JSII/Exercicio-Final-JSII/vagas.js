let vagas = []

//listagem de vagas
function listarVagas() {
    if (vagas.length === 0) {
        alert('Não a vagas cadastradas')
        return
    }
    let vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
        textoFinal += indice + '. '
        textoFinal += vaga.nome
        textoFinal += ' ( ' + vaga.candidatos.length + ' candidatos )\n '
        return textoFinal


    }, '')
    alert(vagasEmTexto)


}

//nova vaga criada
function novaVaga() {
    let nome = prompt('Informe o nome para a vaga:')
    let descricao = prompt('Informa a descrição para a vaga:')
    let dataLimite = prompt('Informe a data limite (dd/mm/aaaa) para a vaga:')


    let confirmacao = confirm(
        'Deseja criar uma nova vaga com essas informações?\n' +
        'Nome: ' + nome + '\nDescricao: ' + descricao + '\nData limite: ' + dataLimite
    )

    if (confirmacao) {
        let novaVaga = { nome: nome, descricao: descricao, dataLimite: dataLimite, candidatos: [] }
        vagas.push(novaVaga)
        alert('Vaga criada.')
    }

}

//exibir vagas
function exibirVaga() {
    let indice = prompt('Informe o indice da vaga que deseja exibir:')
    let vaga = vagas[indice]

    if (indice >= vagas.length || indice < 0) {
        alert('Indice invalido, não a vagas')
        return
    }

    let candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) =>
        textoFinal + '\n - ' + candidato, ' '

    )

    alert(
        'Vaga nª ' + indice +
        '\nNome: ' + vaga.nome +
        '\nDescrição: ' + vaga.descricao +
        '\nData limite: ' + vaga.dataLimite +
        '\nQuantidade de candidatos: ' + vaga.candidatos.length +
        '\nCandidatos inscritos: ' + candidatosEmTexto

    )
}

//inscrição de candidatos
function inscreverCandidato() {
    let candidato = prompt('Informe o nome do(a) candidato:')
    let indice = prompt('Informe o indice da vaga para qual o(a) candidato(a) deseja se inscrever:')
    let vaga = vagas[indice]

    let confirmacao = confirm(
        'Deseja inscrever o candidato ' + candidato + ' na vaga ' + indice + '?:\n' +
        'Nome: ' + vaga.nome + '\nDescrição:' + vaga.descricao + '\nData limite: ' + vaga.dataLimite
    )
    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert('Inscrição realizada.')

    }
}

//excluir vagas
function excluirVaga() {
    let indice = prompt('Informe o indice da vaga que deseja excluir')
    let vaga = vagas[indice]

    let confirmacao = confirm(
        'Tem certeza que deseja excuir a vaga ' + indice + '?\n' +
        'Nome: ' + vaga.nome + '\nDescrição:' + vaga.descricao + '\nData limite: ' + vaga.dataLimite
    )

    if (confirmacao) {
        vagas.splice(indice, 1)
        alert('Vaga excluida.')
    }
}

//exibir menu
function exibirMenu() {
    const opcao = prompt(
        'Cadastro de vagas de emprego' +
        '\n\nEscolha uma das opção' +
        '\n1.Listar vagas disponiveis' +
        '\n2.Criar uma nova vaga' +
        '\n3.Visualizar uma vaga' +
        '\n4.Inscrever um(a) candidato' +
        '\n5.Excluir uma vaga' +
        '\n6.Sair'

    )

    return opcao
}
//listagem ds cases
function execultar() {
    let opcao = '';

    do {
        opcao = exibirMenu()

        switch (opcao) {
            case '1':
                listarVagas()
                break;
            case '2':
                novaVaga()
                break;
            case '3':
                exibirVaga()
                break;
            case '4':
                inscreverCandidato()
                break;
            case '5':
                excluirVaga()
                break;
            case '6':
                alert('Saindo...')
                break;

            default:
                alert('Opção inválida. ')
                break;
        }

    } while (opcao !== '6');

}
execultar()