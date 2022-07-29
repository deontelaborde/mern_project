import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Library from './components/Library'
import Team from './components/Team'
import SongDetails from './components/SongDetails'

function App() {
  return (
    <div className="App">
      <header className="App-header">{<Nav />}</header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/meet-the-team" element={<Team />} />
          <Route path="/library/:id" element={<SongDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
