function execultar() {

    function calcularAreaTriangulo() {
        const base = parseFloat(prompt('Qual é a base do triangulo ?'))
        const altura = parseFloat(prompt('Qual é a altura do triangulo ?'))
        return base * altura / 2
    }

    function calcularAreaRetangulo() {
        const base = parseFloat(prompt('Qual é a base do retângulo ?'))
        const altura = parseFloat(prompt('Qual é a altura do retângulo ?'))
        return base * altura
    }

    function calcularAreaQuadrado() {
        const lado = parseFloat(prompt('Informe a area do quadrado ?'))
        return lado * lado
    }

    function calcularAreaTrapezio() {
        const baseMaior = parsefloat(prompt('Informa a base maior do trapézio'))
        const baseMenor = parseFloat(prompt('Informe a base menor do trapézio'))
        const altura = parsefloat(prompt('Qual a altura do trapézio'))
        return (baseMaior + baseMenor) * altura / 2
    }

    function calcularAreaCirculo() {
        const pi = 3.14
        const raio = parseFloat(prompt('Informa o raio do círculo'))
        return (pi * raio * raio)
    }



    let opcao = '6'

    do {
        opcao = prompt('Seja bem vindo a Calculadora Geométrica, vamos aos calculos: \n' +
            'Escolha as  opcões de calculos abaixo: ' +
            '\n1 - Área do triângulo: base * altura / 2  ' +
            '\n2 - Área do retângulo: base * altura ' +
            '\n3 - Área do quadrado: lado²' +
            '\n4 - Área do trapézio: (base maior + base menor) * altura / 2' +
            '\n5 - Área do círculo: pi * raio² (considere pi = 3.14)' +
            '\n6 - Encerrar calculadora')


        switch (opcao) {
            case '1':
                alert('A área do Triângulo é ' + calcularAreaTriangulo())
                break
            case '2':
                alert('A área do Retângulo é ' + calcularAreaRetangulo())
                break
            case '3':
                alert('A área do Quadrado  é ' + calcularAreaQuadrado())
                break
            case '4':
                alert('A área do Trapezio é ' + calcularAreaTrapezio())
                break
            case '5':
                alert('A área do Circulo é ' + calcularAreaCirculo())
                break
            case '6':
                alert('Encerrando')
                break

            default: alert('Opção Invalida ')

        }
    } while (opcao !== '6')

}




