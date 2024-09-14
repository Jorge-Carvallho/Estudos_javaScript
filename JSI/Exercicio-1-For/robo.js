
function execultar() {


    const numero = prompt(
        "Olá, eu sou o robô da tabuada \n" +
        "Informe o número que deseja qualcular na tabuada"

    )

    resultado = ""

    for (let fator = 1; fator <= 10; fator++) {
        resultado +=
            + numero + " * " + fator + " = " + numero * fator + "\n"

    }

    alert('Resultado da tabuada de ' + numero + '\n\n' + resultado)
}