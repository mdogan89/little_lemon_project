import React from 'react'
import img from "./img/restauranfood.jpg"

export default function Header() {
  return (
    <header>
      <section>
        <article>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button>Reserve a table</button>
        </article>
        <img src={img} alt="bruchettas"></img>
      </section>
    </header>
  )
}