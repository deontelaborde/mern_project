import './App.css'
import React from 'react'
// import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <header className="App-header">{<Nav />}</header>
      <main>
        <h1>Hi</h1>
        {<Home />}

        {/* <Routes>
        
        </Routes> */}
      </main>
    </div>
  )
}

export default App
