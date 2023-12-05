const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const { loginUser, registerUser, getDetailUser, generateUser, getAllUserController, getUserId, updateUserId } = require('../controllers/userControllers')

// router.get('/:id', getUserName)

router.post('/login',
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    loginUser)

router.post('/register',
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    registerUser)

router.get('/detailuser', getDetailUser)

router.get('/fakeuser', generateUser)

router.get('/getAllUserController', getAllUserController)

router.get('/getUserId/:id', getUserId)

router.put('/updateUserId', updateUserId)

module.exports = router