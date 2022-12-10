/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let nomeAluno = prompt("Qual o nome do aluno")
let nota1 = prompt("Informe a primeira nota")
let nota2 = prompt("Informe a segunda nota")
let nota3 = prompt("Informe a terceira nota")

let media = (Number(nota1) + Number(nota2) + Number(nota3))

let resultado = media > 6

if (resultado) {
    alert("Parabens, "+ nomeAluno + "! Sua média foi de : " + media)
} else if (media < 3) {
    alert("Reprovado!")
} else {
    alert(nomeAluno + " estude para  sua prova e recuperação! Sua média foi de: " + media)
}