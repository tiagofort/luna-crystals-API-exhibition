const mongoose = require('mongoose');
const { Schema } = mongoose;

const stoneSchema = new Schema({ 
    pedra:       { type: String, required: true },
    titulo1:     { type: String, required: false },
    sobre:       { type: String, required: false },
    titulo2:     { type: String, required: false },
    significado: { type: String, required: false },
    titulo3:     { type: String, required: false },
    efeitos:     { type: String, required: false },
    titulo4:     { type: String, required: false },
    limpeza:     { type: String, required: false }
});

module.exports = mongoose.model('Stones', stoneSchema);