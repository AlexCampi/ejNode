let preferencias = require ("./ej5mod")

let paises = preferencias.paises.a.concat(preferencias.paises.b)

paises = paises.concat(preferencias.paises.c)

console.log(paises[preferencias.favoritos[0]])
console.log(paises[preferencias.favoritos[1]])
console.log(paises[preferencias.favoritos[2]])