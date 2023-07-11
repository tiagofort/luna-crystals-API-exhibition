require('dotenv').config();
const res = require('express/lib/response');
const jwt = require("jsonwebtoken");
const chavePrivada = process.env.SECRET_TOKEN;
const chavePrivadaEmail = process.env.SECRET_TOKEN_REDEFINE;

function verificarToken(req, res, next) {
    var token = req.headers.authorization.split(" ")[1]
    try {
        var decoded = jwt.verify(token, chavePrivada);
        next()
    } catch (e) {
        res.sendStatus(403)
    }
}

function verificarTokenEmail(req, res, next) {
    var token = req.headers.authorization.split(" ")[1];
    try {
        var decoded = jwt.verify(token, chavePrivadaEmail);
        next()
    } catch (e) {
        res.sendStatus(403)
    }
}

function emailToken(token){
    var decoded = jwt.verify(token.split(" ")[1], chavePrivadaEmail);
    return decoded;
}

function criarToken(dados, req, res) {
    return jwt.sign(dados, chavePrivada);
}

function criarTokenEmail(dados, req, res) {
    return jwt.sign({dados}, chavePrivadaEmail, {
        expiresIn: '600s'
    });
}

module.exports = {
    verificarToken: verificarToken,
    verificarTokenEmail: verificarTokenEmail,
    criarToken: criarToken,
    criarTokenEmail: criarTokenEmail,
    emailToken
};