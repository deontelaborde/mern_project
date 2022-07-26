const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')

const app = express()
const { Song } = require('./models')

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('This is root!')
})
// server.js
app.get('/songs', async (req, res) => {
  const songs = await Song.find({})
  res.json(songs)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
