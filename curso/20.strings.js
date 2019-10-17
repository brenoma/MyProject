const escola = 'IFCE';

console.log(escola.charAt(3));
console.log(escola.charAt(4));
console.log(escola.charCodeAt(3)); // Código HTML na tabela UniCode
console.log(escola.indexOf('I'));

console.log(escola.substring(1));
console.log(escola.substring(0, 3)); // Indice final até a quantidade de elementos.

console.log('Escola '.concat(escola).concat('!'));
console.log(escola.replace(/\w/g, '3')); // Expressão regular

console.log('Breno,IFCE,Ciência da Computação'.split(','));