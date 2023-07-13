const express = require('express');
const router = express.Router();
const loginService = require('./../services/LoginService')

router.post('/auth',loginService.autenticar);
router.post('/auth_cliente', loginService.autenticarCliente);
router.post('/logout', loginService.logout);
router.get('/user', loginService.getUser);
router.get('/customer', loginService.getCustomer);

module.exports = router;