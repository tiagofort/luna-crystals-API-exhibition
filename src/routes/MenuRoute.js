const express = require('express');
const router = express.Router();
const menuService = require('../services/MenuService');

router.post('/salvar', menuService.cadastrar);
router.get('/menus', menuService.getMenu);

module.exports = router;