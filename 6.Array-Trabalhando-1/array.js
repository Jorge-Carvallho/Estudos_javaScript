

let arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

//adicionar elementos no final do array
//push
//tamanho em push devolve tamanho
let tamanho = arr.push("boromir")
console.log(arr)
console.log(tamanho)

//adicinar elemntos no inicio do array
//unshift
//tamanho em unshift devolve tamanho
tamanho = arr.unshift('simbora')
console.log(arr)
console.log(tamanho)

//remove último elemento do array
//pop
//retorna o último array e não o tamanho
let ultimo = arr.pop()
console.log(arr)
console.log(ultimo)
console.log(arr)


//remove primeiro elemento do array
//shift
//retorna o primeiro elemento e não o tamanho do elemento
ultimo = arr.shift()
console.log(arr)
console.log(ultimo)
console.log(arr)


//pesquisa no array e retorna true and false 
//includes
//indexof retorna o indice ou posição em que o array do includes estar
//indexof
let incluir = arr.includes("Gandalf")
let indice = arr.indexOf("Gandalf")
console.log(incluir)
console.log(indice)

//faz uma cópia de um array atravez de indice informado no slice
//corta e concatenar
//slice = corta

let hobbits = arr.slice(0, 4)
let outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)


//concat = concatenar
//concatenar array referenciados e novos informados
let sociedade = hobbits.concat(outros, 'valeu')
console.log(sociedade)

//remove um grupo de elementos e substitui por outros, indica quais elementos foram removidos
//subistituição dos elementos
//splice
let elementosRemoviveis = sociedade.splice(indice, 2, 'jorge de carvalho',)
console.log(arr)
console.log(sociedade)
console.log(elementosRemoviveis)

//iterar sobre ps elementos
for (let indice = 0; indice < sociedade.length; indice++) {
    let agora = sociedade[indice]
    console.log(agora, 'se encontra na posição ', indice)
}
