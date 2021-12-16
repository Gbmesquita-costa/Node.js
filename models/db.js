const mongoose = require('mongoose')

const postagem = mongoose.Schema({
    email: {
        type: String,
        required: true
    },

    usuario: {
        type: String,
        required: true
    },

    senha: {
        type: String,
        required: true
    },
    
    default: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('rocket', postagem)