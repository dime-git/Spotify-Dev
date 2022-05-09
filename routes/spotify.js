const express = require('express')
const SpotifyController = require('../controllers/SpotifyController')

const router = express.Router()

router.post("/test", (req, res, next) => new SpotifyController(req, res, next).test())

module.exports = router