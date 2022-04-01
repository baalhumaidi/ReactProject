import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <h5><Link to="/">"Home</Link> </h5>
      <h5><Link to="/About">"About</Link> </h5>
      <h5><Link to="/Contact">"Contact</Link> </h5>
    </div>
  )
}
