const mongoose = require('mongoose');
const { Schema } = mongoose;

const vendaSchema = new Schema({
    cod_venda:     { type: String },
    id_cliente:    { type: String },
    id_item:       { type: String },
    qtd:           { type: Number },
    vlr_unit:      { type: String },
    data_venda:    { type: Date },
    data_inclusao: { type: Date, default: Date.now(), required: true }

})

module.exports = mongoose.model('Vendas', vendaSchema);