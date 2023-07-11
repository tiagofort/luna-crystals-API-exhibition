const cadastrosModel = require('./../models/Cadastros')

module.exports = {

    cadastrar: async (req, res) => {
        const {tela, dados ,desc} = req.body;
        let data = {tela, dados ,desc};
        try {
            await cadastrosModel.create(data)
            res.send(data);
        } catch (err) {
            res.status(500).json({
            message: 'Algo Inexperado ocorreu! Cadastro nao concluido'
            });
        }
    },

    getCadProd: async (req, res) => {
        const menus = await cadastrosModel.findById({_id:"633219b35200928538cabceb"});
        try {
            res.send(menus.dados);
        } catch (err) {
            res.status(500).send(err);
        }
    },

}