import { useParams, useNavigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'



const SongDetails = () => {
let { id } = useParams()
const navigate = useNavigate()
const [selectedSong,setSelectedSong] = useState([])

async function getSongDetails() {
  const selectedSong = await axios.get(`http://localhost:3001/api/songs/${id}`)
  console.log(selectedSong.data.song)
  setSelectedSong(selectedSong.data.song)
}

useEffect(() => {
  getSongDetails()
},[])

const deleteSong = async (id) => {
  await axios.delete(`http://localhost:3001/api/songs/${id}`)

  navigate('/library')
};

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
          <h3>Song Length: {selectedSong.song_length}</h3>
        </div>
        <p>Genre: {selectedSong.genre}</p>
        <p>Produced: {selectedSong.produced_date}</p>
      </div>
      
      <Link to={`/song/${id}/update`}><button>Update Song</button></Link>

      

        <button type='button' onClick={() => deleteSong(selectedSong._id)}>Delete Song</button>
  
    </div>
)

}

export default SongDetails