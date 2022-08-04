import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function UpdateSongForm () {

  const navigate = useNavigate ()
 
let { id } = useParams()


const initialState = {
  title: '' ,
    song_length:'' ,
    genre:'' ,
    producer:'' ,
    produced_date:'' ,
    

}


const [formState, setFormState] = useState(initialState)



const updateSong = async () => {
  
  const updatedSong = await axios.put(`http://localhost:3001/api/songs/${id}`,formState)
  console.log(updatedSong)

}


const handleChange = event => {
  setFormState({...formState, [event.target.id]: event.target.value})
}
const handleSubmit = async (event) => {
  event.preventDefault()
  console.log(formState)
  
  updateSong()
  navigate(`/library`)
}

return (
  <form onSubmit={handleSubmit}>
    <label 
    htmlFor = 'title'>Title:</label>
      <input placeholder='' 
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
    <button type='submit'>Make Changes</button>

  </form>
)
}

export default UpdateSongForm