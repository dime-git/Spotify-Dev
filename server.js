const express = require('express')
const app = express()
const SpotifyRouter = require('./routes/spotify')

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/spotify', SpotifyRouter)

app.listen(6000)