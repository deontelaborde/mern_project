import React, {useState} from 'react'

function AddSongForm() {

const initialState = {
  title: '',
    song_length: '',
    genre: '',
    producer: '',
    produced_date: '',
    

}

const [formState, setFormState] = useState(initialState)


const handleChange = event => {
  setFormState({...formState, [event.target.id]: event.target.value})
}
const handleSubmit = event => {
  event.preventDefault()
  console.log(formState)
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
    <select id="genre" onChange={handleChange} value={formState.genre}>
    <option value="rnb">R&B</option>
    <option value="hip-hop">Hip-Hop</option>
    <option value="rap">Rap</option>
    </select>

    <label htmlFor = 'producer'>Producer:</label>
    <select id="producer" onChange={handleChange} value={formState.producer}>
      <option value="Deonte LaBorde">Deonte LaBorde</option>
      <option value="Darien LaBorde">Darien LaBorde</option>
     <option value="Josiah Yankson">Josiah Yankson</option>
     <option value="Andrew Downer">Andrew Downer</option>
     <option value="Leon Lewis">Leon Lewis</option>
     
     </select>

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
