import React from 'react'
import logo from "./img/Asset 18@4x.png"

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

export default function Footer() {
  return (
    <footer>
      <section>
        <article className='logo'>
          <img src={logo}></img>
        </article>
        <article>
          <h5>Doormat Navigation</h5>
          <ul>
            {links.map(({ section, href }) => (
              <li><a
                key={href}
                href={href}>
                {section}
              </a></li>
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
            <li> <a href='#'>Facebook</a> </li>
            <li> <a href='#'>Instagram</a> </li>
            <li> <a href='#'>Twitter</a> </li>
          </ul>
        </article>
      </section>
    </footer>
  )
}
