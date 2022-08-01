import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddSongForm() {

  const navigate = useNavigate()

const initialState = {
  title: '',
    song_length: '',
    genre: '',
    producer: '',
    produced_date: '',
    

}

const [formState, setFormState] = useState(initialState)



const addSong = async () => {
    const addedSong = await axios.post(`http://localhost:3001/api/songs`,formState)
    console.log(addedSong)
    
}


const handleChange = event => {
  setFormState({...formState, [event.target.id]: event.target.value})
}
const handleSubmit = async (event) => {
  event.preventDefault()
  console.log(formState)
  
  addSong()
  navigate('/library')

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
