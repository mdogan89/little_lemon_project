import React from 'react'
import logo from './img/Logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import hamburger from "./img/hamburger.svg"
import basket from "./img/basket .svg"

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

export default function Nav() {

  function showNav(e) {
    // e.target.classList.toggle("active");
    // this.lastElementChild.classList.toggle("active_svg");

    var content = document.getElementById("nav-menu");
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };

  const navigate = useNavigate()
  return (
    <>
      <nav id="mobile-nav">
        <div id="mobile-navbar" aria-label='mobile navbar'>
          <img src={hamburger} alt='hamburger menu' className='hamburger' onClick={showNav}></img>
          <img src={logo} alt="logo" onClick={() => navigate("/")}></img>
          <img src={basket} alt="basket"></img>
        </div>
        <menu aria-label='navigation links'>
          <ul id="nav-menu" onClick={showNav}>
            {links.map(({ section, href }) => (
              <li key={section}>
                <Link
                  to={href}
                  className='nav-link'>
                  {section}
                </Link>
              </li>
            ))}
          </ul>
        </menu>
      </nav>
      <nav id="desktop-nav">
        <img src={logo} alt="logo" onClick={() => navigate("/")}></img>
        <ul>
          {links.map(({ section, href }) => (
            <li key={section}>
              <Link
                to={href}
                className='nav-link'>
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
