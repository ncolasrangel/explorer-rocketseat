/*
    Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

let students = [
    {
        name: "Nícolas",
        firstNote: 7,
        secondNote: 10,
    },
    {
        name: "Leticia",
        firstNote: 5,
        secondNote: 8,
    },
    {

        name: "Lorrana",
        firstNote: 10,
        secondNote: 10,
    },
]

function averageStudent (firstNote, secondNote) {
    let average = (firstNote + secondNote) / 2
    
    return average
}

for (let student of students) {
    individualAverage = averageStudent(student.firstNote, student.secondNote)

    let approvedDisapproved = individualAverage < 7 ? 'Infelizmente não foi dessa vez. Estude mais' : 'Parabéns você está aprovado!'

    alert(`A média de ${student.name} é ${individualAverage}. ${approvedDisapproved}`)
}