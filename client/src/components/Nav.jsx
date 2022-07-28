import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <nav className="navbar">
      <h4>MWDBeats</h4>
      <div>
        <Link to="/">Home</Link>
        <Link to="/library">Library</Link>
        <Link to='/meet-the-team'>Meet the Team</Link>
      </div>
    </nav>
  )
}

export default Nav