const express = require('express');
const router = express.Router();
const pedidoService = require('./../services/PedidoService');

router.post('/addPedido', pedidoService.addMensagem);
router.get('/buscar_todos', pedidoService.buscarTodos);
router.get('/buscarPedidos/:destinatario', pedidoService.buscarPedidos);
router.get('/buscarEnviados/:remetente', pedidoService.buscarEnviados);
router.get('/buscarRespostas', pedidoService.buscarRespostas);
router.put('/status/:id/:status', pedidoService.statusLida);
router.delete('/delete', pedidoService.deletePedidos);

module.exports = router;