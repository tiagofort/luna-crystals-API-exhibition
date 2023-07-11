const mongoose = require('mongoose');
const { Schema } = mongoose;

const menuSchema = new Schema({
    desc:  { type: String },
    rota:  { type: String},
    ativo: { type: Boolean },
    ordem: { type: Number }
})

module.exports = mongoose.model('Menu', menuSchema);