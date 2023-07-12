const vendaModel = require('./../models/Venda');
const itemModel = require('./../models/Item');
const estoqueModel = require('./../models/Estoque');
const usuarioModel = require('./../models/Usuarios');
const codVenda = require('./../Utilities/GerarCodigo');
const ordenar = require('./../Utilities/utils');
const ErrorHandler = require('../errors/ErrorHandler');

module.exports = {

    addVenda: async (req, res) => {
        var entradas = await estoqueModel.find({id_produto: req.body.id_item, tipo: 0});       
        var saidas = await estoqueModel.find({id_produto: req.body.id_item, tipo: 1});

        try{
            if(entradas.length == 0){
                throw new ErrorHandler('This product has no invetory movement', 404);
            }

            var qtd_entradas = 0;
            var qtd_saidas = 0;
            for(let i = 0; i < entradas.length; i ++){
                qtd_entradas = qtd_entradas + entradas[i].qtd;
            }
            for(let x = 0; x < saidas.length; x++){
                qtd_saidas = qtd_saidas + saidas[x].qtd;
            }

            if(qtd_entradas == 0){
                throw new ErrorHandler('The product selected has no inventory to be sold', 404);
            }
            
            if(qtd_entradas < qtd_saidas){
                throw new ErrorHandler('This product has a negative inventory', 404);
            }
        
            if(req.body.qtd <= (qtd_entradas - qtd_saidas)){
                let estoque = new Object();
                estoque.id_produto = req.body.id_item;
                estoque.qtd = req.body.qtd;
                estoque.vlr_unidade = req.body.vlr_unit;
                estoque.tipo = 1;

                const codigo = codVenda.gerarCodVenda();
                let venda = new Object();
                venda = req.body;
                venda.cod_venda = codigo;

                let idVenda = await vendaModel.create(venda);
                estoque.id_venda = idVenda._id;
                await estoqueModel.create(estoque);
                res.send("success");

                    
            }else{    
                throw new ErrorHandler('You are tryng to sell more than you have as inventory', 404);
            }
        }catch (err){
            res.status(err.statusCode).json(err.toJson());
        } 
         
    },

    buscarVendas: async (req, res) => {
        const vendas = await vendaModel.find();
        try {
            res.json(vendas);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    topProdQtd: async (req, res) => { 
            var itens;
            var historico = [];
            const vendas = await vendaModel.find({});
            const produtos = await itemModel.find({});

            Object.keys(produtos).forEach((i) => {
                    var qtd_vendida = 0;
                    var qtd_total = 0.0;
                    itens = new Object();
                    Object.keys(vendas).forEach((j) => {
                        if(produtos[i]._id == vendas[j].id_item){
                            qtd_vendida = qtd_vendida + vendas[j].qtd;
                            qtd_total = qtd_total +  (parseFloat(vendas[j].vlr_unit) * vendas[j].qtd);
                        }
                    })
                    itens.id = produtos[i]._id;
                    itens.cod_prod = produtos[i].cod_prod;
                    itens.item = produtos[i].titulo;
                    itens.url = produtos[i].midia.url1;
                    itens.pedra = produtos[i].pedra;
                    itens.material = produtos[i].material;
                    itens.tipo = produtos[i].tipo;
                    itens.qtd_vendida = qtd_vendida;
                    itens.qtd_total = qtd_total;
                    historico.push(itens); 
            })
            if(req.params.ref == 0){
                try{
                    res.send(ordenar.ordernarQtd(historico));
                }catch (error){
                    res.status(500).send(error);
                }
            }else if (req.params.ref == 1){
              try{  
                res.xls('data.xlsx', ordenar.ordernarQtd(historico), {
                    fields:[
                        "cod_prod", "item", "pedra", "material", "tipo", "qtd_vendida", "qtd_total"
                    ]
                });
              }catch (error){
                res.status(500).send(error);
              }  
            }  
    },

    topProdTotal: async (req, res) => { 
            var itens;
            var historico = [];
            const vendas = await vendaModel.find({});
            const produtos = await itemModel.find({});

            Object.keys(produtos).forEach((i) => {
                    var qtd_vendida = 0;
                    var qtd_total = 0.0;
                    itens = new Object();
                    Object.keys(vendas).forEach((j) => {
                        if(produtos[i]._id == vendas[j].id_item){
                            qtd_vendida = qtd_vendida + vendas[j].qtd;
                            qtd_total = qtd_total +  (parseFloat(vendas[j].vlr_unit) * vendas[j].qtd);
                        }
                    })
                    itens.cod_prod = produtos[i].cod_prod;
                    itens.item = produtos[i].titulo;
                    itens.pedra = produtos[i].pedra;
                    itens.material = produtos[i].material;
                    itens.tipo = produtos[i].tipo;
                    itens.qtd_vendida = qtd_vendida;
                    itens.qtd_total = qtd_total;
                    historico.push(itens); 
            })
            if(req.params.ref == 0){
                try{
                    res.send(ordenar.ordernarTotal(historico));
                }catch (error){
                    res.status(500).send(error);
                }
            }else if (req.params.ref == 1){
              try{  
                res.xls('data.xlsx', ordenar.ordernarTotal(historico), {
                    fields:[
                        "cod_prod", "item", "pedra", "material", "tipo", "qtd_vendida", "qtd_total"
                    ]
                });
              }catch (error){
                res.status(500).send(error);
              }  
            }
    },

    topProdLucro: async (req, res) => {
        var itens;
        var historico = [];
        const vendas = await vendaModel.find({});
        const produtos = await itemModel.find({});

        Object.keys(produtos).forEach((i) => {
                let lucro = 0.0;
                let vlr_venda;
                let vlr_compra;
                itens = new Object()
                Object.keys(vendas).forEach((j) => {
                    if(produtos[i]._id == vendas[j].id_item){
                        lucro = parseFloat(vendas[j].vlr_unit) - parseFloat(produtos[i].valor_compra);
                        vlr_venda = vendas[j].vlr_unit;
                        vlr_compra = produtos[i].valor_compra;
                    }
                })
                itens.cod_prod = produtos[i].cod_prod;
                itens.item = produtos[i].titulo;
                itens.pedra = produtos[i].pedra;
                itens.material = produtos[i].material;
                itens.tipo = produtos[i].tipo;
                itens.vlr_venda = vlr_venda == null? "0.0" : vlr_venda;
                itens.vlr_compra = vlr_compra == null? "0.0" : vlr_compra;
                itens.lucro = lucro;
                historico.push(itens);
        })
        if(req.params.ref == 0){
            try{
                res.send(ordenar.ordernarLucro(historico));
            }catch (error){
                res.status(500).send(error);
            }
        }else if (req.params.ref == 1){
            try{
                res.xls('data.xlsx', ordenar.ordernarLucro(historico), {
                    fields:[
                        "cod_prod", "item", "pedra", "material", "tipo", "vlr_venda", "vlr_compra", "lucro"
                    ]
                });
            }catch (error){
                res.status(500).send(error);
            }
        }
    },

    topClienteQtd: async (req, res) => {
        var clientes;
        var historico = [];
        const vendas = await vendaModel.find({});
        const usuarios = await usuarioModel.find({tipo: 1});
        Object.keys(usuarios).forEach((i) => { 
            var qtd_vendida = 0;
            var qtd_total = 0.0;
            clientes = new Object();
            Object.keys(vendas).forEach((j) => { 
                if(usuarios[i]._id == vendas[j].id_cliente){
                    qtd_vendida = qtd_vendida + vendas[j].qtd;
                    qtd_total = qtd_total +  (parseFloat(vendas[j].vlr_unit) * vendas[j].qtd);
                }     
            })
            clientes.id_cliente = usuarios[i]._id;
            clientes.nome = usuarios[i].nome;
            clientes.sobrenome = usuarios[i].sobrenome;
            clientes.email = usuarios[i].email;
            clientes.qtd_vendida = qtd_vendida;
            clientes.qtd_total = qtd_total;
            historico.push(clientes);
        })
        if(req.params.ref == 0){
            try{
                res.send(ordenar.ordernarQtd(historico));
            }catch (error){
                res.status(500).send(error);
            }
        }else if (req.params.ref == 1){
            try{  
                res.xls('data.xlsx', ordenar.ordernarQtd(historico), {
                    fields:[
                        "id_cliente", "nome", "sobrenome", "email", "qtd_vendida", "qtd_total"
                    ]
                });
              }catch (error){
                res.status(500).send(error);
              } 
        }
    },

    topClienteTotal: async (req, res) => {
        var clientes;
        var historico = [];
        const vendas = await vendaModel.find({});
        const usuarios = await usuarioModel.find({tipo: 1});
        Object.keys(usuarios).forEach((i) => { 
            var qtd_vendida = 0;
            var qtd_total = 0.0;
            clientes = new Object();
            Object.keys(vendas).forEach((j) => { 
                if(usuarios[i]._id == vendas[j].id_cliente){
                    qtd_vendida = qtd_vendida + vendas[j].qtd;
                    qtd_total = qtd_total +  (parseFloat(vendas[j].vlr_unit) * vendas[j].qtd);
                }     
            })
            clientes.id_cliente = usuarios[i]._id;
            clientes.nome = usuarios[i].nome;
            clientes.sobrenome = usuarios[i].sobrenome;
            clientes.email = usuarios[i].email;
            clientes.qtd_vendida = qtd_vendida;
            clientes.qtd_total = qtd_total;
            historico.push(clientes);
        })
        if(req.params.ref == 0){
            try{
                res.send(ordenar.ordernarTotal(historico));
            }catch (error){
                res.status(500).send(error);
            }
        }else if (req.params.ref == 1){
            try{  
                res.xls('data.xlsx', ordenar.ordernarTotal(historico), {
                    fields:[
                        "id_cliente", "nome", "sobrenome", "email", "qtd_vendida", "qtd_total"
                    ]
                });
              }catch (error){
                res.status(500).send(error);
              } 
        }
    },

    deleteVendaID: async (req, res) => {      
        try{
            await vendaModel.findByIdAndRemove(req.params.id);
            await estoqueModel.findOneAndDelete({id_venda: req.params.id});
            res.send("Delete sucess")
        }catch (err) {
            res.status(500).send(err);
        }
    },

}