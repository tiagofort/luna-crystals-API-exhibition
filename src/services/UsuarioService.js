require('dotenv').config();
const bcrypt = require('bcrypt');
const usuariosModel = require('../models/Usuarios');
const vendaModel = require('../models/Venda');
const produtoModel = require('../models/Item');
const tokenEmail = require('./../token/token');
const enviarEmail = require('./../Utilities/GerenciadorEmail');
const ErrorHandler = require('../errors/ErrorHandler');

const salt = bcrypt.genSaltSync(10)

module. exports = {
    
  cadastrarUsuario: async (req, res) => {
    const {nome, sobrenome, usuario, email, phone, senha, acesso, tipo, avatar} = req.body;
    let data = {nome, sobrenome, usuario, email, phone,senha, acesso, tipo, avatar};
    data.senha = bcrypt.hashSync(data.senha, salt);
    try {
        await usuariosModel.create(data);
        res.send(data);
    } catch (err) {
        res.status(500).json({
          message: 'Algo Inexperado ocorreu : Possivelmente ja exista cadastro com o email informado'
        });
    }
  },

  cadastrarCliente: async (req, res) => {
    const {nome, sobrenome, usuario, email, phone, senha, acesso, tipo, avatar} = req.body;
    let data = {nome, sobrenome, usuario, email, phone,senha, acesso, tipo, avatar};
    data.senha = bcrypt.hashSync(data.senha, salt);
    data.tipo = 1;
    data.acesso = 1;
    try {
      await usuariosModel.create(data);
      enviarEmail.opcoesConfirmarCadastro('lunapedraria@gmail.com', data.email, 'Email Confirmation- Luna Pedraria');
      res.send(data);
    } catch (err) {
      res.status(500).json({
        message: err
      });
    }
  },

  esqueceuSenha: async (req, res) => {
    const emailVerificado = await usuariosModel.findOne({email : req.body.email});
    try{

        if(emailVerificado){
          const token = tokenEmail.criarTokenEmail(emailVerificado.email);
          res.status(200).send(token);
          try{
            enviarEmail.opcoesRecuperacaoSenha('lunapedraria@gmail.com', emailVerificado.email, 'Password Recovery - Luna Pedraria', token, emailVerificado.tipo)
          } catch (error){
            res.status(500).send(error);
          }
        }

        if(!emailVerificado){
          throw new ErrorHandler('EMAIL NOT FOUND', 401); 
        }
    }catch (error) {
      res.status(error.statusCode).json(error.toJson());
    }   
  },

  alterarSenha: async (req, res) => {
      const email = tokenEmail.emailToken(req.headers.authorization);
      const nova_senha = bcrypt.hashSync(req.body.senha, salt);
      try{
        await usuariosModel.findOneAndUpdate({email:email.dados}, {senha: nova_senha});
        res.send("Password Changed");
      }catch (error){
        res.status(500).send(error);
      }
  },

  verificarEmail: async (req, res) => {
    const email = await usuariosModel.findOne({email: req.params.email});
    let se_email = email != null? 0 : 1;
    try{
      res.send(se_email.toString());
    } catch (err) {
      res.status(500).json({
        message: 'Algo Inexperado ocorreu!'
      });
    }
  },

  buscarUsuarios: async (req, res) => {
    const usuario = await usuariosModel.find({tipo: 0});
      try {
        res.json(usuario);
      } catch (err) {
        res.status(500).send(err);
      }
  },

  buscarClientes: async (req, res) => {
    const usuario = await usuariosModel.find({tipo:1}).select('avatar email nome sobrenome usuario');
      try {
        res.json(usuario);
      } catch (err) {
        res.status(500).send(err);
      }
  },

  movimentacaoCliente: async (req, res) => {
      var movimentacao = [];
      var clientes;
      const vendas = await vendaModel.find({});
      const produtos = await produtoModel.find({});
      const usuarios = await usuariosModel.find({tipo: 1});
      Object.keys(usuarios).forEach((i) => {
            Object.keys(vendas).forEach((j) => {
              if(usuarios[i]._id == vendas[j].id_cliente){
                  Object.keys(produtos).forEach((x) => {
                    if(produtos[x]._id == vendas[j].id_item){
                      clientes = new Object();
                      clientes.id_cliente = usuarios[i]._id;
                      clientes.nome = usuarios[i].nome;
                      clientes.sobrenome = usuarios[i].sobrenome;
                      clientes.codigo_venda = vendas[j].cod_venda;
                      clientes.data_venda = vendas[j].data_venda;
                      clientes.id_item = vendas[j].id_item;
                      clientes.cod_item = produtos[x].cod_prod;
                      clientes.item = produtos[x].titulo;
                      clientes.url = produtos[x].midia.url1;
                      clientes.item_pedra = produtos[x].pedra;
                      clientes.item_material = produtos[x].material;
                      clientes.item_tipo = produtos[x].tipo;
                      clientes.qtd = vendas[j].qtd;
                      clientes.vlr = vendas[j].vlr_unit;
                      clientes.qtd_comprada = 0;
                      clientes.qtd_paga = 0.0
                      movimentacao.push(clientes);
                    }
                });
              }     
          });
      });
      Object.keys(movimentacao).forEach((i) => {
        var qtd_comprada = 0;
        var qtd_paga = 0.0;
        Object.keys(vendas).forEach((j) => {
          if(movimentacao[i].id_cliente == vendas[j].id_cliente){
            qtd_comprada = qtd_comprada + vendas[j].qtd;
            qtd_paga = qtd_paga + (parseFloat(vendas[j].vlr_unit) * vendas[j].qtd);
          }
        }); 
        movimentacao[i].qtd_comprada = qtd_comprada;
        movimentacao[i].qtd_paga = qtd_paga;
      });

      try{
          res.send(movimentacao)
      }catch (error){
          res.status(500).send(err);
      }
  },

  buscarTodos: async (req, res) => {
    const usuario = await usuariosModel.find({}).select('avatar email nome sobrenome usuario');
      try {
        res.json(usuario);
      } catch (err) {
        res.status(500).send(err);
      }
  },

  editarUsuario: async (req, res) => {
    try {
      var senha = bcrypt.hashSync(req.body.senha, salt);
      await usuariosModel.findByIdAndUpdate(req.params.id, {senha: senha});
      res.send("Alterado com sucesso.");
    } catch (error) {
      console.dir(error);
      res.status(500).send(error);
    }  
  },

  inativarUsuario: async (req, res) => {
    try{
      var status = await usuariosModel.findById(req.params.id);
      if(status.acesso == 0){
        await usuariosModel.findByIdAndUpdate(req.params.id, {acesso: 1});
      }else{
        await usuariosModel.findByIdAndUpdate(req.params.id, {acesso: 0});
      }
      res.send("Alterado com sucesso.");
    } catch (error) {
      res.status(500).send(error);
    }
  },

  confirmarEmail: async (req, res) => {
    try{
      await usuariosModel.findOneAndUpdate({email: req.body.email}, {acesso: 0});
      res.send("Confirmado com sucesso.")
    }catch (error){
      res.status(500).json({
        message: err
      });
    }
  },

}