import React from 'react'
import img from "./img/restauranfood.jpg"
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()

  return (
    <header>
      <section>
        <article>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button onClick={() => navigate("reservations")}>Reserve a table</button>
        </article>
        <img src={img} alt="bruchettas"></img>
      </section>
    </header>
  )
}