import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function UpdateSongForm () {

const navigate = useNavigate ()

let { id } = useParams()

let initialState = {
  title: '' ,
    song_length:'' ,
    genre:'' ,
    producer:'' ,
    produced_date:''
}

const [formState, setFormState] = useState(initialState)

const getSongDetails = async () => {
  const selectedSong = await axios.get(`http://localhost:3001/api/songs/${id}`)
  setFormState(selectedSong.data.song)
}

useEffect(() => {
  getSongDetails()
  },[])

const updateSong = async () => {
  
await axios.put(`http://localhost:3001/api/songs/${id}`,formState)

  navigate(`/library`)
}

const handleChange = event => {
  setFormState({...formState, [event.target.id]: event.target.value})
}
const handleSubmit = async (event) => {
  event.preventDefault()
  
  updateSong()

  setFormState(initialState)
}

return (

<div>
  <h2>Update Song</h2>

  <form onSubmit={handleSubmit}>
    <label 
    htmlFor = 'title'>Title: </label>
      <input 
    value={formState.title}
    type="text"
    id="title"
    onChange={handleChange}
    required
    />
    
    <label htmlFor = 'song_length'>Song Length: </label>
    <input
    value={formState.song_length}
    type="text"
    id="song_length"
    onChange={handleChange}
    required
    />

  <label htmlFor = 'genre'>Genre: </label>
    <input
    value={formState.genre}
    type="text"
    id="genre"
    onChange={handleChange}
    required
    />

    <label htmlFor = 'producer'>Producer: </label>
    <input
    value={formState.producer}
    type="text"
    id="producer"
    onChange={handleChange}
    required
    />
  
     <label htmlFor = 'produced_date'>Produced Date: </label>
    <input
    value={formState.produced_date}
    type="text"
    id="produced_date"
    onChange={handleChange}
    required
    />
    <button type='submit'>Make Changes</button>

      </form>
    </div>
  
)
}

export default UpdateSongForm