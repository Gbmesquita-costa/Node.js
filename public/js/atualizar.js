const button = document.querySelector('.button') 

button.addEventListener('click', (event) => {
    event.preventDefault()
    
    const email = document.querySelector('.email')
    const usuario = document.querySelector('.usuario')
    const senha = document.querySelector('.senha')
    const form = document.querySelector('.formulario')
    const sucesso = document.querySelector('.sucesso')

    const erroremail = document.querySelector('.labelemail')
    const errorusuario = document.querySelector('.labelusuario')
    const errorsenha = document.querySelector('.labelsenha')

    const emailValue = email.value
    const usuarioValue = usuario.value
    const senhaValue = senha.value

    if(emailValue === "" || emailValue.indexOf("@") == -1 || emailValue.indexOf(".") == -1 || (emailValue.indexOf(".") - emailValue.indexOf("@") == 1)) {
        email.classList.add("error")
        erroremail.innerHTML = "Preencha o campo E-mail corretamente"
        return false

    }else {
        email.classList.remove("error")
        erroremail.innerHTML = ""
    }

    if(usuarioValue === "" || usuarioValue.length <= 7 || usuarioValue.length >= 13) {
        usuario.classList.add("error")
        errorusuario.innerHTML = "Deve ter entre 8 e 12 caracteres"
        return false

    } else {
        usuario.classList.remove("error")
        errorusuario.innerHTML = ""
    }

    if(senhaValue === "" || senhaValue.length <= 7 || senhaValue.length >= 16) {
        senha.classList.add('error')
        errorsenha.innerHTML = "As senhas devem conter entre 8 e 15 caracteres"
        return false

    } else {
        senha.classList.remove('error')
        errorsenha.innerHTML = ""
    }

    if(emailValue && usuarioValue && senhaValue) {

        sucesso.innerHTML = "Usuário atualizado com sucesso"
        sucesso.classList.add('animacao')

        setTimeout(() => {
            form.submit()
        }, 2000);
    }
})