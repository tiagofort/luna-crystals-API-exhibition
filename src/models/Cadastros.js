const mongoose = require('mongoose');
const { Schema } = mongoose;

const cadastrosSchema = new Schema({
    tela: { type: String, required: true },
    dados: 
    {
        balde1: [ { type: String } ],
        balde2: [ { type: String } ],
        balde3: [ { type: String } ],
        balde4: [ { type: String } ],
        balde5: [ { type: String } ],
        balde6: [ { type: String } ]
    },
    desc: { type: String }
});

module.exports = mongoose.model('Cadastros', cadastrosSchema);