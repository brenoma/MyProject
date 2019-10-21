function tratamento(erro) {
    throw new Error('Erro')
}

const obj = {
    temp: 0,
    get temperatura() {
        return this.temp
    },
    set temperatura(temp) {
        try{
            this.temp = temp
        }catch (e){
            tratamento(e)
        }
    }
}