const mongoose = require('mongoose');
const { Schema } = mongoose;

const ratingSchema = new Schema({
    rating:        { type: Number, required: true }, 
    id_produto:    { type: String },
    id_cliente:    { type: String },
    comentario:    { type: String },
    data_inclusao: { type: Date, default: Date.now(), required: true }
})

module.exports = mongoose.model('Rating', ratingSchema);