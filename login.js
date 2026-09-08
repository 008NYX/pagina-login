let loginEmail = document.querySelector("#loginEmail")
let loginSenha = document.querySelector("#loginSenha")
let loginButton = document.querySelector("#loginButton")

loginButton.addEventListener("click", function() {
    let emailSalvo = localStorage.getItem("emailSalvo")
    let senhaSalva = localStorage.getItem("senhaSalva")

    if (loginEmail.value === emailSalvo && loginSenha.value === senhaSalva) {
        alert("Login efetuado com sucesso!")
        window.location.href = "pagina.html"
    } else {
        alert("Senha ou nome de usuário estão incorretos!")
    }
})