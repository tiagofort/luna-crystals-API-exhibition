const mongoose = require('mongoose');
const { Schema } = mongoose;

const pedidoSchema = new Schema({
    titulo:             { type: String },
    id_produto:         { type : String },
    cod_produto:        { type: String },
    qtd:                { type: Number },
    id_remetente:       { type: String },
    nome_remetente:     { type: String },
    id_destinatario:    { type: String },
    mensagem:           { type: String },
    status:             { type: Number }, 
    lido:               { type: Number }, 
    tipo:               { type: Number }, 
    id_mensagem_origem: { type: String }, 
    data_envio:         { type: Date, default: Date.now(), required: true } 
})

module.exports = mongoose.model('Pedidos', pedidoSchema);