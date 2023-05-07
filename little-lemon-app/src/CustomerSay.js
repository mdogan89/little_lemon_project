import React from 'react'
import Testimonial from './Testimonial'


const testimonials = [{
  avatar: () => require("./img/82.jpg"),
  name: "George",
  review: "“Delicious cocktails, great ambience...”"
},
{
  avatar: () => require("./img/71.jpg"),
  name: "Elaine",
  review: "“Lemon dessert is addictive...”"
},
{
  avatar: () => require("./img/76.jpg"),
  name: "Jerry",
  review: "“Thanks to Mario and Adrian for surprise birthday cake...”"
},
{
  avatar: () => require("./img/49.jpg"),
  name: "Eve",
  review: "“Most delicious food in the healthiest way...”"
}]

export default function CustomerSay() {
  return (
    <section id="testimonials">
      <h1>Testimonials</h1>
      <article id="reviews">
        {testimonials.map((testimonial) => (
          <Testimonial
            key={testimonial.name}
            avatar={testimonial.avatar()}
            name={testimonial.name}
            review={testimonial.review}
          />
        ))}
      </article>
    </section>
  )
}
