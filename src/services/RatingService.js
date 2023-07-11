require('dotenv').config();
const ratingModel = require('./../models/Rating');
const clienteModel = require('./../models/Usuarios');

module. exports = {

    addRating: async (req, res) => {
        const { rating, id_produto, id_cliente, comentario, data_inclusao } = req.body; 
        const data = { rating, id_produto, id_cliente, comentario, data_inclusao };
        const cliente_rating = await ratingModel.find({id_produto: data.id_produto, id_cliente: data.id_cliente});
        if(cliente_rating.length > 0){
            try{
                await ratingModel.findByIdAndUpdate({_id: cliente_rating[0]._id}, {rating: data.rating});
                res.send("updated sucess");
            }catch (error){
                res.status(500).json({
                    message: error
                });
            }
        }else{
            try{
                await ratingModel.create(data);
                res.send("saved success");
            }catch (error){
                res.status(500).json({
                    message: error
                });
            }
        }    
    },

    inserirComentario: async (req, res) => {
        const { id_produto, id_cliente, comentario } = req.body;
        const data = { id_produto, id_cliente, comentario };
        const cliente_rating = await ratingModel.find({id_produto: data.id_produto, id_cliente: data.id_cliente});
        try{
            await ratingModel.findByIdAndUpdate({_id: cliente_rating[0]._id}, {comentario: data.comentario});
            res.send("comentario adicionado")
        }catch (error){
            res.status(500).json({
                message: error
            });
        }
    },

    buscarRatingID: async (req, res) => {
        const ratings = await ratingModel.find({id_produto: req.params.id});
        const clientes = await clienteModel.find({tipo: 1});
        let data;
        let media = 0;
        let votos = ratings.length;
        let data_retorno = [];
        if(ratings.length > 0){
            Object.keys(ratings).forEach((i) => {
                data = new Object();
                Object.keys(clientes).forEach((x) => {
                    if(ratings[i].id_cliente == clientes[x]._id){
                        data._id = ratings[i]._id;
                        data.rating = ratings[i].rating;
                        media = media + ratings[i].rating;
                        data.media = 0;
                        data.avaliacoes = 0;
                        data.id_produto = ratings[i].id_produto;
                        data.id_cliente = ratings[i].id_cliente;
                        data.cliente = clientes[x].nome;
                        data.avatar = clientes[x].avatar;
                        data.comentario = ratings[i].comentario;
                        data_retorno.push(data);
                    }
                })
            })
            Object.keys(data_retorno).forEach((i) => {
                data_retorno[i].media = media / votos;
                data_retorno[i].avaliacoes = votos;
            })
        }else{
            data = new Object();
            data._id = "";
            data.rating = "";
            data.media = 0;
            data.avaliacoes = 0;
            data.id_produto = "";
            data.id_cliente = "";
            data.cliente = "";
            data.comentario = "";
            data_retorno.push(data);
        }       

        try{
           res.send(data_retorno);
        }catch (error){
           res.status(500).json({
              message: error
           });
        }
    },

    buscarRating_cliente: async (req, res) => {
        const cliente_rating = await ratingModel.find({id_produto: req.params.id_prod, id_cliente: req.params.id_cli});
        try{
           res.send(cliente_rating); 
        }catch (error){
           res.status(500).json({
              message: error
           });
        }
    },

    deleteComentario: async (req, res) => {
        try{
          await ratingModel.findByIdAndUpdate({_id: req.params.id}, {comentario: ""});
          res.send("success");  
        }catch (error){
           res.status(500).json({
              message: error
           });
        }
    }


}