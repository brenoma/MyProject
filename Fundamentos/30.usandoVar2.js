// Mantra Fuja do escopo global

var numero = 1
{
    var numero = 2 // Houve uma sobrescrita nessa linha
    console.log('Dentro: ', numero)
}
console.log('Fora: ', numero)