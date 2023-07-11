const express = require('express');
const router = express.Router();
const itemService = require('./../services/ItemService');

router.post('/salvar', itemService.salvar);
router.get('/bucarItens', itemService.buscarItens);
router.get('/buscarNovidades', itemService.buscarNovidades);
router.get('/buscarId/:id', itemService.buscarPorID);
router.get('/buscar_sugestoes/:id', itemService.buscarSugestoes);
router.get('/buscarPorParamentro/:filtro', itemService.buscarPorParametro);
router.put('/editar/:id', itemService.editarID);
router.put('/gerir_sugestoes/:id', itemService.gerirSugestao);
router.delete('/apagar/:id', itemService.deletarID);

module.exports = router;