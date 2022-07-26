const mongoose = require('mongoose')
const SongSchema = require('./song')
const ProducerSchema = require('./producer')

const Song = mongoose.model('Song', SongSchema)
const Producer = mongoose.model('Producer', ProducerSchema)

module.exports = {
  Song,
  Producer
}
