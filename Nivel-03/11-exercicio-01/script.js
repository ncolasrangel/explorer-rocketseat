/*
    Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!

*/

let numberOne = prompt("Escolha um número")
let numberTwo = prompt("Escolha mais um número")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let multi = numberOne * numberTwo
let div = numberOne / numberTwo
let restDiv = numberOne % numberTwo

alert(`A soma dos números é ${sum}`)
alert(`A subtração dos números é ${sub}`)
alert(`A multiplicação dos números é ${multi}`)
alert(`A divisão dos números é ${div}`)
alert(`O resto da divisão dos números é ${restDiv}`)


let value = sum / 2
let result = value % 2 == 0 ? 'Par' : 'Impar';
alert(`${value} é ${result}`)
// lógica para saber se é par ou impar

if (numberOne === numberTwo) {
    alert("Os números inseridos são iguais")
}
else {
    alert("Os números inseridos não são iguais")
}