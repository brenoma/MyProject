function tratamento(erro) {
    throw new Error('Erro')
}

if(Math.random() > 0.5) {
    try {
        console.log('Menor que 0.5')
    } catch (e) {
        tratamento(e)
    }
}