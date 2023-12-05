const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const { postMonHoc, getMonhoc, deleteById, updateById } = require('../controllers/qlmonhocControllers')

router.get('/v1/ql_monhoc', getMonhoc)
router.post('/v1/ql_monhoc', postMonHoc)
router.delete('/v1/ql_monhoc/:id', deleteById)
router.put('/v1/ql_monhoc/:id', updateById)
// router.get('/:id', getMovieById)



module.exports = router