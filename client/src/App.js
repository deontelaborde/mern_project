import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Library from './components/Library'
import Team from './components/Team'
import SongDetails from './components/SongDetails'
import AddSongForm from './components/AddSongForm'
import UpdateSongForm from './components/UpdateSong'

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
          <Route path="new-song" element={<AddSongForm />} />
          <Route path="/song/:id/update" element={<UpdateSongForm />} />
        </Routes>
      </main>
      <footer className="App-footer">MWDENT © 2022</footer>
    </div>
  )
}

export default App
