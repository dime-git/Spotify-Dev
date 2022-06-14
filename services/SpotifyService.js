const SpotifyInstance = require('../packages/SpotifyPackage')

class SpotifyService {
    async getCategories() {
        const categories = await SpotifyInstance.getCategories()
        return categories
    }

    async getPlaylistsByCategories() {
        const playlists = await SpotifyInstance.getPlaylistsByCategories()
        return playlists
    }
}

module.exports = SpotifyService