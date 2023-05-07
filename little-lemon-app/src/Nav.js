import React from 'react'
import logo from './img/Logo.svg';
import { Link } from 'react-router-dom';

const links = [
  {
    section: "Home",
    href: "/"
  },
  {
    section: "About",
    href: "#about"
  },
  {
    section: "Menu",
    href: "#"
  },
  {
    section: "Reservations",
    href: "/reservations"
  },
  {
    section: "Order Online",
    href: "#"
  },
  {
    section: "Login",
    href: "#"
  }
]

export default function Nav() {
  return (
    <nav>
      <img src={logo} alt="logo"></img>
      <ul>
        {links.map(({ section, href }) => (
          <li> <Link
            to={href}
            key={href}
            className='nav-link'>
            {section}
          </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
