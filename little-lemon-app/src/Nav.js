import React from 'react'
import logo from './Logo.svg';

export default function Nav() {
  return (
    <nav style={{"display":"flex"}}>
        <img src={logo}></img>
        <ul style={{"display":"flex"}}>
            <li> <a href='#'>Home</a> </li>
            <li> <a href='#'>About</a> </li>
            <li> <a href='#'>Menu</a> </li>
            <li> <a href='#'>Reservations</a> </li>
            <li> <a href='#'>Order Online</a> </li>
            <li> <a href='#'>Login</a> </li>
        </ul>
    </nav>
  )
}
