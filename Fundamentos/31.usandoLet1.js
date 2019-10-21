let numero = 1
{
    let numero = 2
    console.log('Dentro: ', numero)
    // Ele procura o número primeiramente dentro do seu próprio escopo, depois ele procura fora.
}
console.log('Fora: ', numero)