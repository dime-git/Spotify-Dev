const clientId = '5d2892d8a37d41b480ce309b36cdcdaf'
const clientSecret = '0e7e5eba045746fc80754f7d91fd23f9'
const { stringify } = require('querystring')

const axios = require('axios')
const { resourceLimits } = require('worker_threads')

class SpotifyPackage {
    constructor(clientId, clientSecret) {
        this.clientId = clientId
        this.clientSecret = clientSecret
        this.authBaseUrl = 'https://accounts.spotify.com'
        this.baseUrl = 'https://api.spotify.com/v1'
        this.getAccessToken().then(accessToken => {
            console.log(accessToken)
            this.axiosInstance = axios.create({
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
        })
    }

    async getAccessToken() {
        const { data: { access_token } } = await axios.post(`${this.authBaseUrl}/api/token`, stringify({ grant_type: "client_credentials" }), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic NWQyODkyZDhhMzdkNDFiNDgwY2UzMDliMzZjZGNkYWY6MGU3ZTVlYmEwNDU3NDZmYzgwNzU0ZjdkOTFmZDIzZjk="
            }
        })

        return access_token
    }

    async getCategories() {
        try {
            const { data: { categories } } = await this.axiosInstance.get(`${this.baseUrl}/browse/categories`)

            return categories

        } catch (err) {
            console.log(err)
        }
    }


    async getPlaylistsByCategories(category_id) {
        try {

            const { data: { playlists } } = await this.axiosInstance.get(`${this.baseUrl}/browse/categories/${category_id}/playlists`, {
                headers: {
                    "Content-Type": "application/json",
                }
            })

            return playlists

        } catch (error) { 
            console.log(error)
        }
    }
}

module.exports = new SpotifyPackage(clientId, clientSecret)