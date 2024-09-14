const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Xamã" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]
// metodo MAP  sem map------------------------------------
// let nomes = []
// for (let i = 0; i < personagens.length; i++) {
//     nomes.push(personagens[i].nivel)
//     nomes.push(personagens[i].nome)

// }
// console.log(nomes)


// metodo MAP com map -----------------------------
// não altera o array original

// let niveis = personagens.map((local) => {
//     return local.nivel
// })
// let nomes = personagens.map((personagem) => {
//     return personagem.nome
// })

// let racas = personagens.map((raca) => {
//     return raca.raca

// })

// let classes = personagens.map((classe) => {
//     return classe.classe
// })
// console.log(nomes)
// console.log(niveis)
// console.log(racas)
// console.log(classes)

// metodo Filter sem o filter--------------------------------------------------------------
// não altera o array original
// let orcs = []
// for (let i = 0; i < personagens.length; i++) {
//     if (personagens[i].raca === "Orc") {
//         orcs.push(personagens[i])
//     }

// }
// console.log(orcs)
//  metodo FIlter com o FIlter--------------------
// não altera o array oroginal

// let orcs = personagens.filter((raca) => {
//     return raca.raca === "Orc"
// })

// let niveis = personagens.filter((nivel) => {
//     return nivel.nivel === 35
// })

// let guerreiros = personagens.filter((classe) => {
//     return classe.classe === "Guerreiro"
// })
// console.log(orcs)
// console.log(niveis)
// console.log(guerreiros)

// metodo Reduce -------------------------------------------------
// ex1...........
// let nivelTotal = personagens.reduce((valorDaSoma, nivel) => {
//     return valorDaSoma + nivel.nivel
// }, 0)
// console.log(nivelTotal)

// ex2..............
// let racas = personagens.reduce((valorAcumulado, raca) => {
//     if (valorAcumulado[raca.raca]) {
//         valorAcumulado[raca.raca].push(raca)
//     } else {
//         valorAcumulado[raca.raca] = [raca]
//     }

//     return valorAcumulado
// }, {})

// console.log(racas)

// ex3..........
// let niveis = personagens.reduce((valorAcumulado, nivel) => {
//     if (valorAcumulado[nivel.nivel]) {
//         valorAcumulado[nivel.nivel].push(nivel)
//     } else {
//         valorAcumulado[nivel.nivel] = [nivel]
//     }
//     return valorAcumulado
// }, {})

// console.log(niveis)

// ex4......................................
// let classes = personagens.reduce((valorAcumulado, nomeNoArray) => {
//     if (valorAcumulado[nomeNoArray.classe]) {
//         valorAcumulado[nomeNoArray.classe].push(nomeNoArray)
//     } else {
//         valorAcumulado[nomeNoArray.classe] = [nomeNoArray]

//     }

//     return valorAcumulado
// })
// console.log(classes)

// metodo Sort(significa ordenar)------------------------------------------------------
// ordenar o array baseado no nivel conparando atravez do personagem criada
// ele altera o array Original


// personagens.sort((personagemA, personagemB) => {
//     return personagemA.nivel - personagemB.nivel

// })
// console.log(personagens)

// criando uma copia atravez do slice

let personagensOrdenados = personagens.slice().sort((a, b) => {
    return a.nivel - b.nivel
})
console.log(personagens)
console.log(personagensOrdenados)