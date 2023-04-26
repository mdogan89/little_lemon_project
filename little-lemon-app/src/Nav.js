import React from 'react'
import logo from './img/Logo.svg';

export default function Nav() {
  return (
    <nav>
        <img src={logo} alt="logo"></img>
        <ul>
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
