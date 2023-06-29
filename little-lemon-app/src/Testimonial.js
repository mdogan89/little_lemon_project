import React from 'react'
import star from "./img/star-solid.svg"

export default function Testimonial({ avatar, name, review }) {
  return (
    <div className='testimonial'>
      <img src={star} alt='star' className='star'></img><img src={star} alt='star' className='star'></img><img src={star} alt='star' className='star'></img><img src={star} alt='star' className='star'></img><img src={star} alt='star' className='star'></img>
      <div>
        <img src={avatar} alt='avatar'></img>
        <h4>{name}</h4>
      </div>
      <p>{review}</p>
    </div>
  )
}
