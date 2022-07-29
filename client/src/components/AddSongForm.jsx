import React, {useState} from 'react'
import axios from 'axios'

function AddSongForm() {

const initialState = {
  title: '',
    song_length: '',
    genre: '',
    producer: '',
    produced_date: '',
    

}

const [formState, setFormState] = useState(initialState)
const [addedSong, setAddedSong] = useState()


const addSong = async () => {
    const addedSong = await axios.post(`http://localhost:3001/api/songs`,formState)
    console.log(addedSong)
    setAddedSong(addedSong)
}


const handleChange = event => {
  setFormState({...formState, [event.target.id]: event.target.value})
}
const handleSubmit = async (event) => {
  event.preventDefault()
  console.log(formState)
  
  addSong()

  setFormState(initialState)

}

return (
  <form onSubmit={handleSubmit}>
    <label htmlFor = 'title'>Title:</label>
      <input
    type="text"
    id="title"
    onChange={handleChange}
    value={formState.title}
    />
    
    <label htmlFor = 'song_length'>Song Length:</label>
    <input
    type="text"
    id="song_length"
    onChange={handleChange}
    value={formState.song_length}
    />

  <label htmlFor = 'genre'>Genre:</label>
    <input
    type="text"
    id="genre"
    onChange={handleChange}
    value={formState.genre}
    />

    <label htmlFor = 'producer'>Producer:</label>
    <input
    type="text"
    id="producer"
    onChange={handleChange}
    value={formState.producer}
    />
  
     <label htmlFor = 'produced_date'>Produced Date:</label>
    <input
    type="text"
    id="produced_date"
    onChange={handleChange}
    value={formState.produced_date}
    />
    <button type='submit'>Upload</button>

  </form>
)
}

export default AddSongForm
