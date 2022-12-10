/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/

let n1 = prompt("Informe um número")
let n2 = prompt("Informe mais um número")

n1 = Number(n1)
n2 = Number(n2)

const sum = n1 + n2
const sub = n1 - n2
const multi = n1 * n2
const div = n1 / n2
const restDiv = n1 % n2

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)