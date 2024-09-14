function execultar() {

    let fila = []
    let opcao = ''

    do {
        let pacientes = ' '
        for (let i = 0; i < fila.length; i++) {
            pacientes += (i + 1) + 'ª ' + fila[i] + '\n'
        }

        opcao = prompt(
            'Pacientes\n' + pacientes +
            '\nEscolha uma ação:\n1. - Novo paciente\n2. - Consulta paciente\n3. - Sair'
        )

        switch (opcao) {
            case '1':
                let novoPaciente = prompt('Qual é o nome do paciente?')
                fila.push(novoPaciente)
                break;

            case '2':
                let pacienteConsultado = fila.shift()
                if (fila.length > 0) {
                    alert(pacienteConsultado + ' foi removido da fila')

                } else { alert('Nenhum paciente na fila') }
                break

            case '3':
                alert('Encerrando...')

            default:
                alert(' Opção Invalido...')
                break;
        }

    } while (opcao !== '3')

}