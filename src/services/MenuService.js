const menuModel = require('./../models/Menu')

module.exports = {

    cadastrar: async (req, res) => {
        const {desc, rota ,ativo} = req.body;
        let data = {desc, rota ,ativo};
        try {
            await menuModel.create(data)
            res.send(data);
        } catch (err) {
            res.status(500).json({
            message: 'Algo Inexperado ocorreu! Cadastro nao concluido'
            });
        }
    },

    getMenu: async (req, res) => {
        const menus = await menuModel.find({ativo:true}).sort({ ordem: 1 });
        try {
            res.json(menus);
        } catch (err) {
            res.status(500).send(err);
        }
    },

}