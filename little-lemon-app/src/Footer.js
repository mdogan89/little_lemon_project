import React from 'react'
import logo from "./img/Asset 18@4x.png"
import { Link } from 'react-router-dom'

const links = [
  {
    section: "Home",
    href: "/"
  },
  {
    section: "About",
    href: "/"
  },
  {
    section: "Menu",
    href: "/"
  },
  {
    section: "Reservations",
    href: "/reservations"
  },
  {
    section: "Order Online",
    href: "/"
  },
  {
    section: "Login",
    href: "/"
  }
]

export default function Footer() {
  return (
    <footer>
      <section>
        <article className='logo'>
          <img src={logo} alt='logo'></img>
        </article>
        <article>
          <h5>Doormat Navigation</h5>
          <ul>
            {links.map(({ section, href }) => (
              <li key={section}><Link
                to={href}>
                {section}
              </Link></li>
            ))}
          </ul>
        </article>
        <article>
          <h5>Contact</h5>
          <p>750 S Clinton St, Chicago, IL 6060</p>
          <p>+18727665500</p>
          <p>info@littlelemon.com</p>
        </article>
        <article>
          <h5>Social Media</h5>
          <ul>
            <li> <a href='/'>Facebook</a> </li>
            <li> <a href='/'>Instagram</a> </li>
            <li> <a href='/'>Twitter</a> </li>
          </ul>
        </article>
      </section>
    </footer>
  )
}
