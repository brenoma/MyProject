// Função sem Retorno...
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(15, 13)
imprimirSoma(1, 2, 3, 4) // Ele todos os parâmetros digitados e não exibe erro

function soma(a, b =0){
    return a+b;
}

console.log(soma(1))
console.log(soma(2, 15))