const db = require('../db')
const { Producer, Song } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const deonteLaBorde = await Producer.find({ name: 'Deonte LaBorde' })
  const darienLaBorde = await Producer.find({ name: 'Darien LaBorde' })
  const josiahYankson = await Producer.find({ name: 'Josiah Yankson' })
  const andrewDowner = await Producer.find({ name: 'Andrew Downer' })
  const leonLewis = await Producer.find({ name: 'Leon Lewis' })

  const songs = [
    {
      title: 'Next to You',
      song_length: '3:04',
      genre: 'R&B',
      producer: 'Deonte LaBorde',
      produced_date: '2021',
      producer_id: deonteLaBorde[0]._id
    },
    {
      title: 'Everytime',
      song_length: '2:05',
      genre: ('R&B', 'Hip-Hop'),
      producer: ('Deonte LaBorde', 'Darien LaBorde', 'Leon Lewis'),
      produced_date: '2021',
      producer_id: deonteLaBorde[0]._id
    },
    {
      title: 'Shining',
      song_length: '1:50',
      genre: 'Hip-Hop',
      producer: 'Darien LaBorde',
      produced_date: '2021',
      producer_id: darienLaBorde[0]._id
    },
    {
      title: 'Rocking With Ya',
      song_length: '2:17',
      genre: 'R&B',
      producer: 'Josiah Yankson',
      produced_date: '2022',
      producer_id: josiahYankson[0]._id
    },
    {
      title: 'Fall in Line',
      song_length: '2:45',
      genre: 'Hip-Hop',
      producer: 'Darien LaBorde',
      produced_date: '2021',
      producer_id: darienLaBorde[0]._id
    },
    {
      title: 'Two Sides',
      song_length: '3:12',
      genre: 'Hip-Hop',
      producer: 'Leon Lewis',
      produced_date: '2021',
      producer_id: leonLewis[0]._id
    },
    {
      title: 'All I Want is You',
      song_length: '3:50',
      genre: 'R&B',
      producer: 'Josiah Yankson',
      produced_date: '2017',
      producer_id: josiahYankson[0]._id
    },
    {
      title: 'Mexico',
      song_length: '2:20',
      genre: 'R&B',
      producer: ('Andrew Downer', 'Darien LaBorde'),
      produced_date: '2021',
      producer_id: andrewDowner[0]._id
    },
    {
      title: 'Love Me Again',
      song_length: '2:38',
      genre: 'R&B',
      producer: ('Deonte LaBorde', 'Andrew Donwer', 'Leon Lewis'),
      produced_date: '2021',
      producer_id: deonteLaBorde[0]._id
    },
    {
      title: 'Clouds',
      song_length: '2:36',
      genre: 'Hip-Hop',
      producer: 'Darien LaBorde',
      produced_date: '2021',
      producer_id: darienLaBorde[0]._id
    }
  ]

  await Song.insertMany(songs)
  console.log('Created songs with publishers!')
}
const run = async () => {
  await main()
  db.close()
}

run()
