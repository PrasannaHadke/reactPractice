const express = require('express')
const {register , allUsers , getUserById ,updateUser ,deleteUser} = require('../controller/userdata')

const router = express.Router()

router.post('/register', register)
router.get('/allUsers', allUsers)
router.get('/user/:id', getUserById )
router.put('/updateuser/:id', updateUser )
router.delete('/deleteuser/:id',deleteUser)
module.exports = router;    