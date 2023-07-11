const express = require('express');
const router = express.Router();
const slideService = require('./../services/SlideService');

router.post('/addSlide', slideService.addSlide);
router.post('/organizarSlide', slideService.organizarSlide);
router.get('/buscarSlides', slideService.buscarSlides);
router.put('/editarPosicao/:posicoes', slideService.editarPosicao);
router.delete('/deletarSlide/:id',slideService.deleteSlide);

module.exports = router;