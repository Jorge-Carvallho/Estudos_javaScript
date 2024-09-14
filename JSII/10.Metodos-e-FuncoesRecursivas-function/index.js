// criação de método que é referenciado atravez do this.parameto do objeto
// exemplo logo a baixo ---------------------------------------------

let pessoa = {
    nome: 'Jorge',
    idade: '34',
    dizerOla() {
        console.log('Ola mundo , meu nome é ' + this.nome + ' e tenho ' + this.idade + ' de idade ')
    }
}


// console.log(pessoa)
// pessoa.dizerOla()



// Funções recursivas ------------------------------------------------------
// função recursiva é uma função que chama ela mesma varias vezes dentro do codigo

function dividir(num) {
    console.log(num)
    if (num % 2 === 0) {
        dividir(num / 2)
    } else {
        return num
    }


}

// dividir(100)
// dividir(40)
// dividir(256)

// exemplo 02

// numero fatorial é numero multiplicado por ele mesmo menos 1 do proprio numero
// fatorira represnetado pela !
// fatorial de 5 = !5 que sera 5 * 4 * 3 * 2 * 1 
function fatorial(num) {
    console.log('Numero é ' + num)
    if (num <= 1) {  /*caso base*/

        return 1

    } else {
        console.log(num + ' * ! ' + (num - 1))
        return num * fatorial(num - 1)
    }
}
console.log(fatorial(3))

