import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <ul>
      <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
      <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
      <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
    </ul>
  )
}

export default Header
