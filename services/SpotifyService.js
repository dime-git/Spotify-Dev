const SpotifyInstance = require('../packages/SpotifyPackage')

class SpotifyService {
    async getCategories () {
        const categories = await SpotifyInstance.getCategories()
        return categories
    }
}

module.exports = SpotifyService