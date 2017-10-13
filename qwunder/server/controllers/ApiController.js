// const {Song} = require('../models')

module.exports = {
  show (req, res) {
    try {
      const song = ['a', 'c', '1'] // await Song.findById(req.params.songId)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the songs'
      })
    }
  }
}
