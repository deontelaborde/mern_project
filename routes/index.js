const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/uploadsong', controllers.createSong)

router.get('/songs', controllers.getAllSongs)

router.get('/songs/:id', controllers.getSongById)

module.exports = router
