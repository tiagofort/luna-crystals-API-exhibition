const mongoose = require('mongoose');
const { Schema } = mongoose;


const slideSchema = new Schema({
    url:        { type: String },
    id_produto: { type : String},
    ativo:      { type: Boolean },
    posicao:    { type: Number }
})

module.exports = mongoose.model('Slides', slideSchema);