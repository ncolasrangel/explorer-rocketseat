/*
Nesse desafio, você irá solicitar ao usuário que ele insira dois números e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 

- [ ]  Verifique se a soma dos dois números é par (ou ímpar).
- [ ]  Verifique se os dois números inseridos são iguais (ou diferentes).
*/

let numberOne = Number(prompt("Digite um numero"))
let numberTwo = Number(prompt("Digite mais um numero"))

alert(`A soma dos numeros é ${numberOne + numberTwo}`)
alert(`A subtração dos numeros é ${numberOne - numberTwo}`)
alert(`A multiplicação dos numeros é ${numberOne * numberTwo}`)
alert(`A divisão dos numeros é ${numberOne / numberTwo}`)
alert(`O resto da divisão dos numeros é ${numberOne % numberTwo}`)

if ((numberOne + numberTwo) % 2 == 0) {
    alert(`A soma de ${numberOne} e ${numberTwo} é um valor par!`)
} else {
    alert(`A soma de ${numberOne} e ${numberTwo} é um valor ímpar!`)
}

if (numberOne === numberTwo) {
    alert('Os números digitados são iguais')
} else {
    alert('Os números digitados são diferentes')
}