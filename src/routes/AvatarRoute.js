const express = require('express');
const router = express.Router();
const avatarRouter = require('./../services/AvatarService')

router.post('/salvar', avatarRouter.uploadImagem);

module.exports = router;