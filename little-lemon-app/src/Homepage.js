import React from 'react'
import Header from './Header'
import Specials from './Specials'
import CustomerSay from './CustomerSay'
import About from './About'

export default function Homepage() {
  return (
    <main>
      <Header />
      <Specials />
      <CustomerSay />
      <About />
    </main>
  )
}
