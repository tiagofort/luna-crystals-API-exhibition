const express = require('express');
const router = express.Router();
const stoneService = require('./../services/PedraService');

router.post('/salvar', stoneService.cadastrar);
router.get('/buscar_pedra/:pedra', stoneService.buscarStoneID);

module.exports = router;