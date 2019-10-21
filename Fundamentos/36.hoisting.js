console.log('a = ', a)
var a = 2
console.log('a = ', a)

// Hoisting

var a
console.log('a = ', a)
a = 2
console.log('a = ', a)

//console.log('b = ', b)
let b = 2 // Let não faz o içamento das variáveis, isso ocorre apenas com o var
console.log('b = ', b)

//console.log('c = ', c)
const c = 5
console.log('c = ', c)