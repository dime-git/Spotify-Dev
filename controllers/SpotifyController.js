const BaseController = require('./BaseController')
const SpotifyService = require('../services/SpotifyService')

class SpotifyController extends BaseController {
    constructor(req, res, next, spotifyService) {
        super(req, res, next)
        this.spotifyService = spotifyService || new SpotifyService()
    }

    async getCategories() {
        try {
            const { getCategories } = this._req.body

            const categories = await this.spotifyService.getCategories()

            this.dto({ categories })
        } catch (err) {
            this._next(err)
        }
    }

    async getPlaylistsByCategories() {
        try {

            const { getPlaylistsByCategories } = this._req.params.id
            console.log()

            const playlists = await this.spotifyService.getPlaylistsByCategories()

            this.dto({ playlists })
        } catch (error) {
            this._next(error)
        }
    }
}

module.exports = SpotifyController