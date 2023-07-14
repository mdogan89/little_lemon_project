import { React, useState } from 'react';
// import glassss from "./img/glass.svg"


export default function Reservations(props) {

  const minDate = new Date().toISOString().substring(0, 10);

  const [formData, setFormData] = useState({
    date: minDate,
    time: props.availableTimes[0],
    guests: 1,
    occasion: "Occasion"
  })

  const handleFormChange = (e) => {

    let elm = document.getElementById("submit");

    if (e.target.validity.valid) {
      elm.style.backgroundColor = "#f4ce14";
      elm.style.color = "#333333";
    }
    else {
      elm.style.backgroundColor = "#495e57";
      elm.style.color = "#edefee";
    }

    if (e.target.name === "date") {
      if (e.target.validity.valid) {
        setFormData((formdata) => {
          return { ...formdata, date: e.target.value }
        });
        props.dispatch(e.target.value);
      }
      else {
        e.target.reportValidity();
        setFormData((formdata) => {
          return { ...formdata, date: e.target.value }
        })
      }
    }
    else if (e.target.name === "time") {
      setFormData((formdata) => {
        return { ...formdata, time: e.target.value }
      })
    }
    else if (e.target.name === "guests") {
      if (e.target.validity.valid) {
        setFormData((formdata) => {
          return { ...formdata, guests: e.target.value }
        })
      }
      else {
        e.target.reportValidity();
        setFormData((formdata) => {
          return { ...formdata, guests: e.target.value }
        })
      }
    }
    else if (e.target.name === "occasion") {
      setFormData((formdata) => {
        return { ...formdata, occasion: e.target.value }
      })
    }
    else console.log(e)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(formData);
    setFormData((...formdata) => {
      const data = {
        ...formdata,
        date: minDate,
        time: props.availableTimes[0],
        guests: 1,
        occasion: "Occasion"
      }
      return data
    })
  }

  return (
    <section id="res-section">
      <form id="res-form" data-testid="form" onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date:</label>
        <input type="date" id="res-date" name="date" value={formData.date} min={minDate} onChange={handleFormChange} required />
        <label htmlFor="res-time">Choose time:</label>
        <select data-testid="select" id="res-time" name="time" value={formData.time} onChange={handleFormChange} required={true} aria-label="On Click">
          {props.availableTimes.map((time) => (
            <option data-testid="select-option" key={time}>{time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests:</label>
        <input type="number" placeholder="1-10" min="1" max="10" id="guests" name="guests"
          value={formData.guests} onChange={handleFormChange} required />
        <label htmlFor="occasion">Occasion:</label>
        <select id="occasion" value={formData.occasion} onChange={handleFormChange} name="occasion">
          <option id="Occasion" value="Occasion">Occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Engagement">Engagement</option>
          <option value="Other">Other</option>
        </select>
        <input id="submit" type="submit" value="Make your reservation" />
      </form>
    </section>
  )
}

