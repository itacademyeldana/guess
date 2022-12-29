const inp = document.querySelector(".guess__inp")
const btn = document.querySelector(".guess__btn")
const previous = document.querySelector(".guess__previous")
const answer = document.querySelector(".guess__answer")
const restartBtn = document.querySelector(".guess__restart")

const randomNumber = Math.round(Math.random() * 100)
console.log(randomNumber)

let attempt = 5

// console.log(btn.disabled = true)

btn.addEventListener('click', (e) => {
    if (attempt) {
        if (randomNumber === +inp.value) {
            answer.innerText = "Вы победили!"
            restartBtn.style.display = 'block'
            btn.disabled = true
        } else if (randomNumber > +inp.value) {
            answer.innerText = "Загаданное число больше"
        } else {
            answer.innerText = "Загаддонное число меньше"
        }
        previous.innerText += ` ${inp.value}`
        attempt--
    } else {
        answer.innerText = `Game Over! Загадонное число - ${randomNumber}`
        restartBtn.style.display = 'block'
        btn.disabled = true
    }
})

restartBtn.addEventListener('click', () => {
    window.location.reload();
})
