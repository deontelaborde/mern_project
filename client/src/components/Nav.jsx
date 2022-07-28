import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <nav className="navbar">
      <h4>MWDBeats</h4>
      <div>
        <Link to="/">Home</Link>
      </div>
    </nav>
  )
}

export default Nav