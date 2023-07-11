const pedidoModel = require('./../models/Pedido');
const usuarioModel = require('./../models/Usuarios');
const itemModel = require('./../models/Item');

module.exports = {

    addMensagem: async (req, res) => {
        const { titulo, id_produto, cod_prod , qtd ,id_remetente, nome_remetente, id_destinatario ,mensagem, status, lido, tipo, id_mensagem_origem} = req.body; 
        let data = { titulo, id_produto, cod_prod, qtd ,id_remetente, nome_remetente, id_destinatario ,mensagem, status, lido, tipo, id_mensagem_origem }; 
        try{
            await pedidoModel.create(data)
            res.send(data);
        }catch (err){
            res.status(500).json({
                message: err.message
            });
        }
    },

    buscarTodos: async (req, res) => {
            const pedidos = await pedidoModel.find();
            const usuarios = await usuarioModel.find();
            const itens = await itemModel.find();
            var pedido_retorno = [];

            for(let i = 0; i < pedidos.length; i++){
                let temp_retorno = new Object();
                temp_retorno.id_pedido = pedidos[i]._id;
                temp_retorno.titulo = pedidos[i].titulo;
                temp_retorno.id_produto = pedidos[i].id_produto;
                temp_retorno.id_remetente = pedidos[i].id_remetente;
                temp_retorno.mensagem = pedidos[i].mensagem;
                temp_retorno.status = pedidos[i].status;
                temp_retorno.lido = pedidos[i].lido;
                for(let x = 0; x < usuarios.length; x++){
                    if(pedidos[i].id_remetente == usuarios[x]._id){
                        temp_retorno.nome_remetente = usuarios[x].nome +' '+ usuarios[x].sobrenome;
                        temp_retorno.email = usuarios[x].email;
                        temp_retorno.phone = usuarios[x].phone;
                        temp_retorno.avatar = usuarios[x].avatar || '';
                    }
                }
                for(let y = 0; y < itens.length; y++){
                    if(pedidos[i].id_produto == itens[y]._id){
                        temp_retorno.produto = itens[y].titulo;
                        temp_retorno.tipo = itens[y].tipo;
                        temp_retorno.material = itens[y].material;
                        temp_retorno.pedra = itens[y].pedra;
                        temp_retorno.cod_prod = itens[y].cod_prod;
                        temp_retorno.preco = itens[y].preco;
                        temp_retorno.img1 = itens[y].midia.url1;
                        temp_retorno.img2 = itens[y].midia.url2;
                    }
                }
                pedido_retorno.push(temp_retorno);
            }

        try{   
            res.json(pedido_retorno);
        }catch (error){
            res.status(500).send(error);
        }
    },

    buscarPedidos: async (req, res) => {
        try{
            const pedidos = await pedidoModel.find({ id_destinatario: req.params.destinatario ,id_mensagem_origem : { $eq : "" } });
            res.send(pedidos);
        }catch (error){
            res.status(500).send(error);
        }
    },

    buscarEnviados: async (req, res) => {
        try{
            const respostas = await pedidoModel.find({ id_remetente: req.params.remetente ,id_mensagem_origem : { $eq: "" } });
            res.send(respostas);
        }catch (error){
            res.status(500).send(error);
        }
    },

    buscarRespostas: async (req, res) => {
        try{
            const respostas = await pedidoModel.find({ id_mensagem_origem : { $ne: "" } });
            res.send(respostas);
        }catch (error){
            res.status(500).send(error);
        }
    },

    statusLida: async (req, res) => {
        try {
            await pedidoModel.findByIdAndUpdate(req.params.id, {status: req.params.status});
            res.send("Alterado com sucesso.");
          } catch (error) {
            console.dir(error);
            res.status(500).send(error);
          }  
    },

    deletePedidos: async (req, res) => {
        var ids = []
        if(req.body.parametro == 0){
            ids.push(req.body.deletar);
        }else if(req.body.parametro == 1){
            ids = req.body.deletar;
        }
        
        try{
            console.log(ids.length)
            for(let i = 0; i < ids.length; i++){
                let respostas = await pedidoModel.find({id_mensagem_origem: ids[i]})
                if(respostas){
                   for(let x = 0; x < respostas.length; x++){
                     await pedidoModel.findByIdAndDelete({_id: respostas[x]._id});
                   } 
                }
                await pedidoModel.findByIdAndDelete({ _id: ids[i] });
            }
            res.send("Deletado");
        }catch (error){
            res.status(500).send(error);
        }
    },

}