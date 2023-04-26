import React, { Component } from 'react'
import img from "./img/restauranfood.jpg"

export default class Header extends Component {
  render() {
    return (
      <header>
        <article>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button>Reserve a table</button>
        </article>
        <img src={img} alt="bruchettas"></img>
      </header>
    )
  }
}
