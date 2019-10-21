const joao = {
    nome: 'João',
    saudacao() {
        console.log(`Olá ${this.nome}`)
    }
}

function saudacaoMaria(){
    joao.nome = 'Maria'
    joao.saudacao()
}

saudacaoMaria()