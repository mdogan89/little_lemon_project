import React, { useReducer, useState } from 'react';
import Reservations from './Reservations';
import { fetchAPI, submitAPI } from './API';
import { useNavigate } from 'react-router-dom';

export default function ReservationsPage() {

    const updateTimes = (availableTimes, date) => {
        const response = fetchAPI(new Date(date));
        return (response.length !== 0) ? response : availableTimes;
    };

    const initializeTimes = initialAvailableTimes => [...initialAvailableTimes, ...fetchAPI(new Date())];

    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    const navigate = useNavigate()

    localStorage.setItem("bookings", [])
    const [confirmedBookings, setConfirmedBookings] = useState(localStorage.getItem("bookings"))

    const submitForm = (formData) => {
        const response = submitAPI(formData);
        if (response) {
            console.log(formData);
            setConfirmedBookings((bookings) => {
                const booking = [...bookings, formData]
                console.log(booking)
                return booking
            });
            console.log(confirmedBookings);
            localStorage.setItem("bookings", JSON.stringify(confirmedBookings))//stringify?

            navigate('/confirmed-booking')
        }
    }



    return (<main>
        <Reservations
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
        />
    </main>)
}