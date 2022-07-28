const Song = require('../models/song')

const createSong = async (req, res) => {
  try {
    const song = await new Song(req.body)
    await song.save()
    return res.status(201).json({
      song
    })
  } catch (error) {
    return res.stauts(500).json({ error: error.message })
  }
}

module.exports = { createSong }
