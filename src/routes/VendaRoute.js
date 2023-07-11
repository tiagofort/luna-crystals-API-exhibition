const express = require('express');
const router = express.Router();
const vendaService = require('./../services/VendaService');

router.post('/addVenda', vendaService.addVenda);
router.get('/buscarVendas', vendaService.buscarVendas);
router.get('/topProdQtd/:ref', vendaService.topProdQtd);
router.get('/topProdTotal/:ref', vendaService.topProdTotal);
router.get('/topProdLucro/:ref', vendaService.topProdLucro);
router.get('/topClienteQtd/:ref', vendaService.topClienteQtd);
router.get('/topClienteTotal/:ref', vendaService.topClienteTotal);
router.delete('/apagar/:id', vendaService.deleteVendaID);

module.exports = router;