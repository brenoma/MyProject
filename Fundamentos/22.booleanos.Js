let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

isAtivo = 0;
console.log(!!isAtivo);

isAtivo = 'Breno'
console.log(!!isAtivo);

// Verdadeiros
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'String');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

// Falsos
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log(!!('' || null || 0 || false || ' '));

let nome = '';
console.log(nome || 'Desconhecido');