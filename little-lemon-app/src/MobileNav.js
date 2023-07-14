import React from 'react'

export default function MobileNav() {
    return (
        <nav id="mobile-nav">
            <div id="mobile-navbar">
                <img src={hamburger} alt='hamburger menu' className='hamburger collapsible' onClick={show}></img>
                <img src={logo} alt="logo"></img>
                <img src={home} alt="home"></img>
            </div>
            <ul className='content'>
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
