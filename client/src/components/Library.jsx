import { useNavigate } from "react-router-dom"
import { useState, useEffect} from 'react'
import axios from "axios"

const Library = () => {
  let navigate = useNavigate ()
  const showSong = (song) => {
    navigate(`${song.id}`)
  }
  const [songlist, setSonglist] = useState([])

  useEffect(() => {
    async function getSonglist() {
      const songlist = await axios.get(`http://localhost:3001/api/songs`)
      console.log(songlist.data.songs)
      setSonglist(songlist.data.songs)
    }
    getSonglist()
  }, [])

  return (
    <div className="list">
      {songlist.map((song) => (
        <div className="song-card" onClick={() => showSong(song)} key={song.id}>
          
          <h3>{song.title}</h3>
        </div>
      ))}
    </div>
    
  )
}

export default Library