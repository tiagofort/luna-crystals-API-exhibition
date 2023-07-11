require('dotenv').config();
const itemModel = require('./../models/Item');
const estoqueModel = require('./../models/Estoque') ;
const codProd = require('../Utilities/GerarCodigo');

module. exports = {

    salvar: async (req, res) => { 
        const codigo = codProd.gerarCodProd(req.body.tipo, req.body.material, req.body.pedra);
        let data = new Object();
        data = req.body;
        data.cod_prod = codigo;
        let ultimaInsercao = [];
        try{
            await itemModel.create(data);
            ultimaInsercao = await itemModel.find().sort({ data_inclusao: -1 }).limit(1);
            var estoque = new Object();
            estoque.id_produto = ultimaInsercao[0]._id;
            estoque.vlr_unidade = "";
            estoque.qtd = 0;
            estoque.tipo = 0;
            await estoqueModel.create(estoque);
            res.send(data);
        }catch (err){
            res.status(500).json({
                message: err.message
            });
        }
    },

    buscarItens: async (req, res) => {
        const itens = await itemModel.find({situacao:true});
        try {
            res.json(itens);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    buscarNovidades: async (req, res) =>{
        const itens = await itemModel.find({situacao:true}).sort({data_inclusao:-1});
        try{
            res.json(itens)
        }catch (err){
            res.status(500).send(err); 
        }
    },

    buscarPorID: async (req, res) =>{
        const item = await itemModel.findById({_id: req.params.id}).exec();
        try{
            res.send(item);
        }catch (err){
            res.status(500).send(err);
        }
    },

    buscarSugestoes: async (req, res) => { 
        const item_principal = await itemModel.findById({_id: req.params.id}).exec();
        const itens = await itemModel.find({});
        let sugestoes = [];
        for(let i = 0; i < item_principal.sugestoes.length; i++){
            for(let x = 0; x < itens.length; x++){
                if(item_principal.sugestoes[i] == itens[x]._id.toHexString()){
                    sugestoes.push(itens[x]);
                }
            }
        }
        try {
            res.json(sugestoes);
        } catch (err) {
            res.status(500).send(err);
        } 
    },

    buscarPorParametro: async (req, res) => {
        let itens = []
        if(req.params.filtro == 'all'){
            itens = await itemModel.find({situacao:true});
        }else{
            const pedra = req.params.filtro.replace("%20"," ");
            itens = await itemModel.find({situacao:true, pedra: pedra});
        }
        try {
            res.json(itens);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    editarID: async (req, res) => {
        try {
            await itemModel.findByIdAndUpdate(req.params.id, req.body)
            res.send("Alterado com sucesso.");
        } catch (error) {
            console.dir(error);
            res.status(500).send(error);
        }      
    },

    gerirSugestao: async (req, res) => {
        try {
            await itemModel.findByIdAndUpdate(req.params.id, req.body)
            res.send("Alterado com sucesso.");
        } catch (error) {
            console.dir(error);
            res.status(500).send(error);
        }      
    },

    deletarID: async (req, res)=>{
        await itemModel.findByIdAndRemove(req.params.id).catch((error)=>{
            res.send("Não foi possível remover!")
        });
            res.send("Excluído");
    },

}