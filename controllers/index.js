const { Song } = require('../models')

const createSong = async (req, res) => {
  try {
    const song = await new Song(req.body)
    await song.save()
    return res.status(201).json({
      song
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find({})
    return res.status(200).json({ songs })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getSongById = async (req, res) => {
  try {
    const { id } = req.params
    const song = await Song.findById(id)
    if (song) {
      return res.status(200).json({ song })
    }
    return res.status(404).send('Song with stated ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = { createSong, getAllSongs, getSongById }