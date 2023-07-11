const express = require('express');
const router = express.Router();
const imagemProdRouter = require('../services/ImagemProdService')

router.post('/salvar', imagemProdRouter.uploadImagem);

module.exports = router;