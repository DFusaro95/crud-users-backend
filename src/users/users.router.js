const router = require('express').Router()

const userServices = require('./users.services')

router.get('/users', userServices.getAllUsers)
router.post('/users', userServices.createNewUser)

router.get('/users/:id', userServices.getUserByID)

module.exports = router