import { React, useState } from 'react'
import { json } from 'react-router-dom';

// const initialDate = new Date().toISOString().substring(0, 10);

export default function Reservations(props) {

  const [formData, setFormData] = useState({
    date: new Date().toISOString().substring(0, 10),
    time: "",
    guests: 1,
    occasion: "Birthday"
  })

  const minDate = new Date().toISOString().substring(0, 10);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(formData);
    setFormData(() => {
      const data = {
        ...formData,
        date: new Date().toISOString().substring(0, 10),
        time: "",
        guests: 1,
        occasion: "Birthday"
      }
      return data
    })
  }



  function handleDateChange(e) {
    setFormData(() => {
      const data = { ...formData, date: e.target.value }
      return data
    });
    props.dispatch(e.target.value);
    // console.log(props.availableTimes);
  }

  const handleTimeChange = (e) => {
    setFormData(() => {
      const data = { ...formData, time: e.target.value }
      return data
    })
  }

  const handleGuestChange = (e) => {
    setFormData(() => {
      const data = { ...formData, guests: e.target.value }
      return data
    })
  }

  const handleOccasionChange = (e) => {
    setFormData(() => {
      const data = { ...formData, occasion: e.target.value }
      return data
    })
  }

  return (
    <main>
      <section>
        <form id="res-form" onSubmit={handleSubmit}>
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" value={formData.date} min={minDate} onChange={handleDateChange} />
          <label htmlFor="res-time">Choose time</label>
          <select data-testid="select" id="res-time" value={formData.time} onChange={handleTimeChange} required={true} >
            {props.availableTimes.map((time) => (
              <option data-testid="select-option" key={time}>{time}</option>
            ))}
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests"
            value={formData.guests} onChange={handleGuestChange} />
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" value={formData.occasion} onChange={handleOccasionChange}>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <input type="submit" value="Make your reservation" />
        </form>
      </section>
    </main>
  )
}
