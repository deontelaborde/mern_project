const { Schema } = require('mongoose')

const Song = new Schema(
  {
    title: { type: String, required: true },
    song_length: { type: String, required: true },
    genre: { type: String, required: true },
    producer: { type: String, required: true },
    produced_date: { type: String, required: true },
    producer_id: { type: Schema.Types.ObjectId, ref: 'producer_id' }
  },
  { timestamps: true }
)

module.exports = Song
