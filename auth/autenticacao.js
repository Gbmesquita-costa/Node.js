const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const db = require('../models/db')

module.exports = function(passport) {
    passport.use(new localStrategy({usernameField: "usuario", passwordField: "senha"}, (usuario, senha, done) => {
        db.findOne({usuario: usuario}, (err, usuario) => {
            if(!usuario) {
                return done(null, false, {message: "Usuário inválido"})
            }

            bcrypt.compare(senha, usuario.senha, (err, batem) =>  {
                if(batem) {
                    return done(null, usuario)
                } else {
                    return done(null, false, {message: "Senha inválida"})
                }
            })
        })
    }))

    passport.serializeUser((usuario, done) => {
        done(null, usuario.id)
    })

    passport.deserializeUser((id, done) => {
        db.findById(id, (err, usuario) => {
            done(err, usuario)
        })
    })
}