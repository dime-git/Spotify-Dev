const express = require('express')
const SpotifyController = require('../controllers/SpotifyController')

const router = express.Router()

router
    .get("/categories", (req, res, next) => new SpotifyController(req, res, next).getCategories())
    .get("/categories/playlists", (req, res, next) => new SpotifyController(req, res, next).getPlaylists())

module.exports = router;