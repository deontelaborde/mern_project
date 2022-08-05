import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <nav className="navbar" >
      <h2>MWDBeats</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/library">Library</Link>
        <Link to='/meet-the-team'>Meet the Team</Link>
      </div>
    </nav>
  )
}

export default Nav