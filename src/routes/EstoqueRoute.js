const express = require('express');
const router = express.Router();
const estoqueService = require('./../services/EstoqueService');

router.post('/addEstoque', estoqueService.addEstoque);
router.get('/estoques', estoqueService.buscarEstoques);
router.get('/estoque_id/:id', estoqueService.buscarEstoqueID);
router.get('/saidas', estoqueService.buscarSaidas);
router.get('/estoquesMov', estoqueService.buscarEstoqueMov);
router.delete('/deletar/:id', estoqueService.deletarID);

module.exports = router;