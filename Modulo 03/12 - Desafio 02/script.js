/*
    Nesse desafio você irá criar uma lista de **estudantes** e, 
    cada estudante dentro dessa lista, deverá conter os 
    seguintes dados:

    - nome;
    - nota da primeira prova;
    - nota da segunda prova.

    Depois de criada a lista:

    - [ ]  Crie uma **função** que irá calcular a média das notas 
        de cada aluno;
    - [ ]  Supondo que a média, para esse concurso é **7**,
        verifique **se** cada aluno obteve sucesso ou não 
        em entrar no concurso e mostre uma mensagem na tela. 
*/

let studentList = [

    {
        name: "Vitória",
        nota1: 8.6,
        nota2: 9,
    },

    {
        name: "João",
        nota1: 10,
        nota2: 7,
    },

    {
        name: "Ana",
        nota1: 4,
        nota2: 9,
    },

    {
        name: "Pedro",
        nota1: 3.7,
        nota2: 4,
    }
]

function averageScore(n1,n2) {
    let averageScore = (n1 + n2) / 2
    return averageScore
}

for (let student of studentList) {
    let averageMarks = averageScore(student.nota1, student.nota2)
    
    if (averageMarks >= 7) {
        alert(`A média do(a) aluno(a) ${student.name} foi de: ${averageMarks}\n Parabéns ${student.name}, você foi aprovado(a) no concurso.`)
    } else {
        alert(`A média do(a) aluno(a) ${student.name} foi de: ${averageMarks}\n Não foi dessa vez, ${student.name}! Tente novamente!`)
    }
}
