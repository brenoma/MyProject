const values = [5, 6, 10, 4, 3, 7, 1]
const average = values.reduce((acc, cur) => acc + cur) / values.length
console.log(values.filter(v => v > average))


        /*function mediaValores(v) {
            let soma = 0
            for(let i = 0; i < v.length; i++){
                soma = soma + v[i]
            }
            return soma/v.length
        }
        
        const media = mediaValores(valores)
        console.log('Media = ' + media)
        
        console.log(valores.filter(function(v){
            return v > media
        })) */