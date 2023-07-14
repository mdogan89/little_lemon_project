import React from 'react'
import mario from "./img/restaurant chef B.jpg"
import marioAdrian from "./img/Mario and Adrian b.jpg"

export default function About() {
  return (
    <section id="about">
      <article id="about-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Little Lemon is a charming neighbourhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
      </article>
      <article id="about-images">
        <img src={mario} id="mario" alt='Chef Mario'></img>
        <img src={marioAdrian} id='marioAdrian' alt='Mario and Adrian chefs'></img>
      </article>
    </section>
  )
}
