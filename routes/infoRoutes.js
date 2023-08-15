const express = require('express')
const { fetchInfo, publishInfo} = require('../controllers/infoController')
const router = express.Router()

router.post('/fetchInfo', fetchInfo)
router.patch('/publishInfo', publishInfo)
// router.patch('/updateInfo', updateInfo)

module.exports = router