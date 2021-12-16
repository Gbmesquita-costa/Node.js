const express = require("express")
const bodyParser = require('body-parser')
const passport = require('passport')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('express-flash')
const db = require('./models/db')
const app = express()
const porta = 8080
require('./auth/autenticacao')(passport)

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(express.static(__dirname + '/public'))

mongoose.connect('mongodb+srv://root:Z3jYEv9qKng6aAgO@cluster0.427vp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado com sucesso ao Atlas')
}).catch(err => {
    console.log(`Erro ao se conectar ao Atlas ${err}`)
})

app.use(session({
    secret: "BackendDesafioRockeatseat",
    resave: true,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg")
    res.locals.error_msg = req.flash("error_msg")
    res.locals.error = req.flash("error")
    res.locals.user = req.user || null
    next()
})

const encryptpassword = (password) => {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}

app.get('/', (req, res) => {
    res.render(__dirname + '/views/index')
})

app.get('/logar', (req, res) => {
    res.render(__dirname + '/views/formulario/form')
})

app.get('/registro', (req, res) => {
    res.render(__dirname + '/views/formulario/registro')
})

app.get('/atualizar', (req, res) => {
    res.render(__dirname + '/views/formulario/atualizar')
})

app.post('/registrar', (req, res) => {
    const {usuario, senha, email} = req.body

    db.findOne({usuario: usuario}).then(done => {
        if(done) {
            res.send('Usuário já existe')
            console.log("Usuario já existe" + done)
        } else {
            const registrar = new db({
                email: email,
                usuario: usuario,
                senha: encryptpassword(senha)
            })
            
            registrar.save().then(() => {
                res.status(200).send('Usuario cadastrado com sucesso')
                console.log("Usuário cadastrado com sucesso")
            }).catch(err => {
                res.send(`Preencha os campos`)
                console.log(`Ocorreu um erro: ${err}`)
            })
        }
    })
})

app.post('/login', (req, res, next) => {
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/logar",
        failureFlash: true
    })(req, res, next)
})

app.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
    console.log('Usuário desconectado com sucesso')
})

app.post('/update', (req, res) => {
    db.findOne({_id: req.body.id}).then(atualizar => {
        const usuario = req.body.usuario
        const senha = req.body.senha
        const email = req.body.email

        atualizar.email = email
        atualizar.usuario = usuario
        atualizar.senha = encryptpassword(senha)

        atualizar.save()
    }).then(() => {
        res.redirect('/')
        console.log('Usuário Atualizado com sucesso')
    }).catch(err => {
        console.log(`Ocorreu um erro: ${err}`)
    })
})

app.listen(porta, () => {
    console.log(`Executando o servidor na porta ${porta}`)
})