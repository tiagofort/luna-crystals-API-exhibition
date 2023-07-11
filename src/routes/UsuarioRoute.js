const express = require('express');
const router = express.Router();
const usuarioService = require('../services/UsuarioService')
const token = require('./../token/token')

router.post('/salvar', usuarioService.cadastrarUsuario);
router.post('/salvar_cliente', usuarioService.cadastrarCliente);
router.post('/esqueceu_senha', usuarioService.esqueceuSenha);
router.post('/redefinir_senha', token.verificarTokenEmail, usuarioService.alterarSenha);
router.get('/verificar_email/:email', usuarioService.verificarEmail);
router.get('/buscarUsuarios', token.verificarToken, usuarioService.buscarUsuarios);
router.get('/buscarClientes', usuarioService.buscarClientes);
router.get('/buscarMovimentacao', usuarioService.movimentacaoCliente);
router.get('/buscarTodos', usuarioService.buscarTodos);
router.put('/editarSenha/:id', usuarioService.editarUsuario);
router.put('/alterarTipo/:id', usuarioService.inativarUsuario);
router.put('/confimar_email', usuarioService.confirmarEmail);

module.exports = router;