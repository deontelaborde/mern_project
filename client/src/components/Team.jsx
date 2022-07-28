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
      console.log(producerlist.data.producers)
      setProducerlist(producerlist.data.producers)
    }
    getProducerlist()
  }, [])

  return (
    <div className="list">
      {producerlist.map((producer) => (
        <div className="producer-card" onClick={() => showProducer(producer)} key={producer._id}>
          
          <h3>{producer.name}</h3>
        </div>
      ))}
    </div>
    
  )
}

export default Team