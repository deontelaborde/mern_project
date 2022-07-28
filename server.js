const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')

const app = express()
const { Song } = require('./models')

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.use('/api', routes)

app.get('/', (req, res) => {
  res.send('This is root!')
})

app.get('/songs', async (req, res) => {
  const songs = await Song.find({})
  res.json(songs)
})

app.get('/songs/:id', async (req, res) => {
  try {
    const { id } = req.params
    const song = await Song.findById(id)
    if (!song) throw Error('Song not found')
    res.json(song)
  } catch (e) {
    console.log(e)
    res.send('Song not found!')
  }
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
