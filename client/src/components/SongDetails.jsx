import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

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
  <div className="list">
     {selectedSong.producer}
    </div>
)

}

export default SongDetails