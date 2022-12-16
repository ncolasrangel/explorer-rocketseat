const screen1 = document.querySelector(".screen-1")
const screen2 = document.querySelector(".screen-2")
const randomNumber = Math.round(Math.random() * 10)
const btnTry = document.querySelector("#btn-try")
const btnReset = document.querySelector("#btn-reset")
let attemps = 0

function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#input-number")
    if(Number(inputNumber.value) == randomNumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        document.querySelector(".screen-2 h2").innerText = `Acertou em ${attemps} tentaivas!`
    }
    
    attemps++  
}

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function() {
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    attemps = 0
})