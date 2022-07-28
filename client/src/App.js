import './App.css'
import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
// import Library from './components/Library'
import axios from 'axios'

function App() {
  useEffect(() => {
    async function getSonglist() {
      const res = await axios.get(`http://localhost:3001/api/songs`)
      console.log(res)
    }
    getSonglist()
  }, [])

  return (
    <div className="App">
      <header className="App-header">{<Nav />}</header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Library" element={<Library />} /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App
