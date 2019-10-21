const aluno = {
    nome: 'Iago',
    notas: [
        {nome: 'Física', valor: 5},
        {nome: 'Estatística', valor: 4},
        {nome: 'Probabilidade', valor: 1}
    ]
}

for(let i = 0; i < aluno.notas.length; i++) {
    console.log((i+1) + 'ª Nota: ' + aluno.notas[i].valor)
}