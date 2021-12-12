const express = require('express')
const router = express.Router()

const { index, admin, services } = require('../controllers/mainController')
const auth = require('../middlewares/auth')

router.get('/', index);
router.get('/services', services);
router.get('/admin', auth, admin)

module.exports = router