const express = require('express');
const router = express.Router();
const ratingService = require('../services/RatingService');

router.post('/addRating', ratingService.addRating);
router.post('/add_comentario', ratingService.inserirComentario);
router.get('/buscarRating/:id', ratingService.buscarRatingID);
router.get('/buscarRating_cliente/:id_cli/:id_prod', ratingService.buscarRating_cliente);
router.put('/deleteComentario/:id', ratingService.deleteComentario);

module.exports = router;