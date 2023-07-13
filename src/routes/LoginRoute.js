const express = require('express');
var cors = require('cors')
const router = express.Router();
const loginService = require('./../services/LoginService')

router.post('/auth', cors() ,loginService.autenticar);
router.post('/auth_cliente', cors(), loginService.autenticarCliente);
router.post('/logout', cors(),  loginService.logout);
router.get('/user', cors(), loginService.getUser);
router.get('/customer', cors(),  loginService.getCustomer);

module.exports = router;