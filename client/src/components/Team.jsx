import { useNavigate } from "react-router-dom"
import { useState, useEffect} from 'react'
import axios from "axios"

const Team = () => {
  let navigate = useNavigate ()
  const showProducer = (producer) => {
    navigate(`${producer._id}`)
  }
  const [producerlist, setProducerlist] = useState([])

  useEffect(() => {
    async function getProducerlist() {
      const producerlist = await axios.get(`http://localhost:3001/api/producers`)
      
      setProducerlist(producerlist.data.producers)
    }
    getProducerlist()
  }, [])

  return (
    <div className="list">
      <h2>Meet the Team</h2>
      {producerlist.map((producer) => (
        <div className="producer-card" onClick={() => showProducer(producer)} key={producer._id}>
          
          
          <h3>{producer.name}</h3>
          <p>{producer.location}</p>

          <a href={producer.url}>
          <button>Instagram</button>
          </a>
        </div>
      ))}
    </div>
    
  )
}

export default Team