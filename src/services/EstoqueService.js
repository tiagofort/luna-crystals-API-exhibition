require('dotenv').config();
const estoqueModel = require('./../models/Estoque');

module.exports = {

    addEstoque: async (req, res) => {
        const { id_produto, cod_prod, vlr_unidade, qtd, tipo } = req.body; 
        let data = { id_produto, cod_prod, vlr_unidade, qtd, tipo}; 
        try{
            await estoqueModel.create(data)
            res.send(data);
        }catch (err){
            res.status(500).json({
                message: err.message
            });
        }
    },

    buscarEstoques: async (req, res) => {
        const estoque = await estoqueModel.find({tipo:0});
        const ids = [];
        var estoques = [];
        Object.keys(estoque).forEach((item) => {
            ids.push(estoque[item].id_produto);
        });
        const idsFiltrados = ids.filter( (ele,pos)=>ids.indexOf(ele) == pos);
        for(let i = 0; i < idsFiltrados.length; i++){
            var obj = new Object();
            obj.id = idsFiltrados[i];
            obj.qtd = 0;
            estoques.push(obj);
        }
        for(let i = 0; i < estoque.length; i++){
           for(let x = 0; x < idsFiltrados.length; x++){
              if(estoque[i].id_produto == estoques[x].id){
                 estoques[x].qtd = estoques[x].qtd + estoque[i].qtd;
              }  
           }
        }   
        try {
            res.json(estoques);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    buscarEstoqueID: async (req, res) => {
        const entradas = await estoqueModel.find({id_produto: req.params.id, tipo:0});
        const saidas = await estoqueModel.find({id_produto: req.params.id, tipo:1});
        let qtd_entrada = 0;
        let qtd_saida = 0;
        Object.keys(entradas).forEach((item) => {
            qtd_entrada = qtd_entrada + entradas[item].qtd;
        });
        Object.keys(saidas).forEach((item) => {
            qtd_saida = qtd_saida + saidas[item].qtd;
        });
        let retorno_estoque = new Object();
        retorno_estoque._id = req.params.id;
        retorno_estoque.estoque_atual = qtd_entrada - qtd_saida; 
        try {
            res.json(retorno_estoque);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    buscarSaidas: async (req, res) => {
        const estoque = await estoqueModel.find({tipo:1});
        const ids = [];
        var estoques = [];
        Object.keys(estoque).forEach((item) => {
            ids.push(estoque[item].id_produto);
        });
        const idsFiltrados = ids.filter( (ele,pos)=>ids.indexOf(ele) == pos);
        for(let i = 0; i < idsFiltrados.length; i++){
            var obj = new Object();
            obj.id = idsFiltrados[i];
            obj.qtd = 0;
            estoques.push(obj);
        }
        for(let i = 0; i < estoque.length; i++){
           for(let x = 0; x < idsFiltrados.length; x++){
              if(estoque[i].id_produto == estoques[x].id){
                 estoques[x].qtd = estoques[x].qtd + estoque[i].qtd;
              }  
           }
        }   
        try {
            res.json(estoques);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    buscarEstoqueMov: async (req,res) => {
        const estoque = await estoqueModel.find({tipo: 0, qtd: { $gt: 0 }}).sort({ data_inclusao: -1 });
        try {
            res.json(estoque);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    deletarID: async (req, res) => {
        await estoqueModel.findByIdAndRemove(req.params.id).catch((error)=>{
            res.send("Não foi possível remover!")
        });
            res.send("Excluído");
    }
    
}