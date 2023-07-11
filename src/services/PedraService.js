const stoneModel = require('../models/Pedra');

module.exports = {

    cadastrar: async (req, res) => {
        const data = req.body;
        try{
            await stoneModel.create(data)
            res.send(data);
        }catch (err){
            res.status(500).json({
                message: err.message
            });
        }
    },

    buscarStoneID: async (req, res) => {
        const data = await stoneModel.find({pedra: req.params.pedra});
        try {
            res.json(data[0]);
        } catch (err) {
            res.status(500).send(err);
        }
    }
    
}