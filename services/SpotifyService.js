const SpotifyInstance = require('../packages/SpotifyPackage');

class SpotifyService {
    async getCategories() {
        return await SpotifyInstance.getCategories()
        
    }

    async getPlaylistsByCategories(category_id) {
        return await SpotifyInstance.getPlaylistsByCategories(category_id)
    }
}
module.exports = SpotifyService