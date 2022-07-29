import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Library from './components/Library'
import Team from './components/Team'
import SongDetails from './components/SongDetails'
import AddSongForm from './components/AddSongForm'
import DeleteSong from './components/DeleteSong'
import UpdateSong from './components/UpdateSong'

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
          <Route path="new" element={<AddSongForm />} />
          <Route path="/library/:id/update" element={DeleteSong} />
        </Routes>
      </main>
    </div>
  )
}

export default App
