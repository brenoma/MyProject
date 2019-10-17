const valores = [7.7, 8.9, 6.3, 3.4];
console.log(valores[0], valores[2]);
console.log(valores[4]); // Não dá Bounds Exception

valores[4] = 10.0;
console.log(valores);
console.log(valores.length);

valores.push('Breno', true, 'IFCE', NaN);
console.log(valores);

valores.pop();
console.log(valores);
delete valores[3];
console.log(valores);
console.log(typeof valores);