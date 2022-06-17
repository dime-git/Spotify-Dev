const express = require('express')
const SpotifyController = require('../controllers/SpotifyController')

const router = express.Router()

router
    .get("/categories", (req, res, next) => new SpotifyController(req, res, next).getCategories())
    .get("/categories/:category_id/playlists", (req, res, next) => new SpotifyController(req, res, next).getPlaylistsByCategories())

module.exports = router;