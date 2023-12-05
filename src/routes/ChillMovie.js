const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const { getAllMovie, getMovieById } = require('../controllers/movieControllers')

router.get('/getallmovie', getAllMovie)

// router.get('/:id', getMovieById)



module.exports = router