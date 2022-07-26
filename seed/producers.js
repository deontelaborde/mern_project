const db = require('../db')
const { Producer } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const producers = [
    {
      name: 'Josiah Yankson',
      location: 'Hempstead, NY',
      url: 'https://www.instagram.com/jodagoon/'
    },
    {
      name: 'Andrew Downer',
      location: 'Atlanta, GA',
      url: 'https://www.instagram.com/__pyromaniacs__/'
    },
    {
      name: 'Darien LaBorde',
      location: 'Mt. Vernon, NY',
      url: 'https://www.instagram.com/drefitz_nyc/'
    },
    {
      name: 'Deonte LaBorde',
      location: 'Mt. Vernon, NY',
      url: 'https://www.instagram.com/dnote_lamar/'
    },
    {
      name: 'Leon Lewis',
      location: 'Huntsville, AL',
      url: 'https://www.instagram.com/music_is_leon/'
    }
  ]

  await Producer.insertMany(producers)
  console.log('Created producers!')
}
const run = async () => {
  await main()
  db.close()
}

run()
