import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const SongDetails = () => {
let { id } = useParams()

const [selectedSong,setSelectedSong] = useState([])

useEffect(() => {
  

  async function getSongDetails() {
    const selectedSong = await axios.get(`http://localhost:3001/api/songs/${id}`)
    console.log(selectedSong.data.song)
    setSelectedSong(selectedSong.data.song)
    
  }
  getSongDetails()
}, [])

return (
  <div className="detail">
      <div className="detail-header">
        
        <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1>{selectedSong.title}</h1>
        </div> 
      </div>
      <div className="info-wrapper">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h3>Prod. by: {selectedSong.producer}</h3>
          <h3> {selectedSong.song_length}</h3>
        </div>
        <p>Genre: {selectedSong.genre}</p>
        <p>Produced: {selectedSong.produced_date}</p>
      </div>
      <Link to='/song/:id'>Update Song</Link>
    
    </div>
)

}

export default SongDetails