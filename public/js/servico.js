const button = document.querySelector('.button')

button.addEventListener('click', (event) => {
    event.preventDefault()
    
    const email = document.querySelector('.email')
    const user = document.querySelector('.usuario')
    const password = document.querySelector('.senha')
    const form = document.querySelector('.formulario')
    const box = document.querySelector('.box')
    const sucesso = document.querySelector('.sucesso')

    const emailerror = document.querySelector('.labelemail')
    const usuarioerror = document.querySelector('.labelusuario')
    const senhaerror = document.querySelector('.labelsenha')
    
    const emailValue = email.value
    const userValue = user.value
    const passwordValue = password.value
    
    if(emailValue === "" || emailValue.indexOf("@") == -1 || emailValue.indexOf(".") == -1 || (emailValue.indexOf(".") - emailValue.indexOf("@") == 1)) {
        email.classList.add('error')
        emailerror.innerHTML = "Preencha o e-mail corretamente"
        return false

    } else {
        email.classList.remove('error')
        emailerror.innerHTML = ""
    }

    if(userValue === "" || userValue.length <= 7 || userValue.length >= 13) {
        user.classList.add('error')
        usuarioerror.innerHTML = "Deve ter entre 8 e 12 caracteres"
        return false

    }else {
        user.classList.remove('error')
        usuarioerror.innerHTML = ""
    }
    
    if(passwordValue === "" || passwordValue.length <= 7 || passwordValue.length >= 16) {
        password.classList.add('error')
        senhaerror.innerHTML = "As senhas devem conter entre 8 e 15 caracteres"
        return false

    } else {
        password.classList.remove('error')
        senhaerror.innerHTML = ""
    }
    
    if(emailValue && userValue && passwordValue) {
        
        axios.post(form.action, {
            email: emailValue,
            usuario: userValue,
            senha: passwordValue
        }).then(response => {
            if(response.data === "Usuário já existe") {
                box.innerHTML = response.data
                sucesso.innerHTML = ""
            } else {
                box.innerHTML = ""
                sucesso.innerHTML = response.data
                sucesso.classList.add('animacao')
            }
        }).catch(err => {
            box.innerHTML = err.data
        })
    }
})
