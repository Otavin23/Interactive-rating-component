const Button = document.querySelectorAll(".nav button")
const submit = document.querySelector(".submit") 

const container = document.querySelector(".main__container") 
const mainResult = document.querySelector(".main__result")
const spanTextResult = document.querySelector("span")

let valueButton = 0


Button.forEach((button)=> {
    button.addEventListener("click", ({target})=> valueButton = target.value)
})


submit.addEventListener("click", () => {
    container.style.display = "none"
    mainResult.style.display = "flex"
    spanTextResult.innerText = `You selected ${valueButton} out of 5`
})

