require('dotenv').config();
const usuariosModel = require('./../models/Usuarios');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const ErrorHandler = require('../errors/ErrorHandler');

module.exports = {

    autenticar: async (req, res) => {
      const user = await usuariosModel.findOne({email: req.body.email, tipo: 0, acesso: 0});
        try {
            if(!user){
              throw new ErrorHandler('EMAIL NOT REGISTERED', 404);
            }

            if (!await bcrypt.compare(req.body.senha, user.senha)) {
              throw new ErrorHandler('THE PASSWORD INFORMED IS WRONG', 401); 
            }

            const token = jwt.sign({_id: user._id}, process.env.SECRET_TOKEN)

            res.cookie('jwt', token, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000
            })

            res.send({
                token
            })
            
        } catch (error) {
            console.error(error);
            res.status(error.statusCode).json(error.toJson());
        }
    },

    autenticarCliente: async (req, res) => {
      const user = await usuariosModel.findOne({email: req.body.email, tipo: 1, acesso: 0})
        try {
            if(!user){
              throw new ErrorHandler('EMAIL NOT REGISTERED', 404);
            }

            if (!await bcrypt.compare(req.body.senha, user.senha)) {
              throw new ErrorHandler('THE PASSWORD INFORMED IS WRONG', 401); 
            }

            const token = jwt.sign({_id: user._id}, process.env.SECRET_TOKEN_CLIENTE)

            res.cookie('jwt', token, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000
            })

            res.send({
                token
            })
            
        } catch (error) {
            res.status(error.statusCode).json(error.toJson());
        }
    },

    logout: async (req, res) => {
      res.cookie('jwt', '', {maxAge: 0})
      res.send({
          message: 'success'
      })
    },

    getUser: async (req, res) =>{
      try {
        var token = req.headers.authorization.split(" ")[1];
        const claims = jwt.verify(token, process.env.SECRET_TOKEN);
        if (!claims) {
            return res.status(401).send({
                message: 'unauthenticated'
            })
        }

        const user = await usuariosModel.findOne({_id: claims._id});
        const {password, ...data} = await user.toJSON();
        res.send(data)
      } catch (e) {
          return res.status(401).send({
              message: e + ' unauthenticated'
          })
      }
    },

    getCustomer: async (req, res) => {
        try {
            var token = req.headers.authorization.split(" ")[1];
            const claims = jwt.verify(token, process.env.SECRET_TOKEN_CLIENTE);
            if (!claims) {
                return res.status(401).send({
                    message: 'unauthenticated'
                })
            }
            const user = await usuariosModel.findOne({_id: claims._id});
            const {password, ...data} = await user.toJSON();
            res.send(data);
        } catch (e) {
            return res.status(401).send({
                message: e + ' unauthenticated'
            })
        }
    },

}