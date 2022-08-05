import { useNavigate } from "react-router-dom"
import { useState, useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Library = () => {
  let navigate = useNavigate ()
  const showSong = (song) => {
    navigate(`${song._id}`)
  }
  const [songlist, setSonglist] = useState([])
  
  async function getSonglist() {
    const songlist = await axios.get(`http://localhost:3001/api/songs`)
    setSonglist(songlist.data.songs)
  }
  useEffect(() => {
    getSonglist()
  }, [])
  

  return (
    <div className="list">
      {songlist.map((song) => (
        <div className="song-card" onClick={() => showSong(song)} key={song._id}>
          
          <h3>{song.title}</h3>
          <p>Produced By: {song.producer}</p>
         
        </div>
      ))}
      <Link to='/new-song'>Add Song</Link>
    </div>
    
  )
}

export default Library