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
module.exports = { createSong, getAllSongs }
