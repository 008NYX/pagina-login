let cadastroName = document.querySelector("#cadastroName")
let cadastroMail = document.querySelector("#cadastroMail")
let cadastroSenha = document.querySelector("#cadastroSenha")
let cadastroConfirm = document.querySelector("#cadastroConfirm")
let cadastroButton = document.querySelector("#cadastroButton")

cadastroButton.addEventListener("click", function() {
    if (cadastroName.value === "" || cadastroMail.value === "" || cadastroSenha.value === "") {
        alert("Preencha todas as informações!")
        return
    }

    if (cadastroSenha.value === cadastroConfirm.value) {
        let inputName = localStorage.setItem("nomeSalvo", cadastroName.value)
        let inputMail = localStorage.setItem("emailSalvo", cadastroMail.value)
        let inputSenha = localStorage.setItem("senhaSalva", cadastroSenha.value)

        alert("Conta criada com sucesso!")
        window.location.href = "index.html"
    } else {
        alert("As senhas não coincidem!")
    }
})