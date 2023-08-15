const express = require('express')
const { fetchUser, publishUser, deleteUser, updateUser, loginFunc} = require('../controllers/userController')
const router = express.Router()

router.get('/fetchUser', fetchUser)
router.post('/publishUser', publishUser)
router.delete('/deleteUser', deleteUser)
router.patch('/updateUser', updateUser)
router.post('/loginFunc', loginFunc)

module.exports = router