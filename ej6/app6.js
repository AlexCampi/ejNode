let factorial = require("./funciones/factorial")
let supervillains = require('supervillains')

let supervillanos = supervillains.all

//Entiendo que el número a pasar por la función es el que yo quiera, por esto pongo 5.

console.log(supervillanos[factorial(5)])

//Entiendo que después lo único es llamar a la función con un numero random entre 1 y 20 cuatro veces, nada de buscarlo en los supervillanos.

console.log(factorial(parseInt(Math.random()*(20-1)+1)))
console.log(factorial(parseInt(Math.random()*(20-1)+1)))
console.log(factorial(parseInt(Math.random()*(20-1)+1)))
console.log(factorial(parseInt(Math.random()*(20-1)+1)))

//Por si a lo que te referías era a que buscara un índice random entre 1 y 20 de los supervillanos.
console.log(supervillanos[parseInt(Math.random()*(20-1)+1)])
console.log(supervillanos[parseInt(Math.random()*(20-1)+1)])
console.log(supervillanos[parseInt(Math.random()*(20-1)+1)])
console.log(supervillanos[parseInt(Math.random()*(20-1)+1)])

//Por si a lo que te referias era a que utilizara el factorial de un número entre 1 y 20 como índice de los supervillanos.
console.log(supervillanos[factorial(parseInt(Math.random()*(20-1)+1))])
console.log(supervillanos[factorial(parseInt(Math.random()*(20-1)+1))])
console.log(supervillanos[factorial(parseInt(Math.random()*(20-1)+1))])
console.log(supervillanos[factorial(parseInt(Math.random()*(20-1)+1))])