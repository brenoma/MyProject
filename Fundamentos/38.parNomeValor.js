// Par nome/valor
const saudacao = 'Opa' // Contexto léxico 1

function exec() {
    const saudacao = 'Falaaaa' // Contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Breno',
    idade: 26,
    peso: 76,
    endereco: {
        logadouro: 'Rua Doutor Joaquim Frota',
        numero: 1060
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)