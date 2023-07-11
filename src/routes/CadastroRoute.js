const express = require('express');
const router = express.Router();
const cadastroService = require('../services/CadastroService');

router.post('/salvar', cadastroService.cadastrar);
router.get('/buscaCadProd', cadastroService.getCadProd);

module.exports = router;