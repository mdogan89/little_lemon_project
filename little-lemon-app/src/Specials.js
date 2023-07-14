import React from 'react'
import Card from './Card'
import svg from "./img/bruchetta.svg"

const specials = [
  {
    title: "Greek Salad",
    price: "$ 12.99",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    getImageSrc: () => require("./img/greek salad.jpg")
  },
  {
    title: "Bruchetta",
    price: "$ 5.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    getImageSrc: () => svg
  },
  {
    title: "Lemon Dessert",
    price: "$ 5.00",
    description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    getImageSrc: () => require("./img/lemon dessert.jpg")
  }
]

export default function Specials() {
  return (
    <section id='specials'>
      <article>
        <h1>This weeks specials!</h1>
        <button id="menu-button">Online Menu</button>
      </article>
      <article id="cards">
        {specials.map((special) => (
          <Card
            key={special.title}
            title={special.title}
            price={special.price}
            description={special.description}
            imageSrc={special.getImageSrc()}
          />
        ))}
      </article>
    </section>
  )
}
