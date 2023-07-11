const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
    titulo:        { type: String, required: true },
    subtitulo:     { type: String },
    cod_prod:      { type: String },
    tipo:          { type: String, required: true },
    material:      { type: String, required: true },
    pedra:         { type: String },
    peso:          { type: String },
    comentario:    { type: String },
    midia: 
    {
        url1:  { type: String },
        url2:  { type: String },
        url3:  { type: String },
        url4:  { type: String },
        url5:  { type: String },
        url6:  { type: String },
        video: { type: String }
    },
    situacao:      { type: Boolean, required: true },
    preco:         { type: String, required: true },
    valor_compra:  { type: String },
    desconto:      { type: Number },
    sugestoes:     [ { type: String } ],
    data_inclusao: { type: Date, default: Date.now(), required: true }

})

module.exports = mongoose.model('Itens', itemSchema);