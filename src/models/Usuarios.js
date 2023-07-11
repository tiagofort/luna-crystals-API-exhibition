const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuarioSchema = new Schema({
    nome:      { type: String, required: true }, 
    sobrenome: { type: String },
    usuario:   { type: String },
    email:     { type: String, required: true, unique: true },
    phone:     { type: String },
    senha:     { type: String, required: true },
    acesso:    { type: Number },
    tipo:      { type: Number },
    avatar:    { type: String },
    ultAlt:    { type: Date, default: Date.now(), required: true }
})

module.exports = mongoose.model('Usuarios', usuarioSchema);
