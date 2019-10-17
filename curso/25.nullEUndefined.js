const a = {name: 'Breno'};
console.log(a);

const b = a;
b.name = 'Menezes';
console.log(b.name, a.name);

let c = 10;
let d = c;

d++;
console.log(c, d);

// ------------------------------------

let valor;
console.log(valor); // Variável nunca foi inicializada

valor = null;
console.log(valor); // Variável já está com um valor nulo
// console.log(valor.toString());

const produto = {};
console.log(produto.preco);
produto.preco = 3.00;

console.log(produto.preco);