const mongoose = require('mongoose');
const { Schema } = mongoose;

const estoqueSchema = new Schema({
    id_produto:    { type: String },
    cod_prod:      { type: String },
    id_venda:      { type: String },
    data_inclusao: { type: Date, default: Date.now(), required: true },
    vlr_unidade:   { type: String },
    qtd:           { type: Number },
    tipo:          { type: Number }
})

module.exports = mongoose.model('Estoque', estoqueSchema);