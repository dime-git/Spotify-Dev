const BaseController = require('./BaseController')
const SpotifyService = require('../services/SpotifyService')

class SpotifyController extends BaseController {
    constructor(req, res, next, spotifyService) {
        super(req, res, next)
        this.spotifyService = spotifyService || new SpotifyService()
    }

    async test() {
        try {
            const { test } = this._req.body

            const categories = await this.spotifyService.getCategories()

            this.dto({categories})
        } catch (err) {
            this._next(err)
        }
    }
}

module.exports = SpotifyController